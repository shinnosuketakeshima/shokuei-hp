import { ArrowLeft, Baby, Activity, Utensils, GraduationCap, Award, BookOpen, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabNakaoka() {
  return (
    <div className="lab-page">
      <div className="container">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* 旧: "Child Nutrition & Applied Nutrition" → 業績ページの専門分野に合わせて修正 */}
          <p className="lab-page__eyebrow">食生活学・応用健康科学</p>
          <h1 className="lab-page__title">中岡 加奈絵 研究室</h1>
          <p className="lab-page__subtitle">
            子どもの「からだ」と「食」と「生活習慣」をつなぐ。<br />
            調査研究から実験研究まで、多角的なアプローチで子どもの健康を科学しています。
          </p>
        </motion.div>

        <div className="lab-page__content">
          {/* Profile Section */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員プロフィール</h2>
            <div className="lab-pi-profile">
              <p><strong>中岡 加奈絵（なかおか かなえ）准教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科</p>
              {/* 旧: 「子どもの食生活・食育、応用栄養学」→ 業績ページの表記に修正 */}
              <p><strong>専門分野:</strong> 栄養学、健康科学（食生活学・応用健康科学）</p>
              {/* 追記: 所属学会を明示 */}
              <p><strong>所属学会:</strong> 日本家政学会、日本食育学会、日本栄養・食糧学会、日本家庭科教育学会、日本健康教育学会 他</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                子どもの食生活・食育を主な研究テーマとし、食習慣や生活習慣が子どもの心身の成長にどのように関わるのか、質問紙調査や各種測定・動物実験など多様な手法を組み合わせて研究しています。保育所での食育活動や小中学校での調査・測定など、現場に根ざしたフィールドワークを大切にしています。
              </p>
              <p className="lab-section__body">
                {/* 旧: 受賞の説明で「ロコモティブシンドローム予防の研究で」と記述していたが、業績ページに受賞テーマの詳細記載なし → 「日本家政学会 奨励賞」のみ正確に記載 */}
                2025年5月には日本家政学会 奨励賞を受賞。管理栄養士養成のための教材開発にも継続的に取り組み、『ライフステージ栄養学』『五訂 応用栄養学実習』に加え、2025年には『イラスト 応用栄養学』を刊行しています。
              </p>
              {/* 追記: 職歴の補足（業績ページより） */}
              <p><strong>職歴（抜粋）:</strong> 日本女子大学大学院 博士後期課程在学中に中野区保健センター非常勤管理栄養士として勤務。博士（学術）取得後、2020年に本学専任講師として着任し、2026年より准教授。横浜女子短期大学・立正大学・近畿大学九州短期大学（通信）でも非常勤講師として教鞭をとる。</p>
            </div>
          </motion.section>

          {/* Research Themes Section */}
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
                  icon: <Activity className="text-terracotta" />,
                  // 旧: 「社会的ジェットラグ（睡眠リズムのずれ）」が誇張だったため、実際の学会発表内容に修正
                  title: "子どもの食習慣・生活習慣と成長・発達",
                  body: "小中学生を対象に、食事内容・運動習慣・睡眠（クロノタイプ）などと骨量・体格・体力の関連を質問紙調査や測定を通じて解析しています。最近は咀嚼習慣や咀嚼能力にも着目し、食行動との関連についても研究しています。「隠れ肥満」や偏食など、現代の子どもたちが抱える健康課題にも目を向けています。"
                },
                {
                  icon: <Baby className="text-terracotta" />,
                  // 旧: 「保育・教育現場の食育と安全対策」「放射性物質対策」「震災後」→ 根拠なし。実際の活動に修正
                  title: "保育所・科学館における食育活動",
                  body: "保育所での食育ワークショップやクッキング保育、科学館での体験型食育ワークショップなど、子どもたちが食に親しむ実践プログラムを企画・実施・評価しています。こうした実践を通して、子どもが楽しみながら食への関心を高める食育のあり方について検討しています。"
                },
                {
                  icon: <Utensils className="text-terracotta" />,
                  // 旧: 「共食とコミュニケーションの心理的効果」→ 業績ページ・PPTに記載なし。削除して実際の研究に差し替え
                  title: "幼児食・離乳食と保護者の養育環境",
                  body: "離乳食・幼児食のレシピ考案や、調理方法の違いが子どもの食べやすさに与える影響について研究しています。子どもの食べやすさと保護者の実践しやすさの両立を目指し、家庭で活用しやすい食支援のあり方を検討しています。また、保護者の食態度や養育環境が幼児の食生活に与える影響についても調査しています。"
                },
                {
                  icon: <FlaskConical className="text-terracotta" />,
                  // 追記: 動物実験が業績ページ・PPT共に明記されているのに完全未記載だったため追加
                  title: "動物実験（栄養と健康の基礎研究）",
                  body: "ラットを用いた飼育実験により、栄養条件が生体機能や健康に及ぼす影響について研究しています。食と健康をつなぐ生体内の仕組みに着目し、食物アレルギーや肥満などの健康課題に関する基礎研究を行っています。"
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
                  <div style={{ marginBottom: '12px' }}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Research Activities Section */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室の活動</h2>
            {/* 追記: PPTに明記されている活動内容を正確に反映 */}
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <h3>3年生の主な活動</h3>
              <ul className="lab-publication-list">
                <li><strong>保育所や科学館での食育活動（夏休み）:</strong> 保育所での食育ワークショップ（野菜・果物を使った草木染め、クッキング保育など）や科学館での体験型食育ワークショップなど、子どもたちが食に親しむ実践プログラムを企画・実施します。</li>
                <li><strong>小中学校での調査・測定活動（夏休み）:</strong> 実際に測定機器を使い、データ収集から解析までを経験します。</li>
                <li><strong>動物実験（夏休み〜後期）:</strong> 実験動物（ラット）の飼育・サンプリングを担当します（飼育期間は1〜2か月程度）。</li>
                <li><strong>勉強会（週1回）:</strong> 1人あたり3回、自分で選んだ論文や研究内容を発表します。</li>
              </ul>
            </div>
            <div className="lab-section__card">
              <h3>4年生の主な活動</h3>
              <ul className="lab-publication-list">
                <li><strong>卒業研究:</strong> 2〜3名のグループ単位で、テーマを相談しながら一から研究をまとめます。</li>
                <li><strong>学会発表や研究成果の発信:</strong> 学会での口頭発表やポスター発表を通じて、研究成果を広く発信します。</li>
                <li><strong>桐華祭:</strong> 草木染め体験ワークショップの実施と研究活動報告。文化展部門で入賞実績もあります。</li>
              </ul>
            </div>
          </motion.section>

          {/* Education & Achievements Section */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教育活動・主な実績</h2>
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <div className="flex items-start gap-3">
                <BookOpen className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>教科書・教材の執筆</h3>
                  <p className="lab-section__body">
                    {/* 追記: 2025年刊行の「イラスト 応用栄養学」が未記載だったため追加 */}
                    『ライフステージ栄養学』、『五訂 応用栄養学実習―ケーススタディーで学ぶ栄養マネジメント―』、そして2025年刊行の『イラスト 応用栄養学 ―ライフステージ別栄養ケア・マネジメントの理解と実践―』に携わっています。最新のガイドラインや制度を踏まえながら、学生が理解しやすく、管理栄養士として現場で活躍するための基礎を身につけられる教材づくりを心がけています。
                  </p>
                </div>
              </div>
            </div>
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <div className="flex items-start gap-3">
                <Award className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>受賞</h3>
                  {/* 旧: 「ロコモティブシンドローム予防の研究で」と記述→業績ページに受賞テーマ詳細の記載なし。事実ベースに修正 */}
                  <p className="lab-section__body">
                    2025年5月、<strong>日本家政学会 奨励賞</strong>を受賞。
                  </p>
                </div>
              </div>
            </div>
            <div className="lab-section__card">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>社会活動</h3>
                  <p className="lab-section__body">
                    {/* 旧: 「砂糖のひみつを科学で解き明かす！」ワークショップ → PPT・業績ページ共に記載なし。実際の活動に修正 */}
                    日本食育学会 代議員として学会活動にも参画。食育や子どもの食生活に関するテーマで、保育士向け研修会や教員を対象とした講習会の講師を務めています。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Message Section */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室での学び</h2>
            <p className="lab-section__body">
              研究室では、子どもの食生活や健康に関する課題を多角的に捉え、調査研究・食育実践・基礎研究を通して学びを深めています。学生はテーマ設定から調査・実験、発表まで主体的に取り組みながら、管理栄養士として必要な実践力と研究力を身につけていきます。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
