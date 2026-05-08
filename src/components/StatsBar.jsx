import { useEffect, useRef } from 'react'

const STATS = [
  { number: '96', unit: '%',  label: '管理栄養士国家試験合格率', note: '2024年度実績' },
  { number: '99', unit: '%',  label: '就職率',                  note: '2023年度実績' },
  { number: '約400', unit: '名', label: '在学生数',             note: '4学年合計'   },
  { number: '10',  unit: '+', label: '取得可能資格数',          note: '種類以上'    },
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
