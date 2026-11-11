import { EDUCATION } from '../data.ts'
import { Icon } from '../components/Icon.tsx'
import { Section } from '../components/Section.tsx'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I've studied">
      <div className="card-grid">
        {EDUCATION.map((school) => (
          <div key={`${school.school}-${school.dates}`} className="card card-row reveal">
            <span className="card-icon" aria-hidden="true">
              <Icon name="graduation" />
            </span>
            <div>
              <h3>{school.school}</h3>
              <p className="card-subtitle">{school.degree}</p>
              <p className="card-meta">
                {[school.dates, school.location].filter(Boolean).join('  ·  ')}
              </p>
              {school.details && school.details.length > 0 && (
                <ul className="card-list">
                  {school.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
