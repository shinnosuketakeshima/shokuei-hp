import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const FAQ_CATEGORIES = [
  {
    id: 'curriculum',
    title: '学科・入学について',
    items: [
      {
        id: 'c1',
        q: '食物栄養学科の定員は何名ですか？',
        a: '定員は78名の少人数制です。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。先生に名前で呼ばれるほどの距離感が特徴で、国家試験対策でも個別フォローが可能です。',
      },
      {
        id: 'c2',
        q: '4年間のカリキュラムの特徴は何ですか？',
        a: '1年次の基礎固めから4年次の国試対策まで段階的に深める体系的なカリキュラムです。給食経営管理実習（150食の実際の給食運営）、病院・福祉施設での臨地実習、地域連携活動など、現場で役立つ実践力を養います。',
      },
      {
        id: 'c3',
        q: '給食経営管理実習とはどのような授業ですか？',
        a: '実際の給食施設を使い、学生自身が150食規模の給食を一から企画・調理・提供する授業です。メニュー設計から食材の発注、衛生管理、原価計算まで、給食現場のすべてを体験できる集大成となる実習です。',
      },
      {
        id: 'c4',
        q: '十文字学園女子大学はどこにありますか？',
        a: '埼玉県新座市菅沢2-1-28にあります。JR武蔵野線・新座駅から徒歩10〜15分でアクセスできます。東京都内や埼玉各地から通いやすい立地です。',
      },
    ],
  },
  {
    id: 'qualifications',
    title: '取得できる資格',
    items: [
      {
        id: 'q1',
        q: '管理栄養士の資格は取得できますか？',
        a: '卒業と同時に管理栄養士国家試験の受験資格が得られます。国家試験に合格することで管理栄養士の資格を取得できます。医療・行政・企業など幅広い分野で活躍できる国家資格です。',
      },
      {
        id: 'q2',
        q: '第一種衛生管理者とはどんな資格で、なぜ全国唯一なのですか？',
        a: '第一種衛生管理者は従業員50名以上の事業場への配置が法律で義務付けられた国家資格です。管理栄養士養成課程でこの資格を卒業と同時に取得できるのは全国の大学で本学のみです。管理栄養士との「ダブルライセンス」が企業への就職に大きく有利に働きます。',
      },
      {
        id: 'q3',
        q: '卒業と同時に取得できる資格は何ですか？',
        a: '栄養士免許と第一種衛生管理者は卒業と同時に取得できます。管理栄養士は卒業後に国家試験合格が必要です。栄養教諭一種免許状は所定の教職課程修了で取得できます。',
      },
      {
        id: 'q4',
        q: '栄養教諭になることはできますか？',
        a: '所定の教職課程を修了することで栄養教諭一種免許状を取得できます。学校に配属され、児童生徒の食習慣改善や食育を担う教育職です。',
      },
    ],
  },
  {
    id: 'exam',
    title: '管理栄養士 国家試験対策',
    items: [
      {
        id: 'e1',
        q: '管理栄養士国家試験の合格率はどのくらいですか？',
        a: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。',
      },
      {
        id: 'e2',
        q: '国家試験対策はいつから始まりますか？',
        a: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。',
      },
      {
        id: 'e3',
        q: '4年次の模擬試験は何回ありますか？',
        a: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。',
      },
      {
        id: 'e4',
        q: '国家試験に向けて個別サポートはありますか？',
        a: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。',
      },
    ],
  },
  {
    id: 'sports',
    title: 'スポーツ栄養・スポーツ管理栄養士',
    items: [
      {
        id: 's1',
        q: '管理栄養士はスポーツ選手を支える仕事ができますか？',
        a: 'できます。「公認スポーツ栄養士」という資格があり、Jリーグクラブや実業団チーム、日本代表チームなどに帯同して選手の食事・栄養管理を専門的に行います。試合当日の食事設計から遠征中の補食管理、体重コントロールまで、アスリートのパフォーマンスを栄養で支える仕事です。管理栄養士の免許は公認スポーツ栄養士の受験に必須であり、スポーツ栄養のプロへの最も確実なルートです。',
      },
      {
        id: 's2',
        q: '食物栄養学科でもスポーツ栄養は学べますか？',
        a: '学べます。食物栄養学科には「スポーツ栄養学（石津達野先生）」「運動生理学（長浜尚史先生）」「スポーツコーチング論」が学科内科目として設置されており、管理栄養士を目指しながらスポーツ栄養の専門知識を身につけられます。さらに副指導教員制度を活用すれば、健康栄養学科が主催するゼミを通じて日本スポーツ栄養学会理事・村田浩子教授や現役公認スポーツ栄養士・徳野裕子准教授のもとでスポーツの現場に立ち、実践的なスポーツ栄養を体験することもできます。',
        link: '/sports-nutrition',
        linkLabel: 'スポーツ栄養特集ページを見る',
      },
      {
        id: 's3',
        q: '公認スポーツ栄養士になるにはどうすればよいですか？',
        a: '公認スポーツ栄養士は日本栄養士会と日本スポーツ協会が共同認定する、非常に専門性の高い資格です。受験には「管理栄養士免許の所持」が必須条件で、そのうえで所定の研修（スポーツ栄養ベーシックコース修了）と実務経験を積むことで受験資格が得られます。段階的なプロセスを要する本格的な資格ですが、食物栄養学科の充実した国家試験対策サポート体制を活かしながら、学科内のスポーツ関連科目でスポーツ栄養を並行して学ぶことで、確実にその道を歩むことができます。',
        link: '/sports-nutrition',
        linkLabel: '資格取得ルートを詳しく見る',
      },
      {
        id: 's4',
        q: 'スポーツが好きで管理栄養士を目指しています。どんな仕事に就けますか？',
        a: 'スポーツ×管理栄養士の組み合わせは就職先の幅が非常に広いです。①アシックスジャパン・コナミスポーツ・ルネサンスなどスポーツ・フィットネス産業でのパーソナル栄養カウンセリング、②スポーツ整形外科・リハビリ科での「メディカルスポーツ管理栄養士」、③プロチームや大学運動部への栄養サポート（公認スポーツ栄養士として）、④スポーツ食品・栄養補助食品の企画開発——など、スポーツへの情熱を活かしたキャリアが描けます。',
      },
    ],
  },
  {
    id: 'career',
    title: '就職・進路',
    items: [
      {
        id: 'j1',
        q: '就職率はどのくらいですか？',
        a: '就職率99.2%（2025年3月卒業生実績）を達成しています。少人数教育と1年次からのキャリア支援、そして管理栄養士＋衛生管理者のダブルライセンスが高い就職実績を支えています。',
      },
      {
        id: 'j2',
        q: '卒業生の主な就職先はどこですか？',
        a: '2025年3月卒業生の主な就職先は、保育園（25名）・調剤薬局・ドラッグストア（21名）・病院・クリニック（18名）・給食受託会社（14名）・食品メーカー（11名）などです。東京都・埼玉県を中心に関東圏全域で活躍しています。',
      },
      {
        id: 'j3',
        q: '就職サポートはいつから始まりますか？',
        a: '1年次から就職サポートを開始します。ガイダンスや先輩との交流でキャリアを意識し、2年次には現場実習、3年次には個別進路相談と業界研究会、4年次には教員が一人ひとりの状況に合わせた個別フォローを行います。',
      },
      {
        id: 'j4',
        q: '一般企業（食品以外）への就職もできますか？',
        a: 'はい。一般企業（金融・物流ほか）に11名、公務員・自衛官に4名が就職しています（2025年3月実績）。第一種衛生管理者の資格は50名以上の事業場への配置が義務付けられているため、幅広い業種の一般企業でも強みになります。',
      },
    ],
  },
]

