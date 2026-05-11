import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function StudentColumn1() {
  return (
    <div className="lab-page">
      <div className="container">

        {/* 戻るリンク */}
        <motion.a 
          href="#" 
          className="lab-page__back-link"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={16} />
          <span>トップページに戻る</span>
        </motion.a>

        {/* ページヘッダー */}
        <motion.div 
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">学生コラム / Student Column</p>
          <h1 className="lab-page__title">
            白衣の「三権分立」？<br />管理栄養士の卵たちのリアルな裏事情
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
              皆さん、こんにちは！食物栄養学科の学生ライターです。
              最近、私たちの学科の新しいホームページが立ち上がりました。
              「え、これ公式……だよね？」と疑いたくなるほどのクオリティに、私たち学生も「ちゃんとした記事を載せなきゃ！」と、ちょっとだけ背筋を伸ばしているところです。
            </p>
            <p className="lab-section__body">
              さて、記念すべきコラム第1回目は、私たちの相棒であり、アイデンティティでもある「白衣」についてお届けします。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">1. 知ってた？白衣には「3つの顔」がある</h2>
            <p className="lab-section__body">
              ひと口に「白衣」と言っても、実は主に3種類のスタイルが存在します。
            </p>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>大量調理実習用（上下セット）</h3>
                <p>給食の実習などで着用する、気合の入ったフル装備です。</p>
              </div>
              <div className="lab-section__card">
                <h3>調理実習用（白衣1枚）</h3>
                <p>料理の基本を学ぶときの正装。白衣を「ペロン」と1枚羽織るおなじみのタイプです。</p>
              </div>
              <div className="lab-section__card">
                <h3>実験用</h3>
                <p>解剖生理学や食品化学の実験で使うもの。</p>
              </div>
            </div>
            <p className="lab-section__body" style={{ marginTop: '1.5rem' }}>
              これら3つは、用途によって厳密に使い分けられているんです。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">2. 「洗濯の頻度」という、先生には言えない境界線</h2>
            <p className="lab-section__body">
              ここだけの話ですが、学生の間で密かに議論されるのが「白衣、いつ洗うか問題」です。
            </p>
            <p className="lab-section__body">
              大量調理の作業着は、衛生上の理由で「使ったら即・洗濯」が絶対の掟。でも、実験用の白衣はどうでしょう？
              「やばそうな液体がつかない限り、実は数回使ってから……」なんて声が漏れることも。先生にバレたらドキドキものですが、私たちのロッカーには、そんな日々の奮闘の証がぎっしり詰め込まれているのです。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">3. 臨地実習への第一歩！「写真撮影」と「黒染め」の攻防戦</h2>
            <p className="lab-section__body">
              今、私たちの間で一番のトピックといえば、臨地実習に向けた写真撮影です。
              実習先へ提出する大切な写真なので、身だしなみには一切の妥協が許されません。
            </p>
            <p className="lab-section__body">
              そこで浮上するのが「髪色」の問題。
              オシャレを楽しみたいお年頃ですが、撮影に向けて「不本意ながら黒染めした！」という声や、「インナーカラーをどう隠すか」という切実な悩みも。
              「スプレーで乗り切れる？」「写真屋さんでなんとか加工できないかな？」と、あの手この手で「完璧な黒髪」を目指して奮闘するのも、この時期の学科ならではの光景です。
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
              いかがでしたか？
              外から見れば「真面目に調理や実験に取り組む学生」ですが、その白衣の裏側には、洗濯に追われたり、実習前の髪色に一喜一憂したりする、泥臭くて楽しい日常が隠れています。
            </p>
            <p className="lab-section__body">
              このホームページでは、そんな私たちの「等身大の姿」も、新着記事としてどんどん発信していければと思っています。
              次は、個性が爆発（？）している「ゼミの日常」についても書いてみようかな？
            </p>
            <p className="lab-section__body">
              次回もお楽しみに！
            </p>
          </motion.section>
        </div>

      </div>
    </div>
  )
}
