import { ImapFlow } from 'imapflow';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { simpleParser } = require('mailparser');
import { customEmail } from './email-templates';

export interface EmailMessage {
  id: string;
  uid: number;
  from: string;
  fromName: string;
  to: string;
  subject: string;
  date: string;
  body: string;
  bodyHtml: string;
  seen: boolean;
  folder: 'inbox' | 'sent';
  parsedSubject?: {
    recipient: string;
    actualSubject: string;
  };
}

function getClient() {
  return new ImapFlow({
    host: process.env.IMAP_HOST || 'mail.woonklasse.nl',
    port: Number(process.env.IMAP_PORT || '993'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    logger: false,
  });
}

export async function fetchEmails(folder: string = 'INBOX', limit: number = 50): Promise<EmailMessage[]> {
  const client = getClient();
  const messages: EmailMessage[] = [];

  try {
    await client.connect();
    const lock = await client.getMailboxLock(folder);

    try {
      // 1. Search for emails from postbode@rompslomp.com or postbode@rompslomp.nl
      const searchResult = await client.search({
        or: [
          { from: 'postbode@rompslomp.com' },
          { from: 'postbode@rompslomp.nl' }
        ]
      });

      if (!searchResult || searchResult.length === 0) {
        console.log(`[imap] No emails found from postbode in folder: ${folder}`);
        return [];
      }

      // Take only the latest 'limit' messages from the search results
      const uidsToFetch = searchResult.slice(-limit);

      for await (const msg of client.fetch(uidsToFetch, {
        envelope: true,
        source: true,
        flags: true,
        uid: true
      })) {
        try {
          const parsed = await simpleParser(msg.source);
          const from = msg.envelope?.from?.[0];
          const to = msg.envelope?.to?.[0];
          const subject = msg.envelope?.subject || '(geen onderwerp)';

          // Parse the subject
          // Format expected: "customer@email.com Factuur 2026040011" — first word is target email
          const subjectWords = subject.trim().split(/\s+/);
          const firstWord = subjectWords[0] || '';
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(firstWord);
          const parsedSubject = isEmail
            ? { recipient: firstWord, actualSubject: subjectWords.slice(1).join(' ') || 'Factuur' }
            : { recipient: '', actualSubject: subject };

          // Reformat the email body using the Woonklasse email template
          let reformattedHtml = customEmail({
            bericht: parsed.text || '',
            brand: 'woonklasse',
            showLogo: true
          });
          
          // Replace CID with an absolute or relative path so it renders in the admin dashboard
          reformattedHtml = reformattedHtml.replace(
            'cid:logo@woonklasse.nl',
            '/logos/stacked/png/woonklasse-stacked-white-512.png'
          );

          messages.push({
            id: `${folder}-${Number(msg.uid)}`,
            uid: Number(msg.uid),
            from: from?.address || '',
            fromName: from?.name || from?.address || '',
            to: to?.address || '',
            subject: subject,
            date: msg.envelope?.date?.toISOString() || new Date().toISOString(),
            body: parsed.text || '',
            bodyHtml: reformattedHtml,
            seen: msg.flags?.has('\\Seen') || false,
            folder: folder === 'INBOX' ? 'inbox' : 'sent',
            parsedSubject
          });
        } catch {
          // Skip unparseable messages
        }
      }
    } finally {
      lock.release();
    }

    await client.logout();
  } catch (error) {
    console.error('[imap] Error fetching emails:', error);
    try { await client.logout(); } catch { /* ignore */ }
    throw error;
  }

  // Sort newest first
  messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return messages;
}

export async function listFolders(): Promise<string[]> {
  const client = getClient();
  try {
    await client.connect();
    const folders: string[] = [];
    const tree = await client.listTree();
    function walk(items: typeof tree.folders) {
      if (!items) return;
      for (const f of items) {
        if (f.path) folders.push(f.path);
        if (f.folders) walk(f.folders);
      }
    }
    walk(tree.folders);
    await client.logout();
    return folders;
  } catch (error) {
    try { await client.logout(); } catch { /* ignore */ }
    throw error;
  }
}

export async function fetchAllMail(limit: number = 50): Promise<EmailMessage[]> {
  const [inbox, sent] = await Promise.allSettled([
    fetchEmails('INBOX', limit),
    fetchEmails('Sent', limit).catch(() =>
      fetchEmails('INBOX.Sent', limit).catch(() => [])
    ),
  ]);

  const inboxMails = inbox.status === 'fulfilled' ? inbox.value : [];
  const sentMails = sent.status === 'fulfilled' ? sent.value : [];

  return [...inboxMails, ...sentMails].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
