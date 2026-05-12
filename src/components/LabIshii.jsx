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
          <p className="lab-page__subtitle">雑穀粉と調理科学で、「おいしい」と「やさしい」を両立する食をデザインする</p>
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
              <p><strong>専門分野:</strong> 調理科学、雑穀粉を主材料としたパンの開発</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                十文字学園女子大学大学院人間生活学研究科にて博士（食物栄養学）を取得。博士論文では「雑穀粉を使用したグルテンフリーパンの創製」に取り組みました。
              </p>
              <p className="lab-section__body">
                2015年に食物栄養学科 有期助手として着任して以来、非常勤講師・専任講師を経て、2025年度より准教授として教育・研究・地域連携に携わっています。
              </p>
              <p className="lab-section__body">
                雑穀粉パンや膨化食品の物性解析、高大連携による廃棄部位を活用しただしの開発などを通じて、「現場で役立つ調理科学」を追究しています。
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
            <div className="lab-section__grid">
              {[
                { 
                  title: "1. 雑穀粉を用いたグルテンフリーパンの開発", 
                  body: "キヌア粉などの雑穀粉を使用したグルテンフリーパンの生地物性や製パン性を評価し、ふんわり・もっちりとした食感を実現する配合や製法を検討しています。粘弾性や気泡構造といった客観的データと、官能評価で得られる「食べ心地」を組み合わせて、おいしく続けられるグルテンフリーパンの条件を探ります。" 
                },
                { 
                  title: "2. 膨化食品の物理的特性とおいしさ", 
                  body: "穀類・雑穀を原料とした膨化食品を対象に、破断強度や膨化度、気泡構造などの物性を測定し、「サクサク」「カリカリ」といった食感の違いを調理条件との関係から解析しています。減塩・低脂質でも満足感の高いスナックや朝食シリアルの開発に応用できる知見の蓄積を目指しています。" 
                },
                { 
                  title: "3. 野菜・果物の廃棄部位を活用しただし・加工品", 
                  body: "ニンジンの皮やダイコンの葉、柑橘類の皮など、通常は廃棄される部分を用いた「だし」や加工食品を開発し、成分溶出量や嗜好性の評価を通じてフードロス削減につながるレシピを検討しています。高校との連携授業の中で、高校生と一緒に実験・試食・発表を行うなど、教育と研究と地域連携を一体的に進めています。" 
                },
                { 
                  title: "4. 授業・実習と連動した調理科学教育", 
                  body: "調理実習や実験で得られた学生のデータや気づきをもとに、卒業研究や地域連携プロジェクトに発展させる仕組みづくりにも取り組んでいます。" 
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
            <h2 className="lab-section__title">地域連携・高大連携の取り組み</h2>
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <h3>野菜・果物の廃棄部を活用した「だし」プロジェクト</h3>
              <p className="lab-section__body">
                高校との連携授業では、野菜や果物の廃棄部を用いただしを調製し、成分解析や官能評価を行うことで、「おいしさ」と「もったいない」を両立する調理法を検討しています。
              </p>
            </div>
            <div className="lab-section__card">
              <h3>地域とともに進める調理科学</h3>
              <p className="lab-section__body">
                地域の農産物や加工品を用いたレシピ開発、健康講座での調理デモやミニ講義などを通して、大学での研究成果を地域の食卓や学校給食の現場に還元しています。
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
            <h2 className="lab-section__title">石井研究室で学べること</h2>
            <div className="lab-section__grid">
              {[
                { 
                  title: "1. 「なぜ？」から始める調理科学", 
                  body: "焼き色や膨らみ、食感の違いを、配合・加熱条件・物性値から説明できるようになることを目指します。" 
                },
                { 
                  title: "2. グルテンフリー・雑穀パンの試作と評価", 
                  body: "雑穀粉を使ったパンや焼き菓子の試作を重ね、物性測定と官能評価で「自分たちのエビデンス」を作ります。" 
                },
                { 
                  title: "3. フードロス削減につながるレシピ開発", 
                  body: "廃棄されがちな部位を活かしたレシピを考案し、高校や地域と連携したプロジェクトで発表する機会もあります。" 
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
            <h2 className="lab-section__title">学生の声・研究室の雰囲気</h2>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>学生の声より</h3>
                <p className="lab-section__body">
                  「試作がうまくいかないときも、一緒に原因を探してくれるので、次の実験が楽しみになります。」<br />
                  「感覚的だった“おいしさ”を、データで説明できるようになってきたのが嬉しいです。」
                </p>
              </div>
              <div className="lab-section__card">
                <h3>研究室の雰囲気</h3>
                <p className="lab-section__body">
                  アットホームな雰囲気の中で、しっかり計測し、ていねいに味わい、結果を言葉にする——そんな「おいしい実験室」です。
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
            <h2 className="lab-section__title">受験生・在学生へのメッセージ</h2>
            <p className="lab-section__body">
              パンづくりやお菓子づくりが好きな人、グルテンフリーや雑穀に興味がある人、フードロス削減に「食」で貢献したい人を歓迎します。
            </p>
            <p className="lab-section__body">
              生地をこねる手の感覚と、実験データの両方を大切にしながら、「おいしい」と「やさしい」を両立する食のかたちを一緒に考えていきましょう。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
