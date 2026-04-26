// eslint-disable-next-line @typescript-eslint/no-require-imports
const Pop3Command = require('node-pop3');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { simpleParser } = require('mailparser');

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
}

export async function fetchEmailsPop3(limit: number = 50): Promise<EmailMessage[]> {
  const host = process.env.IMAP_HOST || 'mail.woonklasse.nl';
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  if (!user || !pass) {
    throw new Error('Mail credentials niet ingesteld');
  }

  const pop3 = new Pop3Command({
    host,
    port: 995,
    tls: true,
    user,
    password: pass,
  });

  const messages: EmailMessage[] = [];

  try {
    // STAT returns [count, size]
    const stat = await pop3.STAT();
    const totalMessages = Number(stat[0] || 0);
    console.log(`[pop3] Total messages: ${totalMessages}`);

    if (totalMessages === 0) {
      await pop3.QUIT();
      return [];
    }

    // Fetch the last N messages (newest first)
    const start = Math.max(1, totalMessages - limit + 1);

    for (let i = totalMessages; i >= start; i--) {
      try {
        const raw = await pop3.RETR(i);
        const parsed = await simpleParser(raw);

        const from = parsed.from?.value?.[0];
        const to = parsed.to?.value?.[0];

        messages.push({
          id: `pop3-${i}`,
          uid: i,
          from: from?.address || '',
          fromName: from?.name || from?.address || '',
          to: to?.address || '',
          subject: parsed.subject || '(geen onderwerp)',
          date: parsed.date?.toISOString() || new Date().toISOString(),
          body: parsed.text || '',
          bodyHtml: parsed.html || parsed.textAsHtml || '',
          seen: true, // POP3 doesn't track read status
          folder: 'inbox',
        });
      } catch (e) {
        console.warn(`[pop3] Failed to parse message ${i}:`, e);
      }
    }

    await pop3.QUIT();
  } catch (error) {
    console.error('[pop3] Error:', error);
    try { await pop3.QUIT(); } catch { /* ignore */ }
    throw error;
  }

  return messages;
}
