import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const LAB_CATEGORIES = [
  {
    label: 'プロジェクト',
    sublabel: '地域連携・商品開発',
    key: 'regional',
    labs: [
      { name: '神山研究室', note: '黒たまねぎマフィン', href: '/lab-kamiyama' },
      { name: '芝崎研究室', note: 'おだんごゼミ・和菓子科学', href: '/lab-shibasaki' },
      { name: '國井研究室', note: 'プラスちゃんナッツ・食育', href: '/lab-kunii' },
      { name: '鴨下研究室', note: 'ヘルシーレシピ・おいしさ評価', href: '/lab-kamoshita' },
    ],
  },
  {
    label: '最先端サイエンス',
    sublabel: '生命科学・データ',
    key: 'science',
    labs: [
      { name: '竹嶋研究室', note: 'ウイルスと遺伝子・One Health', href: '/lab-takeshima' },
      { name: '飯村研究室', note: '小型魚類モデル・皮膚老化', href: '/lab-iimura' },
      { name: '新倉研究室', note: '医療×データサイエンス', href: 'https://g1lab.jp/', external: true },
      { name: '石井研究室', note: 'もっちり食感・グルテンフリー', href: '/lab-ishii' },
    ],
  },
  {
    label: 'いのちを支える',
    sublabel: '子ども・高齢者・福祉',
    key: 'welfare',
    labs: [
      { name: '中岡研究室', note: '子どもの骨量・食育', href: '/lab-nakaoka' },
      { name: '古明地研究室', note: 'こども食堂・公衆栄養', href: '/lab-komeichi' },
      { name: '岡本研究室', note: '高齢者・サルコペニア予防', href: '/lab-okamoto' },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [openKey, setOpenKey]     = useState(null)
  const navRef                    = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenKey(null)
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const closeAll = () => { setMenuOpen(false); setOpenKey(null) }
  const toggle   = (key) => setOpenKey(k => k === key ? null : key)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">

        <a href="/" className="header__logo" onClick={closeAll}>
          <div className="header__logo-main">
            <span className="header__logo-dept">食物栄養学科</span>
            <span className="header__unofficial-badge">非公式</span>
          </div>
          <span className="header__logo-tagline">十文字学園女子大学 ― 学生・教員による情報メディア</span>
        </a>

        <nav
          ref={navRef}
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="メインナビゲーション"
        >
          <a href="/" className="header__nav-link" onClick={closeAll}>ホーム</a>

          {LAB_CATEGORIES.map(cat => (
            <div key={cat.key} className="header__cat-wrap">
              <button
                type="button"
                className={`header__cat-btn${openKey === cat.key ? ' header__cat-btn--active' : ''}`}
                onClick={() => toggle(cat.key)}
                aria-expanded={openKey === cat.key}
                aria-haspopup="true"
              >
                {cat.label}
                <ChevronDown
                  size={13}
                  className={`header__cat-chevron${openKey === cat.key ? ' header__cat-chevron--open' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`header__dropdown header__dropdown--${cat.key}${openKey === cat.key ? ' header__dropdown--open' : ''}`}
                aria-hidden={openKey !== cat.key}
              >
                <p className="header__dropdown-eyebrow">{cat.sublabel}</p>
                {cat.labs.map(lab =>
                  lab.external ? (
                    <a
                      key={lab.href}
                      href={lab.href}
                      className="header__dropdown-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      tabIndex={openKey === cat.key ? 0 : -1}
                    >
                      <span className="header__dropdown-name">{lab.name}</span>
                      <span className="header__dropdown-note">{lab.note} ↗</span>
                    </a>
                  ) : (
                    <a
                      key={lab.href}
                      href={lab.href}
                      className="header__dropdown-item"
                      onClick={closeAll}
                      tabIndex={openKey === cat.key ? 0 : -1}
                    >
                      <span className="header__dropdown-name">{lab.name}</span>
                      <span className="header__dropdown-note">{lab.note}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          ))}

          <a
            href="https://www.jumonji-u.ac.jp/humanlife/food/"
            className="header__official-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
          >
            学科公式HP ↗
          </a>
        </nav>

        <button
          className={`header__menu-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </div>
    </header>
  )
}
