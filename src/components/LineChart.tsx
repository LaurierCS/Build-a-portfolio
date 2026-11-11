import type { ChartData } from '../types'

const W = 640
const H = 300
const PAD = { top: 16, right: 16, bottom: 48, left: 56 }

/** A simple line chart drawn with SVG, so there's no chart library to install. */
export function LineChart({ chart }: { chart: ChartData }) {
  const { x_axis, y_axis, data } = chart
  const values = data.map((row) => Number(row[y_axis]) || 0)
  const min = Math.min(0, ...values)
  const max = Math.max(...values, min + 1)

  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const x = (i: number) => PAD.left + (data.length > 1 ? (i / (data.length - 1)) * innerW : innerW / 2)
  const y = (v: number) => PAD.top + innerH - ((v - min) / (max - min)) * innerH

  const ticks = Array.from({ length: 5 }, (_, i) => min + ((max - min) * i) / 4)
  const points = values.map((v, i) => `${x(i)},${y(v)}`).join(' ')

  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={chart.title || `${y_axis} by ${x_axis}`}>
      {ticks.map((t) => (
        <g key={t}>
          <line className="chart-grid" x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} />
          <text className="chart-tick" x={PAD.left - 8} y={y(t)} textAnchor="end" dominantBaseline="middle">
            {Number.isInteger(t) ? t : t.toFixed(1)}
          </text>
        </g>
      ))}
      {data.map((row, i) => (
        <text key={i} className="chart-tick" x={x(i)} y={H - PAD.bottom + 18} textAnchor="middle">
          {String(row[x_axis] ?? '')}
        </text>
      ))}
      <polyline className="chart-line" points={points} />
      {values.map((v, i) => (
        <circle key={i} className="chart-dot" cx={x(i)} cy={y(v)} r={3.5}>
          <title>{`${String(data[i][x_axis] ?? '')}: ${v}`}</title>
        </circle>
      ))}
      <text className="chart-label" x={PAD.left + innerW / 2} y={H - 8} textAnchor="middle">
        {x_axis}
      </text>
      <text
        className="chart-label"
        transform={`translate(14 ${PAD.top + innerH / 2}) rotate(-90)`}
        textAnchor="middle"
      >
        {y_axis}
      </text>
    </svg>
  )
}
