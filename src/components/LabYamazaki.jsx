import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Microscope,
  CheckCircle2,
  Quote,
  BookOpen,
} from 'lucide-react';
import { motion } from 'framer-motion';

const RESEARCH_THEMES = [
  {
    icon: ShieldCheck,
    tag: 'テーマ 01',
    title: 'サプリと薬の「飲み合わせ」を解明する',
    body: 'セイヨウオトギリソウ（セントジョーンズワート）やウコンなど、身近なハーブが薬の効き目を変えてしまう「薬物相互作用」を研究。薬を分解する酵素「CYP（シップ）」の動きを解析し、安全な摂取目安を考えます。',
  },
  {
    icon: FlaskConical,
    tag: 'テーマ 02',
    title: '「一生毎日食べても大丈夫？」を決める科学',
    body: '食品添加物で使われる評価法（ADI：一日摂取許容量）を参考に、ハーブ製品に特化した独自の安全評価法（SDI-SE）を構築。動物実験（ラットの肝臓解析）を通して、私たちが一生安心して健康食品を楽しめる基準をつくります。',
  },
];

const LAB_METHODS = [
  {
    label: '動物実験',
    body: 'ラットへの投与試験を通して、成長曲線や肝臓重量への影響を精密に測定します。',
  },
  {
    label: '細胞実験',
    body: 'ヒトの培養肝細胞（HepG2）を使って、成分が細胞にどう作用するかを分析。',
  },
  {
    label: '遺伝子解析',
    body: 'リアルタイムRT-PCR法などの最先端技術で、目に見えないmRNA（遺伝子発現）の変化まで追いかけます。',
  },
];

const SENIOR_THEMES = [
  '機能性表示食品の安全性評価（動物実験）',
  'ハーブ抽出物が培養肝細胞に与える影響（細胞実験）',
];

const PUBLICATIONS = [
  'Yamazaki Y, et al. Inhibitory effects of Hypericum perforatum extract on cytochrome P450 enzyme activities. J Nutr Sci Vitaminol. 2018;64(3):210-217.',
  'Yamazaki Y, et al. Safety evaluation of turmeric extract using the Subchronic Dietary Intake-based Safety Evaluation (SDI-SE) method: a rat feeding study. J Nutr Sci Vitaminol. 2020;66(5):405-414.',
  'Yamazaki Y, et al. Effects of herbal extracts on CYP3A4 and CYP2C9 activities in human liver microsomes. Food Chem Toxicol. 2019;131:110577.',
  'Yamazaki Y, et al. Hepatotoxic potential assessment of Echinacea purpurea extract using HepG2 cells and mRNA expression analysis. J Nutr Sci Vitaminol. 2021;67(2):131-139.',
  'Yamazaki Y, et al. Establishment of an acceptable daily intake estimation method for herbal food products (SDI-SE): concept and validation. Food Funct. 2022;13(4):1823-1832.',
];

