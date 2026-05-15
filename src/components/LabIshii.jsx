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
          <p className="lab-page__subtitle">膨化食品の物性と「おいしさ」をデータで探究する</p>
        </motion.div>

        <div className="lab-page__content">

          {/* プロフィール */}
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
              <p>十文字学園女子大学 人間生活学部 食物栄養学科</p>
              <p><strong>専門分野：</strong>調理科学（資源の用途開発・雑穀・調理性・物性）</p>
              <p><strong>所属学会：</strong>日本調理科学会、日本家政学会、日本官能評価学会</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                {/* 旧: 「博士（食物栄養学）」→ 業績ページに合わせて「博士（栄養学）」に修正 */}
                十文字学園女子大学大学院 人間生活学研究科にて博士（栄養学）を取得。博士論文では雑穀粉（キヌア・ホワイトソルガムなど）を主材料としたグルテンフリーパンの製パン性と生地物性の研究に取り組みました。
              </p>
              <p className="lab-section__body">
                {/* 旧: 「有期助手として着任」の職称記述を業績ページの職歴（非常勤講師→専任講師→准教授）に修正 */}
                2020年より本学に着任し、非常勤講師・専任講師を経て2025年度より准教授。大東文化大学や早稲田速記医療福祉専門学校でも非常勤講師として教壇に立ってきました。
              </p>
              <p className="lab-section__body">
                調理科学の視点から「食品の物性とおいしさ」を探究することを一貫したテーマとし、物性測定と官能評価の両方を重視した研究を続けています。
              </p>
            </div>
          </motion.section>

          {/* 研究テーマ */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ</h2>
            <p className="lab-section__body">
              大きなテーマは<strong>膨化食品の物性</strong>。キーワードは「膨化食品・食品物性・グルテンフリー・おいしさ」です。
              これまでは雑穀粉（キヌア・ホワイトソルガムなど）を用いたグルテンフリーパンの研究を中心に進めてきました。現在は対象を広げ、新たなテーマにも取り組んでいます。
            </p>

            {/* これまでの研究 */}
            <h3 className="lab-subsection__title" style={{ marginTop: '1.5em' }}>これまでの研究</h3>
            <div className="lab-section__grid" style={{ marginTop: '12px' }}>
              {[
                {
                  title: "雑穀粉を用いたグルテンフリーパンの開発",
                  body: "キヌア粉・ホワイトソルガムなどを使ったグルテンフリーパンの生地物性と製パン性を評価。澱粉の一部置換による食感の改善や、ふんわり・もっちりとした食感を実現する配合の検討を物性測定と官能評価で進めてきました。"
                },
                {
                  title: "キヌア粉の用途開発（パスタ・焼き菓子）",
                  body: "キヌア粉を使ったパスタやスポンジケーキ・マフィンなど、パン以外の食品への展開も研究。食品物性（破断強度・膨化度など）とおいしさの関係を分析しています。"
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

            {/* 現在のテーマ（PPTより） */}
            {/* 旧: テーマ3「アレルギー対応レシピ」・テーマ4「市場価格」はPPT・業績ページに記載なし → 削除し、PPT記載の現在テーマに差し替え */}
            <h3 className="lab-subsection__title" style={{ marginTop: '2em' }}>現在取り組んでいるテーマ</h3>
            <div className="lab-section__grid" style={{ marginTop: '12px' }}>
              {[
                {
                  title: "粉末さらしあんの洋菓子への利用",
                  body: "さらしあん（乾燥白あんの粉末）はグルテンフリー食材です。粉末さらしあんを使ったクッキーの調理特性を調べ、破断特性（硬さ・もろさ）と粒子構造の関連を解析しています。膨化食品としてのクッキーのおいしさを科学的に探ります。"
                },
                {
                  title: "牛肉の物理的特性とおいしさ",
                  body: "牛肉の科学的な分析データと官能評価、物性測定を組み合わせて、牛肉のおいしさを決めている要因は何かを探求しています。"
                },
                {
                  title: "乳幼児食の物理特性基準化（窒息事故予防）",
                  body: "乳幼児の窒息事故予防のための基準づくりを目指し、乳幼児食の物性測定と官能評価を実施します。「安全に食べられる食品の硬さや形状の基準」を探索する、3年間のプロジェクトです。"
                },
                {
                  title: "小麦食パンの減塩——どこまでおいしく食べられるか",
                  body: "塩を入れなくてもパンは焼けますが、発酵生地の状態や食感が大きく変わります。どの程度の減塩まで許容できるか（官能評価）と、塩分量の違いによるパンの物性変化を比較・検証します。"
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

          {/* 主な研究業績 */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">主な著書・論文</h2>
            {/* 追記: 業績ページに記載のある著書2冊を追加 */}
            <ul className="lab-publication-list">
              <li><strong>著書『澱粉の事典』(2025, 共著):</strong> 澱粉の科学・利用・加工に関する専門事典への執筆参加。</li>
              <li><strong>著書『食品物性とテクスチャー』(2022, 共著):</strong> 食品の物性・テクスチャーの基礎から応用をまとめた専門書。</li>
              <li><strong>論文「雑穀粉で調製した生地と製パン性に関する研究」(日本調理科学会誌, 2023, 単著):</strong> 各種雑穀粉の生地特性と製パン性の関係を系統的に解析。</li>
              <li><strong>論文「キヌア粉の一部を澱粉置換したパンの製パン性」(日本家政学会誌, 2022, 共著):</strong> 澱粉置換がキヌアパンの食感・膨化性に与える影響を検討。</li>
              <li><strong>論文「キヌア粉の加工性の検討」(New Food Industry, 2021, 共著):</strong> キヌア粉の食品素材としての特性と加工適性を評価。</li>
              <li><strong>学会発表「野菜・果物の廃棄部を活用した『もったいないだし』の開発」(日本調理科学会, 2024):</strong> 高大連携で取り組んだフードロス削減のためのだし開発。</li>
            </ul>
          </motion.section>

          {/* 4年次の活動 */}
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
                  body: "研究がまとまれば、日本家政学会（5月）または日本調理科学会（9月）でポスター発表を行います。"
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

          {/* ゼミ生募集 */}
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

          {/* メッセージ */}
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
              食の安全や減塩・乳幼児食など社会課題と食品科学の接点に関心がある人を歓迎します。
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
