import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function StudentColumn3() {
  return (
    <div className="lab-page">
      <div className="container">

        {/* 戻るリンク */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/voices" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>学生の声・コラムに戻る</span>
          </Link>
        </motion.div>

        {/* ページヘッダー */}
        <motion.div 
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">学生コラム / Student Column</p>
          <h1 className="lab-page__title">
            チーズに"王様"と"女王様"がいた！<br />食育論セミナーレポート
          </h1>
          <p className="lab-page__subtitle">2026年5月 食物栄養学科 学生ライター</p>
        </motion.div>

        <div className="lab-page__content">
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="lab-section__body">
              「チーズの王様って、どのチーズか知ってる？」
            </p>
            <p className="lab-section__body">
              そんな問いかけから始まった今回のセミナー。食物栄養学科の専門科目「食育論」の授業に、雪印メグミルク株式会社の方々を講師としてお招きし、チーズの歴史から栄養、そして驚きの試食体験まで、盛りだくさんの特別講義が行われました！
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">1. 「骨」の健康は、20歳までに決まる？</h2>
            <p className="lab-section__body">
              講義の冒頭で紹介されたのは、私たちの「骨」についての衝撃的なお話。
              実は、骨の量は20歳前後でピークを迎え、その後は維持するか減る一方なのだそう。つまり、大学生である「今」の食生活が、一生の骨の健康を左右するということ！
            </p>
            <p className="lab-section__body">
              チーズは、日本人に不足しがちなカルシウムがぎゅっと凝縮された、まさに「食べるサプリメント」。
              しかも、チーズに含まれるカルシウムは他の食品よりも吸収率が高いという特徴があります。
              「おやつ代わりにチーズをパクッ」という習慣が、将来の自分を救うかもしれない……。学生たちも、自分の食生活を振り返りながら真剣にメモをとっていました。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">2. チーズの「王様」と「女王様」</h2>
            <p className="lab-section__body">
              さて、冒頭のクイズの答えです。
            </p>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>チーズの王様：ロクフォール</h3>
                <p>フランス産のブルーチーズ。強烈な香りと塩気があり、歴史と格式を感じさせる存在です。</p>
              </div>
              <div className="lab-section__card">
                <h3>チーズの女王様：カマンベール</h3>
                <p>白カビに包まれた、クリーミーでマイルドな味わい。誰もが知るその優雅な姿から女王様と呼ばれます。</p>
              </div>
            </div>
            <p className="lab-section__body" style={{ marginTop: '1.5rem' }}>
              ちなみに、ナポレオンがこの「女王様」を大変気に入り、わざわざ挨拶（キス）をしたという伝説もあるとか。
              チーズにまつわる歴史やエピソードを知ると、いつものチーズが少し特別なものに見えてきますね。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">3. 五感で楽しむ！贅沢な試食体験</h2>
            <p className="lab-section__body">
              そしてお待ちかねの試食タイム！
              今回は、雪印メグミルクさんの人気商品である「さけるチーズ」「6Pチーズ」「カマンベールチーズ」の3種類をいただきました。
            </p>
            <ul className="lab-publication-list">
              <li><strong>「さけるチーズ」の科学：</strong> 熟練の技術で糸状の組織を作ることで、あの独特の食感が生まれるそうです。「細くさくのが好き！」という学生もいれば、一気に豪快に食べる学生も（笑）。</li>
              <li><strong>カマンベールの変化：</strong> 外側の白カビ部分と、内側のトロッとした部分の違いをじっくり観察。温度による風味の変化も体験しました。</li>
            </ul>
            <p className="lab-section__body">
              「高タンパクで低糖質」というチーズの機能性を学びながら、その美味しさを再発見する。
              管理栄養士を目指す私たちにとって、「栄養の知識」と「食べることの楽しさ」を同時に体験できる、とても贅沢な時間となりました。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">編集後記</h2>
            <p className="lab-section__body">
              企業の最前線で働く方から直接お話を伺うことで、教科書だけでは学べない「食の魅力」に触れることができました。
              「何を食べるか」は「どう生きるか」に繋がっている。
              講師の皆さま、貴重な学びの機会をありがとうございました！
            </p>
            <p className="lab-section__body">
              （今回のセミナーで、学生記者の冷蔵庫にはチーズのストックが3倍に増えました。）
            </p>
          </motion.section>
        </div>

      </div>
    </div>
  )
}
