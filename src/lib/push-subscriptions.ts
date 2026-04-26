import fs from 'fs';
import path from 'path';

export interface PushSubscriptionData {
  endpoint: string;
  keys: {
    p256dh: string;
    auth: string;
  };
}

const HAS_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;
const STORE_DIR = process.env.NODE_ENV === 'production' ? '/tmp' : process.cwd();
const STORE_FILE = path.join(STORE_DIR, 'push-subscriptions.json');
const BLOB_KEY = 'push-subscriptions/all.json';

// --- Filesystem helpers ---

function readStoreFS(): PushSubscriptionData[] {
  try {
    if (fs.existsSync(STORE_FILE)) {
      return JSON.parse(fs.readFileSync(STORE_FILE, 'utf-8'));
    }
  } catch {
    // corrupt file
  }
  return [];
}

function writeStoreFS(data: PushSubscriptionData[]): void {
  fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2));
}

// --- Blob helpers ---

async function readStoreBlob(): Promise<PushSubscriptionData[]> {
  const { list } = await import('@vercel/blob');
  const { blobs } = await list({ prefix: 'push-subscriptions/' });
  const blob = blobs.find((b) => b.pathname === BLOB_KEY);
  if (!blob) return [];
  try {
    const res = await fetch(blob.url);
    return (await res.json()) as PushSubscriptionData[];
  } catch {
    return [];
  }
}

async function writeStoreBlob(data: PushSubscriptionData[]): Promise<void> {
  const { put } = await import('@vercel/blob');
  await put(BLOB_KEY, JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

// --- Public API ---

export async function savePushSubscription(sub: PushSubscriptionData): Promise<void> {
  if (HAS_BLOB) {
    const store = await readStoreBlob();
    const existing = store.findIndex((s) => s.endpoint === sub.endpoint);
    if (existing >= 0) {
      store[existing] = sub;
    } else {
      store.push(sub);
    }
    await writeStoreBlob(store);
  } else {
    const store = readStoreFS();
    const existing = store.findIndex((s) => s.endpoint === sub.endpoint);
    if (existing >= 0) {
      store[existing] = sub;
    } else {
      store.push(sub);
    }
    writeStoreFS(store);
  }
}

export async function getPushSubscriptions(): Promise<PushSubscriptionData[]> {
  if (HAS_BLOB) {
    return readStoreBlob();
  }
  return readStoreFS();
}

export async function removePushSubscription(endpoint: string): Promise<void> {
  if (HAS_BLOB) {
    const store = (await readStoreBlob()).filter((s) => s.endpoint !== endpoint);
    await writeStoreBlob(store);
  } else {
    const store = readStoreFS().filter((s) => s.endpoint !== endpoint);
    writeStoreFS(store);
  }
}