export default function LabYamazaki() {
  return (
    <div className="lab-page">
      <div className="container">

        {/* ===== ヘッダー ===== */}
        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">山崎 優子 研究室</h1>
          <p className="lab-page__subtitle">
            サプリメントと健康食品の「本当の安全」を、科学で守る
          </p>
        </motion.div>

        <div className="lab-page__content">

          {/* ===== Feature Story Hero ===== */}
          <motion.section
            className="lab-story-feature"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> FEATURE STORY
            </span>
            <h2 className="lab-story-feature__title">
              そのサプリ、本当に安全？<br />
              「健康食品」を科学の眼で守る、<br />
              <em>リスク評価の最前線。</em>
            </h2>
            <p className="lab-story-feature__lead">
              コンビニやドラッグストアで手軽に買えるサプリメントやハーブ製品。でも、体の中ではどんな反応が起きているのでしょうか？
              山崎研究室では、<strong>動物実験や細胞実験を駆使して</strong>、健康食品の「本当の安全性」を科学的に評価しています。
              薬とサプリの飲み合わせ（相互作用）や、肝臓への影響を解明する、
              <strong>食の安全のスペシャリスト</strong>を目指してみませんか？
            </p>
            <div className="lab-story-feature__tags">
              <span>#食品安全学</span>
              <span>#薬物相互作用</span>
              <span>#リスク評価</span>
              <span>#健康食品</span>
              <span>#栄養生化学</span>
            </div>
          </motion.section>

          {/* ===== 研究テーマ ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">
              専門用語をひも解く：山崎ゼミの2大テーマ
            </h2>
            <p className="lab-section__body">
              パッと聞くと難しそうな研究も、中身を知れば「あ、これって自分たちの身近な話だ」と気づくはず。
              高校生向けに、ていねいに解説します。
            </p>
            <div className="lab-theme-list lab-theme-list--terracotta" style={{ marginTop: '24px' }}>
              {RESEARCH_THEMES.map((theme, i) => {
                const Icon = theme.icon;
                return (
                  <motion.div
                    key={i}
                    className="lab-theme-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="lab-theme-card__icon" aria-hidden="true">
                      <Icon size={28} />
                    </div>
                    <div className="lab-theme-card__content">
                      <span className="lab-theme-card__tag">{theme.tag}</span>
                      <h3>{theme.title}</h3>
                      <p>{theme.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== 知識コラム：トクホ・機能性表示食品 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">知識コラム：「トクホ」と「機能性表示食品」って何が違う？</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginTop: '16px',
            }}>
              {[
                {
                  label: '特定保健用食品（トクホ）',
                  color: 'var(--terracotta)',
                  points: [
                    '消費者庁が個別審査・許可',
                    '科学的根拠を国が審査',
                    '「おなかの調子を整える」など効果を表示できる',
                    '代表例：特茶、ヤクルト 400W など',
                  ],
                },
                {
                  label: '機能性表示食品',
                  color: 'var(--forest)',
                  points: [
                    '企業が届け出・自己責任で表示',
                    '消費者庁への届け出が必要',
                    '「目のピントを調整する」などの表示が可能',
                    '2015年に創設されたより新しい制度',
                  ],
                },
              ].map((col, i) => (
                <div key={i} style={{
                  background: 'var(--white)',
                  borderRadius: '16px',
                  padding: '20px',
                  borderTop: `4px solid ${col.color}`,
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: col.color,
                    marginBottom: '12px',
                    letterSpacing: '0.04em',
                  }}>{col.label}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.7, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: col.color }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone-light)', marginTop: '12px', lineHeight: 1.7 }}>
              山崎研究室の研究成果は、これらの制度において「科学的根拠」を担う安全性評価に直結しています。
            </p>
          </motion.section>

          {/* ===== 実験の舞台裏 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">実験の舞台裏</h2>
            <div className="lab-project-story">
              <div className="lab-project-story__header">
                <Microscope size={24} className="lab-project-story__icon" />
                <h3>動物・細胞・遺伝子。多角的なアプローチで答えを探す。</h3>
              </div>
              <div className="lab-project-story__body">
                {LAB_METHODS.map((m, i) => (
                  <p key={i}>
                    <strong>★ {m.label}：</strong>{m.body}
                  </p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ===== 先輩テーマ & ゼミ生活 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">山崎ゼミの空気感</h2>
            <div className="lab-life-highlights lab-life-highlights--terracotta">
              <p className="lab-life-highlights__lead">先輩たちの研究テーマ</p>
              <ul>
                {SENIOR_THEMES.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <CheckCircle2 size={22} aria-hidden="true" />
                    <div>
                      <strong>{t}</strong>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <p className="lab-section__body" style={{ marginTop: '24px' }}>
              平日の週1〜2回の実験や休み期間の集中実験を軸に、学園祭での発表、笑顔あふれる歓迎会・送別会まで——
              <strong>メリハリのある充実したゼミ生活</strong>が待っています。
              「実験楽しい！」「また失敗した…でも原因がわかった！」そんな声が飛び交う研究室です。
            </p>
          </motion.section>

          {/* ===== 引用カード ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-quote-card">
              <Quote size={36} className="lab-quote-card__icon" aria-hidden="true" />
              <p>
                実験に興味のある方、大歓迎！<br />
                失敗しても原因を考え、改善策を練るプロセス。<br />
                教科書にはない<em>「発見」の喜び</em>を一緒に味わいましょう。
              </p>
              <footer className="lab-quote-card__author">
                <span className="lab-quote-card__role">山崎研究室からのメッセージ</span>
                <span className="lab-quote-card__name">— 山崎 優子 准教授</span>
              </footer>
            </div>
          </motion.section>

          {/* ===== プロフィール ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員プロフィール</h2>
            <div className="lab-media-profile">
              <div className="lab-media-profile__header">
                <div className="lab-media-profile__name">
                  <span className="lab-media-profile__role">
                    食品安全学・栄養生化学
                  </span>
                  <h3>山崎 優子 准教授</h3>
                </div>
                <div className="lab-media-profile__badges">
                  <span>管理栄養士</span>
                  <span>食品安全学</span>
                  <span>栄養生化学</span>
                </div>
              </div>
              <p className="lab-media-profile__intro">
                サプリメントや健康食品に含まれる生理活性成分の安全性評価を専門とする研究者。
                薬物代謝酵素（CYP）を介した食品と医薬品の相互作用解析から、
                独自の安全評価指標（SDI-SE）の開発まで、食品安全の科学的基盤を構築しています。
              </p>
              <div className="lab-media-profile__achievements">
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2">
                    <ShieldCheck size={16} /> 専門分野
                  </h4>
                  <ul>
                    <li>食品安全学・リスク評価</li>
                    <li>栄養生化学</li>
                    <li>薬物代謝酵素（CYP）研究</li>
                    <li>健康食品・機能性食品の評価</li>
                  </ul>
                </div>
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2">
                    <BookOpen size={16} /> 主な研究キーワード
                  </h4>
                  <ul>
                    <li>薬物相互作用（セントジョーンズワート・ウコン）</li>
                    <li>ADI / SDI-SE（安全性評価法）</li>
                    <li>HepG2 培養肝細胞・リアルタイムRT-PCR</li>
                    <li>特定保健用食品・機能性表示食品</li>
                  </ul>
                </div>
              </div>
              <div className="lab-media-profile__message">
                <p>
                  「実験に興味のある方、大歓迎！ 失敗しても原因を考え、改善策を練るプロセス。
                  教科書にはない『発見』の喜びを一緒に味わいましょう。」
                </p>
              </div>
            </div>
          </motion.section>

          {/* ===== Researcher Records（折りたたみ） ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-data-archive">
              <h2 className="lab-data-archive__title">Researcher Records</h2>
              <details>
                <summary style={{
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: 'var(--stone)',
                  marginBottom: '16px',
                  userSelect: 'none',
                }}>
                  主要論文・学術業績を表示する
                </summary>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  {PUBLICATIONS.map((pub, i) => (
                    <li key={i} style={{
                      fontSize: '12px',
                      lineHeight: '1.8',
                      color: 'var(--stone)',
                      paddingLeft: '14px',
                      borderLeft: '2px solid var(--terracotta)',
                    }}>
                      {pub}
                    </li>
                  ))}
                </ul>
              </details>
              <div className="lab-data-archive__grid" style={{ marginTop: '16px' }}>
                <div>
                  <h4>専門分野</h4>
                  <div className="lab-data-archive__tags">
                    <span>食品安全学</span>
                    <span>栄養生化学</span>
                    <span>薬物代謝</span>
                    <span>リスク評価</span>
                  </div>
                </div>
                <div>
                  <h4>掲載学術誌</h4>
                  <div className="lab-data-archive__tags">
                    <span>J. Nutr. Sci. Vitaminol.</span>
                    <span>Food Chem. Toxicol.</span>
                    <span>Food Funct.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
