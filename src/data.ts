// ==============================================================
//  BUILD A PORTFOLIO: a professional site, written in React
//
//  HOW IT WORKS
//  - Edit this file, then click "Commit changes" on GitHub.
//  - Your live site updates on its own within a minute or so.
//  - Running it on your computer? Save the file and the page
//    in your browser updates right away.
//  - Anything after // is a note to you. The code ignores it.
//
//  Fill in Steps 1 to 6. Then use the FEATURE MENU below
//  to add extras that make your site stand out.
//
//  PRIVACY: this site is public. Do not include your phone number,
//  home address, or student number here or in your resume file.
// ==============================================================

import type {
  BookAChat,
  ChartData,
  FeaturedProject,
  Highlight,
  Job,
  Project,
  Recommendation,
  School,
  Theme,
  WritingOrTalk,
} from './types'

// --------------------------------------------------------------
// STEP 1: THE BASICS
// Change the words inside the quotes. Keep the quotes.
// --------------------------------------------------------------
export const NAME = 'Your Name'
export const HEADLINE = 'Your program | What you are aiming for' // e.g. "Economics student | Aspiring data analyst"
export const LOCATION = 'City, Province or State'
export const OPEN_TO = 'Open to: summer 2027 internships' // or "" to hide it
export const PHOTO = 'photo.jpg' // a professional-looking headshot; put it in public/
export const RESUME = 'resume.pdf' // your resume as a PDF with this exact name, in public/
export const PAGE_ICON = '💼' // the little icon in the browser tab
export const LAST_UPDATED = 'Month Year'

// --------------------------------------------------------------
// STEP 2: ABOUT YOU
// 3 to 4 sentences: who you are, what you study or do, what you
// are aiming for, and one strength. Write it in your own voice.
// Leave an empty line between paragraphs.
// --------------------------------------------------------------
export const ABOUT = `
Write a short professional summary here. Say what you study, what you are
good at, and the kind of work or opportunity you are looking for.

A second short paragraph is optional. Delete it if you do not need it.
`

// Group your skills however makes sense. Each name becomes a badge.
export const SKILLS: Record<string, string[]> = {
  Technical: ['Python', 'Excel', 'Data analysis'],
  Professional: ['Public speaking', 'Project management', 'Research'],
  Languages: ['English', 'French'],
}

// --------------------------------------------------------------
// STEP 3: EXPERIENCE AND EDUCATION
// Each {...} block is one entry. To add another, copy a whole
// block (including the comma at the end) and paste it below.
//
// Write each point like this:  action verb + what you did + result.
// Example: "Organized a 40-person workshop, with 90% positive feedback"
// Include jobs, internships, volunteering, and leadership roles.
// --------------------------------------------------------------
export const EXPERIENCE: Job[] = [
  {
    role: 'Your role',
    organization: 'Organization name',
    dates: 'May 2025 to Aug 2025',
    points: [
      'Started with an action verb and described what you did',
      'Added a result or number if you have one',
    ],
  },
  {
    role: 'Another role',
    organization: 'Another organization',
    dates: 'Sep 2024 to Apr 2025',
    points: ['Delete any entries you do not need'],
  },
]

export const EDUCATION: School[] = [
  {
    school: 'Your University',
    degree: 'Bachelor of Arts in Your Major',
    dates: '2024 to 2028',
  },
]

// --------------------------------------------------------------
// STEP 4: PROJECTS
// Show your best 2 to 4. For each, say the problem, what you did,
// and the outcome. "tags" are badges for tools or topics.
// Leave "link" as "" if there is nothing to link to.
// --------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    title: 'Project name',
    year: '2026',
    summary: 'One or two sentences: the problem, what you did, and the result.',
    tags: ['Python', 'Research'],
    link: 'https://example.com',
  },
  {
    title: 'Another project',
    year: '2025',
    summary: 'Delete any blocks you do not need.',
    tags: ['Teamwork'],
    link: '',
  },
]

// --------------------------------------------------------------
// STEP 5: CONTACT
// Format is Label: "link". Only keep what you want public.
// (Labels with spaces need quotes, like "Book a call": "...")
// --------------------------------------------------------------
export const LINKS: Record<string, string> = {
  Email: 'mailto:you@example.com',
  LinkedIn: 'https://www.linkedin.com/in/your-name',
  GitHub: 'https://github.com/your-username',
}

