import fs from 'fs';
import path from 'path';

export interface Submission {
  id: string;
  timestamp: string;
  formulier: string;
  brand: string;
  naam: string;
  email: string;
  telefoon: string;
  bedrijf?: string;
  type?: string;
  bericht?: string;
  gelezen: boolean;
}

// Use Vercel Blob if token is available, otherwise fall back to filesystem
const HAS_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;

// Filesystem storage path (works locally + /tmp on Vercel)
const STORE_DIR = process.env.NODE_ENV === 'production' ? '/tmp' : process.cwd();
const STORE_FILE = path.join(STORE_DIR, 'submissions.json');

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// --- Filesystem helpers ---

function readStore(): Submission[] {
  try {
    if (fs.existsSync(STORE_FILE)) {
      return JSON.parse(fs.readFileSync(STORE_FILE, 'utf-8'));
    }
  } catch {
    // corrupt file, reset
  }
  return [];
}

function writeStore(data: Submission[]): void {
  fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2));
}

// --- Blob helpers ---

async function blobPut(key: string, data: string): Promise<void> {
  const { put } = await import('@vercel/blob');
  await put(key, data, { access: 'public', contentType: 'application/json' });
}

async function blobRead(): Promise<Submission[]> {
  const { list } = await import('@vercel/blob');
  const { blobs } = await list({ prefix: 'submissions/' });
  const results: Submission[] = [];
  for (const blob of blobs) {
    try {
      const res = await fetch(blob.url);
      results.push((await res.json()) as Submission);
    } catch { /* skip */ }
  }
  results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  return results;
}

async function blobDelete(id: string): Promise<void> {
  const { list, del } = await import('@vercel/blob');
  const { blobs } = await list({ prefix: `submissions/${id}` });
  for (const blob of blobs) await del(blob.url);
}

// --- Public API ---

export async function saveSubmission(
  data: Omit<Submission, 'id' | 'timestamp' | 'gelezen'>,
): Promise<Submission> {
  const submission: Submission = {
    ...data,
    id: generateId(),
    timestamp: new Date().toISOString(),
    gelezen: false,
  };

  if (HAS_BLOB) {
    await blobPut(`submissions/${submission.id}.json`, JSON.stringify(submission));
  } else {
    const store = readStore();
    store.unshift(submission);
    writeStore(store);
  }

  return submission;
}

export async function getSubmissions(): Promise<Submission[]> {
  if (HAS_BLOB) {
    return blobRead();
  }
  return readStore().sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
}

export async function markAsRead(id: string): Promise<void> {
  if (HAS_BLOB) {
    const subs = await blobRead();
    const sub = subs.find((s) => s.id === id);
    if (!sub) return;
    sub.gelezen = true;
    await blobDelete(id);
    await blobPut(`submissions/${id}.json`, JSON.stringify(sub));
  } else {
    const store = readStore();
    const sub = store.find((s) => s.id === id);
    if (sub) {
      sub.gelezen = true;
      writeStore(store);
    }
  }
}

export async function deleteSubmission(id: string): Promise<void> {
  if (HAS_BLOB) {
    await blobDelete(id);
  } else {
    const store = readStore().filter((s) => s.id !== id);
    writeStore(store);
  }
}
