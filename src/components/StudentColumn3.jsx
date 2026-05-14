import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import lectureImg from '../cheese-seminar-lecture.jpg'
import camembertImg from '../cheese-camembert.jpg'
import tastingImg from '../cheese-tasting.jpg'

export default function StudentColumn3() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.a
          href="/"
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
          <p className="lab-page__eyebrow">学生コラム / Campus Report</p>
          <h1 className="lab-page__title">
            チーズに"王様"と"女王様"がいた！<br />
            骨の衝撃映像と食育論セミナーレポート
          </h1>
          <p className="lab-page__subtitle">2026年5月13日 食物栄養学科 学生記者</p>
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
              こんにちは、学生記者です！
              今回は「食育論」の授業に、日本を代表する乳業メーカー・雪印メグミルク株式会社の方をゲスト講師にお招きした特別セミナーをレポートします。
            </p>
            <p className="lab-section__body">
              「チーズって、なんとなく好き」くらいのテンションで教室に入った私でしたが、90分後には「今すぐカマンベールを買いに行きたい」という気持ちになっていました。何があったのか、順を追ってお伝えします。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">1. 「日本国民を健康にしたい」——100年前の約束</h2>
            <p className="lab-section__body">
              講義の冒頭、印象に残ったのは創業者の言葉です。
              今から100年前、食が豊かでなかった時代に「栄養不足の日本人に、良質なタンパク質とカルシウムを届けたい」という強い信念のもと、この会社は誕生したといいます。
            </p>
            <p className="lab-section__body">
              「企業が食育をするって、結局は商品を売るためでしょ？」と少しだけ斜に構えていた私ですが、100年続く使命感を聞いて、その考えはきれいに吹き飛びました。現代は飽食の時代と言われながら、「若い女性の痩せすぎ」「カルシウム不足」という新たな課題があります。問題の形が変わっても、向き合い続けている姿勢に、企業の社会的責任の重さを感じました。
            </p>

            <div className="column-figure">
              <img src={lectureImg} alt="食育論セミナーの様子" />
              <p className="column-figure__caption">真剣な眼差しで企業の食育活動について学ぶ学生たち</p>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">2. 「骨がスカスカになる」——映像が教えてくれた現実</h2>
            <p className="lab-section__body">
              今回のセミナーで一番衝撃を受けたのが、カルシウム不足が進んだ骨の映像です。
              健康な骨と比べて、まるでスポンジのようにスカスカになった断面——「あ、これが骨粗鬆症か」と、文字で読むのとは全然違うリアリティがありました。
            </p>
            <p className="lab-section__body">
              骨密度は若い時期にピークを迎え、その後は維持か減少していく一方です。
              ダイエット志向や食生活の偏りから、20代女性はカルシウム不足に陥りやすいとのこと。
              映像を見た後では「カルシウムをちゃんと摂らなきゃ」という気持ちが、知識ではなく本能として湧き上がってきました。
            </p>

            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>骨密度のピークは今</h3>
                <p>骨密度は20代前半でピークに達し、その後は加齢とともに低下。若い今のうちにカルシウムをしっかり摂ることが将来を左右します。</p>
              </div>
              <div className="lab-section__card">
                <h3>若年女性のリスク</h3>
                <p>ダイエットや偏食によるカルシウム不足が深刻化。将来の骨粗鬆症予防は、毎日の食事の積み重ねで決まります。</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">3. 王様と女王様——チーズの世界は奥が深い</h2>
            <p className="lab-section__body">
              講義では、チーズの歴史を紹介する動画も上映されました。
              その中で登場したのが「チーズの王様」ロックフォールと、「チーズの女王様」カマンベール。
              そんな称号があったなんて、チーズをただのトッピング扱いしていた自分が少し恥ずかしくなりました。
            </p>
            <p className="lab-section__body">
              栄養面での話も驚きの連続でした。牛乳からチーズを作る際、タンパク質の約8割がチーズ側に残るため、チーズは「高タンパク・低糖質」の優秀な食品だといいます。
              ダイエット中でもタンパク質とカルシウムを効率よく摂れる——忙しい学生生活にこれほど相性のいい食品はないかもしれません。
            </p>

            <div className="column-figure">
              <img src={camembertImg} alt="雪印北海道100カマンベールチーズ" />
              <p className="column-figure__caption">チーズの女王様、カマンベール。北海道産生乳100%使用</p>
            </div>

            <div className="column-memo">
              <p className="column-memo__label">栄養メモ</p>
              <p>牛乳からチーズを作る際、タンパク質の約8割がチーズに残ります。高タンパク・低糖質で、カルシウムも豊富。少量でも効率よく栄養を補給できる、まさに忙しい学生の味方です。</p>
            </div>

            <p className="lab-section__body">
              そして講義後半、待望の試食タイムが始まりました。
              丁寧に作られたカマンベールチーズをひと口食べると、クリーミーな風味と深いコクが口いっぱいに広がります。
              「美味しい」と感じる体験こそが食育の第一歩だと、頭だけでなく体で実感した瞬間でした。
            </p>

            <div className="column-figure">
              <img src={tastingImg} alt="チーズの試食を体験する学生たち" />
              <p className="column-figure__caption">実際に商品を手に取り、その価値を体感する学生たち</p>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">今日から始める「チーズのある生活」</h2>
            <p className="lab-section__body">
              「明日食べるものに困ることはなくても、将来の健康に不安を残してはいけない」。
              今回のセミナーを通じて、私たちは自分の体と向き合う大切さを改めて学びました。
            </p>
            <p className="lab-section__body">
              おやつを一口サイズのチーズに変える、サラダにトッピングしてみる。
              そんな小さな選択の積み重ねが、数十年後の自分の骨を守ります。
              管理栄養士を目指している私たちだからこそ、今から実践していきたいと思います。
            </p>
            <p className="lab-section__body">
              雪印メグミルク株式会社の皆様、貴重な学びの機会をありがとうございました！
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
              正直なところ、セミナー前の私にとってチーズは「おいしいもの」でしかありませんでした。
              でも骨がスカスカになる映像を見て、高タンパク・低糖質という栄養の話を聞いて、王様と女王様のエピソードに笑って、最後に試食までさせてもらったら——気づけばすっかりチーズのことが好きになっていました。
            </p>
            <p className="lab-section__body">
              管理栄養士を目指す私たちが将来伝えることになる「食の大切さ」は、こういう体験の積み重ねから生まれるんだと思います。
              知識だけじゃなく、「美味しかった」という記憶も一緒に届けられる栄養士になりたいな、と感じたセミナーでした。
            </p>
            <p className="lab-section__body">
              次回のコラムもお楽しみに！
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  )
}
