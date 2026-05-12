import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const LABS = [
  {
    name: '新倉量太先生の研究室',
    nameEn: 'G1 Lab',
    description: '消化管出血・消化管発がん・腸内マイクロバイオームを主な研究テーマに、コホート研究や無作為化比較試験などの大規模臨床研究を展開。機械学習・AIを内視鏡診断へ応用するなど、臨床と先端データサイエンスを融合した研究室です。',
    topic: '腸内マイクロバイオームと食習慣の関係についての論文を国際誌に投稿しました。',
    topicDate: '2025.4',
    href: 'https://g1lab.jp/',
    blogHref: 'https://g1lab.jp/',
    isExternal: true,
  },
  {
    name: '竹嶋伸之輔先生の研究室',
    nameEn: 'Takeshima Lab',
    description: 'ウシ伝染性リンパ腫ウイルス(BLV)と宿主遺伝子(BoLA)の関係から、家畜の健康と人の食を守る研究室。遺伝子解析、高感度検査法、ワクチン開発を通じて、One Healthに貢献します。',
    topic: '学生とともに、BLV感染牛の遺伝子型解析データを学会で発表しました。',
    topicDate: '2025.3',
    href: '#lab-takeshima',
    blogHref: '#lab-takeshima',
    isExternal: false,
  },
  {
    name: '國井大輔先生の研究室',
    nameEn: 'Kunii Lab',
    description: '「栄養管理をもっと身近に！」をスローガンに、公衆栄養学・実践食事学を軸として地域・企業・海外と連携する研究室。学生主体の商品開発や社会連携プロジェクトを展開しています。',
    topic: '地域の高齢者向け栄養改善プログラムの効果検証を進めています。',
    topicDate: '2025.5',
    href: '#lab-kunii',
    blogHref: '#lab-kunii',
    isExternal: false,
  },
  {
    name: '飯村九林先生の研究室',
    nameEn: 'Iimura Lab',
    description: '「生体組織と食品機能を、分子レベルで探る」をテーマに、魚の鱗再生、食品由来成分による真菌毒制御、植物の機能性成分解析など、基礎と応用をつなぐ研究を展開しています。',
    topic: 'アシタバ由来成分の機能性に関する研究成果をまとめ、論文投稿の準備を進めています。',
    topicDate: '2025.6',
    href: '#lab-iimura',
    blogHref: '#lab-iimura',
    isExternal: false,
  },
  {
    name: '神山真澄先生の研究室',
    nameEn: 'Kamiyama Lab',
    description: 'ポリフェノールや機能性成分の解析から、生活習慣病予防や災害栄養まで幅広く研究。「おいしい」を入口に「健康」と「安心な暮らし」を科学的根拠に基づいて探究します。',
    topic: 'エイジェックファームとの連携で、熟成黒たまねぎマフィン「くろたまフィン」を開発しました。',
    topicDate: '2026.5',
    href: '#lab-kamiyama',
    blogHref: '#lab-kamiyama',
    isExternal: false,
  },
  {
    name: '鴨下澄子先生の研究室',
    nameEn: 'Kamoshita Lab',
    description: '加工大豆食品やテンペの研究を通じて、食物繊維摂取の向上と健康維持を探求。若年層の食育や食行動変容の評価など、実践的な社会・高大連携活動にも力を入れています。',
    topic: '駒場学園高等学校との高大連携プロジェクト「自分たちの青春に健康プラスワン」を展開中。',
    topicDate: '2025.10',
    href: '#lab-kamoshita',
    blogHref: '#lab-kamoshita',
    isExternal: false,
  },
  {
    name: '芝崎本実先生の研究室',
    nameEn: 'Shibasaki Lab',
    description: '和菓子職人としての経験と調理科学を融合させ、郷土菓子やあんこ、おだんごの「おいしさ」を科学的に解明。伝統文化を次世代につなぐ研究室です。',
    topic: 'TBS「マツコの知らない世界」に出演。みたらし団子の魅力を調理科学の視点から解説しました。',
    topicDate: '2026.5',
    href: '#lab-shibasaki',
    blogHref: '#lab-shibasaki',
    isExternal: false,
  },
  {
    name: '石井和美先生の研究室',
    nameEn: 'Ishii Lab',
    description: '雑穀粉パンや膨化食品の物性解析を通じて、「おいしい」と「やさしい」を両立する食をデザイン。廃棄部位を活用しただし開発など、フードロス削減にも取り組んでいます。',
    topic: 'キヌア粉を用いたグルテンフリーパンの開発と、その物性評価に関する研究を進めています。',
    topicDate: '2026.5',
    href: '#lab-ishii',
    blogHref: '#lab-ishii',
    isExternal: false,
  },
]

export default function Labs() {
  return (
    <section className="section" id="labs">
      <div className="container">
        <motion.div 
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">先生たちの研究室</h2>
          <p className="section__subtitle">Labs &amp; Researches</p>
        </motion.div>

        <div className="labs-grid-new">
          {LABS.map((lab, i) => (
            <motion.div 
              key={lab.href} 
              className="lab-card-new"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="lab-card-new__photo">
                <div className="lab-card-new__photo-placeholder">
                  <span>{lab.nameEn}</span>
                </div>
              </div>
              <div className="lab-card-new__body">
                <h3 className="lab-card-new__name">{lab.name}</h3>
                <p className="lab-card-new__description">{lab.description}</p>
                <div className="lab-card-new__topic">
                  <span className="lab-card-new__topic-date">{lab.topicDate}</span>
                  <span className="lab-card-new__topic-text">{lab.topic}</span>
                </div>
                <a
                  href={lab.blogHref}
                  className="lab-card-new__blog-link"
                  target={lab.isExternal ? '_blank' : '_self'}
                  rel={lab.isExternal ? 'noopener noreferrer' : ''}
                >
                  研究室を見る <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

