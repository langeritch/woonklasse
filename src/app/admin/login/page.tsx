'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function AdminLogin() {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  function handleChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 6 digits are filled
    if (value && index === 5) {
      const pin = newDigits.join('');
      if (pin.length === 6) {
        submitPin(pin);
      }
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    const newDigits = [...digits];
    for (let i = 0; i < pasted.length; i++) {
      newDigits[i] = pasted[i];
    }
    setDigits(newDigits);

    if (pasted.length === 6) {
      submitPin(pasted);
    } else {
      inputRefs.current[pasted.length]?.focus();
    }
  }

  async function submitPin(pin: string) {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/email');
      } else {
        setError('Onjuiste pincode');
        setDigits(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    } catch {
      setError('Verbindingsfout');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1716] flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        {/* Icon logo */}
        <div className="mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/icon-only/svg/woonklasse-icon-gold.svg"
            alt="Woonklasse"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <p className="text-xs tracking-[4px] uppercase text-white/30">
            Admin Portal
          </p>
        </div>

        {/* Pin inputs */}
        <div className="flex justify-center gap-3 mb-8" onPaste={handlePaste}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-xl font-light bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:border-[#c9a96e]/60 focus:bg-white/[0.08] transition-all"
              disabled={loading}
              autoComplete="off"
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400/80 text-sm mb-4 animate-pulse">{error}</p>
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center mb-4">
            <div className="w-5 h-5 border-2 border-[#c9a96e]/30 border-t-[#c9a96e] rounded-full animate-spin" />
          </div>
        )}

        <p className="text-white/15 text-xs mt-8">
          Voer uw 6-cijferige pincode in
        </p>
      </div>
    </div>
  );
}
