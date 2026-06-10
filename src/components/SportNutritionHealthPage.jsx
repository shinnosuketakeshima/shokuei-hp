import {
  ArrowLeft,
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
    icon: Dumbbell,
    dept: '健康運動コース',
    title: 'スポーツをする人のための栄養について学ぶ',
    body: '健康運動コースの必修・選択科目として、「スポーツ実技・指導法」「生涯スポーツ指導演習」など運動指導に必要な実技科目と並行して、スポーツ栄養学や運動生理学を習得。運動プログラムの設計と栄養アセスメント・食事調査を統合的に学び、栄養士＋αの知識と技術を身につけます。',
    accent: 'var(--terracotta)',
  },
  {
    icon: Award,
    dept: '4年制栄養士課程の利点',
    title: '幅広い選択肢を活かしてスポーツ栄養を深掘り',
    body: '食物栄養学科の管理栄養士養成課程とは異なり、4年制栄養士課程である健康栄養学科では、必修科目の枠に縛られず、自分の興味に応じて専門科目を選択できます。スポーツ栄養、運動生理学、コーチング論など、スポーツと栄養に関わる科目を深く掘り下げる自由度があります。',
    accent: 'var(--forest)',
  },
  {
    icon: Heart,
    dept: '実践的な学び',
    title: '学校現場・スポーツ現場での栄養指導を実践',
    body: '本学の強豪女子サッカー部と同じキャンパスで学ぶことで、実際のアスリートとのかかわりの中で、現場で必要とされる栄養知識を身につけることができます。在学中から「栄養士としてスポーツ現場をサポートする」実務経験を積み上げることが、他大学にはない強みです。',
    accent: 'var(--terracotta)',
  },
];

const FACULTY = [
  {
    name: '村田 浩子 教授',
    dept: '健康栄養学科',
    course: '栄養指導論／応用栄養学',
    degree: '博士（スポーツ科学）早稲田大学大学院',
    fields: ['健康スポーツ科学', 'スポーツ栄養学', '栄養アセスメント', '競技者の食事調査'],
    badges: ['日本スポーツ栄養学会 所属', '大学院 研究指導担当'],
    message: '健康栄養学科の教員として、スポーツ栄養学の第一人者。競技者を対象とした食事調査を中心に研究を重ね、大学院（食物栄養学専攻修士課程）の研究指導も担当。健康運動コースの学生も受講・ゼミ参加が可能で、スポーツ栄養に特化した実践的指導を受ける機会が開かれている。',
  },
  {
    name: '徳野 裕子 准教授',
    dept: '健康栄養学科',
    course: '公衆栄養学（演習・実習）',
    degree: '公認スポーツ栄養士',
    fields: ['公認スポーツ栄養士', 'スポーツ栄養サポート', '栄養アセスメント', 'アスリート指導'],
    badges: ['日本スポーツ栄養学会 所属', '実践的栄養サポート経歴'],
    message: '健康運動コースの学生にとって身近な指導者。現役の公認スポーツ栄養士として、実際にスポーツ選手への栄養サポート活動を重ねてきた実践家。「公認スポーツ栄養士を目指したい」という明確な目標を持つ学生にとって、実務経験に基づいた指導を受ける最適なメンター。',
  },
  {
    name: '若葉 京良',
    dept: '健康栄養学科',
    course: '運動生理学（生理学を含む）、スポーツ実技・指導法Ａ',
    degree: '健康運動指導士',
    fields: ['運動生理学', '解剖学・生理学', '競技パフォーマンス向上', 'コンディショニング'],
    badges: ['健康運動指導士資格取得担当', 'スポーツ実技指導専門'],
    message: '運動生理学を中心に、スポーツをする人の身体の変化・ニーズを理学的に理解する教育を担当。栄養指導の際に「なぜこの栄養が必要か」という運動生理学的背景を理解することは不可欠。村田教授の栄養学と若葉氏の運動生理学を両輪で学ぶことで、栄養士＋αの専門性が初めて確立される。',
  },
];

const SIMPLE_LECTURERS = [];

