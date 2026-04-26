// eslint-disable-next-line @typescript-eslint/no-require-imports
const webpush = require('web-push');
import { getPushSubscriptions, removePushSubscription } from './push-subscriptions';

export async function sendPushToAll(payload: { title: string; body: string }): Promise<void> {
  const publicKey = (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '').trim();
  const privateKey = (process.env.VAPID_PRIVATE_KEY || '').trim();

  if (!publicKey || !privateKey) {
    console.warn('[push] VAPID keys not configured. Public:', publicKey ? 'set' : 'MISSING', 'Private:', privateKey ? 'set' : 'MISSING');
    throw new Error('VAPID keys niet geconfigureerd');
  }

  // Validate keys are URL-safe base64 (no padding =)
  const cleanPublic = publicKey.replace(/=+$/, '');
  const cleanPrivate = privateKey.replace(/=+$/, '');

  webpush.setVapidDetails(
    'mailto:info@woonklasse.nl',
    cleanPublic,
    cleanPrivate,
  );

  const subscriptions = await getPushSubscriptions();

  if (subscriptions.length === 0) {
    console.warn('[push] Geen subscriptions gevonden');
    throw new Error('Geen push subscriptions gevonden. Open de admin portal eerst op je telefoon.');
  }

  const data = JSON.stringify(payload);
  let sent = 0;

  for (const sub of subscriptions) {
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: sub.keys },
        data,
      );
      sent++;
    } catch (error: unknown) {
      const statusCode = (error as { statusCode?: number })?.statusCode;
      if (statusCode === 410 || statusCode === 404) {
        await removePushSubscription(sub.endpoint);
        console.warn('[push] Subscription verwijderd (expired):', sub.endpoint.slice(0, 50));
      } else {
        console.warn('[push] Failed to send:', (error as Error)?.message);
      }
    }
  }

  console.log(`[push] Verzonden naar ${sent}/${subscriptions.length} apparaten`);
}
