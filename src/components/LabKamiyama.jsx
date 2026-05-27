import { ArrowLeft, ArrowRight, Quote, Sparkles, FlaskConical, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const KUROTAMA_STEPS = [
  {
    num: '01',
    title: 'アイデア出し・企画立案',
    body: '「黒たまねぎの機能性を活かしたお菓子を作りたい！」 学生たちのアイデア出しからプロジェクトはスタート。誰に届けたいか、どんな味にしたいかを徹底議論。',
  },
  {
    num: '02',
    title: '原価計算とビジネス目線',
    body: '材料費・包装費・販売価格まで、ビジネス目線で電卓を叩く。「学生のうちから商品をひとつ世に出す」リアルな経験。',
  },
  {
    num: '03',
    title: '試作 × 官能評価',
    body: '配合を変えては焼き、食べ、また配合を変える。「おいしい」を言葉と数値で評価する官能評価にチャレンジ。',
  },
  {
    num: '04',
    title: 'パッケージデザイン',
    body: '誰の手に届けたいか、どう手に取ってもらうか。デザイン案を持ち寄り、企業の方と一緒にブラッシュアップ。',
  },
  {
    num: '05',
    title: '駅ナカ・学内売店で販売',
    body: '完成した「くろたまフィン」は学内売店や駅ナカのマルシェに登場。お客様の「おいしい！」がそのまま研究室の励みに。',
  },
  {
    num: '06',
    title: '科学的データで裏付け',
    body: '総ポリフェノール量や抗酸化能を測定。販売した商品の「機能性」を、自分たちのデータで証明する。',
  },
];

const RESEARCH_THEMES = [
  {
    title: '01. ポリフェノールと血管・代謝の健康',
    body: '味噌の発酵・熟成過程で増えていく大豆イソフラボンアグリコンやポリフェノールに注目。抗酸化能の変化や、酸化LDLによる血管へのダメージを抑える効果を、細胞や動物実験で解き明かしています。',
  },
  {
    title: '02. 機能性食品開発と生活習慣病予防',
    body: '味噌・大豆製品・ぶどう・玉ねぎなど、身近な食品に含まれる機能性成分を分析。「おいしく食べながら高血圧や糖尿病を予防する食べ方」を、科学的根拠とともに探究しています。',
  },
];

const JARGON_BREAKDOWNS = [
  {
    term: '酵素反応速度論',
    plain: '消化や代謝の「スピード」を測る考え方。たまねぎの成分がどれくらいの速さで効くのか、なんてことも数値化できる。',
  },
  {
    term: 'mRNA・タンパク質発現解析',
    plain: '細胞の中で「どの遺伝子のスイッチがどれくらいオンになったか」を見る実験。食品成分のチカラを細胞レベルで確かめる。',
  },
  {
    term: '血液生化学指標の測定',
    plain: '血液中のコレステロールや糖の値を測ること。食習慣が体にどう影響するかを「目に見える数字」に変える。',
  },
];

const STUDENT_VOICES = [
  {
    avatar: 'A',
    name: '神山ゼミ 学生A',
    body: '難しい内容でも、身近な食べ物の話に置き換えて説明してくださるので、毎回「なるほど！」と思えます。',
    side: 'left',
  },
  {
    avatar: 'B',
    name: '神山ゼミ 学生B',
    body: '実験がうまくいかないときも、先生が一緒に原因を考えてくれるので、次へのモチベーションになります。',
    side: 'right',
  },
];

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
          {/* ===== Feature Story Hero ===== */}
          <motion.section
            className="lab-story-feature"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> FEATURE STORY
            </span>
            <h2 className="lab-story-feature__title">
              「おいしい」を数値化！<br />
              学生たちが挑んだ<br />
              「熟成黒たまねぎマフィン」開発の裏側
            </h2>
            <p className="lab-story-feature__lead">
              「食べることが好き」「新商品を作ってみたい」——そんな思いを持つ学生が集まる神山研究室。
              企業とコラボした<strong>マフィン開発</strong>から、<strong>細胞レベルの実験</strong>まで、
              おいしさと健康を両立させるプロフェッショナルたちの日常をのぞいてみましょう！
            </p>
            <div className="lab-story-feature__tags">
              <span>#産学連携</span>
              <span>#新商品開発</span>
              <span>#機能性食品</span>
              <span>#高校生に伝えたい</span>
            </div>
          </motion.section>

          {/* ===== くろたまフィン Timeline ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">企業 × 学生で生まれた「くろたまフィン」開発ステップ</h2>
            <p className="lab-section__body">
              エイジェックファームとの「熟成黒たまレシピ開発プロジェクト」では、神山ゼミの学生たちが
              <strong>商品企画から販売・科学分析まで</strong>を担当。リアルなビジネスの現場で、
              おいしさと機能性を両立したマフィン「くろたまフィン」が誕生しました。
            </p>
            <div className="lab-timeline">
              {KUROTAMA_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  className="lab-timeline__step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="lab-timeline__num">{step.num}</div>
                  <div className="lab-timeline__content">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== Student Voices (Chat) ===== */}
          <motion.section
            className="lab-chat-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-chat-section__title">
              <Quote size={18} aria-hidden="true" />
              ゼミ生のリアルな声
            </h2>
            <p className="lab-chat-section__lead">
              「神山ゼミってどんな雰囲気？」——実際に研究室で学ぶ学生の声を、ちょっとだけのぞいてみました。
            </p>
            <div className="lab-chat">
              {STUDENT_VOICES.map((v, i) => (
                <motion.div
                  key={i}
                  className={`lab-chat__row lab-chat__row--${v.side}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                >
                  <div className="lab-chat__avatar">{v.avatar}</div>
                  <div className="lab-chat__bubble">
                    <p>{v.body}</p>
                    <span className="lab-chat__name">{v.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ===== 研究テーマ ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ</h2>
            <div className="lab-section__grid">
              {RESEARCH_THEMES.map((card, i) => (
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

          {/* ===== 神山研究室で学べること ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">神山研究室で学べること</h2>

            <div className="lab-jargon-decoder">
              <span className="lab-jargon-decoder__eyebrow">
                <FlaskConical size={14} aria-hidden="true" /> WHAT YOU LEARN — 01
              </span>
              <h3>
                教科書の中の図を<br />
                <em>「自分のデータ」</em>として理解する実験
              </h3>
              <p>
                「酵素反応速度論」や「mRNA発現解析」と聞くと、ちょっと身構えてしまうかもしれません。
                神山研究室では、こうした実験を<strong>身近な食べ物や、体の中で起きていること</strong>に
                結びつけて、少しずつ自分のものにしていきます。
              </p>
              <ul className="lab-jargon-decoder__list">
                {JARGON_BREAKDOWNS.map((item, i) => (
                  <li key={i}>
                    <strong>{item.term} って？</strong>
                    <span>{item.plain}</span>
                  </li>
                ))}
              </ul>
              <div className="lab-jargon-decoder__keywords">
                <span>#酵素反応速度論</span>
                <span>#血液生化学指標の測定</span>
                <span>#mRNA・タンパク質発現解析</span>
              </div>
            </div>

            <div className="lab-section__card" style={{ marginTop: '20px' }}>
              <h3>02. 機能性食品についての卒業研究</h3>
              <p>
                味噌や大豆製品、ぶどう、黒たまねぎなどの機能性評価から、成分評価や新商品開発まで、
                食と健康を多面的に捉えたテーマに取り組みます。
              </p>
            </div>
          </motion.section>

          {/* ===== 教員プロフィール ===== */}
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
                理化学研究所 横浜研究所 遺伝子多型センター Postdoctoral fellow を経て、長野県工業技術総合センターで味噌や大豆イソフラボンの機能性研究に携わり、多様なフィールドで経験を重ねてきました。
              </p>
              <p className="lab-section__body">
                2019年より十文字学園女子大学 食物栄養学科に着任し、2026年から教授として学部・大学院教育と研究指導を担当しています。
              </p>
              <p className="lab-section__body">
                日本栄養・食糧学会、日本糖尿病学会、日本腎臓学会、日本未病学会、日本栄養治療学会、日本栄養改善学会、日本高血圧学会、日本機能性食品医用学会など多くの学会に所属し、ポリフェノールの機能性と生活習慣病予防に関する研究を発信しています。
              </p>
            </div>
          </motion.section>

          {/* ===== 学内外からの評価 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">学内外からの評価</h2>
            <div className="lab-rating-card">
              <div className="lab-rating-card__score">
                <span className="lab-rating-card__number">5.0</span>
                <span className="lab-rating-card__max">/ 5.0</span>
                <div className="lab-rating-card__stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
              <div className="lab-rating-card__body">
                <p className="lab-rating-card__label">授業評価サイトより</p>
                <p>
                  神山真澄先生の研究室に対して、授業の充実度 <strong>5.0 / 5.0</strong> という高い評価。
                  丁寧な指導と充実した内容が学生から支持されています。
                </p>
              </div>
            </div>
            <ul className="lab-publication-list" style={{ marginTop: '20px' }}>
              <li>
                <strong>専門家としての信頼:</strong> 多くの学会での発表や委員・評議員としての活動を通じて、機能性食品・ポリフェノール・生活習慣病予防の分野で専門家コミュニティからも厚い信頼を得ています。
              </li>
            </ul>
          </motion.section>

          {/* ===== 教員コラム / 活動レポート ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員コラム / 活動レポート</h2>
            <div className="lab-section__card" style={{ borderLeft: '4px solid var(--forest)' }}>
              <span className="column-card__date" style={{ fontSize: '13px', color: 'var(--stone)' }}>2026.5.15</span>
              <h3 style={{ fontSize: '1.1rem', margin: '8px 0 12px' }}>先輩が授業をサポート！総合科目「いちから学ぶ nutrition science」SAレポート</h3>
              <p className="lab-section__body" style={{ fontSize: '14px', marginBottom: '16px' }}>
                神山ゼミの学生たちがSA（スチューデント・アシスタント）として活躍する授業の様子をレポートします。
              </p>
              <Link to="/lab-kamiyama-report" className="text-link" style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--forest)', fontWeight: 'bold' }}>
                コラムを読む <ArrowRight size={14} />
              </Link>
            </div>
          </motion.section>

          {/* ===== 受験生・在学生へのメッセージ ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">受験生・在学生へのメッセージ</h2>
            <p className="lab-section__body">
              「食べることが好き」「機能性食品に興味がある」「予防医学に関心がある」——そんな思いを持つ皆さんを、神山研究室は歓迎します。
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