const HEALTH_SPORT_TEACHERS = [
  {
    name: '飯田 路佳',
    courses: '健康・運動・栄養の科学、スポーツ実技・指導法Ａ',
    desc: '地域住民への健康づくり支援・学生からトップアスリートまでのコンディショニング管理の実務経験をもとに指導。運動プログラムの設計から健康づくり支援の実践まで幅広く担当。',
  },
  {
    name: '和田 左千子',
    courses: 'スポーツ実技・指導法Ａ（水中運動担当）',
    desc: 'アクアビクス・水中ウォーキングなど水中運動の指導法を専門とする。高齢者から若年層まで対応した安全で効果的な運動プログラムの実践を担当。',
  },
  {
    name: '神田 俊平',
    courses: '健康スポーツビジネス論（全学科対象・4年）',
    desc: 'オリンピック・プロリーグ・放映権・地域スポーツ振興など、スポーツの社会的価値とビジネス構造を多角的に解説。',
  },
];

const ROUTES = [
  {
    color: 'var(--terracotta)',
    dept: '健康運動コース → スポーツ現場ルート',
    title: 'スポーツ栄養の専門家として現場へ',
    steps: [
      { label: '健康運動コースに進学', note: 'スポーツをする人のための栄養を学ぶコース選択' },
      { label: '学科内スポーツ関連科目を履修', note: 'スポーツ栄養学・運動生理学・コーチング論を並行履修' },
      { label: '栄養士資格取得（卒業時）', note: '健康栄養学科卒業と同時に栄養士資格を取得' },
      { label: 'スポーツ現場での実務経験', note: 'フィットネス企業・スポーツチーム・学校等でスポーツ栄養サポートを実践' },
      { label: '実務経験を経て管理栄養士資格取得', note: '栄養士として実務を積み重ね、管理栄養士国家試験受験資格を得る' },
      { label: '公認スポーツ栄養士取得（任意）', note: '十分な実務・栄養サポート経験を重ねてから受験可能', optional: true },
    ],
  },
  {
    color: 'var(--forest)',
    dept: '健康運動コース → 教育現場ルート',
    title: '学校・部活動でのスポーツ栄養指導',
    steps: [
      { label: '健康運動コースに進学', note: 'スポーツ栄養と運動指導の両面を学ぶ' },
      { label: '栄養士資格と保健体育教諭免許を並行取得', note: '4年制の利点を活かし、複数資格取得が可能' },
      { label: '栄養士資格取得（卒業時）', note: '栄養の専門家としての基盤を確立' },
      { label: '学校・部活動での栄養指導を実践', note: '栄養教諭・保健体育教諭として、ジュニア選手の食と運動を指導' },
      { label: '実務経験を経て管理栄養士資格取得', note: '教育現場での実務経験を積み、管理栄養士国家試験受験資格を得る' },
    ],
  },
  {
    color: 'var(--stone)',
    dept: '食文化コース → スポーツ栄養アプローチ',
    title: 'スポーツ栄養をより広い視点から学ぶ',
    steps: [
      { label: '食文化コースに進学', note: '食文化をベースとした栄養士教育' },
      { label: 'スポーツ関連科目を選択履修', note: 'スポーツ栄養学・運動生理学など、興味に応じて選択できる自由度' },
      { label: '栄養士資格取得（卒業時）', note: '食の専門家としての基盤を確立' },
      { label: 'スポーツ関連分野での実務', note: '食育とスポーツの関わり、地域の運動教室など、食と運動の統合分野で活躍' },
      { label: '公認スポーツ栄養士・管理栄養士へのステップアップ', note: '実務経験を積みながら資格取得を目指す' },
    ],
  },
];

