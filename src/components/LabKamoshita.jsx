import { ArrowLeft, ChefHat, Lightbulb, Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKamoshita() {
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
          <p className="lab-page__eyebrow">Recipe Development & Food Science</p>
          <h1 className="lab-page__title">「体にいい」をもっと「おいしく」。<br />10人中8人が笑顔になる、新しい食習慣のカタチ。</h1>
          <p className="lab-page__subtitle">
            健康にいい食べ物でも、おいしくなければ続けられない。
            鴨下ゼミでは、食物繊維や植物性たんぱく質など、注目の素材を使った「最高においしいレシピ」を科学しています。
            <br /><br />
            被験者に実際に食べてもらい、その「おいしさ」をデータで分析する。
            食の未来をプロデュースする、ワクワクする研究室生活をご紹介します！
          </p>
        </motion.div>

        <div className="lab-page__content">
          {/* Research Vision */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">2つの研究テーマ</h2>
            <div className="lab-section__grid" style={{ marginTop: '16px' }}>
              {[
                {
                  icon: <ChefHat className="text-terracotta" size={28} />,
                  title: "健康と、日常的に向き合える食の開発",
                  body: "食物繊維や植物性たんぱく質など、からだにいい素材を毎日の食卓に。試行錯誤を重ねて、「おいしく続けられる」新しい食習慣を提案します。"
                },
                {
                  icon: <Beaker className="text-terracotta" size={28} />,
                  title: "人が感じる「おいしさ」を科学する",
                  body: "なぜこのレシピはおいしいのか？被験者の食べた感想をデータで分析し、「おいしさの法則」を解き明かす。料理と科学の融合です。"
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

          {/* Research Journey */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">【体験ストーリー】キッチンが研究室！「10人中8人のおいしい」を探し出す旅</h2>
            <p className="lab-section__body">
              まずは注目の健康素材を選ぶことからスタート。何度も試作を重ねて納得のレシピを完成させたら、いよいよ被験者による実食アンケートです。
              <br /><br />
              「なぜおいしいと感じるのか？」を言葉とデータで解き明かし、誰もが無理なく続けられる「新しい食習慣」を世界に提案します。
            </p>
            <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                {
                  step: '1.',
                  title: '健康素材との出会い',
                  desc: '食物繊維たっぷり、植物性たんぱく質豊富——今注目の素材を選びます。'
                },
                {
                  step: '2.',
                  title: 'キッチンでの試行錯誤',
                  desc: '何度も試作を重ねる。「もっとおいしくするには？」の連続。'
                },
                {
                  step: '3.',
                  title: '実食アンケート',
                  desc: '被験者に食べてもらい、「おいしさ」を言葉とデータで評価。'
                },
                {
                  step: '4.',
                  title: 'おいしさの科学分析',
                  desc: '10人中8人が笑顔になるレシピの秘密を解き明かす。'
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
                  <div style={{ fontSize: '1.8em', fontWeight: '700', color: 'var(--terracotta)' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.05em', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: '#666' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Featured Research Foods */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">次世代フード——注目の健康素材たち</h2>
            <p className="lab-section__body">
              アジアの伝統食、スーパーフード、地球にやさしい新素材……
              鴨下ゼミが試作してきた、食の未来を変える素材たち。
            </p>
            <div className="lab-section__grid" style={{ marginTop: '20px' }}>
              {[
                {
                  title: "テンペ",
                  subtitle: "アジアの伝統発酵食品を、ハンバーガーやソーセージにアレンジ！",
                  tag: "食物繊維たっぷり",
                  body: "大豆を発酵させたインドネシア発祥の食品。揚げ浸し、ハンバーガー、ソーセージなど、日本の食卓に取り入れやすい料理を次々開発。家庭でも簡単に調理できる新定番を目指しています。"
                },
                {
                  title: "オートミール",
                  subtitle: "まさかのポテトチップスやガトーショコラに！？驚きのヘルシーおやつ。",
                  tag: "食物繊維たっぷり",
                  body: "朝食の定番？いいえ、クッキー、ガトーショコラ、ポテトチップス……意外性のある料理にも活用。「ヘルシーだけどおいしい」の両立を徹底追求します。"
                },
                {
                  title: "生のおから・おからパウダー",
                  subtitle: "焼きドーナツからお好み焼きまで、幅広いジャンルで試作中。",
                  tag: "食物繊維たっぷり",
                  body: "豆腐づくりの副産物を、ごちそうに変える。焼きドーナツ、クッキー、ガトーショコラ、お好み焼き、ハンバーグ——試作を重ねるたびに新しいレシピが生まれます。"
                },
                {
                  title: "ひよこ豆粉",
                  subtitle: "豆由来の植物性たんぱく質を手軽に摂れるレシピを考案。",
                  tag: "植物性たんぱく質",
                  body: "パンケーキやマフィンに活用。植物性たんぱく質の宝庫でありながら、素朴な甘さが特徴。からだにも環境にもやさしい食生活を提案します。"
                },
                {
                  title: "コオロギパウダー",
                  subtitle: "地球にやさしい「新素材」。持続可能な未来のクッキーづくり。",
                  tag: "地球にやさしい新素材",
                  body: "昆虫食の可能性を探り、持続可能な食の未来を見据える。クッキーへの活用を研究中。「おいしい」と「地球にやさしい」が両立する食文化の創造を目指しています。"
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
                  <p style={{ fontSize: '0.95em', color: 'var(--terracotta)', fontWeight: '500', marginBottom: '8px' }}>
                    {card.subtitle}
                  </p>
                  <p style={{ fontSize: '0.75em', color: '#888', fontWeight: '600', marginBottom: '8px', display: 'inline-block', padding: '4px 8px', backgroundColor: 'rgba(238, 119, 82, 0.1)', borderRadius: '4px' }}>
                    {card.tag}
                  </p>
                  <p className="lab-section__body">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Who We Welcome */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">こんなワクワクを感じる君、大歓迎！</h2>
            <div className="lab-section__grid">
              {[
                {
                  icon: <ChefHat className="text-terracotta" size={24} />,
                  title: "キッチンから食の常識を塗り替えたい",
                  body: "料理を作ることが好きな、クリエイティブな好奇心。試作を繰り返しながら「もっとおいしくするには？」と考えることを楽しめる方を歓迎します。"
                },
                {
                  icon: <Lightbulb className="text-terracotta" size={24} />,
                  title: "「なぜおいしいのか」を科学したい",
                  body: "食べることが好きで、「おいしさ」を言葉やデータで表現したい。複雑な人間の感覚を、科学的に解き明かすことに興奮を感じる方。"
                },
                {
                  icon: <Beaker className="text-terracotta" size={24} />,
                  title: "納得の「おいしさ」にたどり着く粘り強さ",
                  body: "地道な試作・評価・考察を積み重ねられる、ワクワクする粘り強さ。何度の失敗も、次のおいしさへの一歩と考える方が活躍します。"
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

          {/* Graduation Work */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">4年間の集大成</h2>
            <div className="lab-section__grid">
              {[
                {
                  title: "桐華祭でポスター発表",
                  body: "試作・実験・考察の全プロセスを、ポスターで表現。自分たちの研究成果を多くの人に見てもらう瞬間。"
                },
                {
                  title: "卒業論文の執筆",
                  body: "4年間のすべてを言葉にまとめる。「おいしさ」という人間の感覚を、科学的に表現する最後のチャレンジ。"
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

          {/* Researcher Profile */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">Researcher Profile</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
              {[
                {
                  label: '指導教員',
                  value: '鴨下 澄子（かもした すみこ）准教授'
                },
                {
                  label: '専門分野',
                  value: '生活科学\n食生活学\n国際栄養学\n公衆衛生学'
                },
                {
                  label: '学位',
                  value: '博士（学術）'
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
            <p className="lab-section__body" style={{ marginTop: '20px' }}>
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
          </motion.section>
        </div>
      </div>
    </div>
  );
}
