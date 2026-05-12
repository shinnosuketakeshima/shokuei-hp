import { ArrowLeft, Users, Home, Heart, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKomeichi() {
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
          <p className="lab-page__eyebrow">Public Health Nutrition & Education</p>
          <h1 className="lab-page__title">古明地 夕佳 研究室</h1>
          <p className="lab-page__subtitle">
            食から考える健康づくりを、地域とともに実践する。<br />
            高齢者も子どもも、地域で支える食と栄養のあり方を探究します。
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
              <p><strong>古明地 夕佳（こめいち せきか）教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科 教授</p>
              <p><strong>専門分野:</strong> 公衆栄養学、栄養教育・食育、地域保健</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                高齢者の栄養ケア・マネジメントと、地域に根ざした食と健康づくりを中核テーマに、教育・研究・社会貢献を一体的に展開。
                介護保険施設や在宅療養高齢者の支援、子ども食堂を通じた子どもへの栄養支援など、
                「エビデンスに基づく公衆栄養実践」を地域社会の最前線で推進しています。
              </p>
              <p className="lab-section__body">
                日本健康・栄養システム学会などで高齢者栄養ケアの標準化に資する研究成果を多数発表。
                地域活動や公開講座を通じて、専門的な知見を広く社会へ還元することに注力しています。
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
            <h2 className="lab-section__title">主要な研究テーマ</h2>
            <div className="lab-section__grid">
              {[
                { 
                  icon: <Home className="text-terracotta" />,
                  title: "高齢者の栄養ケア・マネジメント", 
                  body: "介護保険施設や在宅療養中の高齢者を対象に、栄養障害の要因分析や低栄養チェックリストの有用性を検討。質の高い栄養ケアプロセスの標準化を目指した実態調査とエビデンス構築を行っています。" 
                },
                { 
                  icon: <Users className="text-terracotta" />,
                  title: "子ども食堂の実態把握と食育支援", 
                  body: "地域における子ども食堂の役割を、食・栄養面から分析。子どもの貧困や孤食といった課題に対し、管理栄養士の視点からどのような支援と食育が効果的かを実践的に探究しています。" 
                },
                { 
                  icon: <Heart className="text-terracotta" />,
                  title: "行動計量学的アプローチによる栄養教育評価", 
                  body: "標準的健診・保健指導プログラムを活用し、人々の行動変容を促す栄養相談モデルの評価研究を実施。科学的なデータに基づき、実効性の高い栄養教育のあり方を追求しています。" 
                },
                { 
                  icon: <GraduationCap className="text-terracotta" />,
                  title: "公衆栄養介入の評価研究", 
                  body: "地域の健康増進施策や栄養プログラムが、実際に人々の健康指標やQOLにどのような影響を与えるかを多角的に評価。より良い施策立案のためのフィードバックを行っています。" 
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

          {/* Collaboration Section */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">地域連携・社会貢献の実践</h2>
            <div className="lab-section__card" style={{ marginBottom: '20px' }}>
              <div className="flex items-start gap-3">
                <MapPin className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>新座市「健康まつり」での健康相談・測定</h3>
                  <p className="lab-section__body">
                    新座市保健センターで開催される「健康まつり」にゼミ生とともに参加。
                    血管年齢や骨密度の測定、健康・栄養相談ブースを担当し、地域住民の健康意識の向上をサポートしています。
                    学生にとっては、地域住民と直接対話する貴重な実践の場となっています。
                  </p>
                </div>
              </div>
            </div>
            <div className="lab-section__card">
              <div className="flex items-start gap-3">
                <Users className="text-terracotta mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3>公開講座・セミナーでの発信</h3>
                  <p className="lab-section__body">
                    埼玉東上地域大学教育プラットフォーム（TJUP）等を通じ、「低栄養予防の食事」や「働く世代の健康管理」をテーマにした公開講座を担当。
                    介護予防から健康経営まで、幅広い層に向けて食の大切さを発信しています。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">古明地研究室（ゼミ）で学べること</h2>
            <div className="lab-section__grid">
              {[
                { 
                  title: "現場から学ぶ公衆栄養実践", 
                  body: "教科書で学んだ知識を、地域イベントや施設調査といった「現場」で活用。生きたデータと経験を通じて、管理栄養士に不可欠な実践能力を磨きます。" 
                },
                { 
                  title: "コミュニケーション力と企画力", 
                  body: "子どもから高齢者まで、多様な世代の方々と関わる中で、相手に寄り添うコミュニケーション力と、ニーズに応えるプログラムの企画力を養います。" 
                },
                { 
                  title: "エビデンスを構築する力", 
                  body: "現場での気づきやデータを、統計的に解析して評価するプロセスを経験。根拠に基づいた専門的な提案ができる能力を身につけます。" 
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

          {/* Lab Message Section */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">受験生・在学生へのメッセージ</h2>
            <p className="lab-section__body">
              「地域の人々の健康を支えたい」「高齢者や子どもの食環境を良くしたい」——
              そんな思いを持つ皆さん、古明地研究室で一緒に学びませんか。
            </p>
            <p className="lab-section__body">
              管理栄養士の仕事は、病院の中だけではありません。
              地域社会全体が私たちのフィールドです。
              現場に寄り添い、人々とともに「健康な未来」を創っていく楽しさを、ぜひ本研究室で体験してください。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
