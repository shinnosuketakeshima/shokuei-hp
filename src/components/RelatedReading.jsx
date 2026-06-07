import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function RelatedReading({ links = [] }) {
  return (
    <aside className="related-reading" aria-label="関連ページと補足情報">
      {links.length > 0 && (
        <div className="related-reading__links">
          <p className="related-reading__heading">あわせて読みたい</p>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="related-reading__link">
                  {link.label}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="related-reading__note">
        ※本サイトは十文字学園女子大学 食物栄養学科の補完サイトです。入試・出願に関する正式な情報は
        <a href="https://www.jumonji-u.ac.jp/humanlife/food/" target="_blank" rel="noopener noreferrer">学科公式サイト</a>
        をご確認ください。
      </p>
    </aside>
  )
}
