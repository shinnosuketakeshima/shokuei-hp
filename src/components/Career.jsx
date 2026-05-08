import { ArrowRight } from 'lucide-react'

const PATHS = [
  { name: '病院・クリニック',      role: '管理栄養士' },
  { name: '高齢者福祉施設',        role: '施設管理栄養士' },
  { name: '保育園・子育て施設',    role: '給食担当・食育' },
  { name: '給食サービス会社',      role: '管理栄養士・栄養士' },
  { name: '食品メーカー',          role: '商品開発・品質管理' },
  { name: '調剤薬局・ドラッグストア', role: '管理栄養士' },
  { name: '地方公務員（保健所等）', role: '行政栄養士' },
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
                99.2<span className="career__rate-unit">%</span>
              </div>
              <p className="career__rate-label">就職率（2025年3月卒業生・2025年4月現在）</p>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9 }}>
              入学から卒業まで、教員が親身に就職相談に対応。
              医療・福祉・食品・行政など多彩な分野で
              卒業生が活躍しています。
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
