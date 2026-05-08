import { ArrowRight } from 'lucide-react'

const PATHS = [
  { name: '病院・クリニック',       role: '管理栄養士' },
  { name: '学校（小・中・高）',     role: '栄養教諭'   },
  { name: '保健所・行政機関',       role: '行政栄養士' },
  { name: '給食センター・施設',      role: '管理栄養士' },
  { name: '食品メーカー・企業',      role: '商品開発・栄養管理' },
  { name: 'ドラッグストア・薬局',   role: '管理栄養士' },
  { name: '福祉施設・介護施設',      role: '施設栄養士' },
]

export default function Career() {
  return (
    <section className="career" id="career">
      <span className="career__deco" aria-hidden>進路</span>

      <div className="container">
        <div className="career__layout">
          <div className="career__left" data-reveal>
            <p className="eyebrow">進路・就職 / Career</p>
            <div className="career__stat-block">
              <div className="career__rate">
                99<span className="career__rate-unit">%</span>
              </div>
              <p className="career__rate-label">就職率（2023年度）</p>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9 }}>
              卒業生は医療・教育・行政・企業など、
              幅広い分野で活躍しています。
              在学中から丁寧なキャリア支援を受けることができます。
            </p>
          </div>

          <div className="career__right" data-reveal data-reveal-delay="2">
            <div className="career__paths">
              {PATHS.map((p, i) => (
                <div key={i} className="career-path">
                  <span className="career-path__dot" />
                  <span className="career-path__name">{p.name}</span>
                  <span className="career-path__role">{p.role}</span>
                  <ArrowRight size={13} className="career-path__arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
