import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabIshii() {
  return (
    <div className="lab-page">
      <div className="container">
        <motion.div 
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">石井 和美 研究室</h1>
          <p className="lab-page__subtitle">雑穀粉の用途開発と膨化食品の物性——「おいしさ」をデータで探究する</p>
        </motion.div>

        <div className="lab-page__content">
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員プロフィール</h2>
            <div className="lab-pi-profile">
              <p><strong>石井 和美（いしい かずみ）准教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科 准教授</p>
              <p><strong>専門分野：</strong>調理科学、雑穀粉を主材料としたパンの開発・膨化食品の物性</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                十文字学園女子大学大学院人間生活学研究科にて博士（食物栄養学）を取得。博士論文では「雑穀粉を使用したグルテンフリーパンの創製」に取り組みました。
              </p>
              <p className="lab-section__body">
                2015年に食物栄養学科 有期助手として着任して以来、非常勤講師・専任講師を経て、2025年度より准教授として教育・研究に携わっています。
              </p>
              <p className="lab-section__body">
                雑穀粉パンや膨化食品の物性解析、アレルギー対応レシピの開発を通じて、「現場で役立つ調理科学」を追究しています。
              </p>
            </div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ</h2>
            <p className="lab-section__body">
              大きなテーマは<strong>膨化食品の物性</strong>。キーワードは「雑穀・グルテンフリー・食品物性・おいしさ」です。
            </p>
            <div className="lab-section__grid" style={{ marginTop: '16px' }}>
              {[
                { 
                  title: "1. 雑穀粉を用いたグルテンフリーパンの開発", 
                  body: "キヌア粉・うるちひえなどの雑穀粉を使用したグルテンフリーパンの生地物性や製パン性を評価。ふんわり・もっちりとした食感を実現する配合や製法を検討し、物性測定と官能評価でおいしく続けられるグルテンフリーパンの条件を探ります。食物繊維を強化したパンの開発も進めています。"
                },
                { 
                  title: "2. 膨化食品の物理的特性とおいしさ", 
                  body: "穀類・雑穀を原料とした膨化食品を対象に、破断強度や膨化度、気泡構造などの物性を測定し、「サクサク」「カリカリ」といった食感の違いを調理条件との関係から解析しています。キヌア粉を用いたスポンジケーキ・マフィン・パスタ、さらしあんを用いた焼き菓子なども研究対象としています。"
                },
                { 
                  title: "3. アレルギー対応レシピの考案", 
                  body: "小麦粉を各種穀粉に変更したミルクレープ、パン粉を高野豆腐に置き換えたかぼちゃのスコップコロッケ、特定原材料等28品目を全て使用しないおやきなど、アレルギーを持つ方でも楽しめるレシピの開発に取り組んでいます。カルボナーラやキッシュのアレルギー対応版も試作してきました。"
                },
                { 
                  title: "4. 管理栄養士と食品の市場価格", 
                  body: "管理栄養士として、食品の価格動向を把握することも重要な視点です。生鮮食品の価格に影響を与える要因（飼料・燃料費の高騰、鳥インフルエンザの影響など）を事例で学び、実践的な食の専門家としての視野を広げます。"
                }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  className="lab-section__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">4年次の活動</h2>
            <div className="lab-section__grid">
              {[
                {
                  title: "学会発表",
                  body: "研究がまとまれば、4年次に日本家政学会（5月）または日本調理科学会（9月）でポスター発表を行います。"
                },
                {
                  title: "桐華祭発表・卒業論文",
                  body: "桐華祭でのポスター発表と、卒業論文としての取りまとめを行います。"
                }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  className="lab-section__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">こんなゼミ生を募集します</h2>
            <div className="lab-section__grid">
              {[
                { title: "実験や調理が好き・興味がある", body: "試作や物性測定を楽しめる方、「なぜ？」という疑問を大切にできる方を歓迎します。" },
                { title: "最後まで諦めない", body: "実験がうまくいかないことも多いですが、粘り強く取り組める方と一緒に研究を進めたいと思っています。" },
                { title: "積極的にゼミに参加する", body: "指示を待つのではなく、自分で考えて動けることが大切です。積極的な姿勢でゼミに関わってください。" },
                { title: "約束を守り、努力できる", body: "卒業研究と国家試験の勉強を両立させる努力と、約束・期限を守る姿勢を大切にしています。" },
                { title: "協調性がある", body: "ゼミは仲間と一緒に進めるもの。互いに支え合い、切磋琢磨できる雰囲気を大事にしています。" },
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  className="lab-section__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">受験生・在学生へのメッセージ</h2>
            <p className="lab-section__body">
              パンづくりやお菓子づくりが好きな人、グルテンフリーや雑穀に興味がある人、
              アレルギーを持つ方が食を楽しめる世界を「データ」で作っていきたい人を歓迎します。
            </p>
            <p className="lab-section__body">
              生地をこねる手の感覚と実験データの両方を大切にしながら、
              「おいしさ」を科学的に追究していきましょう。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
