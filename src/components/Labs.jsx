import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import facultyNiikura from '../faculty/niikura.jpg'
import facultyTakeshima from '../faculty/takeshima.jpg'
import facultyKunii from '../faculty/kunii.jpg'
import facultyIimura from '../faculty/iimura.jpg'
import facultyKamiyama from '../faculty/kamiyama.jpg'
import facultyKamoshita from '../faculty/kamoshita.jpg'
import facultyShibasaki from '../faculty/shibasaki.jpg'
import facultyIshii from '../faculty/ishii.jpg'
import facultyKomeichi from '../faculty/komeichi.jpg'
import facultyNakaoka from '../faculty/nakaoka.jpg'
import facultyIwamoto from '../faculty/iwamoto.jpg'
import facultyOkamoto from '../faculty/okamoto.jpg'

const LABS = [
  {
    name: '新倉量太先生の研究室',
    nameEn: 'G1 Lab',
    photo: facultyNiikura,
    photoFit: 'contain',
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
    photo: facultyTakeshima,
    description: 'ウシ伝染性リンパ腫ウイルス(BLV)と宿主遺伝子(BoLA)の関係から、家畜の健康と人の食を守る研究室。遺伝子解析、高感度検査法、ワクチン開発を通じて、One Healthに貢献します。',
    topic: '学生とともに、BLV感染牛の遺伝子型解析データを学会で発表しました。',
    topicDate: '2025.3',
    href: '/lab-takeshima',
    blogHref: '/lab-takeshima',
    isExternal: false,
  },
  {
    name: '國井大輔先生の研究室',
    nameEn: 'Kunii Lab',
    photo: facultyKunii,
    photoPosition: 'center 30%',
    description: '「栄養管理をもっと身近に！」をスローガンに、公衆栄養学・実践食事学を軸として地域・企業・海外と連携する研究室。学生主体の商品開発や社会連携プロジェクトを展開しています。',
    topic: '地域の高齢者向け栄養改善プログラムの効果検証を進めています。',
    topicDate: '2025.5',
    href: '/lab-kunii',
    blogHref: '/lab-kunii',
    isExternal: false,
  },
  {
    name: '飯村九林先生の研究室',
    nameEn: 'Iimura Lab',
    photo: facultyIimura,
    description: '小型魚類（ゼブラフィッシュ・金魚）を研究モデルに、鱗・皮膚の再生メカニズム、ヒアルロン酸の老化機構、紫外線による光老化を解析。食品成分の生体への作用を分子レベルで探る研究室です。',
    topic: '鱗再生モデルを用いたヒアルロン酸の局在・機能解析と、紫外線が石灰化に与える影響を研究中です。',
    topicDate: '2026.5',
    href: '/lab-iimura',
    blogHref: '/lab-iimura',
    isExternal: false,
  },
  {
    name: '神山真澄先生の研究室',
    nameEn: 'Kamiyama Lab',
    photo: facultyKamiyama,
    description: 'ポリフェノールや機能性成分の解析から、生活習慣病予防や災害栄養まで幅広く研究。「おいしい」を入口に「健康」と「安心な暮らし」を科学的根拠に基づいて探究します。',
    topic: 'エイジェックファームとの連携で、熟成黒たまねぎマフィン「くろたまフィン」を開発しました。',
    topicDate: '2026.5',
    href: '/lab-kamiyama',
    blogHref: '/lab-kamiyama',
    isExternal: false,
  },
  {
    name: '鴨下澄子先生の研究室',
    nameEn: 'Kamoshita Lab',
    photo: facultyKamoshita,
    photoFit: 'contain',
    description: 'テンペ・オートミール・おから・ひよこ豆粉など、健康増進が期待できる食品を使った料理を試作し、被験者によるおいしさの評価を繰り返す研究室。「健康によいものを、おいしく続けられる」を科学的に追究します。',
    topic: '食物繊維豊富なテンペやおからを使ったレシピを開発し、被験者を対象においしさを評価・分析しています。',
    topicDate: '2025.10',
    href: '/lab-kamoshita',
    blogHref: '/lab-kamoshita',
    isExternal: false,
  },
  {
    name: '芝崎本実先生の研究室',
    nameEn: 'Shibasaki Lab',
    photo: facultyShibasaki,
    description: '和菓子職人としての経験と調理科学を融合させ、郷土菓子やあんこ、おだんごの「おいしさ」を科学的に解明。伝統文化を次世代につなぐ研究室です。',
    topic: 'TBS「マツコの知らない世界」に出演。みたらし団子の魅力を調理科学の視点から解説しました。',
    topicDate: '2026.5',
    href: '/lab-shibasaki',
    blogHref: '/lab-shibasaki',
    isExternal: false,
  },
  {
    name: '石井和美先生の研究室',
    nameEn: 'Ishii Lab',
    photo: facultyIshii,
    description: '膨化食品の物性と雑穀粉を使ったグルテンフリーパンの開発を軸に、アレルギー対応レシピの考案にも取り組む研究室。「データでおいしさを解き明かす」調理科学を実践します。',
    topic: 'キヌア粉を用いたグルテンフリーパンの開発と、その物性評価に関する研究を進めています。',
    topicDate: '2026.5',
    href: '/lab-ishii',
    blogHref: '/lab-ishii',
    isExternal: false,
  },
  {
    name: '古明地夕佳先生の研究室',
    nameEn: 'Komeichi Lab',
    photo: facultyKomeichi,
    photoFit: 'contain',
    description: '高齢者の栄養ケアや子ども食堂、地域連携を軸に「エビデンスに基づく公衆栄養実践」を探究。新座市の健康まつり等、地域に根ざした食と健康づくりを実践しています。',
    topic: '子ども食堂を対象とした食・栄養面からの実態把握と支援・食育プログラムの評価を行っています。',
    topicDate: '2026.5',
    href: '/lab-komeichi',
    blogHref: '/lab-komeichi',
    isExternal: false,
  },
  {
    name: '中岡加奈絵先生の研究室',
    nameEn: 'Nakaoka Lab',
    photo: facultyNakaoka,
    description: '子どもの食生活・食育や応用栄養学が専門。成長期の骨量・体力、家族との共食、社会的ジェットラグなど、日常生活に根ざした研究と地域での実践に取り組んでいます。',
    topic: '地域社会と連携し、「砂糖のひみつを科学で解き明かす！」ワークショップを開催しました。',
    topicDate: '2026.5',
    href: '/lab-nakaoka',
    blogHref: '/lab-nakaoka',
    isExternal: false,
  },
  {
    name: '岡本節子先生の研究室',
    nameEn: 'Okamoto Lab',
    photo: facultyOkamoto,
    photoFit: 'contain',
    description: '地域在住高齢者のサルコペニア・フレイル予防から介護施設の栄養ケア・マネジメントまで、超高齢社会の食と健康に正面から向き合う研究室。高齢者向けレシピ開発など、現場と連携した研究が特徴です。',
    topic: '新座市社会福祉協議会の調理ボランティア向けレシピ集に、高齢者向けメニューを監修・提供しました。',
    topicDate: '2026.5',
    href: '/lab-okamoto',
    blogHref: '/lab-okamoto',
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
                {lab.photo ? (
                  <img
                    className="lab-card-new__photo-img"
                    src={lab.photo}
                    alt={lab.name}
                    decoding="async"
                    style={{
                      ...(lab.photoFit ? { objectFit: lab.photoFit } : {}),
                      ...(lab.photoPosition ? { objectPosition: lab.photoPosition } : {}),
                    }}
                  />
                ) : (
                  <div className="lab-card-new__photo-placeholder">
                    <span>{lab.nameEn}</span>
                  </div>
                )}
              </div>
              <div className="lab-card-new__body">
                <h3 className="lab-card-new__name">{lab.name}</h3>
                <p className="lab-card-new__description">{lab.description}</p>
                <div className="lab-card-new__topic">
                  <span className="lab-card-new__topic-date">{lab.topicDate}</span>
                  <span className="lab-card-new__topic-text">{lab.topic}</span>
                </div>
                {lab.blogHref && (lab.isExternal ? (
                  <a
                    href={lab.blogHref}
                    className="lab-card-new__blog-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    研究室を見る <ArrowRight size={13} />
                  </a>
                ) : (
                  <Link to={lab.blogHref} className="lab-card-new__blog-link">
                    研究室を見る <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

