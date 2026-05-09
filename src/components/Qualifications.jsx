import { Stethoscope, ShieldCheck, GraduationCap, Leaf, Heart, BookOpen } from 'lucide-react'

const QUALS = [
  {
    icon: <Stethoscope size={16} />,
    title: '管理栄養士',
    note: '国家試験受験資格。卒業後に国家試験を受験して取得。医療・行政・企業など幅広い分野で活躍。',
    special: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: '第一種衛生管理者',
    note: '従業員50名以上の事業場への配置が義務付けられた国家資格。卒業と同時に取得できます。',
    special: true,
    badge: '全国唯一',
  },
  {
    icon: <Stethoscope size={16} />,
    title: '栄養士',
    note: '栄養士指定科目の履修で卒業と同時に取得。学校・医療機関・福祉施設の給食施設で活躍。',
    special: false,
  },
  {
    icon: <GraduationCap size={16} />,
    title: '栄養教諭一種免許状',
    note: '所定の教職課程を修了した場合に取得。児童生徒の食習慣改善や食育を担う教育職。',
    special: false,
  },
  {
    icon: <Leaf size={16} />,
    title: 'NR・サプリメントアドバイザー',
    note: '日本臨床栄養協会認定。サプリメント・健康食品の有効性・安全性についてアドバイスする資格。',
    special: false,
  },
  {
    icon: <Heart size={16} />,
    title: '社会福祉主事（任用資格）',
    note: '福祉事務所や児童相談所での公務員職に必要な基礎資格。福祉分野への就職に活用できる。',
    special: false,
  },
  {
    icon: <BookOpen size={16} />,
    title: '司書',
    note: '図書館法に基づく図書館の専門職資格。所定の科目を履修することで取得可能。',
    special: false,
  },
]

export default function Qualifications() {
  return (
    <section className="qualifications" id="qualifications">
      <span className="qualifications__bg" aria-hidden>資格</span>

      <div className="qualifications__inner container">
        <div className="qualifications__header" data-reveal>
          <p className="eyebrow">取得資格 / Qualifications</p>
          <h2 className="section-title">
            卒業後に活かせる<br />
            7つの資格・免許
          </h2>
          <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--stone)', maxWidth: '560px', lineHeight: 1.9 }}>
            「管理栄養士＋第一種衛生管理者」のダブルライセンスが最大の強み。
            全国唯一の組み合わせが、就職の幅を大きく広げます。
          </p>
        </div>

        <div className="qual-grid">
          {QUALS.map((q, i) => (
            <div
              key={i}
              className={`qual-card${q.special ? ' qual-card--special' : ''}`}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              {q.special && <p className="qual-badge">★ {q.badge}</p>}
              <div className="qual-card__icon">{q.icon}</div>
              <h3 className="qual-card__title">{q.title}</h3>
              <p className="qual-card__note">{q.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
