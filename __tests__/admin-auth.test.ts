import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { deriveAdminToken } from '@/lib/admin-token';

// ---------- deriveAdminToken ----------

describe('deriveAdminToken', () => {
  it('returns a hex string', async () => {
    const token = await deriveAdminToken('1234');
    expect(token).toMatch(/^[0-9a-f]+$/);
  });

  it('is deterministic for the same pin', async () => {
    const a = await deriveAdminToken('secret-pin');
    const b = await deriveAdminToken('secret-pin');
    expect(a).toBe(b);
  });

  it('differs for different pins', async () => {
    const a = await deriveAdminToken('pin-a');
    const b = await deriveAdminToken('pin-b');
    expect(a).not.toBe(b);
  });

  it('returns a 64-char hex (SHA-256 HMAC)', async () => {
    const token = await deriveAdminToken('anything');
    expect(token).toHaveLength(64);
  });
});

// ---------- Auth route tests (mock next/headers) ----------

const cookieJar = new Map<string, string>();
vi.mock('next/headers', () => ({
  cookies: vi.fn(async () => ({
    get: (name: string) => {
      const val = cookieJar.get(name);
      return val ? { name, value: val } : undefined;
    },
    set: (name: string, value: string) => {
      cookieJar.set(name, value);
    },
    delete: (name: string) => {
      cookieJar.delete(name);
    },
  })),
}));

describe('POST /api/admin/auth', () => {
  const originalEnv = process.env.ADMIN_PIN;

  beforeEach(() => {
    vi.resetModules();
    cookieJar.clear();
  });

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.ADMIN_PIN = originalEnv;
    } else {
      delete process.env.ADMIN_PIN;
    }
  });

  async function callPost(body: unknown) {
    process.env.ADMIN_PIN = '9999';
    const { POST } = await import('@/app/api/admin/auth/route');
    return POST(
      new Request('http://localhost/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
    );
  }

  it('returns 200 with correct pin', async () => {
    const res = await callPost({ pin: '9999' });
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('sets admin_token cookie on success', async () => {
    await callPost({ pin: '9999' });
    expect(cookieJar.has('admin_token')).toBe(true);
    const expected = await deriveAdminToken('9999');
    expect(cookieJar.get('admin_token')).toBe(expected);
  });

  it('returns 401 with wrong pin', async () => {
    const res = await callPost({ pin: 'wrong' });
    expect(res.status).toBe(401);
    const json = await res.json();
    expect(json.success).toBe(false);
  });

  it('returns 401 with empty pin', async () => {
    const res = await callPost({ pin: '' });
    expect(res.status).toBe(401);
  });

  it('returns 401 with non-string pin', async () => {
    const res = await callPost({ pin: 9999 });
    expect(res.status).toBe(401);
  });

  it('returns 500 when ADMIN_PIN is not set', async () => {
    delete process.env.ADMIN_PIN;
    const { POST } = await import('@/app/api/admin/auth/route');
    const res = await POST(
      new Request('http://localhost/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: '1234' }),
      }),
    );
    expect(res.status).toBe(500);
  });

  it('returns 500 for malformed JSON', async () => {
    process.env.ADMIN_PIN = '9999';
    const { POST } = await import('@/app/api/admin/auth/route');
    const res = await POST(
      new Request('http://localhost/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'not json',
      }),
    );
    expect(res.status).toBe(500);
  });
});

describe('DELETE /api/admin/auth', () => {
  beforeEach(() => {
    cookieJar.set('admin_token', 'some-token');
  });

  it('returns 200 and clears the cookie', async () => {
    const { DELETE } = await import('@/app/api/admin/auth/route');
    const res = await DELETE();
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(cookieJar.has('admin_token')).toBe(false);
  });
});
