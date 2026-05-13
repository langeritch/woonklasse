'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Brand = 'woonklasse' | 'badkamerstijl';
type Tab = 'inbox' | 'verstuur';
type InboxFilter = 'aanvragen' | 'emails';

interface AdviesRoom {
  type: string;
  meters?: string;
  notes?: string;
  photos: { url: string; filename: string }[];
}

interface Submission {
  id: string;
  timestamp: string;
  formulier: string;
  brand: string;
  naam: string;
  email: string;
  telefoon: string;
  bedrijf?: string;
  type?: string;
  bericht?: string;
  gelezen: boolean;
  advies?: {
    projectType?: string;
    tijdpad?: string;
    budget?: string;
    stijl?: string;
    rooms: AdviesRoom[];
  };
}

interface EmailMessage {
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

const BRAND_CONFIG = {
  woonklasse: {
    label: 'Woonklasse',
    accent: '#D4AF37',
    accentLight: '#c9a96e',
  },
  badkamerstijl: {
    label: 'Badkamerstijl',
    accent: '#EABFC4',
    accentLight: '#d4a0a0',
  },
};

// Supported sender addresses. `disabled` options show up but can't be selected.
const FROM_OPTIONS: Array<{ value: string; label: string; disabled?: boolean }> = [
  { value: 'info@woonklasse.nl', label: 'info@woonklasse.nl' },
  { value: 'woonklasse@gmail.com', label: 'woonklasse@gmail.com' },
  { value: 'info@badkamerstijl.nl', label: 'info@badkamerstijl.nl (nog niet actief)', disabled: true },
];

const FORMULIER_LABELS: Record<string, string> = {
  offerte: 'Offerte',
  adviesgesprek: 'Adviesgesprek',
  contact: 'Contact',
  advies: 'Persoonlijk advies',
};

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Zojuist';
  if (mins < 60) return `${mins}m geleden`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}u geleden`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d geleden`;
  return new Date(timestamp).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
}