const CAREER_CARDS = [
  {
    icon: Heart,
    field: '医療機関・病院',
    examples: 'IMSグループ、埼玉医科大学病院、東京慈恵会医科大学附属病院 等',
    synergy: 'スポーツ整形外科・リハビリ科での「メディカルスポーツ栄養士」として、術後復帰やアスリートの機能回復を医学と栄養の両面からサポート。',
    color: 'var(--terracotta)',
  },
  {
    icon: Zap,
    field: 'スポーツ・フィットネス産業',
    examples: 'アシックスジャパン、コナミスポーツ、東急スポーツオアシス、ルネサンス 等',
    synergy: '生化学・栄養評価に基づいた個別カウンセリングができる高付加価値人材として、スポーツ・健康産業の第一線で活躍。',
    color: 'var(--forest)',
  },
  {
    icon: Building2,
    field: '学校・スポーツ教育現場',
    examples: '栄養教諭（さいたま市・清瀬市 等）、学校給食管理、部活動への栄養支援 等',
    synergy: '体育教員と連携しながら、運動部の選手へのコンディショニング指導や食育を推進。スポーツ栄養の知識は、教育現場でこそ日常的に活きる専門性です。',
    color: 'var(--forest)',
  },
  {
    icon: FlaskConical,
    field: '食品・ヘルスケア開発',
    examples: 'キユーピー醸造、グルメデリカ、プライムデリカ、紀文食品 等',
    synergy: 'スポーツパフォーマンス向上・疲労回復を目的とした機能性食品・栄養補助食品の企画開発をエビデンスに基づき主導。',
    color: 'var(--terracotta)',
  },
];

