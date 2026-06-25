import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, GraduationCap, Microscope, ChefHat, MapPin } from 'lucide-react'
import KoushaImage from '../university_kousha.jpg'
import TairyouImage from '../tairyou.png'
import KuwanohaImage from '../kuwanoha.jpg'
import KokushiImage from '../kokushi.png'

const PHOTOS = [
  {
    src: TairyouImage,
    alt: '食物栄養学科の大量調理実習。給食経営管理実習の様子。',
    caption: '大量調理実習',
  },
  {
    src: KuwanohaImage,
    alt: '地域連携活動。桑の葉あんぱんの試作品。',
    caption: '桑の葉あんぱんの試作',
  },
  {
    src: KokushiImage,
    alt: '管理栄養士国家試験の模擬試験。真剣に取り組む学生たち。',
    caption: '国家試験模擬試験',
  },
  {
    src: KoushaImage,
    alt: '十文字学園女子大学の緑豊かなキャンパス風景。',
    caption: '緑豊かなキャンパス、春',
  },
]

const CURRICULUM = [
  {
    year: 1,
    title: '1年生：基礎・発見',
    theme: '必要な基礎知識・技術を学ぶ',
    desc: '大学生活のスタート。管理栄養士の基礎となる化学や生物、調理の基本を徹底的に身につけます。',
    items: [
      { label: '前期', detail: '4月に入学式とオリエンテーション。調理学実習Iでは「おいしく、楽しく」基礎を学びます。唾液アミラーゼの実験など、初めての専門教育にワクワクする時期です。' },
      { label: '後期', detail: '食品中のうま味成分の測定など、より科学的な視点が増えていきます。データサイエンスの集中授業も始まり、管理栄養士としての役割を理解し始めます。' }
    ],
    icon: <BookOpen size={24} />
  },
  {
    year: 2,
    title: '2年生：統合・深化',
    theme: '実験・実習を通して知識と技術を統合',
    desc: '1年次の基礎をベースに、疾病と栄養の関わりを深く学びます。実験や実習がぐっと増え、専門性が高まります。',
    items: [
      { label: '前期', detail: 'こんにゃく、うどん、ジャムなどの手作り加工実習。アントシアニン色素のpH変化など、食品の不思議を科学で解き明かします。' },
      { label: '後期', detail: '栄養教育論実習がスタート。対象者に合わせた栄養指導の基礎を学びます。病気についての理解を深め、増粘剤を用いた飲料の粘度測定など、現場に近い実習も行います。' }
    ],
    icon: <Microscope size={24} />
  },
  {
    year: 3,
    title: '3年生：実践・飛躍',
    theme: '管理栄養士としての実践力を養う',
    desc: '4月のゼミ配属で研究が始動。より高度な技術と、現場で必要とされるマネジメント能力を磨きます。',
    items: [
      { label: '前期', detail: '150食の給食を実際に作り、運営する「給食経営管理実習」。計画から調理、衛生管理までマネジメントの全行程を体験します。' },
      { label: '後期', detail: '病院や福祉施設での臨地実習が本格化。上腕周囲長や皮下脂肪厚の測定による栄養アセスメントなど、学外での実践的な学びが中心となります。' }
    ],
    icon: <ChefHat size={24} />
  },
  {
    year: 4,
    title: '4年生：集大成・挑戦',
    theme: '卒業研究と国家試験合格を目指す',
    desc: '4年間の学びの集大成。自分自身の研究テーマを追求しながら、国家試験全員合格に向けてラストスパート。',
    items: [
      { label: '前期', detail: '卒業研究と並行して、4月から本格的な国試対策が始動。地域での食育活動や多職種連携論など、将来のキャリアを見据えた高度な選択科目も履修します。' },
      { label: '後期', detail: '10月の桐華祭（学園祭）で研究成果を発表。2月の国家試験本番に向けて、仲間と一緒に全力で集中学習に取り組みます。3月には感動の卒業式。' }
    ],
    icon: <GraduationCap size={24} />
  }
]

