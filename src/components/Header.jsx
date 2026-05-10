import { useState, useEffect } from 'react'

const NAV = [
  { label: '学科について', href: '#features' },
  { label: '取得資格',    href: '#qualifications' },
  { label: '国試対策',    href: '#support' },
  { label: '実習レポート', href: '#news' },
  { label: '進路・就職',  href: '#career' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-dept">食物栄養学科</span>
          <span className="header__logo-tagline">十文字学園女子大学 ― 非公式情報メディア</span>
        </a>

        <nav className={`header__nav${open ? ' header__nav--open' : ''}`}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="header__nav-link"
               onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="https://www.jumonji-u.ac.jp/humanlife/food/" className="header__official-link" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            学科公式HP ↗
          </a>
        </nav>

        <button
          className={`header__menu-btn${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="メニュー"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
