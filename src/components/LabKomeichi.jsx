import { ArrowLeft, Users, Home, BookOpen, MapPin, Star } from 'lucide-react';
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
          <p className="lab-page__eyebrow">Public Health Nutrition</p>
          <h1 className="lab-page__title">古明地 夕佳 研究室</h1>
          <p className="lab-page__subtitle">
            公衆栄養学研究室<br />
            地域の健康課題と向き合い、食と栄養の力で社会に貢献する。
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
              <p><strong>古明地 夕佳（こめいち せきか）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科</p>
              <p><strong>専門分野：</strong>公衆栄養学・地域保健・栄養教育</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                栄養・食生活の視点から地域住民の健康を維持・増進し、疾病予防を図ることを目的に、
                地域住民の生活の質（QOL）の向上と地域貢献を目指す研究・教育活動を展開しています。
                高齢者の栄養ケアと、子どもを取り巻く食環境の改善を主要テーマとして取り組んでいます。
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
                  icon: <Home className="text-terracotta" />,
                  title: "高齢者の栄養ケア・マネジメントに関する研究", 
                  body: (
                    <>
                      在宅や地域で暮らす高齢者の低栄養予防を中心に、支援の実態と課題を明らかにします。
                      <ul style={{ marginTop: '0.8em', paddingLeft: '1.2em', lineHeight: '1.8' }}>
                        <li>埼玉県における配食サービスの実態と課題に関する研究</li>
                        <li>在宅高齢者の低栄養予防のためのメニュー開発</li>
                        <li>低栄養予防の普及啓発用栄養教育媒体の作成</li>
                      </ul>
                    </>
                  )
                },
                { 
                  icon: <Users className="text-terracotta" />,
                  title: "食・栄養の視点からみた「こども食堂」に関する研究", 
                  body: (
                    <>
                      地域の子ども食堂を食・栄養の観点から研究し、管理栄養士ができる支援のあり方を探ります。
                      <ul style={{ marginTop: '0.8em', paddingLeft: '1.2em', lineHeight: '1.8' }}>
                        <li>子ども食堂の実態と必要性に関する研究</li>
                        <li>特定原材料8品目を使用しない食物アレルギー対応メニューの開発</li>
                      </ul>
                    </>
                  )
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
            <div className="lab-section__card" style={{ marginTop: '16px' }}>
              <p className="lab-section__body">
                <Star className="text-terracotta" size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                卒業研究の成果は<strong>桐華祭でポスター発表</strong>を行い、<strong>卒業論文</strong>としてまとめます。
              </p>
            </div>
          </motion.section>

          {/* Seminar Activities Section */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">ゼミ活動（3年生）</h2>
            <p className="lab-section__body">
              対象（年齢・性別・目的）によって話し方や接し方が変わることを体験しながら、
              地域活動を通じて住民の方々と実際に関わる機会を設けています。
            </p>
            <div style={{ marginTop: '16px' }}>
              {[
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "新座市市民健康まつり（10月）",
                  body: "骨密度測定・血管年齢測定を実施し、測定結果をもとに日常生活や食生活の注意事項を住民に説明。卒業研究で開発した「在宅高齢者の低栄養予防」媒体を参加者に配布・説明しました。"
                },
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "流山市「防災万博」における食育活動（8月）",
                  body: "流山おおたかの森で開催された防災万博に参加。「管理栄養士が教える食育＆熱中症対策」をテーマに、セキ薬品で働く管理栄養士のサポートを受けながらブース運営に携わりました。（セキ薬品×カルピス×カルビー）"
                },
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "社会人対象キャリア形成プログラム（9月）",
                  body: "「食から考える従業員の健康管理」をテーマに、社会人向けの健康教育プログラムに参加・貢献しました。"
                },
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "日本健康・栄養システム学会（6月・web開催）",
                  body: "学会発表を通じて、研究活動の発信と専門的な学びを深めています。"
                },
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "TJUP「毎日楽しく介護予防」（9月）",
                  body: "埼玉東上地域大学教育プラットフォーム（TJUP）主催の企画に他大学と共催で参加。介護予防講座・介護予防体操の実施とリーフレット配布を行いました。"
                },
                {
                  icon: <MapPin className="text-terracotta flex-shrink-0" size={20} />,
                  title: "東方ZEPPIN!カップ",
                  body: "陸上自衛隊東武方面隊の駐屯地給食「安くておいしい献立」コンテストのプレ審査を実施。給食の質向上と隊員の士気高揚を目的とした取り組みです。"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="lab-section__card"
                  style={{ marginBottom: '12px' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <h3>{item.title}</h3>
                      <p className="lab-section__body">{item.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Who fits Section */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">こんな人に向いています</h2>
            <div className="lab-section__grid">
              {[
                { 
                  icon: <BookOpen className="text-terracotta" />,
                  title: "地域保健・医療・福祉に興味がある",
                  body: "制度も含めて、地域の健康課題に関心がある方。法律や仕組みの背景まで含めて「なぜ？」を考えたい方に向いています。"
                },
                { 
                  icon: <Users className="text-terracotta" />,
                  title: "ヒューマンサービスを実践したい",
                  body: "人を支えることに意義を感じ、実際に手を動かして社会に貢献したいと考えている方を歓迎します。"
                },
                { 
                  icon: <Home className="text-terracotta" />,
                  title: "広く社会に興味がある",
                  body: "食や栄養にとどまらず、社会全体の課題と向き合い、疑問を見つけて実態を把握し、実践・評価まで取り組みたい方。"
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
              疑問を見つけ、その実態を把握し、課題を整理して、実践・評価・改善を繰り返す——
              そのプロセスを、皆さんと一緒に歩んでいきたいと思っています。
            </p>
            <p className="lab-section__body">
              文献検索、事例収集、教育プログラムや教育媒体の開発など、研究の進め方は様々です。
              大切なのは「自分で考え、まとめる」こと。
              テーマは皆さんと相談しながら決めていきます。
            </p>
            <p className="lab-section__body">
              地域保健・医療・福祉、ヒューマンサービス、社会全体への関心——
              そんな気持ちを持っている方と一緒に学べることを楽しみにしています。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
