import { useId, useState, type ReactNode } from 'react'

export type Tab = { label: string; content: ReactNode }

/** A row of tabs like Streamlit's st.tabs. Only the picked tab is shown. */
export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  const id = useId()

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
              const next = (active + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length
              setActive(next)
              document.getElementById(`${id}-tab-${next}`)?.focus()
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="tab-panel"
        role="tabpanel"
        id={`${id}-panel-${active}`}
        aria-labelledby={`${id}-tab-${active}`}
      >
        {tabs[active]?.content}
      </div>
    </div>
  )
}