const COURSES = [
  {
    accent: 'terracotta',
    badge: '健康運動コース関連科目（選択）',
    name: 'スポーツ栄養学',
    meta: ['3年次・後期', '2単位', '講義'],
    overview: '健康運動コースの学生がスポーツをする人の栄養ニーズを理解するための基礎科目。エネルギー代謝・身体組成・コンディショニング・サプリメントなど、運動指導と組み合わせた栄養学的知識を習得。',
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
    accent: 'forest',
    badge: '専門基礎領域（選択）',
    name: '運動生理学',
    meta: ['3年次・前期', '2単位', '講義＋実技・実験'],
    overview: '運動が身体に及ぼす影響を生理学の観点から学ぶ。筋・神経・循環・呼吸・代謝の各系統が運動によってどう変化するかを理解し、実技・実験を通じて生体応答を実際に確認する。栄養指導を行う際の「運動科学的背景」を習得。',
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
    accent: 'terracotta',
    badge: '2学科 同時開講（選択）',
    name: 'コーチング論 ／ スポーツコーチング論',
    meta: ['前期', '2単位', '講義・演習'],
    overview: '健康栄養学科「コーチング論」・食物栄養学科「スポーツコーチング論」として2学科合同で開講される実践的科目。人を育てる「コーチング」の本質を学ぶ。栄養指導もコーチングであることを理解し、アスリート・一般学生との関わり方を探究する。',
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

export default function SportNutritionHealthPage() {
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
          <h1 className="lab-page__title">健康運動コースを選んだあなたへ</h1>
          <p className="lab-page__subtitle">
            運動と栄養の両面でスポーツに関わるキャリアへ。健康栄養学科では、スポーツをする人のための栄養について学び、4年制の自由度を活かして栄養士＋αの知識と技術を身につけられます。
          </p>
        </motion.div>

        <div className="lab-page__content">

          {/* Section 2: 健康運動コース＝スポーツ栄養への入口 */}
          <motion.section
            className="lab-story-feature lab-story-feature--terracotta"
            {...fadeUp(0)}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> 健康運動コースとスポーツ栄養
            </span>
            <h2 className="lab-story-feature__title">
              スポーツをする人のための栄養を学び、<br />
              栄養士＋αの知識と技術を身につける
            </h2>
            <p className="lab-story-feature__lead">
              健康栄養学科の「健康運動コース」では、「スポーツをする人のための栄養について学び、運動と食事の両面から健康づくり・体力づくりを指導する力」を身につけます。これは単なる栄養学ではなく、運動指導とセットで初めて完成する、栄養士＋αの専門性です。<br /><br />
              健康運動コースの必修・選択科目である「スポーツ実技・指導法」「生涯スポーツ指導演習」などの実技科目と並行して、「スポーツ栄養学」「運動生理学」「コーチング論」を履修。運動プログラムの設計と栄養アセスメント・食事調査を統合的に学べる環境が整っています。<br /><br />
              また、4年制栄養士課程である健康栄養学科は、食物栄養学科の管理栄養士養成課程のように必修科目の枠に強く縛られていません。スポーツ栄養に関わる科目を自分の興味に応じて深く掘り下げる自由度があり、「自分のキャリアを自分で設計する」力が養われます。
            </p>
            <div className="lab-story-feature__tags">
              <span>#健康運動コース</span>
              <span>#スポーツ栄養学</span>
              <span>#運動生理学</span>
              <span>#栄養士＋α</span>
              <span>#実技×栄養の統合</span>
            </div>
          </motion.section>

          {/* Section 3: 3つの学習領域 */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">健康運動コースでのスポーツ栄養との関わり方</h2>
            <p className="lab-section__body">
              健康運動コース進学者が、スポーツ栄養の専門知識を深める3つの学習領域があります。
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

          {/* Section 4: スポーツ関連科目 */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ関連科目一覧</h2>
            <p className="lab-section__body">
              健康運動コースで学べるスポーツ栄養・運動生理学関連の主要科目です。コーチング論は食物栄養・健康栄養の2学科合同開講で、一般学生とアスリートが一緒に学べます。
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
                  <p className="sn-course-card__overview">{c.overview}</p>
                  <p className="sn-course-card__topics-label">主な授業トピック</p>
                  <div className="sn-course-card__topics">
                    {c.topics.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 5: 3つのキャリアルート */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツと栄養をつなぐ、3つのキャリアルート</h2>
            <p className="lab-section__body">
              健康運動コースからのスタートは、複数のキャリアパスに分岐します。スポーツ現場、学校教育、または自分のペースでステップアップ——どのルートを選んでも、スポーツに関わる栄養の専門家を目指せます。
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

          {/* Section 6: キャリア */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ栄養の知識で広がるキャリア</h2>
            <p className="lab-section__body">
              栄養士・管理栄養士としての専門性に、スポーツ・健康科学の知識を組み合わせることで、
              多様なキャリアパスが開かれます。
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

          {/* Section 7: 教員紹介 */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <h2 className="lab-section__title">スポーツ栄養の指導者たち</h2>
            <p className="lab-section__body">
              健康運動コースの学生が学ぶスポーツ栄養の指導者と、その専門領域の紹介。村田教授は公認スポーツ栄養士として、徳野准教授は実践的指導者として、若葉氏は運動生理学の専門家として、それぞれ異なる視点からアプローチします。
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
                    <p className="sn-faculty-card__course">担当科目：{f.course}</p>
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
            <div className="sn-lecturer-list">
              {SIMPLE_LECTURERS.map((l, i) => (
                <div key={i} className="sn-lecturer-list__item">
                  <span className="sn-lecturer-list__course">{l.course}</span>
                  <span className="sn-lecturer-list__person">
                    <span className="sn-lecturer-list__name">{l.name}</span>
                    <span className="sn-lecturer-list__role">{l.role}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="sn-dept-courses">
              <p className="sn-dept-courses__heading">その他のスポーツ・健康運動系教員</p>
              <div className="sn-dept-course-list">
                {HEALTH_SPORT_TEACHERS.map((t, i) => (
                  <motion.div key={i} className="sn-dept-course-item" {...fadeUp(0.06 * i)}>
                    <p className="sn-dept-course-item__name">{t.name}</p>
                    <p className="sn-dept-course-item__meta">担当：{t.courses}</p>
                    <p className="sn-dept-course-item__desc">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 8: CTA */}
          <motion.section className="lab-section" {...fadeUp(0.05)}>
            <div className="sn-cta-banner">
              <p className="sn-cta-banner__eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                十文字学園女子大学 健康栄養学科
              </p>
              <h2 className="sn-cta-banner__title">
                健康運動コースで学ぶスポーツ栄養は、<br />
                「栄養士＋αの知識と技術」の第一歩。
              </h2>
              <p className="sn-cta-banner__body">
                4年制栄養士課程の自由度を活かし、スポーツ実技と栄養学を統合的に学べる環境が整っています。本学の強豪サッカー部との関わりの中で、実践的なスポーツ栄養知識を身につけ、卒業後のキャリアへつなぎます。
              </p>
              <div className="sn-cta-banner__buttons">
                <a href="/" className="sn-cta-btn sn-cta-btn--primary">
                  食物栄養学科のスポーツ栄養も見る
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
