import { fetchEmails } from './src/lib/imap';

async function test() {
  console.log('Testing IMAP connection...');
  try {
    const emails = await fetchEmails('INBOX', 10); // Fetch last 10 messages to ensure we catch a matching one
    console.log(`Found ${emails.length} emails matching our criteria.`);
    if (emails.length > 0) {
      console.log('--- LATEST EMAIL ---');
      console.log(JSON.stringify(emails[0], null, 2));
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
