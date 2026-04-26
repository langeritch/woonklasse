import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deriveAdminToken } from '@/lib/admin-token';

const ADMIN_PIN = process.env.ADMIN_PIN;

export async function POST(request: Request) {
  try {
    if (!ADMIN_PIN) {
      console.error('[auth] ADMIN_PIN environment variable is not set');
      return NextResponse.json(
        { success: false, message: 'Server configuratiefout' },
        { status: 500 },
      );
    }

    const { pin } = (await request.json()) as { pin: string };

    if (typeof pin === 'string' && pin.length > 0 && pin === ADMIN_PIN) {
      const token = await deriveAdminToken(ADMIN_PIN);
      const cookieStore = await cookies();
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: 'Onjuiste pincode' },
      { status: 401 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Fout bij inloggen' },
      { status: 500 },
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  return NextResponse.json({ success: true });
}
