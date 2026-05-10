const LINKS_1 = [
  { label: '学科について', href: '#features' },
  { label: '取得資格',    href: '#qualifications' },
  { label: '国試対策',    href: '#support' },
  { label: 'お知らせ',   href: '#news' },
  { label: '進路・就職',  href: '#career' },
]

const LINKS_2 = [
  { label: '入試情報',     href: '#' },
  { label: 'オープンキャンパス', href: '#' },
  { label: '学科公式HP',     href: 'https://www.jumonji-u.ac.jp/humanlife/food/' },
  { label: 'アクセス',     href: '#' },
  { label: '大学ホームページ', href: '#' },
]

const SNS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jumonji_shokuei/' },
  { label: 'TikTok',    href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p className="footer__logo-school">十文字学園女子大学</p>
            <p className="footer__logo-dept">食物栄養学科</p>
            <address className="footer__address">
              〒352-8510<br />
              埼玉県新座市菅沢2-1-28<br />
              <br />
              TEL: 048-477-0555<br />
              （代表）
            </address>
            <div className="footer__sns">
              {SNS.map(s => (
                <a key={s.label} href={s.href} className="footer__sns-link" target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__col-title">サイトマップ</p>
            <ul className="footer__links">
              {LINKS_1.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__col-title">受験・入学</p>
            <ul className="footer__links">
              {LINKS_2.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__disclaimer">
          このサイトは食物栄養学科の教員・学生有志が運営する非公式メディアです。
          公式情報は<a href="https://www.jumonji-u.ac.jp/humanlife/food/" target="_blank" rel="noopener noreferrer" className="footer__disclaimer-link">学科公式HP</a>をご確認ください。
        </p>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} 食物栄養学科 非公式情報メディア
          </p>
        </div>
      </div>
    </footer>
  )
}
