import Link from 'next/link';
import type { ReactNode } from 'react';
import { slugifyHeading } from '@/data/blog';

type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const tok = match[0];
    if (tok.startsWith('**')) {
      out.push(
        <strong key={`b-${key++}`} className="font-medium text-bs26-charcoal">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else {
      const linkMatch = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        out.push(
          <Link
            key={`l-${key++}`}
            href={linkMatch[2]}
            className="text-bs26-gold underline underline-offset-[3px] decoration-bs26-gold/30 hover:decoration-bs26-gold transition-colors"
          >
            {linkMatch[1]}
          </Link>,
        );
      } else {
        out.push(tok);
      }
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let buf: { type: 'p' | 'ul' | 'ol' | 'table'; data: string[] } | null = null;

  const flush = () => {
    if (!buf) return;
    if (buf.type === 'p') {
      const text = buf.data.join(' ').trim();
      if (text) blocks.push({ type: 'p', text });
    } else if (buf.type === 'ul') {
      blocks.push({ type: 'ul', items: buf.data });
    } else if (buf.type === 'ol') {
      blocks.push({ type: 'ol', items: buf.data });
    } else if (buf.type === 'table') {
      const cells = buf.data.map((row) =>
        row
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim()),
      );
      const isDivider = (cells: string[]) => cells.every((c) => /^:?-+:?$/.test(c));
      const headers = cells[0] ?? [];
      const dataRows = cells.filter((row, i) => i > 0 && !isDivider(row));
      blocks.push({ type: 'table', headers, rows: dataRows });
    }
    buf = null;
  };

  for (const raw of lines) {
    const trimmed = raw.trim();
    if (trimmed === '') {
      flush();
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flush();
      const text = trimmed.slice(3).trim();
      blocks.push({ type: 'h2', id: slugifyHeading(text), text });
      continue;
    }
    if (trimmed.startsWith('### ')) {
      flush();
      const text = trimmed.slice(4).trim();
      blocks.push({ type: 'h3', id: slugifyHeading(text), text });
      continue;
    }
    if (/^[-*]\s+/.test(trimmed)) {
      if (!buf || buf.type !== 'ul') {
        flush();
        buf = { type: 'ul', data: [] };
      }
      buf.data.push(trimmed.replace(/^[-*]\s+/, ''));
      continue;
    }
    if (/^\d+\.\s+/.test(trimmed)) {
      if (!buf || buf.type !== 'ol') {
        flush();
        buf = { type: 'ol', data: [] };
      }
      buf.data.push(trimmed.replace(/^\d+\.\s+/, ''));
      continue;
    }
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!buf || buf.type !== 'table') {
        flush();
        buf = { type: 'table', data: [] };
      }
      buf.data.push(trimmed);
      continue;
    }
    if (!buf || buf.type !== 'p') {
      flush();
      buf = { type: 'p', data: [] };
    }
    buf.data.push(trimmed);
  }
  flush();
  return blocks;
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <div className="prose-bs26">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={i}
              id={block.id}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-light text-bs26-charcoal mt-16 mb-6 leading-[1.15] scroll-mt-32"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3
              key={i}
              id={block.id}
              className="font-display text-2xl md:text-[1.65rem] font-light text-bs26-charcoal mt-10 mb-4 leading-[1.25] scroll-mt-32"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === 'p') {
          return (
            <p
              key={i}
              className="text-bs26-charcoal/80 text-base md:text-lg leading-[1.75] mb-6"
            >
              {renderInline(block.text)}
            </p>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul
              key={i}
              className="space-y-3 mb-8 text-bs26-charcoal/80 text-base md:text-lg leading-[1.7]"
            >
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 pl-1">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-bs26-ink flex-shrink-0" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} className="space-y-4 mb-8 text-bs26-charcoal/80 text-base md:text-lg leading-[1.7] counter-reset-blog">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-4">
                  <span className="font-display text-bs26-gold text-xl font-medium tabular-nums leading-none mt-1 w-5 flex-shrink-0">
                    {j + 1}.
                  </span>
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === 'table') {
          return (
            <div key={i} className="my-10 overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b border-bs26-charcoal/20">
                    {block.headers.map((h, j) => (
                      <th
                        key={j}
                        className="text-left font-display text-lg font-medium text-bs26-charcoal py-4 pr-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className="border-b border-bs26-charcoal/10">
                      {row.map((cell, k) => (
                        <td
                          key={k}
                          className="py-4 pr-6 text-bs26-charcoal/80 leading-relaxed"
                        >
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
