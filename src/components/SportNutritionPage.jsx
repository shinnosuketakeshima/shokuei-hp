import {
  ArrowLeft,
  Trophy,
  Award,
  Dumbbell,
  Heart,
  Zap,
  Building2,
  FlaskConical,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const EVIDENCE_CARDS = [
  {
    num: '01',
    icon: Trophy,
    title: '国内最高峰のスポーツ栄養専門教員陣',
    body: '日本スポーツ栄養学会理事・村田浩子教授、公認スポーツ栄養士・徳野裕子准教授ら、国内トップクラスのスポーツ栄養専門家が同じ大学の健康栄養学科に在籍。副指導教員制度を活用することで、健康栄養学科が主催するゼミを通じ、食物栄養学科の学生もスポーツの現場に立ち、スポーツ栄養の実践を体験することができます。',
    accent: 'var(--forest)',
  },
  {
    num: '02',
    icon: Award,
    title: '公認スポーツ栄養士を目指す確かな土台',
    body: '公認スポーツ栄養士の受験には「管理栄養士免許」の所持が必須で、取得後も所定の研修・実務経験が求められる本格的な資格です。食物栄養学科では充実した国家試験対策サポート体制のもと、管理栄養士国家試験に向けた確かな土台を築きながら、並行してスポーツ栄養の専門知識を深めることができます。',
    accent: 'var(--terracotta)',
  },
  {
    num: '03',
    icon: Dumbbell,
    title: '強豪サッカー部が同じキャンパスにいる',
    body: '十文字学園には全国屈指の強豪女子サッカー部が在籍し、同じキャンパス内のフィールドで日々練習しています。カレッジスポーツセンター（CSC）を通じ、実際の選手を対象にした栄養サポートプロジェクトに在学中から参加可能。本物のアスリートとともに、スポーツ栄養の理論を現場で実践できます。',
    accent: 'var(--forest)',
  },
];

const FACULTY = [
  {
    name: '村田 浩子 教授',
    dept: '健康栄養学科',
    degree: '博士（スポーツ科学）早稲田大学大学院',
    fields: ['健康スポーツ科学', 'スポーツ栄養学', '環境生理学', '時間栄養学'],
    badges: ['日本スポーツ栄養学会 理事', '大学院 研究指導担当'],
    message:
      '「時間栄養学」をアスリート現場に導入し、持続血糖測定器（CGM）を用いた高強度運動時の低血糖防止策など最先端の栄養アセスメントを研究。本学大学院（食物栄養学専攻修士課程）の研究指導も担当しており、学部から大学院まで一貫した指導が受けられます。',
  },
  {
    name: '徳野 裕子 准教授',
    dept: '健康栄養学科',
    degree: '博士（学術）日本女子大学',
    fields: ['公認スポーツ栄養士', '管理栄養士', '健康科学', '応用微生物学'],
    badges: ['公認スポーツ栄養士', '日本スポーツ栄養学会 会員'],
    message:
      '現役の「公認スポーツ栄養士」として実際の栄養サポート活動を展開する実践家。講義・実習を通じて、学生への公認スポーツ栄養士としてのキャリアパス提示も積極的に行っています。',
  },
];

const PATH_STEPS = [
  {
    label: '食物栄養学科に入学',
    note: '管理栄養士養成課程でメディカルな基礎を固める',
    color: 'var(--forest)',
  },
  {
    label: '学科内のスポーツ関連科目を履修',
    note: 'スポーツ栄養学・運動生理学・スポーツコーチング論を選択科目として並行履修（単位は卒業要件に算入）',
    color: 'var(--forest)',
  },
  {
    label: '管理栄養士国家試験受験資格を取得',
    note: '充実した国家試験対策サポート体制で、確実に合格を目指す',
    color: 'var(--terracotta)',
  },
  {
    label: '公認スポーツ栄養士 受験・取得',
    note: '管理栄養士免許が受験必須条件。所定の研修・実務経験を経て受験へ',
    color: 'var(--terracotta)',
  },
  {
    label: '大学院でさらに専門性を深める（任意）',
    note: '本学大学院 食物栄養学専攻修士課程（村田浩子教授指導）への内部進学ルートも',
    color: 'var(--stone)',
    optional: true,
  },
];

const COURSES = [
  {
    accent: 'forest',
    badge: '食物栄養関連科目（選択）',
    name: 'スポーツ栄養学',
    prof: '石津 達野 先生',
    meta: ['3年次・後期', '2単位', '講義'],
    overview: '基礎的な栄養学を土台に、スポーツにおける身体づくり・コンディショニング・競技パフォーマンス向上のための科学的根拠に基づいた栄養学的知識を習得。管理栄養士の視点から選手の食生活の実践方法までを学ぶ。',
    topics: [
      'エネルギーニーズと身体組成評価',
      'たんぱく質・糖質・脂質摂取',
      '骨の健康と貧血予防',
      'ビタミンとコンディショニング',
      '水分補給',
      '増量・減量のウエイトコントロール',
      'サプリメント摂取の考え方',
      '試合前の食事調整',
      'ジュニア選手の栄養',
      '日常の実践的食事管理',
    ],
  },
  {
    accent: 'terracotta',
    badge: '専門基礎領域（選択）',
    name: '運動生理学',
    prof: '長浜 尚史 先生',
    meta: ['3年次・前期', '2単位', '講義＋実技・実験'],
    overview: '運動が身体に及ぼす影響を生理学の観点から学ぶ。筋・神経・循環・呼吸・代謝の各系統が運動によってどう変化するかを理解し、実技・実験を通じて生体応答を実際に確認する。',
    topics: [
      '筋の構造とATP産生3ルート',
      '筋線維の種類と筋力',
      '運動と循環・呼吸',
      '最大酸素摂取量・無酸素性作業閾値',
      '呼吸循環応答【実技・実験】',
      '運動とホルモン・代謝調節',
      '筋疲労のメカニズム',
      '体温調節と熱中症',
      '運動と栄養・スポーツ選手の食事',
      '運動処方の実際',
    ],
  },
];

const CAREER_CARDS = [
  {
    icon: Heart,
    field: '医療機関・病院',
    examples: 'IMSグループ、埼玉医科大学病院、東京慈恵会医科大学附属病院 等',
    synergy:
      'スポーツ整形外科・リハビリ科での「メディカルスポーツ管理栄養士」として、術後復帰やアスリートの機能回復を医学と栄養の両面からサポート。',
    color: 'var(--terracotta)',
  },
  {
    icon: Zap,
    field: 'スポーツ・フィットネス産業',
    examples: 'アシックスジャパン、コナミスポーツ、東急スポーツオアシス、ルネサンス 等',
    synergy:
      '生化学・栄養評価に基づいた個別カウンセリングができる高付加価値人材として、スポーツ・健康産業の第一線で活躍。',
    color: 'var(--forest)',
  },
  {
    icon: Building2,
    field: '行政・教育現場',
    examples: '東京都・埼玉県行政栄養士、学校栄養教諭（さいたま市・清瀬市 等）',
    synergy:
      '運動指導と食事指導を融合した健康増進政策を推進。フレイル・ロコモ予防など地域住民の一次予防に貢献できる専門家へ。',
    color: 'var(--forest)',
  },
  {
    icon: FlaskConical,
    field: '食品・ヘルスケア開発',
    examples: 'キユーピー醸造、グルメデリカ、プライムデリカ、紀文食品 等',
    synergy:
      'スポーツパフォーマンス向上・疲労回復を目的とした機能性食品・栄養補助食品の企画開発をエビデンスに基づき主導。',
    color: 'var(--terracotta)',
  },
];

export default function SportNutritionPage() {
  return (
    <div className="lab-page">
      <div className="container">

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
          <p className="lab-page__eyebrow">十文字学園女子大学</p>
          <h1 className="lab-page__title">スポーツ栄養士を<br />目指すなら、<br />十文字学園へ。</h1>
          <p className="lab-page__subtitle">
            強豪サッカー部が同じキャンパスで活動中。管理栄養士の確かな知識を、本物のアスリートとともに現場で活かす。
          </p>
        </motion.div>

        <div className="lab-page__content">

          {/* ===== 誤解を解く ===== */}
          <motion.section
            className="lab-story-feature lab-story-feature--forest"
            {...fadeUp(0)}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> よくある誤解
            </span>
            <h2 className="lab-story-feature__title">
              「食物栄養学科では<br />
              <em>スポーツ栄養は学べない</em>」<br />
              ——それは誤解です。
            </h2>
            <p className="lab-story-feature__lead">
              「管理栄養士養成課程は病院や臨床中心で、スポーツ系は学べない」——そう思っていませんか？
              十文字学園女子大学では、その常識は当てはまりません。<br /><br />
              食物栄養学科には、学科内の科目として
              <strong>「スポーツ栄養学（石津達野先生）」「運動生理学（長浜尚史先生）」「スポーツコーチング論」</strong>
              が設置されています。管理栄養士を目指しながら、スポーツ栄養の専門知識を学科の中で身につけられるのです。<br /><br />
              さらに<strong>副指導教員制度</strong>を活用することで、
              健康栄養学科が主催するゼミを通じてスポーツの現場に立ち、
              実際のアスリートを対象にしたスポーツ栄養の実践を体験することもできます。
              日本スポーツ栄養学会理事・村田浩子教授、公認スポーツ栄養士・徳野裕子准教授ら
              国内最高峰の専門家のゼミに、食物栄養学科の学生が踏み込める環境が整っています。<br /><br />
              充実した国家試験対策サポートに裏打ちされたメディカルな学びをベースに、
              ハイレベルなスポーツ栄養の専門性を積み上げる。
              そんな学び方が、ここでは現実です。<br /><br />
              そして同じキャンパスには<strong>全国屈指の強豪女子サッカーチーム</strong>が活動しており、
              そのフィールドを舞台にした本格的な栄養サポートの実践が在学中から可能です。
              教室で学んだ理論を、すぐ隣の現場で試せる——これが十文字学園のスポーツ栄養教育の核心です。
            </p>
            <div className="lab-story-feature__tags">
              <span>#公認スポーツ栄養士</span>
              <span>#管理栄養士</span>
              <span>#スポーツ栄養学</span>
              <span>#副指導教員制度</span>
              <span>#アスリートサポート</span>
              <span>#カレッジスポーツセンター</span>
            </div>
          </motion.section>

          {/* ===== 3つのエビデンス ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">十文字学園でスポーツ栄養を学ぶ3つの根拠</h2>
            <p className="lab-section__body">
              制度・教員・実践の3つの柱が、十文字学園のスポーツ栄養教育を裏づけています。
            </p>
            <div className="sn-evidence-cards">
              {EVIDENCE_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} className="sn-evidence-card" {...fadeUp(0.08 * i)}>
                    <div className="sn-evidence-card__num" style={{ color: card.accent }}>
                      {card.num}
                    </div>
                    <div
                      className="sn-evidence-card__icon"
                      style={{ background: `color-mix(in srgb, ${card.accent} 12%, transparent)`, color: card.accent }}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <h3 className="sn-evidence-card__title">{card.title}</h3>
                    <p className="sn-evidence-card__body">{card.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== 学科内スポーツ科目 ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">食物栄養学科で学ぶスポーツ関連科目</h2>
            <p className="lab-section__body">
              以下の2科目は食物栄養学科の選択科目として設置されており、
              管理栄養士課程の学びと並行して3年次に履修できます。
            </p>
            <div className="sn-courses-grid">
              {COURSES.map((c, i) => (
                <motion.div key={i} className={`sn-course-card sn-course-card--${c.accent}`} {...fadeUp(0.08 * i)}>
                  <div className="sn-course-card__meta">
                    {c.meta.map((m, j) => <span key={j}>{m}</span>)}
                  </div>
                  <span className="sn-course-card__badge">{c.badge}</span>
                  <h3 className="sn-course-card__name">{c.name}</h3>
                  <p className="sn-course-card__prof">{c.prof}</p>
                  <p className="sn-course-card__overview">{c.overview}</p>
                  <p className="sn-course-card__topics-label">主な授業トピック</p>
                  <div className="sn-course-card__topics">
                    {c.topics.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== 教員スポットライト ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ栄養を教える教員陣</h2>
            <p className="lab-section__body">
              食物栄養学科には、学科内のスポーツ関連科目として
              <strong>スポーツ栄養学（石津達野先生）</strong>、
              <strong>運動生理学（長浜尚史先生）</strong>、
              <strong>スポーツコーチング論</strong>が設置されています。<br />
              加えて、十文字学園女子大学の健康栄養学科には国内最高峰のスポーツ栄養専門家が在籍しており、
              <strong>副指導教員制度</strong>を活用することで、健康栄養学科が主催するゼミを通じて
              食物栄養学科の学生もスポーツの現場でスポーツ栄養を実践的に学ぶことができます。
            </p>
            <div className="sn-faculty-grid">
              {FACULTY.map((f, i) => (
                <motion.div key={i} className="sn-faculty-card" {...fadeUp(0.08 * i)}>
                  <div className="sn-faculty-card__top">
                    <p className="sn-faculty-card__dept">{f.dept}</p>
                    <h3 className="sn-faculty-card__name">{f.name}</h3>
                    <p className="sn-faculty-card__degree">{f.degree}</p>
                  </div>
                  <div className="sn-faculty-card__badges">
                    {f.badges.map((b, j) => <span key={j}>{b}</span>)}
                  </div>
                  <div className="sn-faculty-card__fields">
                    {f.fields.map((field, j) => <span key={j}>{field}</span>)}
                  </div>
                  <p className="sn-faculty-card__message">{f.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== 資格パスフロー ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">食物栄養学科から「公認スポーツ栄養士」へのルート</h2>
            <p className="lab-section__body">
              公認スポーツ栄養士を受験するには、<strong>管理栄養士免許が必須条件</strong>です。
              資格取得には研修や実務経験も含む段階的なプロセスが必要です。
              食物栄養学科で国試対策とスポーツ栄養の学びを両立しながら、
              確実にそのキャリアを目指すことができます。
            </p>
            <div className="sn-path-flow">
              {PATH_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  className={`sn-path-step${step.optional ? ' sn-path-step--optional' : ''}`}
                  {...fadeUp(0.07 * i)}
                >
                  <div className="sn-path-step__track">
                    <div
                      className="sn-path-step__dot"
                      style={{
                        borderColor: step.color,
                        background: step.optional ? 'var(--cream)' : step.color,
                      }}
                    />
                    {i < PATH_STEPS.length - 1 && <div className="sn-path-step__line" />}
                  </div>
                  <div className="sn-path-step__content">
                    <p className="sn-path-step__label" style={{ color: step.color }}>
                      {step.label}
                    </p>
                    <p className="sn-path-step__note">{step.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="sn-path-callout">
              <CheckCircle2 size={18} aria-hidden="true" />
              <p>
                公認スポーツ栄養士は、日本栄養士会と日本スポーツ協会が共同認定する資格です。
                プロ・実業団アスリートを支える最高峰の資格として知られており、
                受験には<strong>管理栄養士免許の所持</strong>が義務付けられています。
              </p>
            </div>
          </motion.section>

          {/* ===== キャリアパス ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ栄養の知識で広がるキャリア</h2>
            <p className="lab-section__body">
              管理栄養士としての確かな専門性に、スポーツ・健康科学の知識を組み合わせることで、
              多様かつ付加価値の高いキャリアパスが開かれます。
            </p>
            <div className="sn-career-grid">
              {CAREER_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} className="sn-career-card" {...fadeUp(0.07 * i)}>
                    <div
                      className="sn-career-card__icon"
                      style={{
                        color: card.color,
                        background: `color-mix(in srgb, ${card.color} 12%, transparent)`,
                      }}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <h3 className="sn-career-card__field">{card.field}</h3>
                    <p className="sn-career-card__examples">{card.examples}</p>
                    <p className="sn-career-card__synergy">{card.synergy}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ===== CTA ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <div className="sn-cta-banner">
              <p className="sn-cta-banner__eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                十文字学園女子大学
              </p>
              <h2 className="sn-cta-banner__title">
                強豪チームが隣にいる。<br />
                だから、実践が本物になる。
              </h2>
              <p className="sn-cta-banner__body">
                同じキャンパスで練習する強豪女子サッカー部、学科内のスポーツ関連科目、そして2学科体制の充実した専門教員陣——
                この環境が揃って初めて可能になる、本物のスポーツ栄養教育がここにあります。
              </p>
              <div className="sn-cta-banner__buttons">
                <a href="/" className="sn-cta-btn sn-cta-btn--primary">
                  食物栄養学科について詳しく
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.jumonji-u.ac.jp/humanlife/health/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sn-cta-btn sn-cta-btn--secondary"
                >
                  健康栄養学科について詳しく
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
