import { NextResponse } from 'next/server';
import { fetchAllMail, listFolders } from '@/lib/imap';
import { fetchEmailsPop3 } from '@/lib/pop3';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get('limit') || '50'), 100);
  const folder = searchParams.get('folder') || 'all'; // 'all', 'inbox', 'sent'

  try {
    const host = process.env.IMAP_HOST || 'NOT SET';
    const user = process.env.SMTP_USER || 'NOT SET';
    const hasPass = !!process.env.SMTP_PASS;

    if (folder === 'folders') {
      const folders = await listFolders();
      return NextResponse.json({ success: true, folders, debug: { host, user, hasPass } });
    }

    // Try POP3 first, fallback to IMAP
    if (folder === 'pop3') {
      const messages = await fetchEmailsPop3(limit);
      return NextResponse.json({ success: true, messages, count: messages.length, protocol: 'pop3', debug: { host, user, hasPass } });
    }

    if (folder === 'all') {
      const messages = await fetchAllMail(limit);
      return NextResponse.json({ success: true, messages, count: messages.length, debug: { host, user, hasPass } });
    }

    const { fetchEmails } = await import('@/lib/imap');
    // Allow fetching any folder directly
    const folderMap: Record<string, string> = { inbox: 'INBOX', sent: 'Sent', spam: 'INBOX.spam', drafts: 'Drafts', trash: 'Trash' };
    const folderName = folderMap[folder] || folder;
    const messages = await fetchEmails(folderName, limit);
    return NextResponse.json({ success: true, messages, count: messages.length, debug: { host, user, hasPass } });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    const stack = error instanceof Error ? error.stack?.slice(0, 300) : '';
    console.error('[inbox] Error:', msg);
    return NextResponse.json({ success: false, message: msg, stack, debug: { host: process.env.IMAP_HOST, user: process.env.SMTP_USER, hasPass: !!process.env.SMTP_PASS } }, { status: 500 });
  }
}
