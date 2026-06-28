import { ArrowLeft, Sparkles, ChevronRight, Award, FlaskConical, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const SUB_MAJORS = [
  {
    tag: '栄養 × 食と美と健康',
    title: '「美」を、科学で語れる人に。',
    body: '「食べてきれいになる」を、なんとなくではなく根拠をもって伝えられる管理栄養士へ。',
    subjects: ['美しさを育む食と栄養', '食と幸福学'],
    accent: 'var(--forest)',
    icon: Award,
  },
  {
    tag: '栄養 × DX',
    title: '栄養の知識に、データで動く力を。',
    body: '一人ひとりに合わせた食の提案を、データを使って組み立てられる次世代の管理栄養士へ。',
    subjects: ['データで読み解く地域課題', '未来を創るDX入門'],
    accent: 'var(--terracotta)',
    icon: FlaskConical,
  },
  {
    tag: '栄養 × 発信',
    title: '正しい食の情報を、"届く"形に。',
    body: 'あふれる食の情報の中で、本当に正しいことをちゃんと伝えられる発信力を身につける。',
    subjects: ['デジタル発信力：SNS・動画編集実践', '※Canva・CapCut実習あり'],
    accent: 'var(--stone)',
    icon: PenTool,
  },
];

export default function SubMajorPage() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </Link>
          <p className="lab-page__eyebrow">2027年度スタート｜全学の副専攻制度</p>
          <h1 className="lab-page__title">
            管理栄養士<span style={{ color: 'var(--terracotta)' }}>＋</span>もうひとつ。
          </h1>
          <p className="lab-page__subtitle">
            国家資格をめざす専門の学びに、全学の「副専攻」をかけ合わせる。資格を取るだけで終わらない、あなただけのキャリアをデザインできる4年間です。
          </p>
        </motion.div>

        <div className="lab-page__content">

          {/* 第一期生フック */}
          <motion.section
            className="lab-story-feature lab-story-feature--forest"
            {...fadeUp(0)}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> 対象年度
            </span>
            <p className="lab-story-feature__lead" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: 'var(--ink)' }}>
              この新しい学び方を、最初に選べるのは——2027年4月に入学するあなたたちです。
            </p>
          </motion.section>

          {/* 本文セクション：栄養×副専攻の3パターン */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">栄養×副専攻の3つの掛け合わせパターン</h2>
            <p className="lab-section__body">
              食物栄養学科の専門的な学びに、自分の興味に合わせた副専攻プログラムを掛け合わせることで、さらに活躍の場が広がります。
            </p>
            <div className="sn-evidence-cards">
              {SUB_MAJORS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} className="sn-evidence-card" {...fadeUp(0.08 * i)}>
                    <span
                      className="sn-evidence-card__dept"
                      style={{
                        background: `color-mix(in srgb, ${card.accent} 12%, transparent)`,
                        color: card.accent === 'var(--stone)' ? 'var(--charcoal)' : card.accent,
                      }}
                    >
                      {card.tag}
                    </span>
                    <div
                      className="sn-evidence-card__icon"
                      style={{
                        background: `color-mix(in srgb, ${card.accent} 12%, transparent)`,
                        color: card.accent === 'var(--stone)' ? 'var(--charcoal)' : card.accent,
                      }}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <h3 className="sn-evidence-card__title">{card.title}</h3>
                    <p className="sn-evidence-card__body">{card.body}</p>

                    <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                      <p className="sn-course-card__topics-label" style={{ margin: '0 0 8px 0' }}>例示科目</p>
                      <div className="sn-course-card__topics">
                        {card.subjects.map((sub, j) => {
                          const isNote = sub.startsWith('※');
                          return (
                            <span
                              key={j}
                              style={isNote ? {
                                fontSize: '0.7rem',
                                color: 'var(--stone)',
                                width: '100%',
                                padding: '2px 0',
                                background: 'transparent',
                                borderRadius: 0,
                              } : {
                                background: `color-mix(in srgb, ${card.accent} 8%, transparent)`,
                                color: card.accent === 'var(--stone)' ? 'var(--charcoal)' : card.accent,
                                border: `1px solid color-mix(in srgb, ${card.accent} 15%, transparent)`,
                              }}
                            >
                              {sub}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--stone)', marginTop: '1.5rem', textAlign: 'left' }}>
              ※副専攻には他にも複数のプログラムがあります。ここで紹介したのは、食物栄養学科の学びと相性のよい一例です。
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <div className="sn-cta-banner">
              <p className="sn-cta-banner__eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                十文字学園女子大学
              </p>
              <h2 className="sn-cta-banner__title">
                管理栄養士の資格に加え、<br />
                あなただけのもうひとつの武器を。
              </h2>
              <div className="sn-cta-banner__buttons">
                <a href="#" className="sn-cta-btn sn-cta-btn--primary">
                  オープンキャンパスで相談する
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
                <Link to="/kotosupport" className="sn-cta-btn sn-cta-btn--secondary">
                  ことサポ for 食栄のページを見る
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
