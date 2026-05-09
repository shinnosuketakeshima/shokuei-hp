import { ArrowRight } from 'lucide-react'

const PATHS = [
  { name: '病院・クリニック',          role: '管理栄養士',         examples: '自治医科大学附属病院、東京慈恵会医科大学附属病院 他' },
  { name: '公務員（保健所・行政）',    role: '行政栄養士',         examples: '東京都、埼玉県、桶川市、春日部市 他' },
  { name: '高齢者・福祉施設',          role: '施設管理栄養士',     examples: '愛の泉、永寿荘、高砂福祉会 他' },
  { name: '保育園・学校',              role: '栄養教諭・給食担当', examples: 'いちご保育園、清瀬上宮保育園 他' },
  { name: '給食サービス会社',          role: '管理栄養士・栄養士', examples: 'エームサービス、グリーンハウス、シダックス 他' },
  { name: '調剤薬局・ドラッグストア', role: '管理栄養士',         examples: 'サンドラッグ、スギ薬局、日本調剤 他' },
  { name: '食品メーカー・企業',        role: '商品開発・品質管理', examples: 'キユーピー醸造、セブンイレブン 他' },
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
              <p className="career__rate-label">就職率（2025年3月卒業生実績）</p>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9 }}>
              入学から卒業まで、教員が親身に就職相談に対応。
              病院・行政・企業など多彩な分野で毎年多くの卒業生が活躍しています。
            </p>
          </div>

          <div className="career__right" data-reveal data-reveal-delay="2">
            <div className="career__paths">
              {PATHS.map((p, i) => (
                <div key={i} className="career-path">
                  <span className="career-path__dot" />
                  <div className="career-path__info">
                    <span className="career-path__name">{p.name}</span>
                    <span className="career-path__examples">{p.examples}</span>
                  </div>
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
