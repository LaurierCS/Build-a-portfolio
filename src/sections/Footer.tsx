import { SITE } from '../data.ts'
import { Icon } from '../components/Icon.tsx'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {YEAR} {SITE.name}. Built with React and Vite.
          {SITE.lastUpdated && ` Last updated ${SITE.lastUpdated}.`}
        </p>
        <a className="back-to-top" href="#top">
          Back to top
          <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  )
}
