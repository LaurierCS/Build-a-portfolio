import { ABOUT } from '../data.ts'
import { Section } from '../components/Section.tsx'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="about-grid">
        <div className="about-text reveal">
          {ABOUT.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {ABOUT.facts.length > 0 && (
          <dl className="facts reveal">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Section>
  )
}
