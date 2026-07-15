import { Stethoscope, ShieldCheck, GraduationCap, Leaf, Heart, BookOpen, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const QUALS = [
  {
    icon: <Stethoscope size={16} />,
    title: '管理栄養士',
    note: '国家試験受験資格。卒業後に国家試験を受験して取得。医療・行政・企業など幅広い分野で活躍。',
    detailedDesc: '厚生労働大臣免許の国家資格。病気の人や高齢者、健康な人まで、一人ひとりに合わせた栄養指導や給食管理を行い、人々の健康を支える食の専門家です。十文字では1年次からの体系的なサポートで高い合格実績を誇ります。医療機関、福祉施設、行政、学校、スポーツ現場など、多方面で活躍が期待されます。',
    special: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: '第一種衛生管理者',
    note: '従業員50名以上の事業場への配置が義務付けられた国家資格。卒業と同時に取得できます。',
    detailedDesc: '常時50人以上の労働者を使用する事業場で配置が義務付けられている国家資格。労働環境の衛生管理や健康障害の防止などを担当します。十文字学園女子大学では、所定の科目を修了することで卒業と同時にこの資格を取得できます。「管理栄養士とのダブルライセンス」は全国唯一の強みです。',
    special: true,
    badge: '全国唯一',
  },
  {
    icon: <Stethoscope size={16} />,
    title: '栄養士',
    note: '栄養士指定科目の履修で卒業と同時に取得。学校・医療機関・福祉施設の給食施設で活躍。',
    detailedDesc: '都道府県知事免許の公的資格。健康な人を対象とした給食管理や栄養指導を行い、健康的な食生活をサポートします。十文字では所定の科目を履修することで、卒業と同時に無試験で取得が可能です。病院や保育所、学校、企業の食堂などで数多く活躍しています。',
    special: false,
  },
  {
    icon: <GraduationCap size={16} />,
    title: '栄養教諭一種免許状',
    note: '所定の教職課程を修了した場合に取得。児童生徒の食習慣改善や食育を担う教育職。',
    detailedDesc: '学校現場において、児童・生徒に対して「食に関する指導（食育）」と「学校給食の管理」を一体的に行うための教員免許です。教職課程を修了することで取得でき、成長期の子どもたちに正しい食習慣を身につけさせる重要な役割を担います。',
    special: false,
  },
  {
    icon: <Leaf size={16} />,
    title: 'NR・サプリメントアドバイザー',
    note: '日本臨床栄養協会認定。サプリメント・健康食品の有効性・安全性についてアドバイスする資格。',
    detailedDesc: '消費者に対してサプリメントや健康食品に関する適切かつ的確なアドバイスを行う専門家です。日本臨床栄養協会が認定する資格で、近年高まる健康志向に応えるため、食品会社やドラッグストア、医療機関などでその専門知識が活かされています。',
    special: false,
  },
  {
    icon: <Heart size={16} />,
    title: '社会福祉主事（任用資格）',
    note: '福祉事務所や児童相談所での公務員職に必要な基礎資格。福祉分野への就職に活用できる。',
    detailedDesc: '福祉事務所や社会福祉施設などで相談・指導業務などを行う専門職員（公務員等）として働く際に必要となる任用資格です。大学で特定の科目を修了することで取得できます。食の観点から福祉分野にアプローチする際にも大いに役立つ資格です。',
    special: false,
  },
  {
    icon: <BookOpen size={16} />,
    title: '司書',
    note: '図書館法に基づく図書館の専門職資格。所定の科目を履修することで取得可能。',
    detailedDesc: '図書館法に基づく、図書館の専門的業務に従事する専門職資格です。所定の科目を履修することで取得でき、大学や公立図書館、企業の情報管理部門などで書籍や情報の管理・提供業務に携わることができます。',
    special: false,
  },
]

export default function Qualifications({ summary = false }) {
  const displayQuals = summary ? QUALS.slice(0, 4) : QUALS
  const TitleTag = summary ? 'h2' : 'h1'

  return (
    <section className="qualifications" id="qualifications">
      <span className="qualifications__bg" aria-hidden>資格</span>

      <div className="qualifications__inner container">
        <motion.div 
          className="qualifications__header"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">取得資格 / Qualifications</p>
          <TitleTag className="section-title">
            卒業後に活かせる<br />
            7つの資格・免許
          </TitleTag>
          <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--stone)', maxWidth: '560px', lineHeight: 1.9 }}>
            「管理栄養士＋第一種衛生管理者」のダブルライセンスが最大の強み。
            全国唯一の組み合わせが、就職の幅を大きく広げます。
          </p>
        </motion.div>

        {summary ? (
          <div className="qual-grid">
            {displayQuals.map((q, i) => (
              <motion.div
                key={i}
                className={`qual-card${q.special ? ' qual-card--special' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
              >
                {q.special && <p className="qual-badge">★ {q.badge}</p>}
                <div className="qual-card__icon">{q.icon}</div>
                <h3 className="qual-card__title">{q.title}</h3>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="qualifications__details" style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {QUALS.map((q, i) => (
              <motion.div
                key={i}
                className="qual-detail-section"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  borderLeft: `4px solid ${q.special ? 'var(--terracotta)' : 'var(--forest)'}`,
                  paddingLeft: '20px',
                  background: 'var(--cream)',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: q.special ? 'var(--terracotta-10, rgba(201,108,81,0.1))' : 'var(--forest-10, rgba(61,107,79,0.1))',
                    color: q.special ? 'var(--terracotta)' : 'var(--forest)',
                  }}>
                    {q.icon}
                  </span>
                  <h2 className="qual-detail-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: 'var(--ink)' }}>
                    {q.title}
                  </h2>
                  {q.badge && (
                    <span style={{
                      fontSize: '0.7rem',
                      background: 'var(--terracotta)',
                      color: 'var(--cream)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em',
                    }}>
                      {q.badge}
                    </span>
                  )}
                </div>
                <p style={{
                  marginTop: '12px',
                  fontSize: '0.92rem',
                  lineHeight: '1.8',
                  color: 'var(--stone-dark, #555)',
                  maxWidth: '800px',
                  marginRight: 'auto',
                }}>
                  {q.detailedDesc}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {summary && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link to="/qualifications" className="button button--outline">
              資格・免許について詳しく見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
