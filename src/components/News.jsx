import { ArrowRight } from 'lucide-react'

const NEWS = [
  {
    date: '2026.05.10',
    tag: 'お知らせ',
    type: 'info',
    title: '2026年度のオープンキャンパスの日程を公開しました',
    href: 'https://www.jumonji-u.ac.jp/jumonji-style/open-campus/',
  },
  {
    date: '2025.04.01',
    tag: 'お知らせ',
    type: 'info',
    title: '2025年度オープンキャンパスの日程を公開しました',
  },
  {
    date: '2025.03.25',
    tag: 'ニュース',
    type: 'news',
    title: '2024年度 管理栄養士国家試験結果：合格率96%を達成しました',
  },
  {
    date: '2025.03.01',
    tag: 'イベント',
    type: 'event',
    title: '卒業研究発表会を開催しました',
  },
  {
    date: '2025.02.15',
    tag: 'お知らせ',
    type: 'info',
    title: '2025年度入学試験合格者発表について',
  },
  {
    date: '2025.01.20',
    tag: 'ニュース',
    type: 'news',
    title: '学生が地域の食育イベントに参加・活動報告',
  },
]

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__layout">
          <div className="news__header" data-reveal>
            <p className="eyebrow">お知らせ / News</p>
            <h2 className="section-title">新着情報</h2>
            <a href="#" className="news__more">
              一覧へ <ArrowRight size={13} />
            </a>
          </div>

          <ul className="news-list" data-reveal data-reveal-delay="2">
            {NEWS.map((n, i) => (
              <li key={i}>
                <a href={n.href || '#'} className="news-item">
                  <span className="news-item__date">{n.date}</span>
                  <span className={`news-tag news-tag--${n.type}`}>{n.tag}</span>
                  <span className="news-item__title">{n.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