export default function CampusLife({ summary = false }) {
  const [activeYear, setActiveYear] = useState(0)
  const displayPhotos = summary ? PHOTOS.slice(0, 2) : PHOTOS
  const TitleTag = summary ? 'h2' : 'h1'

  return (
    <div className="campus-life-page">
      <section className="section" id="campus-life">
        <div className="container">
          <motion.div 
            className="section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TitleTag className="section__title">キャンパスライフ</TitleTag>
            <p className="section__subtitle">Campus Life &amp; Environment</p>
          </motion.div>

          <motion.p 
            className="campus-life__lead"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            「食」と「健康」のプロを目指す4年間。
            十文字学園女子大学 食物栄養学科での充実した毎日をご紹介します。
          </motion.p>

          {/* 4-Year Roadmap (Full view only) */}
          {!summary && (
            <div className="curriculum-roadmap" style={{ marginTop: '80px', marginBottom: '100px' }}>
              <div className="roadmap-nav" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {CURRICULUM.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveYear(i)}
                    className={`roadmap-tab ${activeYear === i ? 'active' : ''}`}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '30px',
                      border: '2px solid var(--forest)',
                      background: activeYear === i ? 'var(--forest)' : 'transparent',
                      color: activeYear === i ? 'white' : 'var(--forest)',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    {c.year}年生
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="roadmap-content"
                  style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                  }}
                >
                  <div className="roadmap-text">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--forest)', marginBottom: '16px' }}>
                      {CURRICULUM[activeYear].icon}
                      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{CURRICULUM[activeYear].theme}</span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{CURRICULUM[activeYear].title}</h3>
                    <p style={{ color: 'var(--stone)', lineHeight: 1.8, marginBottom: '24px' }}>{CURRICULUM[activeYear].desc}</p>
                    <div style={{ padding: '20px', background: 'var(--bg)', borderRadius: '12px', borderLeft: '4px solid var(--forest)' }}>
                      <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>主な専門科目:</p>
                      <p style={{ fontSize: '14px', color: 'var(--charcoal)' }}>
                        {activeYear === 0 && '食品学、公衆衛生学、人間栄養学概論、調理学実習I'}
                        {activeYear === 1 && '解剖生理学、食品加工学、病態生理学、栄養教育論'}
                        {activeYear === 2 && '臨床栄養学、公衆栄養学、給食経営管理、栄養教育論'}
                        {activeYear === 3 && '総合演習（国試対策）、多職種連携論、卒業研究'}
                      </p>
                    </div>
                  </div>
                  <div className="roadmap-details">
                    {CURRICULUM[activeYear].items.map((item, idx) => (
                      <div key={idx} style={{ marginBottom: '24px' }}>
                        <span style={{ display: 'inline-block', background: 'var(--terracotta)', color: 'white', padding: '2px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
                          {item.label}
                        </span>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--charcoal)' }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Photo Grid */}
          <div className="campus-photos">
            {displayPhotos.map((photo, i) => (
              <motion.figure 
                key={i} 
                className="campus-photo"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="campus-photo__img-wrap">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="campus-photo__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="campus-photo__caption">{photo.caption}</figcaption>
              </motion.figure>
            ))}
          </div>

          {!summary && (
            <div className="campus-life-extra" style={{ marginTop: '100px' }}>
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--forest)', marginBottom: '20px' }}>
                    <MapPin size={24} />
                    <h3 style={{ fontSize: '1.4rem' }}>新座キャンパスの環境</h3>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--stone)' }}>
                    埼玉県新座市の緑豊かな環境に位置するキャンパス。
                    池袋から急行で約20分と都心へのアクセスも良く、落ち着いた環境で学びに集中できます。
                    四季折々の自然を感じながら、学生たちは図書館や自習室、国試対策室で仲間と共に切磋琢磨しています。
                    <Link to="/living-alone" style={{ display: 'inline-block', marginTop: '12px', color: 'var(--forest)', fontWeight: 600 }}>
                      新座で一人暮らしする費用シミュレーター →
                    </Link>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ background: '#fef2f2', padding: '40px', borderRadius: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--terracotta)', marginBottom: '20px' }}>
                    <Users size={24} />
                    <h3 style={{ fontSize: '1.4rem' }}>少人数教育の絆</h3>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--stone)' }}>
                    1学年78名の少人数教育。教員と学生の距離が近く、先生に名前で呼んでもらえる温かい雰囲気があります。
                    空きコマに図書館で一緒に課題に取り組んだり、手作りのお弁当を見せ合ったり。
                    同じ目標を持つ仲間との絆が、大変な実習や国試勉強を乗り越える力になります。
                  </p>
                </motion.div>
              </div>
            </div>
          )}

          {summary && (
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <Link to="/campus-life" className="button button--outline">
                キャンパスライフをもっと見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .roadmap-tab {
          font-family: inherit;
        }
        .roadmap-tab:hover {
          background: rgba(46, 81, 62, 0.1);
        }
        .roadmap-tab.active:hover {
          background: var(--forest);
        }
        @media (max-width: 768px) {
          .roadmap-content {
            padding: 24px !important;
            gap: 24px !important;
          }
          .curriculum-roadmap {
            margin-top: 40px !important;
            margin-bottom: 60px !important;
          }
        }
      `}} />
    </div>
  )
}
