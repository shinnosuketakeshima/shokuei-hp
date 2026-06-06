import {
  ArrowLeft,
  Trophy,
  Award,
  Dumbbell,
  Heart,
  Zap,
  Building2,
  FlaskConical,
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

const ENGAGEMENT_CARDS = [
  {
    icon: Trophy,
    dept: '食物栄養学科',
    title: '管理栄養士の確かな基礎から、スポーツ栄養へ',
    body: '管理栄養士養成課程として医療・臨床の深い知識を身につけながら、学科内のスポーツ栄養学・運動生理学を並行履修。副指導教員制度で健康栄養学科のゼミにも踏み込め、スポーツの現場を在学中から体験できます。',
    accent: 'var(--forest)',
  },
  {
    icon: Award,
    dept: '健康栄養学科',
    title: 'スポーツ栄養の専門家と、直接学ぶ',
    body: '日本スポーツ栄養学会理事・村田浩子教授、公認スポーツ栄養士・徳野裕子准教授が在籍。スポーツ栄養を軸に管理栄養士・栄養士を目指すなら、より直接的な環境です。公認スポーツ栄養士へのルートも開かれています。',
    accent: 'var(--terracotta)',
  },
  {
    icon: Dumbbell,
    dept: '学生アスリートとして',
    title: '選手として学び、卒業後に栄養の専門家へ',
    body: '強豪女子サッカー部が同じキャンパスで活動中。選手として在学しながら栄養・食の専門教育を受け、競技経験を活かして卒業後に管理栄養士・栄養士として活躍する道があります。',
    accent: 'var(--forest)',
  },
];

const FACULTY = [
  {
    name: 'ヨーコ ゼッターランド 講師',
    dept: '健康栄養学科',
    degree: '元アメリカ女子バレーボール代表 ／ 選手歴18年・指導歴25年',
    fields: ['コーチング論', '女性とスポーツ', 'スポーツ組織マネジメント', '日米スポーツ文化'],
    badges: ['バルセロナ五輪 銅メダル（1992）', 'アトランタ五輪 7位入賞（1996）'],
    career: [
      '1969年 アメリカ生まれ（日本名：堀江陽子）。母は元バレーボール日本代表',
      '1975年 6歳で来日。東京の中学・高校でバレーボールに打ち込み、全日本ジュニア代表としてアジアジュニア選手権優勝',
      '早稲田大学でチームを関東大学リーグ6部から2部優勝へ導く',
      '単身渡米してアメリカ代表トライアウトに合格。バルセロナ五輪（1992年・銅メダル）、アトランタ五輪（1996年・7位入賞）',
      '1997年 ダイエーオレンジアタッカーズ（現・久光製薬スプリングス）とプロ契約、1999年引退',
      '2013〜2017年 嘉悦大学女子バレーボール部監督',
      '2019〜2024年 日本女子体育大学体育学部 准教授・バレーボール部副部長',
      '2024年〜 アメリカ女子プロリーグ LOVBアトランタ アシスタントコーチ',
    ],
    message:
      '選手歴18年・指導歴25年の実務経験をもとに、「コーチングとティーチングの違い」「グッドコーチ像」「体罰・ハラスメントのない指導環境」「プレーヤーズセンタード」を実践的かつ国際的な視点から教えます。日米のスポーツ文化を知る数少ない指導者として、栄養・管理栄養士を目指す学生に「人を育てること」の本質を伝えます。',
    wide: true,
  },
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

const ROUTES = [
  {
    color: 'var(--forest)',
    dept: '食物栄養学科',
    title: '管理栄養士の土台から、スポーツ栄養へ',
    steps: [
      { label: '食物栄養学科に入学', note: '管理栄養士養成課程でメディカルな基礎を固める' },
      { label: '学科内スポーツ科目を履修', note: 'スポーツ栄養学・運動生理学・スポーツコーチング論を3年次に並行履修' },
      { label: '健康栄養ゼミに参加（任意）', note: '副指導教員制度を活用し、スポーツの現場に立つ', optional: true },
      { label: '管理栄養士国家試験合格', note: '充実したサポート体制で確実に合格を目指す' },
      { label: 'スポーツ関連キャリアへ', note: '公認スポーツ栄養士取得や、医療・産業・教育現場での活躍へ' },
    ],
  },
  {
    color: 'var(--terracotta)',
    dept: '健康栄養学科',
    title: 'スポーツ栄養の専門家として',
    steps: [
      { label: '健康栄養学科に入学', note: 'スポーツ栄養を軸に管理栄養士・栄養士を目指す' },
      { label: 'スポーツ栄養専門教員の指導を受ける', note: '村田浩子教授・徳野裕子准教授のもとで深く学ぶ' },
      { label: '管理栄養士・栄養士資格取得', note: '学科の養成課程を通じて国家試験受験資格を得る' },
      { label: '公認スポーツ栄養士取得（任意）', note: '管理栄養士免許取得後、研修・実務経験を経て受験可能', optional: true },
    ],
  },
  {
    color: 'var(--stone)',
    dept: '学生アスリートルート',
    title: '選手経験を活かして専門家へ',
    steps: [
      { label: '選手として在学', note: 'サッカー部等でアスリートとして活動しながら栄養・食の専門教育を受ける' },
      { label: '現場で体験しながら学ぶ', note: '栄養サポートを受ける視点から、実践的な栄養知識を育む' },
      { label: '管理栄養士受験資格を取得', note: '養成課程を修了し、在学中に受験資格を得る' },
      { label: '卒業後に管理栄養士として活躍', note: '競技経験という強みを武器に、スポーツ関連キャリアへ' },
    ],
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
  {
    accent: 'forest',
    badge: '2学科 同時開講（選択）',
    name: 'コーチング論 ／ スポーツコーチング論',
    prof: 'ヨーコ ゼッターランド 先生',
    meta: ['前期', '2単位', '講義・演習'],
    overview: '健康栄養学科「コーチング論」・食物栄養学科「スポーツコーチング論」として2学科合同で同時開講される実践的科目。人を育てる「コーチング」の本質を学ぶ。「ティーチング」との違いを起点に、「グッドコーチ」に必要な資質と考え方を探究する。体罰・ハラスメントのない指導環境、「プレーヤーズセンタード」「アントラージュ」「Well Being」の概念と実践、日米のスポーツ文化の違いを学ぶ。ロールプレイングと学生間ディスカッションを通じて指導者としての実践力を養う。五輪銅メダリスト・指導歴25年の担当教員による実務家講義。',
    topics: [
      'コーチングとティーチングの違い',
      '成長過程と指導方法の選択',
      '効果的なコーチングの言葉',
      '勝利至上主義の問題点',
      '体罰・暴力・ハラスメント',
      'プレーヤーズセンタード',
      'アントラージュ・Well Being',
      '日米スポーツ文化の比較',
      '成長期・女性アスリートへの指導',
      '組織運営とリーダーシップ演習',
    ],
    wide: true,
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
    field: '学校・スポーツ教育現場',
    examples: '栄養教諭（さいたま市・清瀬市 等）、学校給食管理、部活動への栄養支援 等',
    synergy:
      '体育教員と連携しながら、運動部の選手へのコンディショニング指導や食育を推進。スポーツ栄養の知識は、教育現場でこそ日常的に活きる専門性です。',
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
          <h1 className="lab-page__title">スポーツ現場に近いところで、<br />栄養の専門家を<br />目指すなら。</h1>
          <p className="lab-page__subtitle">
            食物栄養学科・健康栄養学科の2学科と強豪サッカー部が同じキャンパスに。管理栄養士・栄養士資格を軸に、スポーツと関わるキャリアを在学中から本物の現場で育てられます。
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
              「スポーツ栄養を学ぶなら<br />
              <em>スポーツ系の学科じゃないと</em>」<br />
              ——それは誤解です。
            </h2>
            <p className="lab-story-feature__lead">
              「管理栄養士養成課程は臨床・病院中心で、スポーツとは関係ない」「スポーツ系を学ぶなら健康・体育の専門学科でないと」——そう思っていませんか？十文字学園では、その常識は当てはまりません。<br /><br />
              食物栄養学科には、学科内の科目として
              <strong>「スポーツ栄養学（石津達野先生）」「運動生理学（長浜尚史先生）」</strong>
              が設置されています。さらに<strong>「スポーツコーチング論（ヨーコ ゼッターランド先生）」</strong>は健康栄養学科との<strong>2学科同時開講</strong>科目として履修できます。管理栄養士を目指しながら、五輪メダリストから直接コーチング論を学べる環境があります。さらに<strong>副指導教員制度</strong>を活用することで、健康栄養学科のゼミを通じてスポーツの現場に立つ機会もあります。<br /><br />
              健康栄養学科では、日本スポーツ栄養学会理事・村田浩子教授と現役公認スポーツ栄養士・徳野裕子准教授が直接指導。スポーツ栄養を軸に管理栄養士・栄養士資格を目指すなら、より直接的な環境が整っています。<br /><br />
              見落とされがちなのが「<strong>選手として学ぶ</strong>」という視点です。サッカー部等でアスリートとして活動しながら、栄養の専門教育を受ける。卒業後に管理栄養士として、その競技経験を活かしたキャリアへ——そんな学び方が、ここでは現実です。<br /><br />
              スポーツ栄養に関わるキャリアは、<strong>公認スポーツ栄養士だけではありません</strong>。学校で体育教員と連携する栄養教諭、医療現場でアスリートをサポートする管理栄養士、地域の健康増進を担う行政栄養士——スポーツと食をつなぐ専門家の姿は、多様です。
            </p>
            <div className="lab-story-feature__tags">
              <span>#管理栄養士</span>
              <span>#栄養士</span>
              <span>#スポーツ栄養学</span>
              <span>#公認スポーツ栄養士</span>
              <span>#副指導教員制度</span>
              <span>#アスリートサポート</span>
              <span>#2学科連携</span>
            </div>
          </motion.section>

          {/* ===== 3つの関わり方 ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">十文字でのスポーツ栄養との関わり方</h2>
            <p className="lab-section__body">
              2つの学科と学生アスリートという3つの立場から、スポーツ栄養に関わるキャリアを描けます。
            </p>
            <div className="sn-evidence-cards">
              {ENGAGEMENT_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} className="sn-evidence-card" {...fadeUp(0.08 * i)}>
                    <span
                      className="sn-evidence-card__dept"
                      style={{
                        background: `color-mix(in srgb, ${card.accent} 12%, transparent)`,
                        color: card.accent,
                      }}
                    >
                      {card.dept}
                    </span>
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
            <h2 className="lab-section__title">スポーツ関連科目一覧</h2>
            <p className="lab-section__body">
              スポーツ栄養学・運動生理学は食物栄養学科の選択科目として設置。コーチング論（スポーツコーチング論）は健康栄養・食物栄養の<strong>2学科合同で同時開講</strong>されており、どちらの学科の学生も一緒に学びます。
            </p>
            <div className="sn-courses-grid">
              {COURSES.map((c, i) => (
                <motion.div
                  key={i}
                  className={`sn-course-card sn-course-card--${c.accent}${c.wide ? ' sn-course-card--wide' : ''}`}
                  {...fadeUp(0.08 * i)}
                >
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
            <h2 className="lab-section__title">スポーツを教える教員陣</h2>
            <p className="lab-section__body">
              健康栄養学科には、五輪メダリストのコーチング論講師、国内最高峰のスポーツ栄養専門家が在籍。
              <strong>副指導教員制度</strong>を活用することで、食物栄養学科の学生も健康栄養学科のゼミ・授業を通じてスポーツを実践的に学ぶことができます。
            </p>
            <div className="sn-faculty-grid">
              {FACULTY.map((f, i) => (
                <motion.div
                  key={i}
                  className={`sn-faculty-card${f.wide ? ' sn-faculty-card--featured' : ''}`}
                  {...fadeUp(0.08 * i)}
                >
                  <div className="sn-faculty-card__top">
                    <p className="sn-faculty-card__dept">{f.dept}</p>
                    <h3 className="sn-faculty-card__name">{f.name}</h3>
                    <p className="sn-faculty-card__degree">{f.degree}</p>
                  </div>
                  <div className="sn-faculty-card__badges">
                    {f.badges.map((b, j) => <span key={j}>{b}</span>)}
                  </div>
                  {f.career && (
                    <div className="sn-faculty-card__career">
                      {f.career.map((item, j) => (
                        <p key={j} className="sn-faculty-card__career-item">{item}</p>
                      ))}
                    </div>
                  )}
                  <div className="sn-faculty-card__fields">
                    {f.fields.map((field, j) => <span key={j}>{field}</span>)}
                  </div>
                  <p className="sn-faculty-card__message">{f.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== 3つのルート ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツと栄養をつなぐ、3つのルート</h2>
            <p className="lab-section__body">
              どの立場からスタートしても、スポーツに関わる栄養の専門家を目指せます。
            </p>
            <div className="sn-routes-grid">
              {ROUTES.map((route, i) => (
                <motion.div
                  key={i}
                  className="sn-route-card"
                  style={{ borderTop: `4px solid ${route.color}` }}
                  {...fadeUp(0.08 * i)}
                >
                  <span
                    className="sn-route-card__dept"
                    style={{
                      background: `color-mix(in srgb, ${route.color} 12%, transparent)`,
                      color: route.color,
                    }}
                  >
                    {route.dept}
                  </span>
                  <h3 className="sn-route-card__title">{route.title}</h3>
                  <div className="sn-route-card__steps">
                    {route.steps.map((step, j) => (
                      <div
                        key={j}
                        className={`sn-route-step${step.optional ? ' sn-route-step--optional' : ''}`}
                      >
                        <div className="sn-route-step__track">
                          <div
                            className="sn-route-step__dot"
                            style={{
                              borderColor: route.color,
                              background: step.optional ? 'var(--cream)' : route.color,
                            }}
                          />
                          {j < route.steps.length - 1 && <div className="sn-route-step__line" />}
                        </div>
                        <div className="sn-route-step__content">
                          <p className="sn-route-step__label">{step.label}</p>
                          {step.note && <p className="sn-route-step__note">{step.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== キャリアパス ===== */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ栄養の知識で広がるキャリア</h2>
            <p className="lab-section__body">
              管理栄養士・栄養士としての専門性に、スポーツ・健康科学の知識を組み合わせることで、
              多様なキャリアパスが開かれます。公認スポーツ栄養士はそのひとつに過ぎません。
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
                2学科と強豪サッカー部が、<br />
                同じキャンパスにいる。
              </h2>
              <p className="sn-cta-banner__body">
                食物栄養学科・健康栄養学科、どちらからでもスポーツと栄養の接点を持てる環境が整っています。本物のアスリートとともに現場で学ぶ経験が、スポーツに関わる栄養の専門家への道を切り拓きます。
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
