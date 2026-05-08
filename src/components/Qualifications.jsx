import { Stethoscope, ShieldCheck, GraduationCap, Leaf } from 'lucide-react'

const QUALS = [
  {
    icon: <Stethoscope size={16} />,
    title: '管理栄養士',
    note: '国家試験受験資格。卒業と同時に取得。病院・行政・企業など幅広いフィールドで活躍。',
    special: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: '第一種衛生管理者',
    note: '50名以上の事業場への配置が義務付けられた国家資格。管理栄養士養成課程では全国唯一の取得校。',
    special: true,
    badge: '全国唯一',
  },
  {
    icon: <GraduationCap size={16} />,
    title: '栄養教諭一種免許状',
    note: '所定の教職課程を修了した場合に取得。学校現場で食育を担う専門職。',
    special: false,
  },
  {
    icon: <Leaf size={16} />,
    title: 'NR・サプリメントアドバイザー',
    note: '日本臨床栄養協会認定資格。サプリメントや栄養補助食品の専門知識を証明。',
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
            多彩な資格・免許
          </h2>
          <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--stone)', maxWidth: '560px', lineHeight: 1.9 }}>
            「管理栄養士＋αの資格」が本学科最大の強み。特に第一種衛生管理者との
            ダブルライセンスは全国唯一であり、就職の幅を大きく広げます。
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
