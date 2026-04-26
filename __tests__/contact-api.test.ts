import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock external dependencies before importing the route
vi.mock('nodemailer', () => ({
  default: { createTransport: vi.fn(() => ({ sendMail: vi.fn() })) },
}));
vi.mock('@/lib/submissions', () => ({
  saveSubmission: vi.fn(),
}));
vi.mock('@/lib/send-push', () => ({
  sendPushToAll: vi.fn(() => Promise.resolve()),
}));
vi.mock('@/lib/email-templates', () => ({
  bevestigingEmail: vi.fn(() => '<html>bevestiging</html>'),
  notificatieEmail: vi.fn(() => '<html>notificatie</html>'),
  HERO_IMAGE_PATHS: { woonklasse: '/public/hero.jpg', badkamerstijl: '/public/hero2.jpg' },
  LOGO_PATH: '/public/logo.png',
}));

// Import after mocks
const { POST } = await import('@/app/api/contact/route');

function makeRequest(body: Record<string, unknown>, ip = '127.0.0.1') {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': ip,
    },
    body: JSON.stringify(body),
  });
}

const validBody = {
  naam: 'Test Gebruiker',
  email: 'test@example.com',
  telefoon: '0612345678',
  formulier: 'contact',
  brand: 'woonklasse',
};

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 200 for a valid submission', async () => {
    const res = await POST(makeRequest(validBody, '10.0.0.1'));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('returns 400 for missing required fields', async () => {
    const res = await POST(makeRequest({ naam: 'X' }, '10.0.0.2'));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.success).toBe(false);
    expect(json.errors).toBeDefined();
  });

  it('returns 400 for invalid email', async () => {
    const res = await POST(makeRequest({ ...validBody, email: 'not-an-email' }, '10.0.0.3'));
    expect(res.status).toBe(400);
  });

  it('returns fake success for honeypot submissions', async () => {
    const res = await POST(makeRequest({ ...validBody, website: 'http://spam.com' }, '10.0.0.4'));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('returns 429 after exceeding rate limit', async () => {
    const ip = '10.99.99.99';
    // Use up the 5 allowed requests
    for (let i = 0; i < 5; i++) {
      await POST(makeRequest(validBody, ip));
    }
    // 6th should be rate limited
    const res = await POST(makeRequest(validBody, ip));
    expect(res.status).toBe(429);
    const json = await res.json();
    expect(json.success).toBe(false);
  });

  it('validates formulier enum', async () => {
    const res = await POST(makeRequest({ ...validBody, formulier: 'invalid' }, '10.0.0.5'));
    expect(res.status).toBe(400);
  });

  it('validates brand enum', async () => {
    const res = await POST(makeRequest({ ...validBody, brand: 'invalid' }, '10.0.0.6'));
    expect(res.status).toBe(400);
  });
});
