import { ArrowLeft, Baby, Activity, Utensils, GraduationCap, Award, BookOpen } from 'lucide-react';
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
          <a href="#" className="lab-page__back-link">
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
          <p className="lab-page__eyebrow">Child Nutrition & Applied Nutrition</p>
          <h1 className="lab-page__title">中岡 加奈絵 研究室</h1>
          <p className="lab-page__subtitle">
            子どもたちの「からだ」と「こころ」と「生活」をつなぐ。<br />
            日常生活に根ざした食と栄養の研究・実践を通じて、健やかな成長を支えます。
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
              <p>十文字学園女子大学 人間生活学部 食物栄養学科 准教授</p>
              <p><strong>専門分野:</strong> 子どもの食生活・食育、応用栄養学</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                幼児から中学生までの成長期を主な対象とし、骨量・体力・生活習慣・食習慣などを多面的に分析。「日々の暮らしの中の小さな習慣」が子どもの健康や発達にどのような影響を与えるかを、フィールド調査に基づいて探究しています。
              </p>
              <p className="lab-section__body">
                管理栄養士養成のための教材開発にも力を入れており、『応用栄養学実習』や『ライフステージ栄養学』などの執筆にも参画。また、ロコモティブシンドローム予防の研究で日本家政学会奨励賞を受賞するなど、生涯を通じた健康づくりを視野に入れた活動を展開しています。
              </p>
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
                  title: "成長期の体格・骨量・体力と生活習慣", 
                  body: "小・中学生の骨密度や体力を測定し、食事内容や運動、遊びの種類、さらには「社会的ジェットラグ（睡眠リズムのずれ）」との関連を解明。強い体をつくるための生活指針を検討しています。" 
                },
                { 
                  icon: <Utensils className="text-terracotta" />,
                  title: "共食とコミュニケーションの心理的効果", 
                  body: "家族との共食頻度や食事中の会話が、子どもの意思決定スキルやQOL（生活の質）にどう影響するかを分析。食卓が育む「こころの健康」に焦点を当てています。" 
                },
                { 
                  icon: <Baby className="text-terracotta" />,
                  title: "保育・教育現場の食育と安全対策", 
                  body: "保育施設における給食運営や放射性物質対策の実態を調査。震災後の長期的な視点も含め、現場が抱える課題を抽出し、安全で効果的な食育プログラムの立案を支援しています。" 
                },
                { 
                  icon: <Award className="text-terracotta" />,
                  title: "生涯を通じたロコモ予防と応用栄養学", 
                  body: "子ども時代からの積み重ねが将来の健康にどう繋がるか。ロコモティブシンドローム予防に関する研究を通じて、ライフコース全体を見通した栄養ケアのあり方を追求しています。" 
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
                  <h3>学びやすく、実務に役立つ教科書づくり</h3>
                  <p className="lab-section__body">
                    『応用栄養学実習―ケーススタディーで学ぶ栄養マネジメント』や『イラスト 応用栄養学』など、学生や受験生が視覚的に理解しやすく、現場で即戦力となる知識を学べる教材の開発に携わっています。
                  </p>
                </div>
              </div>
            </div>
            <div className="lab-section__card">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>中岡ゼミのアウトリーチ活動</h3>
                  <p className="lab-section__body">
                    「砂糖のひみつを科学で解き明かす！」ワークショップの企画・運営など、地域社会や企業と連携した活動を積極的に展開。学生が主体となって「食の科学」をわかりやすく伝える実践の場としています。
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
            <h2 className="lab-section__title">受験生・在学生へのメッセージ</h2>
            <p className="lab-section__body">
              「子どもの笑顔を食で支えたい」「日々の生活と健康のつながりを科学的に捉えたい」——そんな意欲を持つ学生を歓迎します。
            </p>
            <p className="lab-section__body">
              中岡研究室では、講義室での学びと、保育・教育現場での実践を往復しながら、人々に寄り添える管理栄養士を目指します。
              ライフステージの出発点である「子どもの食」を通して、未来の社会を一緒に創っていきましょう。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