const AUDIENCE_GUIDES = [
  {
    id: 'parent',
    label: '保護者の方へ',
    description: '実績データと制度から、学科の信頼性を確認したい方は、まずこちらの質問をご覧ください。',
    refs: [
      { catId: 'career', itemId: 'j1' },
      { catId: 'career', itemId: 'j2' },
      { catId: 'exam', itemId: 'e1' },
      { catId: 'qualifications', itemId: 'q2' },
    ],
  },
  {
    id: 'teacher',
    label: '進路指導の先生へ',
    description: '生徒さんに学科の特色を説明する際に役立つ質問を集めました。',
    refs: [
      { catId: 'curriculum', itemId: 'c2' },
      { catId: 'qualifications', itemId: 'q1' },
      { catId: 'qualifications', itemId: 'q3' },
      { catId: 'career', itemId: 'j3' },
    ],
  },
]

const byId = (catId, itemId) => {
  const cat = FAQ_CATEGORIES.find(c => c.id === catId)
  return cat.items.find(i => i.id === itemId)
}

const SUMMARY_ITEMS = [
  byId('qualifications', 'q1'),
  byId('qualifications', 'q2'),
  byId('sports', 's1'),
  byId('sports', 's3'),
  byId('exam', 'e1'),
  byId('career', 'j1'),
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div id={`faq-${item.id}`} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
      <button
        className="faq__question-btn"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
      >
        <span className="faq__q-mark">Q</span>
        <span className="faq__q-text">{item.q}</span>
        <span className="faq__icon" aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="faq__answer-inner">
          <p>{item.a}</p>
          {item.link && (
            <Link to={item.link} className="faq__answer-link">
              {item.linkLabel}
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default function FAQ({ summary = false }) {
  const [openItems, setOpenItems] = useState(new Set())
  const TitleTag = summary ? 'h2' : 'h1'

  function toggle(id) {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  if (summary) {
    return (
      <section className="faq" id="faq">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="faq__header"
          >
            <p className="eyebrow">よくある質問 / FAQ</p>
            <TitleTag className="section-title">
              受験生からよく聞かれる<br />質問と答え
            </TitleTag>
          </motion.div>
          <div className="faq__list">
            {SUMMARY_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <FaqItem
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={toggle}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="faq__more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/faq" className="faq__more-link">
              すべての質問を見る
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="faq faq--page" id="faq">
      <div className="faq__page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq__header"
        >
          <p className="eyebrow">よくある質問 / FAQ</p>
          <TitleTag className="section-title">
            受験生・保護者からの<br />よくある質問
          </TitleTag>
          <p className="faq__subtitle">
            食物栄養学科への入学・資格・就職・国家試験対策についてのよくある質問をまとめました。
          </p>
        </motion.div>
        <div className="faq__audience-guides">
          {AUDIENCE_GUIDES.map((guide) => (
            <div key={guide.id} className="faq__audience-guide">
              <h2 className="faq__audience-guide-title">{guide.label}</h2>
              <p className="faq__audience-guide-desc">{guide.description}</p>
              <ul className="faq__audience-guide-links">
                {guide.refs.map((ref) => {
                  const item = byId(ref.catId, ref.itemId)
                  return (
                    <li key={item.id}>
                      <a href={`#faq-${item.id}`} className="faq__audience-guide-link">
                        <ChevronRight size={14} aria-hidden="true" />
                        {item.q}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="faq__categories">
          {FAQ_CATEGORIES.map((category, ci) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h2 className="faq__category-title">{category.title}</h2>
              <div className="faq__list">
                {category.items.map(item => (
                  <FaqItem
                    key={item.id}
                    item={item}
                    isOpen={openItems.has(item.id)}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
