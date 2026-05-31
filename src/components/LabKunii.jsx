import { ArrowLeft, ShoppingCart, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKunii() {
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
          <p className="lab-page__eyebrow">Innovation & Entrepreneurship</p>
          <h1 className="lab-page__title">栄養を、ビジネスの力に変える。<br />社会とつながり、新たな価値を創造する「実践型」ラボ。</h1>
          <p className="lab-page__subtitle">
            國井ゼミのテーマは「栄養管理技術の社会還元」。
            大学での学びを教室だけで終わらせず、企業と協業して新商品を開発したり、
            社会人が食事を選ぶ力をサポートするプログラムを作ったり。
            専門家としての「実践技術」と「プロの考え方」を、本気で身につける4年間がここにあります。
          </p>
        </motion.div>

        <div className="lab-page__content">
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
                  icon: <ShoppingCart className="text-terracotta" size={28} />,
                  title: "【商品開発】大学公式キャラ「プラスちゃん」をナッツに！企業との共同開発",
                  subtitle: "プラスちゃんナッツ × NewDays",
                  body: "管理栄養士が監修する、美味しくて健康的なナッツ・フルーツ商品を企業と一緒にプロデュース。企画から改良、社会実装まで、新商品が世に出るプロセスをそのまま体験します。学生たちが栄養計算した商品は、今、新座駅のNewDaysで販売中。あなたの「栄養の知識」が、実際にお客さんの手に届く実感——それがこのゼミの醍醐味です。"
                },
                {
                  icon: <Zap className="text-terracotta" size={28} />,
                  title: "【地域・食育】「すったて」うどんで食育リスキリング！地域の名店とコラボ",
                  subtitle: "実践食事学で、地域の味を再発見",
                  body: "埼玉県の郷土料理「呉汁うどん」「すったてうどん」をベースに、実践食事学を盛り込んだメニューを展開。18歳〜22歳以降の習慣が固定される前の世代に「食事を選ぶ力」を届ける挑戦です。学生たちは現地調査、栄養分析、セブンイレブンのポスター制作まで担当。教科書には載らない「地域経済への影響」も学べます。"
                },
                {
                  icon: <Users className="text-terracotta" size={28} />,
                  title: "【実践教育】社会人として通用する「プロの思考法」を習得",
                  subtitle: "食育リスキリング環境の構築",
                  body: "からだの仕組みを知り、食べ物の特徴を知り、それを生活でつなぐ「実践食事学」。中国・北京のフォーラムで国際講演をする先生、YouTubeクリエイターとコラボする企画……社会に出てから即戦力として活躍するための、考え方・取り組み方を徹底的に磨きます。"
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

          {/* Practical Food Science 3 Steps */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">「実践食事学」の3つのステップ</h2>
            <p className="lab-section__body">
              このゼミで身につける「食べる学び」は、3つのステップで体系化されています。
              企業と協働し、社会と向き合う中で、この3つを深掘りしていきます。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {[
                {
                  step: '①',
                  title: '食べものの「特徴と食べ方」を知っておく',
                  desc: '栄養成分、食文化的価値、調理法——食べ物の全体像を理解する基礎を固めます。'
                },
                {
                  step: '②',
                  title: 'からだの「仕組み」を知っておく',
                  desc: '栄養学、生理学、健康管理——体がどう反応するかの科学的知識を習得します。'
                },
                {
                  step: '③',
                  title: '学びを実生活で「つなぐ（体験する）」',
                  desc: '企業との協業、地域での実装を通じて、知識を現実社会の課題解決に活かします。'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    padding: '20px',
                    backgroundColor: 'rgba(238, 119, 82, 0.08)',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--terracotta)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ fontSize: '2em', fontWeight: '700', color: 'var(--terracotta)' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.05em', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: '#666' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recent Achievements Timeline */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">社会実装の軌跡</h2>
            <p className="lab-section__body">
              企業協働、地域連携、国際発信——學生たちの研究が、実際に社会に出ていく瞬間。
            </p>
            <div style={{ marginTop: '24px' }}>
              {[
                { year: '2025年6月', event: 'GOONA（グーナ）グミ発売', detail: '23種類の栄養成分配合。子ども向け栄養サポートお菓子として商品化' },
                { year: '2025年7月', event: '「すったてうどん」実践食事学コラボ', detail: '川島町の名店と連携。夏の郷土料理の栄養分析と開発を実施' },
                { year: '2025年8月', event: 'セブンイレブン「すったて」販売', detail: '学生が栄養計算・ポスター制作を担当。埼玉県内で季節限定販売中' },
                { year: '2026年1月', event: 'プラスちゃんナッツ NewDays新座で販売開始', detail: '駅ナカ店舗での本格販売。より多くの人に届く新たなステージへ' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '20px',
                    paddingLeft: '20px',
                    borderLeft: '3px solid var(--terracotta)',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div style={{ minWidth: '100px' }}>
                    <p style={{ fontSize: '0.95em', fontWeight: '700', color: 'var(--terracotta)', marginBottom: '4px' }}>
                      {item.year}
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '4px', fontSize: '1.05em' }}>{item.event}</h3>
                    <p className="lab-section__body" style={{ fontSize: '0.95em' }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lab Information */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">Lab Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
              {[
                {
                  label: '研究室名',
                  value: '栄養管理・実践教育研究室\n(NutriEdu Praxis Lab)'
                },
                {
                  label: '指導教員',
                  value: '國井 大輔 特任教授'
                },
                {
                  label: '研究キーワード',
                  value: '栄養管理技術の事業化\n実践食事学\n食育リスキリング\n商品開発'
                },
                {
                  label: '連絡先',
                  value: 'kunii@jumonji-u.ac.jp'
                },
                {
                  label: '場所',
                  value: '8号棟5階 8509室'
                }
              ].map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  style={{
                    padding: '16px',
                    backgroundColor: '#f9f7f4',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--terracotta)'
                  }}
                >
                  <p style={{ fontSize: '0.9em', fontWeight: '600', color: 'var(--terracotta)', marginBottom: '8px' }}>
                    {info.label}
                  </p>
                  <p style={{ fontSize: '0.95em', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}