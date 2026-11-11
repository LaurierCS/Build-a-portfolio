// Small building blocks used by App.tsx. Each one is styled in index.css.
import type { ReactNode } from 'react'

export function Badge({ children, color = 'blue' }: { children: ReactNode; color?: 'blue' | 'gray' }) {
  return <span className={`badge badge-${color}`}>{children}</span>
}

export function Badges({ items, color }: { items: string[]; color?: 'blue' | 'gray' }) {
  return (
    <div className="badges">
      {items.map((item) => (
        <Badge key={item} color={color}>
          {item}
        </Badge>
      ))}
    </div>
  )
}

/** A button-looking link. Opens outside links in a new tab. */
export function LinkButton({ href, children, download }: { href: string; children: ReactNode; download?: string }) {
  const external = /^https?:/i.test(href)
  return (
    <a
      className="button"
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>
}

export function Caption({ children }: { children: ReactNode }) {
  return <p className="caption">{children}</p>
}

export function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="metric">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{String(value)}</div>
    </div>
  )
}

/** Splits text on empty lines into paragraphs. */
export function Paragraphs({ text }: { text: string }) {
  const parts = text
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean)
  return (
    <>
      {parts.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  )
}
