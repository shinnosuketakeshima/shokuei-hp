import { ArrowUpRight } from 'lucide-react'

const LABS = [
  {
    name: '新倉量太先生の研究室（G1 Lab）',
    description: '新倉研究室は、消化管出血・消化管発がん・腸内マイクロバイオームを主な研究テーマとし、コホート研究や無作為化比較試験などの大規模臨床研究を展開しています。さらに機械学習・AIを内視鏡診断へ応用するなど、臨床と先端データサイエンスを融合させた研究を行っています。',
    href: 'https://g1lab.jp/',
    isExternal: true,
  },
  {
    name: '竹嶋伸之輔先生の研究室',
    description: 'ウシ伝染性リンパ腫ウイルス(BLV)と宿主遺伝子(BoLA)の関係から、家畜の健康と人の食を守る研究室です。遺伝子解析、高感度検査法、ワクチン開発を通じて、One Healthに貢献します。',
    href: '#lab-takeshima',
    isExternal: false,
  },
]

export default function Labs() {
  return (
    <section className="section" id="labs">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">研究室紹介</h2>
          <p className="section__subtitle">Labs &amp; Researches</p>
        </div>

        <div className="labs-grid">
          {LABS.map(lab => (
            <a
              href={lab.href}
              key={lab.href}
              className="lab-card"
              target={lab.isExternal ? '_blank' : '_self'}
              rel={lab.isExternal ? 'noopener noreferrer' : ''}
            >
              <div className="lab-card__content">
                <h3 className="lab-card__name">{lab.name}</h3>
                <p className="lab-card__description">{lab.description}</p>
              </div>
              <div className="lab-card__icon">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
