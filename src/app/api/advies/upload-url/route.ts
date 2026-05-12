import { NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

/**
 * Mints short-lived signed URLs so the browser can upload images
 * directly to Vercel Blob, bypassing the 4.5 MB Vercel Function body limit.
 *
 * Used by the hero "Persoonlijk advies" tool. Never trust the client —
 * we constrain content type + max size here.
 */
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
];

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

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
      onUploadCompleted: async () => {
        // We just need the URL on the client; no server-side bookkeeping here.
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