// --------------------------------------------------------------
// STEP 6: YOUR LOOK & THEME
// Change the colours and font. Keep the quotes.
// Colours can be hex codes like "#E4572E".
// --------------------------------------------------------------
export const THEME: Theme = {
  base: 'light', // or "dark"
  primaryColor: '#E4572E', // buttons and highlights
  backgroundColor: '#FAFAFA', // page background
  secondaryBackgroundColor: '#EDEDED', // boxes and tabs
  textColor: '#222222', // main text
  font: 'sans serif', // try "serif" or "monospace"
}

// ==============================================================
//  FEATURE MENU (OPTIONAL EXTRAS)
//
//  These extra sections appear under your tabs.
//  They are pure data (lists or objects) and are kept empty
//  by default so they do not show up until you add data to them.
//  To turn one ON:
//    - Fill it in using the examples below.
//  To turn one OFF:
//    - Leave it empty: [] for lists, "" for text, null for the rest.
// ==============================================================

// ---- Feature A: key highlights -------------------------------
// Add 2 to 4 key numbers or metrics to show right under your tabs.
// Example:
// export const HIGHLIGHTS: Highlight[] = [
//   { label: 'GPA', value: '3.8' },
//   { label: 'Internships', value: '2' },
//   { label: 'Projects shipped', value: '5' },
// ]

export const HIGHLIGHTS: Highlight[] = []

// ---- Feature B: certifications and awards --------------------
// List any honors, dean's list recognitions, or certificates.
// Example:
// export const CERTIFICATIONS: string[] = [
//   "Dean's List, 2025",
//   'Name of a certificate, 2026',
// ]

export const CERTIFICATIONS: string[] = []

// ---- Feature C: recommendations ------------------------------
// Quotes from professors, managers, or teammates.
// Always ask permission before quoting someone.
// Example:
// export const RECOMMENDATIONS: Recommendation[] = [
//   {
//     quote: 'A short quote from a professor, manager, or teammate.',
//     author: 'Name, Title',
//   },
// ]

export const RECOMMENDATIONS: Recommendation[] = []

// ---- Feature D: writing and talks ----------------------------
// Articles, presentations, research posters, or blog posts.
// Example:
// export const WRITING_AND_TALKS: WritingOrTalk[] = [
//   {
//     title: 'Title of an article, presentation, or poster',
//     link: 'https://example.com',
//   },
// ]

export const WRITING_AND_TALKS: WritingOrTalk[] = []

// ---- Feature E: a featured project with a picture ------------
// Highlight your best project with an image and link.
// Put the image in public/ first (e.g. project.png).
// Example:
// export const FEATURED_PROJECT: FeaturedProject | null = {
//   title: 'Featured project',
//   image: 'project.png',
//   caption: 'A screenshot or photo of your work',
//   description: 'Two sentences: the problem, what you did, and the result.',
//   link: 'https://example.com',
// }

export const FEATURED_PROJECT: FeaturedProject | null = null

// ---- Feature F: a chart from your own work -------------------
// Show a simple data chart from a project or experiment.
// Example:
// export const CHART_DATA: ChartData | null = {
//   title: 'A result I am proud of',
//   x_axis: 'Month',
//   y_axis: 'Result',
//   data: [
//     { Month: 'Jan', Result: 10 },
//     { Month: 'Feb', Result: 25 },
//     { Month: 'Mar', Result: 40 },
//   ],
// }

export const CHART_DATA: ChartData | null = null

// ---- Feature G: a personal side ------------------------------
// Hobbies, sports, volunteering, or what you do outside of work.
// Example:
// export const PERSONAL_SIDE = 'A few lines about hobbies, volunteering, or what you do for fun.'

export const PERSONAL_SIDE = ''

// ---- Feature H: a "book a chat" button -----------------------
// A button linking to Calendly or another scheduling tool.
// Example:
// export const BOOK_A_CHAT: BookAChat | null = {
//   label: 'Book a 15-minute chat',
//   link: 'https://calendly.com/your-link',
// }

export const BOOK_A_CHAT: BookAChat | null = null
