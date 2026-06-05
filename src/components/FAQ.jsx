import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight } from 'lucide-react'
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

const SUMMARY_ITEMS = [
  FAQ_CATEGORIES[1].items[0],
  FAQ_CATEGORIES[1].items[1],
  FAQ_CATEGORIES[3].items[0],
  FAQ_CATEGORIES[2].items[0],
  FAQ_CATEGORIES[0].items[0],
  FAQ_CATEGORIES[3].items[1],
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
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
        <p className="faq__answer-inner">{item.a}</p>
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
