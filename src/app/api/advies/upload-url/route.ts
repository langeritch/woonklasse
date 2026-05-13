import { NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

// Fluid Compute, not Edge — @vercel/blob/client uses Node APIs and we want
// generous timeouts since clients can upload large phone photos.
export const runtime = 'nodejs';
export const maxDuration = 60;

/**
 * Mints short-lived signed URLs so the browser can upload images
 * directly to Vercel Blob, bypassing the 4.5 MB Vercel Function body limit.
 *
 * Used by the hero "Persoonlijk advies" tool. Never trust the client —
 * we constrain content type + max size here.
 *
 * Note: we DO NOT register an `onUploadCompleted` callback. Doing so makes
 * Vercel Blob attach a callbackUrl to the token; when the upload finishes,
 * the Blob service POSTs to that URL and the client's `upload()` promise
 * waits for that POST to succeed. If anything between Blob's infra and the
 * Vercel function takes long (cold start, network) the browser sees the
 * upload "hang". We don't need server-side bookkeeping here — the final
 * blob URLs are POSTed by the browser to /api/advies on form submit — so
 * skipping the callback is both simpler and more reliable.
 */
// Allow any image/* — covers JPEG/PNG/HEIC/HEIF/WebP/AVIF and any future
// types phones produce. Wildcards are supported by Vercel Blob.
const ALLOWED_TYPES = ['image/*'];

const MAX_BYTES = 25 * 1024 * 1024; // 25 MB — modern phones easily exceed 10 MB

// Simple per-IP rate limit — same in-memory pattern used elsewhere.
const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 60; // 15 photos * a few retries

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request): Promise<NextResponse> {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Te veel uploads. Probeer het later opnieuw.' }, { status: 429 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: 'Upload service niet beschikbaar.' },
      { status: 503 },
    );
  }

  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_BYTES,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({ ip }),
        };
      },
      // No onUploadCompleted on purpose — see top-of-file note.
    });
    return NextResponse.json(jsonResponse);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error('[advies/upload-url] handleUpload error', {
      msg,
      ip,
      hasToken: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      stack,
    });
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
