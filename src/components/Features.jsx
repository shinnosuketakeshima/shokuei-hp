import { BookOpen, Award, Briefcase } from 'lucide-react'

const FEATURES = [
  {
    num: '01',
    icon: <BookOpen size={20} />,
    title: '実践的な食の専門教育',
    body: '栄養指導・給食管理・食品衛生・臨床栄養など、管理栄養士として必要な知識を豊富な実習を通じて体系的に学びます。',
  },
  {
    num: '02',
    icon: <Award size={20} />,
    title: '全国トップクラスの国試合格率',
    body: '合格率96%を支える充実したサポート体制。少人数チュートリアルから個別指導まで、確実な合格へと導きます。',
  },
  {
    num: '03',
    icon: <Briefcase size={20} />,
    title: '多彩な進路への確かな実績',
    body: '病院・学校・行政・企業など幅広い分野での就職実績。就職率99%を誇り、一人ひとりの夢に寄り添ったキャリア支援を行います。',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features__header" data-reveal>
          <p className="eyebrow">学科の特色 / Features</p>
          <h2 className="section-title">
            食物栄養学科が選ばれる<br />
            3つの理由
          </h2>
        </div>
      </div>

      <div className="features__grid">
        {FEATURES.map((f, i) => (
          <article
            key={i}
            className="feature-card"
            data-reveal
            data-reveal-delay={String(i + 1)}
          >
            <span className="feature-card__ghost">{f.num}</span>
            <div className="feature-card__icon">{f.icon}</div>
            <p className="feature-card__num">{f.num}</p>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__body">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
