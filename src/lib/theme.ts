import type { Theme } from '../types'
import { asset } from './assets'

const FONTS: Record<string, string> = {
  'sans serif':
    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  monospace: 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
}

/** Applies THEME from data.ts to the page as CSS variables (see index.css). */
export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.base = theme.base
  root.style.colorScheme = theme.base
  root.style.setProperty('--primary', theme.primaryColor)
  root.style.setProperty('--bg', theme.backgroundColor)
  root.style.setProperty('--bg-secondary', theme.secondaryBackgroundColor)
  root.style.setProperty('--text', theme.textColor)
  root.style.setProperty('--font', FONTS[theme.font] ?? theme.font)
}

/** Sets the browser tab title and icon. The icon can be an emoji or a file in public/. */
export function setPageInfo(title: string, icon: string) {
  document.title = title

  let href = ''
  if (/\.(png|jpe?g|gif|svg|ico|webp)$/i.test(icon)) {
    href = asset(icon)
  } else if (icon) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`
    href = `data:image/svg+xml,${encodeURIComponent(svg)}`
  }
  if (!href) return

  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = href
}
