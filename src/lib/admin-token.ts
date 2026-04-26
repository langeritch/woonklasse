/**
 * Shared admin token derivation — works in both Edge and Node.js runtimes.
 * Derives a deterministic HMAC from ADMIN_PIN so middleware can verify
 * the token value without shared server-side state.
 */

const TOKEN_VERSION = 'admin-session-v1';

export async function deriveAdminToken(pin: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(pin),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(TOKEN_VERSION));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
