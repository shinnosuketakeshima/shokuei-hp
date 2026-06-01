import { ArrowLeft, Users, Home, BookOpen, Star, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKomeichi() {
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

        {/* Hero Section */}
        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">Public Health Nutrition</p>
          <h1 className="lab-page__title">地域の「健康」をデザインする。<br />こども食堂から自衛隊まで、食と栄養で社会を動かす。</h1>
          <p className="lab-page__subtitle">
            病院や施設の中だけが、管理栄養士の活躍の場ではありません。古明地研究室では、地域のこども食堂や防災イベント、さらには自衛隊の駐屯地まで飛び出して、街の人々の健康を支える「公衆栄養」を実践しています。
            <br /><br />
            「なぜ？」を考え、実際に手を動かし、誰かの人生を豊かにする。そんな熱気あふれるフィールドワークの世界をご紹介します！
          </p>
        </motion.div>

        <div className="lab-page__content">
          {/* Faculty Introduction */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">古明地 夕佳 先生と出会う</h2>
            <div className="lab-pi-profile">
              <p><strong>古明地 夕佳（こめいち せきか）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                実は、先生は公務員時代に保健所や県庁で地域の健康課題と向き合ってきた経験があります。
                その現場経験だからこそ、「机上の理論」だけではない、本当に社会に必要な食育と栄養支援のあり方を教えてくれます。
                高齢者の低栄養問題、子どもを取り巻く食環境——社会が抱える課題を、
                学生たちと一緒に「なぜ？」から探究し、実践できる数少ない研究室です。
              </p>
            </div>
          </motion.section>

          {/* Three Story Narratives */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">学生たちの挑戦——3つのストーリー</h2>
            <div className="lab-section__grid">
              {[
                {
                  icon: <Heart className="text-terracotta" size={28} />,
                  title: "【子ども・地域】「こども食堂」を食と栄養の視点で支える",
                  subtitle: "食物アレルギー対応メニュー開発プロジェクト",
                  body: "地域の子どもたちの居場所であるこども食堂。ただ食事を提供するだけでなく、食物アレルギーのある子どもたちも安心して参加できる環境を作る。特定原材料8品目を使用しない安全でおいしいメニューを開発することで、全ての子どもが食事の時間を楽しめるようにサポート。管理栄養士だからこそできる、本当に意味のある社会貢献です。"
                },
                {
                  icon: <Sparkles className="text-terracotta" size={28} />,
                  title: "【防災・企業】カルピス×カルビーと連携！防災万博での食育プロデュース",
                  subtitle: "セキ薬品×大手食品企業とのコラボ企画",
                  body: "夏の防災万博に、大手企業と学生が一緒にブースを運営。「管理栄養士が教える食育＆熱中症対策」をテーマに、来場者に楽しみながら防災知識を伝えるプログラムを企画・実行。学生たちは、管理栄養士の視点で社会課題（防災、熱中症予防）にどうアプローチするかを学びます。企業のプロたちとの協力で、単なる学びを超えた実務経験に。"
                },
                {
                  icon: <Star className="text-terracotta" size={28} />,
                  title: "【特別任務】自衛隊の駐屯地へ！「安くておいしい給食」コンテストを審査",
                  subtitle: "東方ZEPPIN!カップ — 陸上自衛隊東武方面隊",
                  body: "陸上自衛隊東武方面隊の駐屯地給食「安くておいしい献立」コンテストのプレ審査員として参加。限られた予算の中で、隊員の士気を高め、栄養バランスの取れた食事を実現する献立を評価。こんなユニークな体験も公衆栄養の学びの一部。自分たちが学んだ知識が、実際に人々の心身を支えている実感をリアルに感じられます。"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="lab-section__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ gridColumn: 'span 1' }}
                >
                  <div style={{ marginBottom: '12px' }}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p style={{ fontSize: '0.95em', color: 'var(--terracotta)', fontWeight: '500', marginBottom: '8px' }}>
                    {card.subtitle}
                  </p>
                  <p className="lab-section__body">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Annual Schedule */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">ゼミ生の1年間——地域に出るスケジュール</h2>
            <p className="lab-section__body">
              対象（年齢・性別・目的）によって話し方や接し方が変わることを体験しながら、
              地域活動を通じて住民の方々と実際に関わる機会を設けています。
            </p>
            <div style={{ marginTop: '24px' }}>
              {[
                { month: '6月', title: '日本健康・栄養システム学会', desc: '学会発表を通じて、研究活動を社会に発信し、専門的な学びを深めています。' },
                { month: '8月', title: '流山防災万博（セキ薬品×カルピス×カルビー）', desc: '企業と連携して「食育＆熱中症対策」ブースを運営。実践的なプロジェクト経験を獲得。' },
                { month: '9月', title: 'TJUP「毎日楽しく介護予防」講座', desc: '埼玉東上地域大学教育プラットフォーム参加。他大学と共催で介護予防プログラムを実施。' },
                { month: '9月', title: '社会人対象キャリア形成プログラム', desc: '「食から考える従業員の健康管理」をテーマに、社会人向けの健康教育に貢献。' },
                { month: '10月', title: '新座市市民健康まつり', desc: '骨密度・血管年齢測定を実施。卒業研究で開発した低栄養予防媒体を配布・説明します。' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '24px',
                    paddingLeft: '20px',
                    borderLeft: '3px solid var(--terracotta)',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div style={{ minWidth: '80px' }}>
                    <p style={{ fontSize: '1.1em', fontWeight: '700', color: 'var(--terracotta)', marginBottom: '4px' }}>
                      {item.month}
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '8px', fontSize: '1.05em' }}>{item.title}</h3>
                    <p className="lab-section__body">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="lab-section__card" style={{ marginTop: '24px', backgroundColor: 'rgba(238, 119, 82, 0.05)' }}>
              <p className="lab-section__body">
                <Star className="text-terracotta" size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                卒業研究の成果は<strong>桐華祭でポスター発表</strong>を行い、<strong>卒業論文</strong>としてまとめます。
                自分たちが現場で見つけた「なぜ？」が、研究として完成し、新しい知見として社会に発信される——
                その全プロセスを経験できるのです。
              </p>
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
            <h2 className="lab-section__title">こんな気持ちを持っていますか？</h2>
            <div className="lab-section__grid">
              {[
                {
                  icon: <BookOpen className="text-terracotta" />,
                  title: "地域保健・医療・福祉に興味がある",
                  body: "制度も含めて、地域の健康課題に関心がある。法律や仕組みの背景まで含めて「なぜ？」を考えたい。"
                },
                {
                  icon: <Users className="text-terracotta" />,
                  title: "実際に手を動かして社会に貢献したい",
                  body: "人を支えることに意義を感じ、現場に出て誰かのためになる実践活動がしたい。"
                },
                {
                  icon: <Home className="text-terracotta" />,
                  title: "社会全体の課題と向き合いたい",
                  body: "食や栄養にとどまらず、疑問を見つけて実態を把握し、実践・評価まで取り組みたい。"
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
            style={{
              backgroundColor: 'rgba(238, 119, 82, 0.08)',
              padding: '28px',
              borderRadius: '12px',
              borderLeft: '4px solid var(--terracotta)'
            }}
          >
            <h2 className="lab-section__title">先生からのメッセージ</h2>
            <p className="lab-section__body">
              疑問を見つけ、その実態を把握し、課題を整理して、実践・評価・改善を繰り返す——
              そのプロセスを、皆さんと一緒に歩んでいきたいと思っています。
            </p>
            <p className="lab-section__body">
              文献検索、事例収集、教育プログラムや教育媒体の開発など、研究の進め方は様々です。
              大切なのは「自分で考え、まとめる」こと。
              テーマは皆さんと相談しながら決めていきます。
            </p>
            <p className="lab-section__body" style={{ fontSize: '1.05em', fontWeight: '500', color: 'var(--terracotta)' }}>
              地域保健・医療・福祉、ヒューマンサービス、社会全体への関心——
              そんな気持ちを持っている方と一緒に学べることを楽しみにしています。
            </p>
          </motion.section>

          {/* Researcher Information (Bottom) */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">Researcher Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginTop: '16px' }}>
              {[
                { label: '専門分野', values: ['公衆栄養学', '地域保健', '栄養教育'] },
                { label: '研究テーマ', values: ['高齢者栄養ケア・マネジメント', 'こども食堂研究', 'アレルギー対応食開発'] },
                { label: '地域連携実績', values: ['新座市健康づくり推進協議会委員', 'TJUP介護予防講座講師', '自衛隊給食コンテスト審査員'] }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  style={{
                    padding: '16px',
                    backgroundColor: '#f9f7f4',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--terracotta)'
                  }}
                >
                  <p style={{ fontSize: '0.9em', fontWeight: '600', color: 'var(--terracotta)', marginBottom: '8px' }}>
                    {section.label}
                  </p>
                  <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95em' }}>
                    {section.values.map((val, j) => <li key={j}>{val}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
