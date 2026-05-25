import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// 2025年3月卒業生 127名の進路実績をもとに構成（多い順）
const PATHS = [
  {
    name: '保育園',
    role: '栄養士・管理栄養士',
    examples: '日本保育サービス、こどもの森、学研ココファン・ナーサリー、ポピンズエデュケア、ネス・コーポレーション、さくらさくみらい、AIAI Child Care、ミアヘルサ 他'
  },
  {
    name: '調剤薬局・ドラッグストア',
    role: '管理栄養士・医療事務・総合職',
    examples: 'トモズ、ココカラファイン、ウエルシア薬局、富士薬品、アイングループ、龍生堂本店、総合メディカル、ヴェルペンファルマ 他'
  },
  {
    name: '病院・クリニック',
    role: '管理栄養士',
    examples: '自治医科大学附属病院、IMSグループ、上尾中央医科グループ、医療生協さいたま、平成医療福祉グループ、熊谷総合病院 他'
  },
  {
    name: '給食受託会社（病院・福祉施設・事業所）',
    role: '栄養士・管理栄養士',
    examples: 'エームサービス、グリーンハウス、ハーベスト、富士産業、シルバーライフ、淀川食品 他'
  },
  {
    name: '食品メーカー・食品関連企業',
    role: '商品開発・品質管理・営業・食品CRO',
    examples: 'トオカツフーズ、山崎製パン、ケンコーマヨネーズ、オルトメディコ（食品CRO）、国分関信越、セブン-イレブン・ジャパン 他'
  },
  {
    name: '一般企業（金融・物流・サービスほか）',
    role: '事務・営業・販売・サービス',
    examples: '日本生命、りそなグループ、橋本産業、サイゼリヤ、LAVA International、ロック・フィールド 他'
  },
  {
    name: '高齢者・福祉施設',
    role: '施設管理栄養士',
    examples: '社会福祉法人 百葉の会、道心会、松仁会、恵比寿会、平成医療福祉グループ 他'
  },
  {
    name: 'スーパー・百貨店・専門小売',
    role: '販売・総合職',
    examples: 'ヤオコー、ベルク、ファンケル、ロック・フィールド 他'
  },
  {
    name: '公務員（行政栄養士・保安職）',
    role: '栄養職員・自衛官',
    examples: '東京都Ⅱ類 栄養士職（江東区・立川市・青梅市）、海上自衛隊 他'
  },
  {
    name: '歯科クリニック',
    role: '管理栄養士・歯科助手',
    examples: 'T&T歯科・矯正歯科クリニック、デンタルクリニックK、ちゃいるど歯科医院、桜光会 他'
  },
]

export default function Career({ summary = false }) {
  const displayPaths = summary ? PATHS.slice(0, 4) : PATHS
  const TitleTag = summary ? 'h2' : 'h1'

  return (
    <section className="career" id="career">
      <span className="career__deco" aria-hidden>進路</span>

      <div className="container">
        <div className="career__layout">
          <motion.div 
            className="career__left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">進路・就職 / Career</p>
            <TitleTag className="career__stat-block" style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: 0, border: 'none', padding: 0 }}>
              <div className="career__rate">
                99.2<span className="career__rate-unit">%</span>
              </div>
              <p className="career__rate-label">就職率（2025年3月卒業生実績・就職希望者ベース）</p>
            </TitleTag>
            <p style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.9 }}>
              卒業生の約3人に2人が栄養士・管理栄養士として就職。
              保育園・病院・高齢者施設に加え、薬局やドラッグストア、食品メーカー、行政、
              さらに金融・流通といった一般企業まで、進路は幅広くひらかれています。
              入学から卒業まで、教員が一人ひとりの希望に寄り添って就職相談に応じます。
            </p>
            {!summary && (
              <p style={{ fontSize: '11px', color: 'var(--stone)', marginTop: '20px', opacity: 0.7, lineHeight: 1.7 }}>
                ※ 2025年3月卒業生の進路データに基づく主な就職先
              </p>
            )}
            {summary && (
              <div style={{ marginTop: '24px' }}>
                <Link to="/career" className="button button--outline">
                  進路・就職について詳しく見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div 
            className="career__right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="career__paths">
              {displayPaths.map((p, i) => (
                <motion.div
                  key={i}
                  className="career-path"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                >
                  {summary ? (
                    <Link to="/career" className="career-path__link">
                      <span className="career-path__dot" />
                      <div className="career-path__info">
                        <span className="career-path__name">{p.name}</span>
                      </div>
                      <span className="career-path__role">{p.role}</span>
                      <ArrowRight size={13} className="career-path__arrow" />
                    </Link>
                  ) : (
                    <>
                      <span className="career-path__dot" />
                      <div className="career-path__info">
                        <span className="career-path__name">{p.name}</span>
                        <span className="career-path__examples">{p.examples}</span>
                      </div>
                      <span className="career-path__role">{p.role}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
