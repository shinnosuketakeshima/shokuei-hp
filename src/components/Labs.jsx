import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const CATEGORY_LABELS = {
  regional: '地域連携・商品開発',
  science: '最先端サイエンス',
  welfare: '子ども・高齢者・福祉',
}

const LAB_STORIES = [
  {
    storyTitle: '黒たまねぎマフィンと、おいしい健康の科学',
    hook: 'ポリフェノール解析から地域企業とつくる「くろたまフィン」。',
    category: 'regional',
    href: '/lab-kamiyama',
    isExternal: false,
  },
  {
    storyTitle: 'プラスちゃんナッツと、すったてうどんの挑戦',
    hook: '企業・地域とつなぐ、栄養管理技術の社会還元。',
    category: 'regional',
    href: '/lab-kunii',
    isExternal: false,
  },
  {
    storyTitle: 'おだんごの「おいしさ」を、科学で解き明かす',
    hook: '和菓子職人の経験と調理科学が出会う場所。',
    category: 'regional',
    href: '/lab-shibasaki',
    isExternal: false,
  },
  {
    storyTitle: '市民健康まつりと、子ども食堂の食の現場',
    hook: 'エビデンスに基づく公衆栄養を、地域で実践する。',
    category: 'regional',
    href: '/lab-komeichi',
    isExternal: false,
  },
  {
    storyTitle: 'ウイルスと遺伝子で、命の食卓を守る',
    hook: 'BLVとBoLA。顕微鏡の向こうで動く One Health。',
    category: 'science',
    href: '/lab-takeshima',
    isExternal: false,
  },
  {
    storyTitle: '金魚とゼブラフィッシュが教えてくれる老化のヒミツ',
    hook: '鱗・皮膚の再生から、食品成分の分子レベル解析へ。',
    category: 'science',
    href: '/lab-iimura',
    isExternal: false,
  },
  {
    storyTitle: 'テンペとおからで、おいしく続ける健康食',
    hook: '被験者と試作を重ねる、食物繊維の調理科学。',
    category: 'science',
    href: '/lab-kamoshita',
    isExternal: false,
  },
  {
    storyTitle: 'グルテンフリーパンと、データで解くおいしさ',
    hook: '雑穀粉・アレルギー対応レシピの物性評価。',
    category: 'science',
    href: '/lab-ishii',
    isExternal: false,
  },
  {
    storyTitle: 'そのサプリ、本当に安全？健康食品を守るリスク評価の科学',
    hook: '薬物相互作用・CYP解析から独自の安全基準SDI-SEまで。',
    category: 'science',
    href: '/lab-yamazaki',
    isExternal: false,
  },
  {
    storyTitle: '内視鏡とAIが拓く、腸と健康の未来',
    hook: 'マイクロバイオームから臨床研究まで。',
    category: 'science',
    href: '/lab-niikura',
    isExternal: false,
  },
  {
    storyTitle: '砂糖のひみつと、成長期の骨・体力',
    hook: '食育ワークショップから、子どもの食生活研究へ。',
    category: 'welfare',
    href: '/lab-nakaoka',
    isExternal: false,
  },
  {
    storyTitle: '超高齢社会の食と、介護現場の栄養ケア',
    hook: 'サルコペニア予防から施設マネジメントまで。',
    category: 'welfare',
    href: '/lab-okamoto',
    isExternal: false,
  },
]

function parseCategoryFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'labs-regional') return 'regional'
  if (hash === 'labs-science') return 'science'
  if (hash === 'labs-welfare') return 'welfare'
  return null
}

function StoryCard({ lab, index }) {
  const categoryLabel = CATEGORY_LABELS[lab.category]
  const inner = (
    <>
      <span className="lab-story-card__category">{categoryLabel}</span>
      <h3 className="lab-story-card__title">{lab.storyTitle}</h3>
      <p className="lab-story-card__hook">{lab.hook}</p>
      <span className="lab-story-card__link">
        ストーリーを読む <ArrowRight size={14} aria-hidden="true" />
      </span>
    </>
  )

  return (
    <motion.article
      key={lab.href}
      className={`lab-story-card lab-story-card--${lab.category}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      layout
    >
      {lab.isExternal ? (
        <a
          href={lab.href}
          className="lab-story-card__inner"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${lab.storyTitle}のストーリーを読む（外部サイト）`}
        >
          {inner}
        </a>
      ) : (
        <Link to={lab.href} className="lab-story-card__inner" aria-label={`${lab.storyTitle}のストーリーを読む`}>
          {inner}
        </Link>
      )}
    </motion.article>
  )
}

export default function Labs() {
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace('#', '')
      setActiveCategory(parseCategoryFromHash())
      if (hash.startsWith('labs')) {
        document.getElementById('labs')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const filteredLabs = useMemo(() => {
    if (!activeCategory) return LAB_STORIES
    return LAB_STORIES.filter((lab) => lab.category === activeCategory)
  }, [activeCategory])

  const setFilter = (category) => {
    if (category) {
      window.location.hash = `labs-${category}`
    } else {
      window.location.hash = 'labs'
    }
    setActiveCategory(category)
  }

  return (
    <section className="section labs-portal" id="labs">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">12の研究室ストーリー</h2>
          <p className="section__subtitle">Lab Stories</p>
          <p className="labs-portal__lead">
            教員プロフィールや研究業績の一覧ではなく、ゼミごとの「物語」から入れます。気になるテーマを選んで、詳細ページへ。
          </p>
        </motion.div>

        <div className="labs-portal__filters" role="tablist" aria-label="研究室カテゴリ">
          <button
            type="button"
            role="tab"
            aria-selected={!activeCategory}
            className={`labs-portal__filter${!activeCategory ? ' labs-portal__filter--active' : ''}`}
            onClick={() => setFilter(null)}
          >
            すべて
          </button>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={activeCategory === key}
              className={`labs-portal__filter labs-portal__filter--${key}${activeCategory === key ? ' labs-portal__filter--active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || 'all'}
            className="labs-story-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredLabs.map((lab, i) => (
              <StoryCard key={lab.href} lab={lab} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
