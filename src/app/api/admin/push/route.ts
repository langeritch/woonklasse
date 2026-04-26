import { NextResponse } from 'next/server';
import { savePushSubscription, removePushSubscription } from '@/lib/push-subscriptions';

// VAPID keys — generate once and store as env vars
// For now, use a simple approach: store subscriptions and send via web-push
export async function GET() {
  const publicKey = (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '').trim();
  return NextResponse.json({ publicKey });
}

export async function POST(request: Request) {
  try {
    const { subscription } = (await request.json()) as { subscription: PushSubscriptionJSON };

    if (!subscription?.endpoint || !subscription?.keys) {
      return NextResponse.json(
        { success: false, message: 'Ongeldige subscription' },
        { status: 400 },
      );
    }

    await savePushSubscription({
      endpoint: subscription.endpoint,
      keys: {
        p256dh: subscription.keys.p256dh as string,
        auth: subscription.keys.auth as string,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { endpoint } = (await request.json()) as { endpoint: string };
    await removePushSubscription(endpoint);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
