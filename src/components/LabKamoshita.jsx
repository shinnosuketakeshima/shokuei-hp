import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKamoshita() {
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
          <p className="lab-page__eyebrow">十文字学園女子大学 人間生活学部 食物栄養学科</p>
          <h1 className="lab-page__title">鴨下 澄子 研究室</h1>
          <p className="lab-page__subtitle">
            健康によいものでも、せっかく食べるならおいしいものがいいよね？<br />
            新しい食習慣による健康増進と、ヒトを対象とした「おいしさ」の研究。
          </p>
        </motion.div>

        <div className="lab-page__content">

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
              鴨下ゼミの研究テーマは大きく2つです。
            </p>
            <div className="lab-section__grid" style={{ marginTop: '16px' }}>
              {[
                {
                  title: "新しい食習慣による健康増進",
                  body: "食物繊維や植物性たんぱく質など、健康増進が期待できる食品に着目。日常的に取り入れやすい料理として提案することで、新しい食習慣の定着を目指します。"
                },
                {
                  title: "ヒトを対象とした「おいしさ」の研究",
                  body: "「健康によいものでも、おいしくないと続けられない」という視点から、実際に作った料理を被験者に食べてもらい、アンケートでおいしさを評価。10人中8人が「おいしい」と感じるポイントを科学的に考察します。"
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

          {/* 研究の進め方 */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究の進め方</h2>
            <div className="lab-section__grid">
              {[
                { step: "①", title: "食品を選ぶ", body: "健康増進が期待できる食品に焦点を当てる。" },
                { step: "②", title: "料理を作る", body: "その食品を使って料理を試作する。" },
                { step: "③", title: "おいしさを評価する", body: "被験者に食べてもらい、アンケート形式でおいしさを評価する。" },
                { step: "④", title: "考察する", body: "10人中8人が「おいしい」と感じるポイントはどこかを考察する。" }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  className="lab-section__card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-terracotta)', marginBottom: '4px' }}>{card.step}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 研究対象食品 */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">これまでの研究対象食品</h2>
            <p className="lab-section__body">
              食物繊維・植物性たんぱく質・新素材など、健康増進が期待できる食品をテーマに、様々な料理を試作・評価してきました。
            </p>
            <div className="lab-section__grid" style={{ marginTop: '16px' }}>
              {[
                {
                  title: "テンペ",
                  tag: "食物繊維たっぷり！",
                  body: "大豆を発酵させたアジアの伝統食品。揚げ浸し・ハンバーガー・ソーセージなど、日本の食卓に取り入れやすい料理を開発しています。"
                },
                {
                  title: "オートミール",
                  tag: "食物繊維たっぷり！",
                  body: "ガトーショコラやポテトチップスなど、意外性のある料理にも活用。「ヘルシーだけどおいしい」を追求します。"
                },
                {
                  title: "生のおから・おからパウダー",
                  tag: "食物繊維たっぷり！",
                  body: "焼きドーナツ・クッキー・ガトーショコラ・お好み焼き・ハンバーグなど、幅広いジャンルで試作を重ねています。"
                },
                {
                  title: "ひよこ豆粉",
                  tag: "植物性たんぱく質！",
                  body: "パンケーキやマフィンに活用。豆由来の植物性たんぱく質を手軽に摂れるレシピを考案しています。"
                },
                {
                  title: "コオロギパウダー",
                  tag: "地球にやさしい新素材！",
                  body: "昆虫食の可能性を探る試みとして、クッキーへの活用を研究。持続可能な食の未来を見据えたテーマです。"
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
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: 'bold', marginBottom: '6px' }}>{card.tag}</p>
                  <p>{card.body}</p>
                </motion.div>
              ))}
            </div>
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
                { title: "桐華祭でポスター発表", body: "4年次に卒業研究の成果を桐華祭でポスター発表します。" },
                { title: "卒業論文", body: "研究のまとめとして卒業論文を執筆します。" }
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

          {/* こんな人を募集 */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">こんな人を歓迎します</h2>
            <div className="lab-section__grid">
              {[
                { title: "料理を作ることが好き", body: "試作を繰り返しながら「もっとおいしくするには？」と考えることを楽しめる方。" },
                { title: "おいしさを追求することが好き", body: "食べることが好きで、「なぜおいしいのか」を言葉やデータで表現したい方。" },
                { title: "コツコツと頑張ることができる", body: "地道な試作・評価・考察を積み重ねられる粘り強さのある方。" }
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

          {/* 教員プロフィール */}
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員プロフィール</h2>
            <motion.div 
              className="lab-pi-profile"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p><strong>鴨下 澄子（かもした すみこ）准教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科</p>
              <p><strong>専門分野：</strong>生活科学、食生活学、国際栄養学、公衆衛生学</p>
              <p><strong>学位：</strong>博士（学術）</p>
              <p className="lab-section__body" style={{ marginTop: '1.5em' }}>
                より詳細な研究業績は、教員情報データベースをご覧ください。
              </p>
              <a
                href="https://gyoseki.acoffice.jp/jmuhp/KgApp/k03/resid/S000233;jsessionid=21C4137957064FC5B14E93AB2E712EF8?local=0&headerTitle=%E5%8D%81%E6%96%87%E5%AD%97%E5%AD%A6%E5%9C%92%E5%A5%B3%E5%AD%90%E5%A4%A7%E5%AD%A6"
                target="_blank"
                rel="noopener noreferrer"
                className="lab-section__link"
              >
                教員情報データベースで詳細を見る
              </a>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
