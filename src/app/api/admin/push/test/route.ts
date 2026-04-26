import { NextResponse } from 'next/server';
import { sendPushToAll } from '@/lib/send-push';
import { getPushSubscriptions } from '@/lib/push-subscriptions';

export async function GET() {
  try {
    const subs = await getPushSubscriptions();
    return NextResponse.json({
      count: subs.length,
      subscriptions: subs.map(s => ({
        endpoint: s.endpoint.slice(0, 80) + '...',
        hasKeys: !!(s.keys?.p256dh && s.keys?.auth),
      })),
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// DELETE: clear all subscriptions (for re-registration)
export async function DELETE() {
  try {
    const { put } = await import('@vercel/blob');
    await put('push-subscriptions/all.json', '[]', {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    return NextResponse.json({ success: true, message: 'Alle subscriptions gewist' });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST() {
  try {
    const pubKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '';
    const privKey = process.env.VAPID_PRIVATE_KEY || '';
    const subs = await getPushSubscriptions();

    console.log(`[push-test] Public key length: ${pubKey.length}, starts: ${pubKey.slice(0, 10)}`);
    console.log(`[push-test] Private key length: ${privKey.length}, starts: ${privKey.slice(0, 5)}`);
    console.log(`[push-test] ${subs.length} subscription(s) gevonden`);

    if (!pubKey) return NextResponse.json({ success: false, message: 'NEXT_PUBLIC_VAPID_PUBLIC_KEY is leeg/niet ingesteld' }, { status: 500 });
    if (!privKey) return NextResponse.json({ success: false, message: 'VAPID_PRIVATE_KEY is leeg/niet ingesteld' }, { status: 500 });
    if (subs.length === 0) return NextResponse.json({ success: false, message: 'Geen push subscriptions. Sluit de app en open opnieuw.' }, { status: 500 });

    await sendPushToAll({
      title: 'Test notificatie',
      body: 'Push notificaties werken!',
    });
    return NextResponse.json({ success: true, message: `Verzonden naar ${subs.length} apparaat/apparaten` });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[push-test] Error:', msg);
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}
