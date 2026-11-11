// ==============================================================
//  BUILD A PORTFOLIO: a professional site, written in React
//
//  This file builds your portfolio page from the information in
//  data.ts. You can fill in your whole site without touching it.
// ==============================================================

import { useState } from 'react'
import * as data from './data'
import { LineChart } from './components/LineChart'
import { Tabs } from './components/Tabs'
import { Badges, Caption, Card, LinkButton, Metric, Paragraphs } from './components/ui'
import { asset, useFileExists } from './lib/assets'

const {
  NAME,
  HEADLINE,
  LOCATION,
  OPEN_TO,
  PHOTO,
  RESUME,
  LAST_UPDATED,
  ABOUT,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  LINKS,
  HIGHLIGHTS,
  CERTIFICATIONS,
  RECOMMENDATIONS,
  WRITING_AND_TALKS,
  FEATURED_PROJECT,
  CHART_DATA,
  PERSONAL_SIDE,
  BOOK_A_CHAT,
} = data

// ==============================================================
//  BELOW THIS LINE BUILDS THE PAGE.
//  Leave it alone until Steps 1 to 6 in data.ts look right.
// ==============================================================

export default function App() {
  return (
    <main className="page">
      <Header />

      {/* The tabs. To ADD A NEW TAB:
            1. add a new { label, content } block to this list, e.g. "Writing"
            2. put what the tab should show in "content" (JSX, like the others) */}
      <Tabs
        tabs={[
          { label: 'About', content: <AboutTab /> },
          { label: 'Experience', content: <ExperienceTab /> },
          { label: 'Projects', content: <ProjectsTab /> },
          { label: 'Contact', content: <ContactTab /> },
        ]}
      />

      <FeatureMenu />

      {/* ==============================================================
          KEEP THIS LAST: the footer
          ============================================================== */}
      <hr />
      <Caption>Built with React and Vite. Last updated {LAST_UPDATED}.</Caption>
    </main>
  )
}

// Header: photo on the left, details on the right
function Header() {
  const [photoOk, setPhotoOk] = useState(true)
  // The download button only appears if you have added resume.pdf to public/
  const resumeUrl = asset(RESUME)
  const hasResume = useFileExists(resumeUrl)
  const details = [LOCATION, OPEN_TO].filter(Boolean)

  return (
    <header className="columns header">
      <div className="col" style={{ flex: 1 }}>
        {PHOTO && photoOk && (
          <img className="photo" src={asset(PHOTO)} alt={NAME} onError={() => setPhotoOk(false)} />
        )}
      </div>
      <div className="col" style={{ flex: 3 }}>
        <h1>{NAME}</h1>
        {HEADLINE && <h3>{HEADLINE}</h3>}
        {details.length > 0 && <Caption>{details.join('  |  ')}</Caption>}
        {hasResume && (
          <div>
            <LinkButton href={resumeUrl} download={RESUME.split('/').pop()}>
              Download resume
            </LinkButton>
          </div>
        )}
      </div>
    </header>
  )
}

function AboutTab() {
  return (
    <>
      <Paragraphs text={ABOUT} />
      <h3>Skills</h3>
      {Object.entries(SKILLS).map(([category, items]) => (
        <div key={category}>
          <p>
            <strong>{category}</strong>
          </p>
          <Badges items={items} color="blue" />
        </div>
      ))}
    </>
  )
}

