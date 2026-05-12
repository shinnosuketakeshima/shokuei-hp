import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function StudentColumn2() {
  return (
    <div className="lab-page">
      <div className="container">

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

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">学生コラム / Student Column</p>
          <h1 className="lab-page__title">
            健康×SNS映え！？<br />
            竹嶋ゼミ・芝崎ゼミの「機能性和洋菓子」開発会議に潜入取材！
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
              こんにちは！学生記者です。
              今回は、学内でユニークな食品開発を行っていると噂の「竹嶋ゼミ」に潜入してきました！
            </p>
            <p className="lab-section__body">
              この日の会議のメインテーマは、「桑の葉」と「竹炭パウダー」を活用した新しい機能性和洋菓子の試食会。
              単に美味しいだけではなく、健康へのアプローチや、思わず写真を撮りたくなるような「映え」を意識した、
              学生ならではのアイデアが詰まった開発の裏側をレポートします！
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">血糖値を意識した「桑の葉パン」</h2>
            <p className="lab-section__body">
              まず試食に登場したのは、桑の葉を練り込んだ特製パン。
              桑の葉には糖質の吸収を穏やかにし、血糖値の上昇を抑える効果が期待できるそうです。
            </p>
            <p className="lab-section__body">
              「血糖値を気にする人が食べるものだから、大きなパンをたくさん食べるのは違うかも」
              という学生の鋭い視点から、形は小ぶりなクロワッサン型に。健康志向に寄り添った心遣いが素敵ですね！
            </p>
            <p className="lab-section__body">
              開発段階では、桑の葉を多く入れすぎると「よもぎ」のような強い風味になったり、
              生地の弾力が強くなりすぎたり、少しパサパサ感が出たりと、配合にはかなり苦労した様子。
              「でも、この少しパサッとした感じが逆に『食物繊維が摂れている！』という実感に繋がるかも」と、
              ポジティブな意見も飛び交い、機能性と美味しさのベストバランスを探る試行錯誤が続いていました。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">衝撃の黒さ！新感覚ネオ団子「ブラックみたらし」</h2>
            <p className="lab-section__body">
              続いて登場したのが、竹炭パウダーを使用したお団子。その名も「新感覚のネオ団子」！
              日本伝統の和菓子であるみたらし団子に竹炭を加え、なんと真っ黒なルックスに仕上がっています。
            </p>
            <p className="lab-section__body">
              「こんなに黒くて大丈夫！？」と一瞬ためらってしまうほどの衝撃的な見た目ですが、
              実は竹炭パウダーは無味無臭。食べてみると、味は王道で美味しいみたらし団子そのものなのです！
              この見た目と味のギャップが面白く、「絶対SNS映えする！」と記者も太鼓判を押したくなる仕上がりでした。
            </p>
            <p className="lab-section__body">
              色合いのコントラストがはっきり出るため、食品としての新しい価値やコミュニケーションのきっかけを生み出すポテンシャルを秘めています。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">ifia JAPAN 2026 に向けてラストスパート！</h2>
            <p className="lab-section__body">
              現在2つのゼミでは、5月下旬の展示会に向けて、これらの商品をどうやって量産し、
              美味しい状態のまま提供するかという実践的な課題に取り組んでいます。
              200食近くを効率よく作るためのスケジュール調整や、風味を損なわず形を保つ絶妙な「真空パック」の保存テストなど、
              その話し合いはまるで本物の食品メーカーのよう！
            </p>
            <p className="lab-section__body">
              学生たちの柔軟な発想と、それを形にするための地道な努力を目の当たりにし、とても刺激を受ける取材となりました。
              完成した商品が展示会でお披露目される日が、今からとても楽しみです！
            </p>
          </motion.section>
        </div>

      </div>
    </div>
  )
}
