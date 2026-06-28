const LINKS_1 = [
  { label: '学科について', href: '/features' },
  { label: '取得資格',    href: '/qualifications' },
  { label: '国試対策',    href: '/support' },
  { label: '進路・就職',  href: '/career' },
  { label: '学生の声',    href: '/voices' },
  { label: '学生生活',    href: '/campus-life' },
  { label: 'よくある質問', href: '/faq' },
  { label: 'スポーツ栄養特集', href: '/sports-nutrition' },
  { label: 'ことサポ for 食栄', href: '/kotosupport' },
  { label: '副専攻×管理栄養士', href: '/submajor' },
  { label: 'コラム', href: '/columns' },
]

const LINKS_2 = [
  { label: '入試情報',          href: '#' },
  { label: 'オープンキャンパス', href: '#' },
  { label: '学科公式HP',        href: 'https://www.jumonji-u.ac.jp/humanlife/food/' },
  { label: 'アクセス',          href: '#' },
  { label: '大学ホームページ',   href: '#' },
]

const SNS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jumonji_shokuei/' },
  { label: 'TikTok',    href: '#' },
]

const LAB_COLS = [
  {
    key: 'regional',
    title: 'プロジェクト',
    subtitle: '地域連携・商品開発',
    labs: [
      { name: '神山研究室', note: '黒たまねぎマフィン', href: '/lab-kamiyama' },
      { name: '芝崎研究室', note: 'おだんごゼミ・和菓子科学', href: '/lab-shibasaki' },
      { name: '國井研究室', note: 'プラスちゃんナッツ・食育', href: '/lab-kunii' },
      { name: '鴨下研究室', note: 'ヘルシーレシピ・おいしさ評価', href: '/lab-kamoshita' },
    ],
  },
  {
    key: 'science',
    title: '最先端サイエンス',
    subtitle: '生命科学・データ',
    labs: [
      { name: '竹嶋研究室', note: 'ウイルスと遺伝子・One Health', href: '/lab-takeshima' },
      { name: '飯村研究室', note: '小型魚類モデル・皮膚老化', href: '/lab-iimura' },
      { name: '新倉研究室', note: '医療×データサイエンス', href: '/lab-niikura' },
      { name: '山崎研究室', note: '健康食品・リスク評価科学', href: '/lab-yamazaki' },
      { name: '石井研究室', note: 'もっちり食感・グルテンフリー', href: '/lab-ishii' },
    ],
  },
  {
    key: 'welfare',
    title: 'いのちを支える',
    subtitle: '子ども・高齢者・福祉',
    labs: [
      { name: '中岡研究室', note: '子どもの骨量・食育', href: '/lab-nakaoka' },
      { name: '古明地研究室', note: 'こども食堂・公衆栄養', href: '/lab-komeichi' },
      { name: '岡本研究室', note: '高齢者・サルコペニア予防', href: '/lab-okamoto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">

        <div className="footer__labs">
          <p className="footer__labs-heading">研究室ストーリー</p>
          <div className="footer__labs-grid">
            {LAB_COLS.map(col => (
              <div key={col.key} className={`footer__labs-col footer__labs-col--${col.key}`}>
                <p className="footer__labs-col-title">
                  {col.title}
                  <span className="footer__labs-col-sub">{col.subtitle}</span>
                </p>
                <ul className="footer__labs-list">
                  {col.labs.map(lab =>
                    lab.external ? (
                      <li key={lab.href}>
                        <a
                          href={lab.href}
                          className="footer__lab-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="footer__lab-name">{lab.name}</span>
                          <span className="footer__lab-note">{lab.note} ↗</span>
                        </a>
                      </li>
                    ) : (
                      <li key={lab.href}>
                        <a href={lab.href} className="footer__lab-link">
                          <span className="footer__lab-name">{lab.name}</span>
                          <span className="footer__lab-note">{lab.note}</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

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

          <nav className="footer__nav-group" aria-label="サイトマップ">
            <p className="footer__col-title">サイトマップ</p>
            <ul className="footer__links">
              {LINKS_1.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav-group" aria-label="受験・入学情報">
            <p className="footer__col-title">受験・入学</p>
            <ul className="footer__links">
              {LINKS_2.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
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
