import { ArrowLeft, Sparkles, Quote, ExternalLink } from 'lucide-react'
import RelatedReading from './RelatedReading'

/** 解剖生理学実験で制作した栄養アドバイスアプリのデモ（学籍番号を含まない公開用ファイル名） */
const NUTRITION_APP_DEMO_URL = '/demos/anatomy-lab-nutrition-app.html'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import studentsCoding from '../assets/eiyo-app/students-coding.jpg'
import appInput from '../assets/eiyo-app/app-input.jpg'
import appResultTable from '../assets/eiyo-app/app-result-table.png'
import appAdvice from '../assets/eiyo-app/app-advice.png'
import studentAppDesign from '../assets/eiyo-app/student-app-design.jpg'

export default function EiyoAppReport() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/lab-takeshima" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>竹嶋研究室に戻る</span>
          </Link>
        </motion.div>

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">教員コラム / Special Report</p>
          <h1 className="lab-page__title">
            管理栄養士の卵が、AIで“自分のアプリ”をつくる日。<br />
            解剖生理学実験 × 生成AIの挑戦
          </h1>
          <p className="lab-page__subtitle">2026年5月26日 食物栄養学科 竹嶋 伸之輔 教授</p>
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
              高校生のみなさん、こんにちは。食物栄養学科の竹嶋です。
            </p>
            <p className="lab-section__body">
              「管理栄養士って、栄養計算とか調理のイメージ……。<strong>プログラミングなんて関係ないですよね？</strong>」
              ──オープンキャンパスでよく聞かれる質問です。
            </p>
            <p className="lab-section__body">
              でも、私たちはちょっと違う答えを用意しています。
              先日行われた<strong>2年生「解剖生理学実験」</strong>の授業では、学生たちが<strong>生成AIを相棒に、自分専用の“栄養アドバイスアプリ”をゼロから開発する</strong>という、ちょっと驚きの挑戦をしました。今日はその現場を紹介させてください。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">1. まずは「自分のからだ」を測ることから</h2>
            <p className="lab-section__body">
              この日の実験で使ったのは、世界中のジムや病院でも使われている本格的な体組成計<strong>「InBody」</strong>と、安静時の代謝量をリアルタイムで測れる<strong>「MedGem（呼気代謝測定機）」</strong>。
              学生は順番に機械の上に乗ったり、マスクをつけて呼吸の様子を測ったりしながら、
              <strong>体脂肪率・筋肉量・体水分量・基礎代謝量</strong>といった「自分のからだの中身」を数字でつかんでいきます。
            </p>
            <p className="lab-section__body">
              「思ったより筋肉ある！」「むくみ指標が基準より高い……寝不足のせい？」
              ──測定結果が出るたびに、教室のあちこちで小さな歓声と悲鳴（？）が上がります。
              データはただの数字ではなく、<strong>“自分のからだの取扱説明書”</strong>。ここから先の学びが、ぐっと自分ごとになる瞬間です。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">2. 「自分の数値」を、世界に一つのアプリへ</h2>
            <p className="lab-section__body">
              ここからが、今回の授業の本番です。
              測定したデータをExcelにまとめて終わり……ではなく、
              <strong>「測ったデータを入力すると、その人にぴったりの栄養アドバイスを返してくれるWebアプリ」</strong>
              を、学生一人ひとりが<strong>自分の手で作る</strong>ことに挑戦しました。
            </p>

            <div className="column-figure">
              <img
                src={studentsCoding}
                alt="ノートパソコンに表示された、学生が制作中の栄養アドバイスアプリ「かんたん栄養相談」の画面"
                loading="lazy"
                decoding="async"
              />
              <p className="column-figure__caption">▲ 学生のノートPC画面。左にコード、右にプレビュー。「かんたん栄養相談」など、思い思いのアプリ名が並びます。</p>
            </div>

            <p className="lab-section__body">
              「えっ、管理栄養士の卵がコードを書くんですか？」と思った方、安心してください。
              今回使ったのは、いま世界中で話題になっている<strong>「バイブコーディング（Vibe Coding）」</strong>という手法。
              <strong>プログラミングの専門知識がなくても、AIと“おしゃべり”するだけで、本物のWebアプリを作れてしまう</strong>新しい開発スタイルです。
            </p>
            <p className="lab-section__body">
              十文字学園女子大学では、<strong>学生全員に「Geminiアカウント（Googleの生成AI）」が無料で配布</strong>されています。
              学生たちはそのGeminiに、「BMIと筋肉量と代謝量を入力したら、栄養アドバイスを返してくれるアプリを作って」と日本語で頼むところからスタート。
              何度かやり取りするうちに、画面の中に<strong>本当に動くアプリ</strong>が現れてきます。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">3. デザインも、機能も、“自分色”に</h2>
            <p className="lab-section__body">
              ベースが出来たら、ここから先は<strong>完全にオリジナルの世界</strong>。
              「ピンクで桜のモチーフを散らしたい」「ひまわりカラーで元気な雰囲気に」「アプリの名前は『ひまわり栄養相談室』にしよう」など、
              <strong>同じ授業なのに、出来上がるアプリは全員バラバラ</strong>です。
            </p>

            <div className="column-figure">
              <img
                src={appInput}
                alt="桜のモチーフでデザインされた栄養アドバイスアプリ『からだバランス栄養たより』の入力画面"
                loading="lazy"
                decoding="async"
              />
              <p className="column-figure__caption">▲ ある学生の作品『からだバランス栄養たより』。桜モチーフ＆ピンク基調で、入力フォームまでこだわり抜いた一枚。</p>
            </div>

            <div className="column-figure">
              <img
                src={studentAppDesign}
                alt="『るんるん栄養アカデミー』というタイトルの学生制作アプリ。マイスターノート風のデザイン"
                loading="lazy"
                decoding="async"
              />
              <p className="column-figure__caption">▲ こちらは『るんるん栄養アカデミー 〜BWA・代謝データを読み解くマイスターノート〜』。ネーミングセンスも光ります。</p>
            </div>

            <p className="lab-section__body">
              ボタンの色、フォント、項目の並び順、表示するメッセージのトーン……。
              「自分が患者さんだったら、どんなアプリだったら読みたいかな？」
              <strong>“管理栄養士の視点”でデザインを考える</strong>──これは、ふつうのプログラミング教室ではなかなか味わえない体験です。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">4. 「ちゃんと動く」ってこんなにうれしい</h2>
            <p className="lab-section__body">
              数値を入力して、「アドバイスを作成する」ボタンを押すと──
              画面に<strong>BMI・水分バランス・筋肉量・実測代謝量</strong>などが表で整理され、その下に
              <strong>その人だけのコメント</strong>がふわっと表示されます。
            </p>

            <div className="column-figure">
              <img
                src={appResultTable}
                alt="栄養アドバイスアプリの出力画面。BMI・むくみ・筋肉量比率を判定したテーブル"
                loading="lazy"
                decoding="async"
              />
              <p className="column-figure__caption">▲ アプリの出力例（前半）。BMI・むくみ（ECW/TBW）・筋肉量比率を“信号機方式”で判定。</p>
            </div>

            <div className="column-figure">
              <img
                src={appAdvice}
                alt="アプリが生成した栄養アドバイスの画面。お食事のポイントと水分・生活習慣のポイントが書かれている"
                loading="lazy"
                decoding="async"
              />
              <p className="column-figure__caption">▲ そして後半。実測代謝量と標準計算値の差を見ながら、<strong>「今日からできるおすすめ栄養アドバイス」</strong>が個別に生成されます。</p>
            </div>

            <p className="lab-section__body">
              ちゃんと考えると、これはなかなかすごいことです。
              「<strong>日本人の食事摂取基準（2025年版）</strong>」をAIに読み込ませ、
              ハリス・ベネディクト式による標準代謝量との比較、ECW/TBWによる水分バランス評価、サルコペニア傾向のチェック──
              <strong>学生たちは、管理栄養士国家試験にも出てくる知識を、自分のアプリのロジックとして“実装”してしまった</strong>のです。
            </p>

            <div className="lab-section__card eiyo-app-demo-card">
              <h3>実際に動くアプリを、あなたも試してみよう</h3>
              <p className="lab-section__body" style={{ marginBottom: '1rem' }}>
                授業で提出された作品のひとつ<strong>「からだの栄養・水分バランス通信」</strong>を、
                このサイト上でそのままお試しいただけます。
                年齢・身長・体重・むくみ指標（ECW/TBW）・筋肉量・MedGem実測代謝量を入力して
                「分析結果シートを作成する」を押すと、BMI判定から代謝タイプまで、
                管理栄養士の視点でまとめたアドバイスが表示されます。
              </p>
              <p className="lab-section__body" style={{ marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--stone)' }}>
                ※画面に最初から入っている数値は<strong>デモ用のサンプル</strong>です。ご自身のデータに書き換えてお試しください。
              </p>
              <a
                href={NUTRITION_APP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary eiyo-app-demo-card__link"
              >
                栄養アドバイスアプリを開く（新しいタブ）
                <ExternalLink size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </a>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">5. エラーは“敵”じゃない。AIと一緒に乗り越える</h2>
            <p className="lab-section__body">
              もちろん、すべてが順調だったわけではありません。
              「計算ボタンを押しても何も起きない！」「Geminiに何度直してもらってもエラーが消えない……！」
              ──開発の途中で、頭を抱える学生もたくさんいました。
            </p>
            <p className="lab-section__body">
              そこからの行動が、私たち教員にとっていちばん嬉しいシーンでした。
              <strong>「じゃあ次はChatGPTに見せてみよう」「Geminiに、コード全部を別の角度から書き直してって頼んでみる」</strong>
              ──いつのまにか、学生たちは<strong>複数の生成AIを使い分け、相談しながらバグを解決していく</strong>姿勢を身につけていました。
            </p>
            <p className="lab-section__body">
              これは、AI時代の社会で本当に求められている力です。
              「正解を覚える勉強」から、「<strong>AIと一緒に正解を作りにいく勉強</strong>」へ。
              管理栄養士を目指す学生たちが、そのど真ん中で奮闘してくれました。
            </p>

            <div className="student-voice-box">
              <div className="student-voice-box__header">
                <Quote className="student-voice-box__icon" size={24} />
                <h2 className="student-voice-box__title">学生のひとこと</h2>
              </div>
              <div className="student-voice-box__content">
                <p className="lab-section__body">
                  「最初は『プログラミングなんて無理！』と思っていたけど、AIに日本語で頼んだら本当にアプリが動いて感動しました。
                  自分の測ったデータが、自分の作ったアプリで読み解ける、というのが新鮮で、栄養の勉強がもっと好きになりました。」
                </p>
                <p className="lab-section__body">
                  「エラーが直らなくて泣きそうになったけど、ChatGPTにも聞いてみたら一発で原因がわかってびっくり。
                  “AIをうまく使えるかどうか”は、これからの管理栄養士に絶対必要なスキルだと思います。」
                </p>
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
            <h2 className="lab-section__title">6. これからの管理栄養士は、「現場のDX人材」へ</h2>
            <p className="lab-section__body">
              病院、学校、保育所、福祉施設、企業、自治体──
              管理栄養士が活躍する現場では、いま、いたるところで<strong>デジタル化（DX）</strong>が進んでいます。
              栄養指導の記録、献立の管理、患者さんへのアドバイス、健康データの可視化……。
              <strong>「ITは情シスの仕事、栄養士は栄養のことだけ」では、もう通用しない時代</strong>になりつつあります。
            </p>
            <p className="lab-section__body">
              だからこそ私たちは、こんな成功体験を学生に持たせたいと考えています。
            </p>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3><Sparkles size={18} style={{ verticalAlign: 'middle', marginRight: 6 }} />作れる、という自信</h3>
                <p>「コードを専門に習っていなくても、自分たちの仕事に役立つアプリは自分たちで作れる」。この感覚は、卒業後に必ず武器になります。</p>
              </div>
              <div className="lab-section__card">
                <h3><Sparkles size={18} style={{ verticalAlign: 'middle', marginRight: 6 }} />AIを使い倒す力</h3>
                <p>1つのAIに頼り切らず、GeminiとChatGPTを使い分け、ときに議論させながら答えに近づく。AI時代のリテラシーを“実体験”として身につけます。</p>
              </div>
              <div className="lab-section__card">
                <h3><Sparkles size={18} style={{ verticalAlign: 'middle', marginRight: 6 }} />現場を変える側へ</h3>
                <p>「システムは誰かに作ってもらうもの」ではなく、「自分たちの手で、現場の課題を解決するツールを生み出せる」。そんなDXリーダーへ。</p>
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
            <h2 className="lab-section__title">高校生のみなさんへ</h2>
            <p className="lab-section__body">
              「栄養に興味はあるけど、ちょっと地味なイメージ……」
              「文系だからプログラミングなんて怖い……」
              そう感じている高校生がいたら、ぜひこの記事の写真をもう一度見てみてください。
            </p>
            <p className="lab-section__body">
              桜が舞うピンクのアプリ、ひまわりカラーの相談室、マイスターノート風のスタイリッシュな画面──
              これらは全部、<strong>“ふつうの管理栄養士の卵”たちが、ほんの数時間で作った作品</strong>です。
              専門知識も、デザインのセンスも、最初は誰だってゼロからのスタート。
              そして、それを引き出してくれる<strong>AIという最強の相棒</strong>は、今日からあなたの隣にもいます。
            </p>
            <p className="lab-section__body">
              読んだだけではピンとこない方は、ぜひ上の<strong>「栄養アドバイスアプリを開く」</strong>から実際の画面を触ってみてください。
              「え、本当に学生が作ったの？」──そう感じたら、それがこの授業の成功です。
            </p>
            <p className="lab-section__body">
              十文字学園女子大学 食物栄養学科では、こんな
              <strong>「栄養 × データ × AI」</strong>の学びを、これからもどんどん広げていきます。
              みなさんと一緒に、未来の管理栄養士像をアップデートしていけたら、こんなに楽しいことはありません。
            </p>
            <p className="lab-section__body">
              2年生のみなさん、本当にお疲れさまでした！
              ユニパに提出された全員分の作品、ひとつひとつじっくり拝見しています。次の授業も楽しみにしていてください。
            </p>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-section__card">
              <h3>関連リンク</h3>
              <p>このコラムを執筆した竹嶋先生の研究室、学科の特色、授業で制作したアプリのデモはこちらから。</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a
                  href={NUTRITION_APP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  栄養アドバイスアプリ（デモ）
                  <ExternalLink size={14} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
                </a>
                <Link to="/lab-takeshima" className="btn btn--primary">
                  竹嶋研究室 紹介ページ
                </Link>
                <Link to="/features" className="btn btn--primary">
                  学科の特色
                </Link>
              </div>
            </div>
          </motion.section>

          <RelatedReading links={[]} />

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .student-voice-box {
          background: #f8fafc;
          border-radius: 1rem;
          padding: 2rem;
          margin: 3rem 0 1rem;
          border-left: 4px solid var(--forest);
        }
        .student-voice-box__header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .student-voice-box__icon {
          color: var(--forest);
          opacity: 0.5;
        }
        .student-voice-box__title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: #1e293b;
        }
        .btn--primary {
          background: var(--forest);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
          display: inline-block;
        }
        .btn--primary:hover {
          opacity: 0.9;
        }
        .eiyo-app-demo-card {
          margin-top: 2rem;
          border: 2px solid var(--forest);
          background: linear-gradient(135deg, #f8faf8 0%, #fff 100%);
        }
        .eiyo-app-demo-card h3 {
          color: var(--forest);
          margin-bottom: 0.5rem;
        }
        .eiyo-app-demo-card__link {
          display: inline-flex;
          align-items: center;
        }
      `}} />
    </div>
  )
}
