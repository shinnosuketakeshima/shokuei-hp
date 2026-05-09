import { useEffect, useRef } from 'react'

const STATS = [
  {
    number: '99.2', unit: '%',
    label: '就職率',
    note: '(2025年3月卒業生実績)',
  },
  {
    number: '78',   unit: '名',
    label: '募集定員',
    note: '少人数教育を徹底',
  },
  {
    number: '8',    unit: '回',
    label: '4年次 国試模擬試験',
    note: '3年次にも夏・冬の2回実施',
  },
  {
    number: '全国',  unit: '唯一',
    label: '管理栄養士課程で',
    note: '第一種衛生管理者が取れる大学',
  },
]

export default function StatsBar() {
  const refs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    refs.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats">
      <div className="stats__grid">
        {STATS.map((s, i) => (
          <div key={i} className="stats__item" ref={el => refs.current[i] = el}>
            <div className="stats__number">
              {s.number}
              <span className="stats__unit">{s.unit}</span>
            </div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__note">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
