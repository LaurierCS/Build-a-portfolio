// ==============================================================
//  The shapes of the data in data.ts.
//  You don't need to edit this file. It lets your editor warn you
//  about typos (like "orgnization") before you even run the site.
// ==============================================================

export type Job = {
  role: string
  organization: string
  dates: string
  points: string[]
}

export type School = {
  school: string
  degree: string
  dates: string
}

export type Project = {
  title: string
  year: string
  summary: string
  tags: string[]
  link: string // "" if there is nothing to link to
}

export type Theme = {
  base: 'light' | 'dark'
  primaryColor: string
  backgroundColor: string
  secondaryBackgroundColor: string
  textColor: string
  font: 'sans serif' | 'serif' | 'monospace' | (string & {})
}

export type Highlight = { label: string; value: string | number }

export type Recommendation = { quote: string; author?: string }

export type WritingOrTalk = { title: string; link?: string }

export type FeaturedProject = {
  title?: string
  image?: string
  caption?: string
  description?: string
  link?: string
}

export type ChartData = {
  title?: string
  x_axis: string
  y_axis: string
  data: Record<string, string | number>[]
}

export type BookAChat = { label?: string; link: string }
