import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const ITEMS = [
  {
    num: '01',
    title: '1・2年次からの早期意識づけ',
    body: '「4年生からでは遅い」という方針のもと、入学直後から国家試験を意識した学習習慣を形成。基礎固めと意識づけを早期に徹底します。',
  },
  {
    num: '02',
    title: '3年次：夏・冬の模擬試験',
    body: '3年次の夏・冬に模擬試験を実施。学習の中間チェックポイントとして弱点を可視化し、4年次に向けた対策の方向性を定めます。',
  },
  {
    num: '03',
    title: '4年次：模擬試験を年8回実施',
    body: '4年次には模擬試験を年8回実施。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。',
  },
  {
    num: '04',
    title: '130点突破を全員の目標に',
    body: '4年7月の模試で「130点」を合否の分岐点として明確に設定。具体的な数値目標が学習意欲と達成感を生み出します。',
  },
  {
    num: '05',
    title: '外部講師による特別講義',
    body: '各教員による対策講座に加え、外部の専門講師による特別講義も実施。多様な視点で試験範囲を深く理解します。',
  },
  {
    num: '06',
    title: 'e-Learningで自学自習を支援',
    body: 'e-Learningシステムを活用し、自分のペースで反復学習が可能。苦手分野の集中対策や隙間時間の有効活用を支援します。',
  },
]

export default function NationalExamSupport() {
  return (
    <section className="support" id="support">
      <div className="support__orb support__orb--1" aria-hidden />
      <div className="support__orb support__orb--2" aria-hidden />

      <div className="support__inner container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">国試対策 / Exam Support</p>
          <h2 className="section-title">
            合格率を支える<br />
            6段階のサポートプログラム
          </h2>
          <p className="support__subtitle">
            1年次からの早期意識づけに始まり、4年次は年8回の模擬試験で本番力を養成。
            多角的なサポートで、全員合格をめざします。
          </p>
        </motion.div>

        <div className="support__grid">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="support-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <p className="support-item__num">{item.num}</p>
              <h3 className="support-item__title">{item.title}</h3>
              <p className="support-item__body">{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="support__report-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="support__report-banner-inner">
            <div>
              <p className="support__report-banner-label">国試レポート</p>
              <p className="support__report-banner-title">第40回管理栄養士国家試験 結果と本学の取り組みについて</p>
              <p className="support__report-banner-sub">合格率・要因分析・今後の対策を公開しています</p>
            </div>
            <a href="/kokushi-report" className="support__report-banner-link">
              詳細を読む <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

