import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKamiyama() {
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
          <h1 className="lab-page__title">神山 真澄 研究室</h1>
          <p className="lab-page__subtitle">「おいしい」を入口に、「健康」と「安心な暮らし」へ。</p>
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
              <p><strong>神山 真澄（かみやま ますみ）教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科 教授</p>
              <p><strong>専門分野:</strong> 栄養生化学・機能性食品・生活習慣病の予防</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                理化学研究所 横浜研究所 遺伝子多型センター Postdoctoral fellow を経て、長野県工業技術総合センターで味噌や大豆イソフラボンの機能性研究に携り、多様なフィールドで経験を重ねてきました。
              </p>
              <p className="lab-section__body">
                2019年より十文字学園女子大学 食物栄養学科に着任し、2026年から教授として学部・大学院教育と研究指導を担当しています。
              </p>
              <p className="lab-section__body">
                日本栄養・食糧学会、日本糖尿病学会、日本腎臓学会、日本未病学会、日本栄養治療学会、日本栄養改善学会、日本高血圧学会、日本機能性食品医用学会など多くの学会に所属し、ポリフェノールの機能性と生活習慣病予防に関する研究を発信しています。
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
                  title: "1. ポリフェノールと血管・代謝の健康", 
                  body: "味噌の発酵・熟成過程で増加する大豆イソフラボンアグリコンやポリフェノールに着目し、抗酸化能の変化や、酸化 LDL による血管内皮障害の抑制効果を解析しています。" 
                },
                { 
                  title: "2. 機能性食品開発と生活習慣病予防", 
                  body: "味噌・大豆製品・ぶどう・玉ねぎなど、身近な食品に含まれる機能性成分を分析し、「おいしく食べながら高血圧や糖尿病を予防する食べ方」を探究しています。細胞レベルのメカニズム研究と、動物実験の評価を組み合わせ、科学的根拠に基づく機能性食品のあり方を検討しています。" 
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
            <h2 className="lab-section__title">地域連携・産学官連携プロジェクト</h2>
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <h3>熟成黒たまねぎマフィン「くろたまフィン」プロジェクト</h3>
              <p className="lab-section__body">
                エイジェックファームとの「熟成黒たまレシピ開発プロジェクト」において、神山ゼミの学生たちは企画立案から原価計算、試作・官能評価、パッケージデザインまでを担当し、熟成黒たまねぎの機能性とおいしさを両立したマフィン「くろたまフィン」を開発しました。
              </p>
              <p className="lab-section__body">
                学内売店や駅ナカのマルシェ等での販売に加えて、総ポリフェノール量や抗酸化能の分析も行い、地域連携教育の場をそのまま研究のフィールドとしています。
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
            <h2 className="lab-section__title">神山研究室で学べること</h2>
            <div className="lab-section__grid">
              {[
                { 
                  title: "1. 手を動かして学ぶ栄養生化学", 
                  body: "酵素反応速度論、血液生化学指標の測定、mRNA・タンパク質発現解析などの実験を通して、教科書の中の図を「自分のデータ」として理解する経験を重ねます。" 
                },
                { 
                  title: "2. 機能性食品についての卒業研究", 
                  body: "味噌や大豆製品、ぶどう、黒たまねぎなどの機能性評価から、成分評価や新商品開発まで、食と健康を多面的に捉えたテーマに取り組みます。" 
                },
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
            <h2 className="lab-section__title">学生の声・学内外からの評価</h2>
            <ul className="lab-publication-list">
              <li>
                <strong>学生の声より:</strong> 「難しい内容でも、身近な食べ物の話に置き換えて説明してくださるので、毎回『なるほど』と思えます。」「実験がうまくいかないときも、一緒に原因を考えてくれて、次へのモチベーションになります。」
              </li>
              <li>
                <strong>授業評価:</strong> 授業評価サイトでは、神山真澄先生の「神山真澄研究室」に対して授業の充実度 5.0 / 5.0 という高い評価が寄せられており、丁寧な指導と充実した内容が学生から支持されています。
              </li>
              <li>
                <strong>専門家としての信頼:</strong> 多くの学会での発表や委員・評議員としての活動を通じて、機能性食品・ポリフェノール・生活習慣病予防の分野で専門家コミュニティからも厚い信頼を得ています。
              </li>
            </ul>
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
              「食べることが好き」「機能性食品に興味がある」「予防医学に興味がある」——そんな思いを持つ皆さんを神山研究室は歓迎します。
            </p>
            </motion.section>
        </div>
      </div>
    </div>
  );
}
