'use client';

import { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { upload } from '@vercel/blob/client';

type Brand = 'woonklasse' | 'badkamerstijl';

type RoomType = string;

interface RoomState {
  id: string;
  type: RoomType;
  meters: string;
  notes: string;
  /** Already uploaded (Blob URL + filename) */
  photos: { url: string; filename: string }[];
  /** Currently uploading (filename → progress 0-100) */
  uploading: Record<string, number>;
}

interface Props {
  brand: Brand;
  /** Tailwind classes for the outer card so it can sit on dark hero bgs */
  className?: string;
}

const PROJECT_TYPES_WOON = ['Totaal renovatie', 'Nieuwbouw', 'Sanitair / badkamer', 'Onderhoud', 'Anders'];
const PROJECT_TYPES_BADK = ['Complete renovatie', 'Uitbreiding', 'Aanpassing', 'Anders'];

const ROOM_TYPES_WOON = ['Woonkamer', 'Keuken', 'Badkamer', 'Slaapkamer', 'Hal / entree', 'Hele woning', 'Anders'];
const ROOM_TYPES_BADK = ['Hoofdbadkamer', 'Tweede badkamer', 'Toilet / gastenruimte', 'Wellness / spa', 'Anders'];

const TIJDPAD = ['Zo snel mogelijk', '1 — 3 maanden', '3 — 6 maanden', '6+ maanden', 'Nog oriënterend'];
const STIJL = ['Modern', 'Klassiek', 'Industrieel', 'Natuurlijk / warm', 'Strak / minimalistisch', 'Geen voorkeur'];
const BUDGET_WOON = ['< €25.000', '€25.000 — €75.000', '€75.000 — €150.000', '€150.000+', 'Onbekend'];
const BUDGET_BADK = ['< €10.000', '€10.000 — €25.000', '€25.000 — €50.000', '€50.000+', 'Onbekend'];

// No hard caps — users can upload as many photos and add as many rooms as
// they want. Sanity caps live server-side in /api/advies.

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function emptyRoom(): RoomState {
  return { id: uid(), type: '', meters: '', notes: '', photos: [], uploading: {} };
}

export default function HeroAdviesTool({ brand, className = '' }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [roomCount, setRoomCount] = useState<number | null>(null);
  const [projectType, setProjectType] = useState<string>('');
  const [rooms, setRooms] = useState<RoomState[]>([]);
  const [tijdpad, setTijdpad] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [stijl, setStijl] = useState<string>('');
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [bericht, setBericht] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // brand-aware palette + copy ------------------------------------
  const isBadk = brand === 'badkamerstijl';
  const accent = isBadk ? 'bsv2-teal' : 'woon-accent';
  const accentBg = isBadk ? 'bg-bsv2-teal' : 'bg-woon-accent';
  const accentBorder = isBadk ? 'border-bsv2-teal' : 'border-woon-accent';
  const accentText = isBadk ? 'text-bsv2-teal' : 'text-woon-accent';
  const accentHoverBg = isBadk ? 'hover:bg-bsv2-teal' : 'hover:bg-woon-accent';
  const onAccentText = isBadk ? 'text-white' : 'text-woon-dark';

  const projectTypes = isBadk ? PROJECT_TYPES_BADK : PROJECT_TYPES_WOON;
  const roomTypes = isBadk ? ROOM_TYPES_BADK : ROOM_TYPES_WOON;
  const budgetOpts = isBadk ? BUDGET_BADK : BUDGET_WOON;

  const totalPhotos = rooms.reduce((n, r) => n + r.photos.length, 0);

  // ------------------------------------------------------------
  // Step 1 → Step 2 transition: materialise the room cards
  // ------------------------------------------------------------
  const beginRooms = (count: number) => {
    setRoomCount(count);
    setRooms(Array.from({ length: count }, () => emptyRoom()));
    setStep(2);
  };

  // ------------------------------------------------------------
  // Image upload (direct to Vercel Blob via signed URL)
  // ------------------------------------------------------------
  const uploadFiles = useCallback(
    async (roomId: string, files: FileList | File[]) => {
      const accepted = Array.from(files);
      if (!accepted.length) return;
      setError(null);

      // Pre-flight: client-side size & type check so the user gets feedback
      // instantly instead of a stuck spinner if Blob rejects.
      const MAX_CLIENT_BYTES = 12 * 1024 * 1024; // matches server cap with buffer
      const oversize = accepted.find((f) => f.size > MAX_CLIENT_BYTES);
      if (oversize) {
        setError(`"${oversize.name}" is groter dan 12 MB. Kies een kleiner bestand.`);
        return;
      }

      // Upload in parallel — each file gets its own state slot.
      await Promise.all(
        accepted.map(async (file) => {
          const uploadKey = `${file.name}-${Date.now()}-${Math.random()}`;

          setRooms((curr) =>
            curr.map((r) =>
              r.id === roomId ? { ...r, uploading: { ...r.uploading, [uploadKey]: 0 } } : r,
            ),
          );

          const cleanupUploading = () => {
            setRooms((curr) =>
              curr.map((r) => {
                if (r.id !== roomId) return r;
                const { [uploadKey]: _gone, ...rest } = r.uploading;
                return { ...r, uploading: rest };
              }),
            );
          };

          try {
            // Fail fast if Blob hangs for any reason (CORS, network, etc).
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 90_000);

            console.log('[advies] uploading', file.name, file.type, `${(file.size / 1024).toFixed(0)}KB`);

            const blob = await upload(
              `advies/${brand}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`,
              file,
              {
                access: 'public',
                handleUploadUrl: '/api/advies/upload-url',
                contentType: file.type || 'application/octet-stream',
                abortSignal: controller.signal,
              },
            );

            clearTimeout(timeoutId);
            console.log('[advies] upload done', blob.url);

            setRooms((curr) =>
              curr.map((r) => {
                if (r.id !== roomId) return r;
                const { [uploadKey]: _gone, ...rest } = r.uploading;
                return {
                  ...r,
                  uploading: rest,
                  photos: [...r.photos, { url: blob.url, filename: file.name }],
                };
              }),
            );
          } catch (e) {
            cleanupUploading();
            const msg = e instanceof Error ? e.message : String(e);
            console.error('[advies] upload failed', file.name, msg, e);
            setError(`Upload van "${file.name}" mislukt: ${msg.slice(0, 140)}`);
          }
        }),
      );
    },
    [brand],
  );

  const removePhoto = (roomId: string, photoUrl: string) => {
    setRooms((curr) =>
      curr.map((r) => (r.id === roomId ? { ...r, photos: r.photos.filter((p) => p.url !== photoUrl) } : r)),
    );
  };

  const updateRoom = <K extends keyof RoomState>(id: string, key: K, value: RoomState[K]) => {
    setRooms((curr) => curr.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  // ------------------------------------------------------------
  // Submit
  // ------------------------------------------------------------
  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/advies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brand,
          naam,
          email,
          telefoon,
          bericht,
          projectType,
          tijdpad,
          budget,
          stijl,
          website,
          rooms: rooms.map((r) => ({
            type: r.type || 'Niet gespecificeerd',
            meters: r.meters || undefined,
            notes: r.notes || undefined,
            photos: r.photos,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.errors?.join(', ') || data.message || 'Verzenden mislukt');
      }
      const thanksPath = brand === 'badkamerstijl' ? '/badkamerstijl/bedankt' : '/woonklasse/bedankt';
      router.push(thanksPath);
    } catch (e) {
      setSubmitting(false);
      setError(e instanceof Error ? e.message : 'Er ging iets mis');
    }
  };

  // Validation flags ------------------------------------------------
  const step2Valid = rooms.every((r) => r.type.length > 0);
  const step3Valid = naam.trim().length > 1 && /.+@.+\..+/.test(email) && telefoon.trim().length > 5;

  // ============================================================
  // Render
  // ============================================================
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/30 overflow-hidden text-left text-gray-900 ${className}`}>
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <p className={`text-[10px] tracking-[0.25em] uppercase ${accentText} font-medium mb-2`}>
          Persoonlijk advies &middot; in 3 stappen
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
          Vertel ons over je {isBadk ? 'badkamer' : 'project'} &mdash;
          <span className={`italic ${accentText}`}> wij denken met je mee</span>
        </h3>

        {/* Step indicator */}
        <div className="mt-5 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s <= step ? accentBg : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                  Hoeveel kamers wil je {isBadk ? 'aanpakken' : 'verbouwen'}?
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRoomCount(n)}
                      className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                        roomCount === n
                          ? `${accentBg} ${onAccentText} ${accentBorder}`
                          : 'border-gray-200 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {n === 5 ? '5+' : n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                  Wat voor type project?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setProjectType(t)}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        projectType === t
                          ? `${accentBg} ${onAccentText} ${accentBorder}`
                          : 'border-gray-200 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  disabled={!roomCount}
                  onClick={() => beginRooms(roomCount!)}
                  className={`px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
                    roomCount
                      ? `${accentBg} ${onAccentText} hover:scale-105`
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Volgende &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-500">
                  Per kamer
                </p>
                <p className="text-[10px] text-gray-400">
                  {rooms.length} kamer{rooms.length === 1 ? '' : 's'} &middot; {totalPhotos} foto{totalPhotos === 1 ? '' : "'s"}
                </p>
              </div>

              <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1 -mr-1">
                {rooms.map((room, idx) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={idx}
                    roomTypes={roomTypes}
                    accent={accent}
                    accentBg={accentBg}
                    accentBorder={accentBorder}
                    accentText={accentText}
                    onAccentText={onAccentText}
                    canRemove={rooms.length > 1}
                    onChange={(k, v) => updateRoom(room.id, k, v)}
                    onUploadFiles={(files) => uploadFiles(room.id, files)}
                    onRemovePhoto={(url) => removePhoto(room.id, url)}
                    onRemoveRoom={() => setRooms((curr) => curr.filter((r) => r.id !== room.id))}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setRooms((curr) => [...curr, emptyRoom()])}
                  className={`w-full py-3 rounded-lg border-2 border-dashed border-gray-300 hover:${accentBorder} text-gray-500 hover:${accentText} text-sm font-medium transition-colors`}
                >
                  + Voeg kamer toe
                </button>
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  &larr; Terug
                </button>
                <button
                  type="button"
                  disabled={!step2Valid}
                  onClick={() => setStep(3)}
                  className={`px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
                    step2Valid
                      ? `${accentBg} ${onAccentText} hover:scale-105`
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Volgende &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Naam *"
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  className={`px-4 py-3 rounded-lg border border-gray-200 focus:${accentBorder} focus:outline-none text-sm`}
                />
                <input
                  type="email"
                  required
                  placeholder="E-mailadres *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`px-4 py-3 rounded-lg border border-gray-200 focus:${accentBorder} focus:outline-none text-sm`}
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefoon *"
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  className={`px-4 py-3 rounded-lg border border-gray-200 focus:${accentBorder} focus:outline-none text-sm sm:col-span-2`}
                />
              </div>

              <details className="text-sm">
                <summary className={`cursor-pointer ${accentText} font-medium`}>
                  Extra informatie (optioneel) &mdash; klap uit
                </summary>
                <div className="mt-4 space-y-4">
                  <SelectRow label="Tijdpad" options={TIJDPAD} value={tijdpad} onChange={setTijdpad} accentBg={accentBg} accentBorder={accentBorder} onAccentText={onAccentText} />
                  <SelectRow label="Budget indicatie" options={budgetOpts} value={budget} onChange={setBudget} accentBg={accentBg} accentBorder={accentBorder} onAccentText={onAccentText} />
                  <SelectRow label="Stijl voorkeur" options={STIJL} value={stijl} onChange={setStijl} accentBg={accentBg} accentBorder={accentBorder} onAccentText={onAccentText} />
                  <textarea
                    placeholder="Vertel ons meer over je project (optioneel)"
                    value={bericht}
                    onChange={(e) => setBericht(e.target.value)}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:${accentBorder} focus:outline-none text-sm resize-none`}
                  />
                </div>
              </details>

              {/* Honeypot */}
              <div className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              {error && <p className="text-xs text-red-600">{error}</p>}

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm text-gray-500 hover:text-gray-900"
                  disabled={submitting}
                >
                  &larr; Terug
                </button>
                <button
                  type="button"
                  disabled={!step3Valid || submitting}
                  onClick={submit}
                  className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all ${
                    step3Valid && !submitting
                      ? `${accentBg} ${onAccentText} hover:scale-105`
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {submitting ? 'Bezig met verzenden…' : 'Verstuur aanvraag'}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 leading-relaxed pt-2">
                We nemen binnen 2 werkdagen contact met je op om je advies persoonlijk door te spreken. We delen je gegevens nooit met derden.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ============================================================
// Sub-components
// ============================================================
interface RoomCardProps {
  room: RoomState;
  index: number;
  roomTypes: string[];
  accent: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  onAccentText: string;
  canRemove: boolean;
  onChange: <K extends keyof RoomState>(key: K, value: RoomState[K]) => void;
  onUploadFiles: (files: FileList | File[]) => void;
  onRemovePhoto: (url: string) => void;
  onRemoveRoom: () => void;
}

function RoomCard({
  room,
  index,
  roomTypes,
  accentBg,
  accentBorder,
  accentText,
  onAccentText,
  canRemove,
  onChange,
  onUploadFiles,
  onRemovePhoto,
  onRemoveRoom,
}: RoomCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadingCount = Object.keys(room.uploading).length;

  return (
    <div className={`border ${room.type ? accentBorder : 'border-gray-200'} rounded-lg p-4 transition-colors`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
          Kamer {index + 1}
        </p>
        {canRemove && (
          <button
            type="button"
            onClick={onRemoveRoom}
            className="text-[10px] text-gray-400 hover:text-red-500 transition-colors"
            aria-label={`Verwijder kamer ${index + 1}`}
          >
            verwijder
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {roomTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onChange('type', t)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              room.type === t
                ? `${accentBg} ${onAccentText}`
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <div className="relative flex-1 min-w-[120px]">
          <input
            type="text"
            inputMode="numeric"
            placeholder="m² (optioneel)"
            value={room.meters}
            onChange={(e) => onChange('meters', e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none text-sm"
          />
        </div>
        <input
          type="text"
          placeholder="Korte beschrijving (optioneel)"
          value={room.notes}
          onChange={(e) => onChange('notes', e.target.value)}
          className="flex-[2] min-w-[180px] px-3 py-2 rounded-lg border border-gray-200 focus:outline-none text-sm"
        />
      </div>

      {/* Photos */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] tracking-[0.15em] uppercase text-gray-500">
            Foto&apos;s huidige situatie (optioneel) &middot; {room.photos.length}
          </p>
          {uploadingCount > 0 && (
            <p className={`text-[10px] ${accentText} animate-pulse`}>{uploadingCount} uploaden…</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {room.photos.map((p) => (
            <div key={p.url} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.url} alt={p.filename} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => onRemovePhoto(p.url)}
                aria-label="Verwijder foto"
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white text-xs flex items-center justify-center hover:bg-black"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={`aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:${accentBorder} text-gray-400 hover:${accentText} flex flex-col items-center justify-center text-xs transition-colors`}
          >
            <span className="text-2xl leading-none mb-1">+</span>
            <span>Foto</span>
          </button>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              onUploadFiles(e.target.files);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

function SelectRow({
  label,
  options,
  value,
  onChange,
  accentBg,
  accentBorder,
  onAccentText,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  accentBg: string;
  accentBorder: string;
  onAccentText: string;
}) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(value === opt ? '' : opt)}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
              value === opt
                ? `${accentBg} ${onAccentText} ${accentBorder}`
                : 'bg-gray-50 border-gray-200 hover:border-gray-400 text-gray-700'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