export default function EmailPortal() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('inbox');
  const [inboxFilter, setInboxFilter] = useState<InboxFilter>('aanvragen');
  const [brand, setBrand] = useState<Brand>('woonklasse');
  const [fromAddress, setFromAddress] = useState<string>('info@woonklasse.nl');
  const [aan, setAan] = useState('');
  const [onderwerp, setOnderwerp] = useState('');
  const [bericht, setBericht] = useState('');
  const [heroImage, setHeroImage] = useState<string>('woonklasse');
  const [showLogo, setShowLogo] = useState(true);

  // Auto-fill hero to match brand (still editable afterwards — resets on next brand switch)
  useEffect(() => {
    setHeroImage(brand);
  }, [brand]);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [previewHtml, setPreviewHtml] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Inbox state
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [emails, setEmails] = useState<EmailMessage[]>([]);
  const [loadingInbox, setLoadingInbox] = useState(false);
  const [loadingEmails, setLoadingEmails] = useState(false);
  const [processingInvoices, setProcessingInvoices] = useState(false);
  const [selectedSub, setSelectedSub] = useState<Submission | null>(null);

  const [invoiceResult, setInvoiceResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const handleProcessInvoices = async () => {
    setProcessingInvoices(true);
    setInvoiceResult(null);
    try {
      const res = await fetch('/api/admin/process-invoices');
      const data = await res.json();
      if (data.success) {
        if (data.processedCount === 0) {
          setInvoiceResult({ ok: true, msg: 'Geen nieuwe facturen gevonden.' });
        } else {
          setInvoiceResult({ ok: true, msg: `${data.processedCount} factuur${data.processedCount > 1 ? 'en' : ''} verzonden:\n${data.processed?.join('\n') || ''}` });
        }
        if (data.processedCount > 0) loadEmails();
      } else {
        setInvoiceResult({ ok: false, msg: data.message || 'Verwerken mislukt.' });
      }
    } catch {
      setInvoiceResult({ ok: false, msg: 'Netwerkfout bij verwerken facturen.' });
    } finally {
      setProcessingInvoices(false);
    }
  };
  const [selectedEmail, setSelectedEmail] = useState<EmailMessage | null>(null);

  const accent = BRAND_CONFIG[brand].accent;

  // Register service worker and push subscription
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(async (reg) => {
        if ('PushManager' in window) {
          try {
            const res = await fetch('/api/admin/push');
            const { publicKey } = await res.json();
            if (!publicKey) return;

            const oldSub = await reg.pushManager.getSubscription();
            if (oldSub) {
              await oldSub.unsubscribe();
            }
            const sub = await reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(publicKey) as BufferSource,
            });
            await fetch('/api/admin/push', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ subscription: sub.toJSON() }),
            });
          } catch (e) {
            console.warn('Push subscription failed:', e);
          }
        }
      });
    }
  }, []);

  const loadSubmissions = useCallback(async () => {
    setLoadingInbox(true);
    try {
      const res = await fetch('/api/admin/submissions');
      const data = await res.json();
      if (data.success) setSubmissions(data.submissions);
    } catch {
      // silent
    } finally {
      setLoadingInbox(false);
    }
  }, []);

  const loadEmails = useCallback(async () => {
    setLoadingEmails(true);
    try {
      const res = await fetch('/api/admin/inbox?limit=50');
      const data = await res.json();
      if (data.success) setEmails(data.messages);
    } catch {
      // silent
    } finally {
      setLoadingEmails(false);
    }
  }, []);

  useEffect(() => {
    if (tab === 'inbox') {
      if (inboxFilter === 'aanvragen') loadSubmissions();
      else loadEmails();
    }
  }, [tab, inboxFilter, loadSubmissions, loadEmails]);

  // Auto-refresh every 30s
  useEffect(() => {
    if (tab !== 'inbox') return;
    const fn = inboxFilter === 'aanvragen' ? loadSubmissions : loadEmails;
    const interval = setInterval(fn, 30000);
    return () => clearInterval(interval);
  }, [tab, inboxFilter, loadSubmissions, loadEmails]);

  async function handlePreview() {
    setResult(null);
    const res = await fetch('/api/admin/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand, aan, onderwerp, bericht, heroImage: heroImage || undefined, showLogo, preview: true, fromAddress }),
    });
    const data = await res.json();
    if (data.html) setPreviewHtml(data.html);
  }

  async function handleSend() {
    if (!aan.trim() || !onderwerp.trim() || !bericht.trim()) {
      setResult({ ok: false, msg: 'Vul alle velden in.' });
      return;
    }
    setSending(true);
    setResult(null);
    try {
      const res = await fetch('/api/admin/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand, aan, onderwerp, bericht, heroImage: heroImage || undefined, showLogo, fromAddress }),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ ok: true, msg: `E-mail verzonden naar ${aan}` });
        setAan('');
        setOnderwerp('');
        setBericht('');
        setPreviewHtml('');
      } else {
        setResult({ ok: false, msg: data.message || 'Verzenden mislukt.' });
      }
    } catch {
      setResult({ ok: false, msg: 'Netwerkfout. Probeer opnieuw.' });
    } finally {
      setSending(false);
    }
  }

  async function handleMarkRead(id: string) {
    await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'read' }),
    });
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, gelezen: true } : s)));
    if (selectedSub?.id === id) setSelectedSub((s) => s ? { ...s, gelezen: true } : null);
  }

  async function handleDelete(id: string) {
    await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, action: 'delete' }),
    });
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    if (selectedSub?.id === id) setSelectedSub(null);
  }

  function handleReply(sub: Submission) {
    setTab('verstuur');
    setBrand(sub.brand as Brand);
    setAan(sub.email);
    setOnderwerp(`Re: ${FORMULIER_LABELS[sub.formulier] || sub.formulier} - ${sub.naam}`);
    setBericht(`Beste ${sub.naam},\n\n\n\nMet vriendelijke groet,\n${BRAND_CONFIG[sub.brand as Brand]?.label || 'Woonklasse'}`);
  }

  function handleReplyEmail(email: EmailMessage) {
    setTab('verstuur');
    setAan(email.from);
    const sub = email.parsedSubject?.actualSubject || email.subject;
    setOnderwerp(sub.startsWith('Re:') ? sub : `Re: ${sub}`);
    setBericht(`\n\n\n--- Oorspronkelijk bericht ---\nVan: ${email.fromName} <${email.from}>\nDatum: ${new Date(email.date).toLocaleString('nl-NL')}\n\n${email.body.slice(0, 500)}`);
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  }

  const unreadCount = submissions.filter((s) => !s.gelezen).length;
  const unreadEmails = emails.filter((e) => !e.seen && e.folder === 'inbox').length;

  return (
    <div className="min-h-screen bg-[#1a1716] text-white font-sans">
      {/* Mobile-optimized sticky header */}
      <div className="sticky top-0 z-30 bg-[#1a1716]/95 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <img src="/logos/icon-only/png/woonklasse-icon-gold-256.png" alt="" className="w-7 h-7" />
              <span className="text-xs tracking-[3px] uppercase text-white/30 hidden sm:block">Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  const perm = Notification.permission;
                  if (perm === 'default') {
                    const result = await Notification.requestPermission();
                    if (result !== 'granted') { alert('Notificaties geblokkeerd.'); return; }
                  } else if (perm === 'denied') { alert('Notificaties geblokkeerd.'); return; }
                  const reg = await navigator.serviceWorker?.getRegistration();
                  if (!reg) { alert('Service worker niet actief.'); return; }
                  const sub = await reg.pushManager?.getSubscription();
                  if (!sub) { alert('Geen push subscription.'); return; }
                  try {
                    const res = await fetch('/api/admin/push/test', { method: 'POST' });
                    const data = await res.json();
                    alert(data.success ? `Verzonden: ${data.message}` : `Fout: ${data.message}`);
                  } catch { alert('Mislukt'); }
                }}
                className="text-xs tracking-wider uppercase text-white/20 hover:text-white/40 transition-colors px-2 py-1.5"
              >
                Test
              </button>
              <button
                onClick={handleLogout}
                className="text-xs tracking-wider uppercase text-white/20 hover:text-white/40 transition-colors px-2 py-1.5"
              >
                Uit
              </button>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex">
            <button
              onClick={() => { setTab('inbox'); setSelectedSub(null); setSelectedEmail(null); }}
              className="flex-1 py-3 text-sm tracking-wider uppercase transition-all relative text-center"
              style={{ color: tab === 'inbox' ? '#D4AF37' : 'rgba(255,255,255,0.3)' }}
            >
              Inbox
              {(unreadCount + unreadEmails) > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full text-[#1a1716] font-medium bg-[#D4AF37]">
                  {unreadCount + unreadEmails}
                </span>
              )}
              {tab === 'inbox' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
            </button>
            <button
              onClick={() => setTab('verstuur')}
              className="flex-1 py-3 text-sm tracking-wider uppercase transition-all relative text-center"
              style={{ color: tab === 'verstuur' ? '#D4AF37' : 'rgba(255,255,255,0.3)' }}
            >
              Verstuur
              {tab === 'verstuur' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* INBOX TAB */}
        {tab === 'inbox' && !selectedSub && !selectedEmail && (
          <div>
            {/* Sub-filter tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setInboxFilter('aanvragen')}
                className="px-4 py-2 text-xs tracking-wider uppercase rounded-lg border transition-all"
                style={{
                  borderColor: inboxFilter === 'aanvragen' ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                  backgroundColor: inboxFilter === 'aanvragen' ? 'rgba(212,175,55,0.15)' : 'transparent',
                  color: inboxFilter === 'aanvragen' ? '#D4AF37' : 'rgba(255,255,255,0.4)',
                }}
              >
                Aanvragen
                {unreadCount > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full text-[#1a1716] font-medium bg-[#D4AF37]">
                    {unreadCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setInboxFilter('emails')}
                className="px-4 py-2 text-xs tracking-wider uppercase rounded-lg border transition-all"
                style={{
                  borderColor: inboxFilter === 'emails' ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                  backgroundColor: inboxFilter === 'emails' ? 'rgba(212,175,55,0.15)' : 'transparent',
                  color: inboxFilter === 'emails' ? '#D4AF37' : 'rgba(255,255,255,0.4)',
                }}
              >
                E-mails
                {unreadEmails > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full text-[#1a1716] font-medium bg-[#D4AF37]">
                    {unreadEmails}
                  </span>
                )}
              </button>
              <button
                onClick={handleProcessInvoices}
                disabled={processingInvoices}
                className="px-4 py-2 ml-auto text-xs tracking-wider uppercase rounded-lg border transition-all text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 disabled:opacity-50 flex items-center gap-2"
              >
                {processingInvoices && <span className="w-3 h-3 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />}
                {processingInvoices ? 'Verwerken...' : 'Verstuur Facturen'}
              </button>
            </div>

            {invoiceResult && (
              <div
                className="mx-0 mb-3 px-4 py-3 text-sm border rounded-lg whitespace-pre-wrap"
                style={{
                  borderColor: invoiceResult.ok ? '#4ade80' : '#f87171',
                  backgroundColor: invoiceResult.ok ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                  color: invoiceResult.ok ? '#4ade80' : '#f87171',
                }}
              >
                {invoiceResult.msg}
              </div>
            )}

            {/* AANVRAGEN LIST */}
            {inboxFilter === 'aanvragen' && (
              <div className="space-y-1">
                {loadingInbox && (
                  <div className="flex justify-center py-16">
                    <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
                  </div>
                )}
                {!loadingInbox && submissions.length === 0 && (
                  <p className="text-white/20 text-sm py-16 text-center">Geen aanvragen ontvangen</p>
                )}
                {submissions.map((sub) => {
                  const brandCfg = BRAND_CONFIG[sub.brand as Brand] || BRAND_CONFIG.woonklasse;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => { setSelectedSub(sub); if (!sub.gelezen) handleMarkRead(sub.id); }}
                      className="w-full text-left px-4 py-3.5 border-b border-white/5 active:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm truncate mr-3" style={{ fontWeight: sub.gelezen ? 400 : 600, color: sub.gelezen ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.9)' }}>
                          {!sub.gelezen && <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: brandCfg.accent }} />}
                          {sub.naam}
                        </span>
                        <span className="text-[11px] text-white/20 flex-shrink-0">{timeAgo(sub.timestamp)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded" style={{ color: brandCfg.accent, backgroundColor: brandCfg.accent + '15' }}>
                          {FORMULIER_LABELS[sub.formulier] || sub.formulier}
                        </span>
                        <span className="text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded" style={{ color: brandCfg.accentLight, backgroundColor: brandCfg.accent + '10' }}>
                          {brandCfg.label}
                        </span>
                        {sub.bericht && <span className="text-xs text-white/15 truncate ml-auto">{sub.bericht.slice(0, 40)}...</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* EMAILS LIST */}
            {inboxFilter === 'emails' && (
              <div className="space-y-1">
                {loadingEmails && (
                  <div className="flex justify-center py-16">
                    <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
                  </div>
                )}
                {!loadingEmails && emails.length === 0 && (
                  <p className="text-white/20 text-sm py-16 text-center">Geen e-mails gevonden</p>
                )}
                {emails.map((email) => (
                  <button
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className="w-full text-left px-4 py-3.5 border-b border-white/5 active:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm truncate mr-3" style={{ fontWeight: email.seen ? 400 : 600, color: email.seen ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.9)' }}>
                        {!email.seen && email.folder === 'inbox' && <span className="inline-block w-2 h-2 rounded-full mr-2 bg-[#D4AF37]" />}
                        {email.folder === 'sent' && <span className="text-[10px] text-white/30 mr-2">→</span>}
                        {email.folder === 'sent' ? email.to : email.parsedSubject?.recipient || email.fromName || email.from}
                      </span>
                      <span className="text-[11px] text-white/20 flex-shrink-0">{timeAgo(email.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded ${email.folder === 'sent' ? 'text-green-400/70 bg-green-400/10' : 'text-[#D4AF37] bg-[#D4AF37]/15'}`}>
                        {email.folder === 'sent' ? 'Verzonden' : 'Ontvangen'}
                      </span>
                      <span className="text-xs text-white/15 truncate">{email.parsedSubject?.actualSubject || email.subject}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SUBMISSION DETAIL */}
        {tab === 'inbox' && selectedSub && (
          <div className="animate-in">
            <button
              onClick={() => setSelectedSub(null)}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors mb-4 -ml-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug
            </button>
            <div className="border border-white/10 bg-white/[0.02] rounded-lg overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-white/10">
                <h2 className="text-lg text-white/90">{selectedSub.naam}</h2>
                <p className="text-sm text-white/40 mt-0.5">
                  {new Date(selectedSub.timestamp).toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="px-4 sm:px-6 py-5 space-y-3">
                {[
                  { label: 'E-mail', value: selectedSub.email, href: `mailto:${selectedSub.email}` },
                  { label: 'Telefoon', value: selectedSub.telefoon, href: `tel:${selectedSub.telefoon}` },
                  selectedSub.bedrijf ? { label: 'Bedrijf', value: selectedSub.bedrijf } : null,
                  selectedSub.type ? { label: 'Type', value: selectedSub.type } : null,
                  { label: 'Formulier', value: FORMULIER_LABELS[selectedSub.formulier] || selectedSub.formulier },
                ].filter(Boolean).map((field, i) => (
                  <div key={i} className="flex flex-col sm:grid sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 text-sm">
                    <span className="text-white/30 text-xs tracking-wider uppercase">{field!.label}</span>
                    {field!.href ? (
                      <a href={field!.href} className="text-white/70 hover:text-white/90 transition-colors">{field!.value}</a>
                    ) : (
                      <span className="text-white/70">{field!.value}</span>
                    )}
                  </div>
                ))}
                {selectedSub.advies && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                    {(selectedSub.advies.projectType || selectedSub.advies.tijdpad || selectedSub.advies.budget || selectedSub.advies.stijl) && (
                      <div className="space-y-2">
                        <span className="text-white/30 text-xs tracking-wider uppercase block">Project</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          {selectedSub.advies.projectType && (
                            <div className="flex flex-col">
                              <span className="text-white/30 text-[10px] tracking-wider uppercase">Type</span>
                              <span className="text-white/70">{selectedSub.advies.projectType}</span>
                            </div>
                          )}
                          {selectedSub.advies.tijdpad && (
                            <div className="flex flex-col">
                              <span className="text-white/30 text-[10px] tracking-wider uppercase">Tijdpad</span>
                              <span className="text-white/70">{selectedSub.advies.tijdpad}</span>
                            </div>
                          )}
                          {selectedSub.advies.budget && (
                            <div className="flex flex-col">
                              <span className="text-white/30 text-[10px] tracking-wider uppercase">Budget</span>
                              <span className="text-white/70">{selectedSub.advies.budget}</span>
                            </div>
                          )}
                          {selectedSub.advies.stijl && (
                            <div className="flex flex-col">
                              <span className="text-white/30 text-[10px] tracking-wider uppercase">Stijl</span>
                              <span className="text-white/70">{selectedSub.advies.stijl}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <span className="text-white/30 text-xs tracking-wider uppercase block mb-3">
                        Kamers ({selectedSub.advies.rooms.length})
                      </span>
                      <div className="space-y-3">
                        {selectedSub.advies.rooms.map((room, idx) => (
                          <div key={idx} className="border border-white/10 rounded-lg p-3 bg-white/[0.02]">
                            <div className="flex items-baseline gap-2 mb-2">
                              <span className="text-[10px] tracking-wider uppercase text-white/30">Kamer {idx + 1}</span>
                              <span className="text-sm text-white/85">{room.type || 'Niet gespecificeerd'}</span>
                              {room.meters && (
                                <span className="text-xs text-white/40">&middot; {room.meters} m²</span>
                              )}
                            </div>
                            {room.notes && (
                              <p className="text-xs text-white/50 mb-2 whitespace-pre-wrap">{room.notes}</p>
                            )}
                            {room.photos.length > 0 && (
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
                                {room.photos.map((p) => (
                                  <a
                                    key={p.url}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block aspect-square overflow-hidden rounded bg-black/30 group relative"
                                    title={p.filename}
                                  >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={p.url}
                                      alt={p.filename}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                      loading="lazy"
                                    />
                                  </a>
                                ))}
                              </div>
                            )}
                            {room.photos.length === 0 && (
                              <p className="text-[11px] text-white/20 italic">Geen foto&apos;s</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {selectedSub.bericht && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-white/30 text-xs tracking-wider uppercase block mb-2">Bericht</span>
                    <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{selectedSub.bericht}</p>
                  </div>
                )}
              </div>
              <div className="px-4 sm:px-6 py-4 border-t border-white/10 flex gap-2">
                <button onClick={() => handleReply(selectedSub)} className="flex-1 px-4 py-3 text-xs tracking-wider uppercase border border-[#D4AF37] text-[#D4AF37] rounded-lg active:scale-[0.98] transition-all">
                  Beantwoord
                </button>
                <a href={`tel:${selectedSub.telefoon}`} className="flex-1 px-4 py-3 text-xs tracking-wider uppercase border border-white/10 text-white/50 text-center rounded-lg active:scale-[0.98] transition-all">
                  Bel
                </a>
                <button onClick={() => handleDelete(selectedSub.id)} className="px-4 py-3 text-xs tracking-wider uppercase border border-red-500/20 text-red-400/50 hover:bg-red-500/10 transition-all rounded-lg active:scale-[0.98]">
                  Verwijder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* EMAIL DETAIL */}
        {tab === 'inbox' && selectedEmail && (
          <div className="animate-in">
            <button
              onClick={() => setSelectedEmail(null)}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors mb-4 -ml-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug
            </button>
            <div className="border border-white/10 bg-white/[0.02] rounded-lg overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-white/10">
                <h2 className="text-lg text-white/90">{selectedEmail.parsedSubject?.actualSubject || selectedEmail.subject}</h2>
                <p className="text-sm text-white/40 mt-1">
                  {selectedEmail.folder === 'sent' ? 'Aan' : 'Van'}: <span className="text-white/60">{selectedEmail.folder === 'sent' ? selectedEmail.to : `${selectedEmail.fromName} <${selectedEmail.from}>`}</span>
                </p>
                <p className="text-sm text-white/30 mt-0.5">
                  {new Date(selectedEmail.date).toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="px-4 sm:px-6 py-5">
                {selectedEmail.bodyHtml ? (
                  <iframe
                    srcDoc={`<html><head><style>body{font-family:sans-serif;font-size:14px;color:#e0e0e0;background:#1a1716;margin:0;padding:0;}a{color:#D4AF37;}img{max-width:100%;height:auto;}</style></head><body>${selectedEmail.bodyHtml}</body></html>`}
                    className="w-full min-h-[300px] border-0 rounded"
                    title="Email content"
                    sandbox="allow-same-origin"
                  />
                ) : (
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{selectedEmail.body}</p>
                )}
              </div>
              {selectedEmail.folder === 'inbox' && (
                <div className="px-4 sm:px-6 py-4 border-t border-white/10 flex gap-2">
                  <button onClick={() => handleReplyEmail(selectedEmail)} className="flex-1 px-4 py-3 text-xs tracking-wider uppercase border border-[#D4AF37] text-[#D4AF37] rounded-lg active:scale-[0.98] transition-all">
                    Beantwoord
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VERSTUUR TAB */}
        {tab === 'verstuur' && (
          <div className="space-y-5">
            <div className="flex gap-2">
              {(Object.keys(BRAND_CONFIG) as Brand[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className="flex-1 px-4 py-3 text-sm tracking-wider uppercase transition-all duration-300 border rounded-lg active:scale-[0.98]"
                  style={{
                    borderColor: brand === b ? BRAND_CONFIG[b].accent : 'rgba(255,255,255,0.1)',
                    backgroundColor: brand === b ? BRAND_CONFIG[b].accent + '15' : 'transparent',
                    color: brand === b ? BRAND_CONFIG[b].accent : 'rgba(255,255,255,0.4)',
                  }}
                >
                  {BRAND_CONFIG[b].label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Hero</label>
                <select
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-3 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none rounded-lg"
                >
                  <option value="" className="bg-[#1a1716]">Geen</option>
                  <option value="woonklasse" className="bg-[#1a1716]">Woonklasse</option>
                  <option value="badkamerstijl" className="bg-[#1a1716]">Badkamerstijl</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Logo</label>
                <button
                  onClick={() => setShowLogo(!showLogo)}
                  className="w-full bg-white/5 border px-3 py-3 text-sm transition-all text-left rounded-lg active:scale-[0.98]"
                  style={{ borderColor: showLogo ? accent + '60' : 'rgba(255,255,255,0.1)', color: showLogo ? accent : 'rgba(255,255,255,0.4)' }}
                >
                  {showLogo ? 'Aan' : 'Uit'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Van</label>
              <select
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none rounded-lg"
              >
                {FROM_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    className="bg-[#1a1716]"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Aan</label>
              <input type="email" value={aan} onChange={(e) => setAan(e.target.value)} placeholder="klant@voorbeeld.nl" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors rounded-lg" autoComplete="email" />
            </div>

            <div>
              <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Onderwerp</label>
              <input type="text" value={onderwerp} onChange={(e) => setOnderwerp(e.target.value)} placeholder="Bijv. Uw offerte is klaar" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors rounded-lg" />
            </div>

            <div>
              <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Bericht</label>
              <textarea value={bericht} onChange={(e) => setBericht(e.target.value)} placeholder="Typ hier je bericht..." rows={6} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none rounded-lg" />
            </div>

            <div className="flex gap-3">
              <button onClick={handlePreview} disabled={!bericht.trim()} className="flex-1 px-4 py-3 text-sm tracking-wider uppercase border transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg active:scale-[0.98]" style={{ borderColor: accent, color: accent }}>
                Preview
              </button>
              <button onClick={handleSend} disabled={sending || !aan.trim() || !onderwerp.trim() || !bericht.trim()} className="flex-1 px-4 py-3 text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-[#1a1716] rounded-lg active:scale-[0.98]" style={{ backgroundColor: accent }}>
                {sending ? 'Verzenden...' : 'Verstuur'}
              </button>
            </div>

            {result && (
              <div className="px-4 py-3 text-sm border rounded-lg" style={{ borderColor: result.ok ? '#4ade80' : '#f87171', backgroundColor: result.ok ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)', color: result.ok ? '#4ade80' : '#f87171' }}>
                {result.msg}
              </div>
            )}

            {previewHtml && (
              <div>
                <label className="block text-xs tracking-[2px] uppercase text-white/40 mb-2">Voorbeeld</label>
                <div className="border border-white/10 bg-white/5 rounded-lg overflow-hidden">
                  <iframe ref={iframeRef} srcDoc={previewHtml} className="w-full h-[500px] border-0" title="E-mail preview" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
