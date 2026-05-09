import { Award, Users, BookOpen } from 'lucide-react'

const FEATURES = [
  {
    num: '01',
    icon: <Award size={20} />,
    title: '全国唯一のダブルライセンス',
    body: '管理栄養士養成課程の中で「第一種衛生管理者」の国家資格を卒業と同時に取得できるのは、全国の大学で本学のみ。50名以上の事業場で配置が義務付けられており、企業の産業保健分野への就職に大きく有利です。',
  },
  {
    num: '02',
    icon: <Users size={20} />,
    title: '定員78名の少人数教育',
    body: '少人数だからこそできる、きめ細かな指導。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。就職率99.2%（2025年3月卒業生実績）はこの環境から生まれています。',
  },
  {
    num: '03',
    icon: <BookOpen size={20} />,
    title: '実践力を育む4年間のカリキュラム',
    body: '1年次の基礎から4年次の国試対策まで段階的に深める体系的なカリキュラム。給食経営管理実習・臨地実習・地域連携活動など、現場で役立つ実践力を養います。',
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