function ExperienceTab() {
  return (
    <>
      <h3>Experience</h3>
      {EXPERIENCE.map((job) => (
        <div key={`${job.role}-${job.organization}-${job.dates}`}>
          <p>
            <strong>{job.role}</strong>, {job.organization}
          </p>
          <Caption>{job.dates}</Caption>
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
      <h3>Education</h3>
      {EDUCATION.map((school) => (
        <div key={`${school.school}-${school.dates}`}>
          <p>
            <strong>{school.school}</strong>
          </p>
          <p>{school.degree}</p>
          <Caption>{school.dates}</Caption>
        </div>
      ))}
    </>
  )
}

function ProjectsTab() {
  return (
    <>
      {PROJECTS.map((project) => (
        <Card key={`${project.title}-${project.year}`}>
          <h3>
            {project.title} ({project.year})
          </h3>
          <Badges items={project.tags} color="gray" />
          <p>{project.summary}</p>
          {project.link && (
            <div>
              <LinkButton href={project.link}>View project</LinkButton>
            </div>
          )}
        </Card>
      ))}
    </>
  )
}

function ContactTab() {
  return (
    <>
      <p>The best way to reach me is by email or LinkedIn.</p>
      <div className="columns">
        {Object.entries(LINKS).map(([label, url]) => (
          <div className="col" key={label}>
            <LinkButton href={url}>{label}</LinkButton>
          </div>
        ))}
      </div>
    </>
  )
}

// ==============================================================
//  FEATURE MENU (OPTIONAL EXTRAS)
//  Each extra only shows up once you fill it in, in data.ts.
//  Want something custom? Add your own JSX at the end of this
//  function, and it will show up above the footer.
// ==============================================================
function FeatureMenu() {
  return (
    <>
      {/* ---- Feature A: key highlights ---- */}
      {HIGHLIGHTS.length > 0 && (
        <div className="columns">
          {HIGHLIGHTS.map((item) => (
            <div className="col" key={item.label}>
              <Metric label={item.label} value={item.value} />
            </div>
          ))}
        </div>
      )}

      {/* ---- Feature B: certifications and awards ---- */}
      {CERTIFICATIONS.length > 0 && (
        <section>
          <h3>Certifications and awards</h3>
          <ul>
            {CERTIFICATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ---- Feature C: recommendations ---- */}
      {RECOMMENDATIONS.length > 0 && (
        <section>
          <h3>What people say</h3>
          {RECOMMENDATIONS.map((rec) => (
            <Card key={rec.quote}>
              <p>{rec.quote}</p>
              {rec.author && <Caption>{rec.author}</Caption>}
            </Card>
          ))}
        </section>
      )}

      {/* ---- Feature D: writing and talks ---- */}
      {WRITING_AND_TALKS.length > 0 && (
        <section>
          <h3>Writing and talks</h3>
          <ul>
            {WRITING_AND_TALKS.map((item) => (
              <li key={item.title}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---- Feature E: a featured project with a picture ---- */}
      {FEATURED_PROJECT && (
        <section>
          <h3>{FEATURED_PROJECT.title || 'Featured project'}</h3>
          {FEATURED_PROJECT.image && (
            <figure className="figure">
              <img src={asset(FEATURED_PROJECT.image)} alt={FEATURED_PROJECT.caption || FEATURED_PROJECT.title || ''} />
              {FEATURED_PROJECT.caption && <figcaption className="caption">{FEATURED_PROJECT.caption}</figcaption>}
            </figure>
          )}
          {FEATURED_PROJECT.description && <p>{FEATURED_PROJECT.description}</p>}
          {FEATURED_PROJECT.link && (
            <div>
              <LinkButton href={FEATURED_PROJECT.link}>See the full project</LinkButton>
            </div>
          )}
        </section>
      )}

      {/* ---- Feature F: a chart from your own work ---- */}
      {CHART_DATA && CHART_DATA.data.length > 0 && (
        <section>
          {CHART_DATA.title && <h3>{CHART_DATA.title}</h3>}
          <LineChart chart={CHART_DATA} />
        </section>
      )}

      {/* ---- Feature G: a personal side ---- */}
      {PERSONAL_SIDE && (
        <details className="expander">
          <summary>Beyond work</summary>
          <div className="expander-body">
            <Paragraphs text={PERSONAL_SIDE} />
          </div>
        </details>
      )}

      {/* ---- Feature H: a "book a chat" button ---- */}
      {BOOK_A_CHAT?.link && (
        <div>
          <LinkButton href={BOOK_A_CHAT.link}>{BOOK_A_CHAT.label || 'Book a 15-minute chat'}</LinkButton>
        </div>
      )}
    </>
  )
}
