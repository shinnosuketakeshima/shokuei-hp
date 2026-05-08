import { GraduationCap, ShieldCheck, Stethoscope, Apple, BookOpen, Star } from 'lucide-react'

const QUALS = [
  {
    icon: <Stethoscope size={16} />,
    title: '管理栄養士',
    note: '国家試験受験資格（卒業と同時に取得）',
    special: false,
  },
  {
    icon: <Apple size={16} />,
    title: '栄養士',
    note: '卒業と同時に資格取得',
    special: false,
  },
  {
    icon: <GraduationCap size={16} />,
    title: '栄養教諭（一種）',
    note: '所定の教職課程を修了した場合',
    special: false,
  },
  {
    icon: <GraduationCap size={16} />,
    title: '栄養教諭（二種）',
    note: '短期大学部の学生も取得可能',
    special: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: '食品衛生管理者',
    note: '卒業と同時に資格取得',
    special: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: '食品衛生監視員',
    note: '卒業と同時に資格取得',
    special: false,
  },
  {
    icon: <Star size={16} />,
    title: '第一種衛生管理者',
    note: '管理栄養士養成課程として全国唯一',
    special: true,
    badge: '全国唯一',
  },
  {
    icon: <BookOpen size={16} />,
    title: '調理師',
    note: '特例措置により申請で取得可能',
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
            多彩な資格
          </h2>
        </div>

        <div className="qual-grid">
          {QUALS.map((q, i) => (
            <div
              key={i}
              className={`qual-card${q.special ? ' qual-card--special' : ''}`}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              {q.special && (
                <p className="qual-badge">★ {q.badge}</p>
              )}
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
