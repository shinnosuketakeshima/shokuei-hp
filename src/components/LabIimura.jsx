import {
  ArrowLeft,
  Sparkles,
  Fish,
  Microscope,
  Sun,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import { motion } from 'framer-motion';

const RESEARCH_THEMES = [
  {
    icon: Fish,
    tag: 'テーマ 01',
    title: '研究の主役は「小さな魚」たち',
    body: 'ゼブラフィッシュや金魚は、哺乳類に似た組織を持ちながら、安価・短期間で実験できる優れた研究モデル。食品成分の骨・皮膚への効果を調べる「スクリーニング系」の構築を目指しています。',
  },
  {
    icon: Microscope,
    tag: 'テーマ 02',
    title: '魚のウロコでアンチエイジングを科学する',
    body: '老化とともに減少することが知られるヒアルロン酸。魚の鱗が再生する過程でのヒアルロン酸の局在や働きを解析し、骨・皮膚の老化モデルとしての応用を目指しています。',
  },
  {
    icon: Sun,
    tag: 'テーマ 03',
    title: '紫外線が肌に与える影響を分子レベルで解明',
    body: '紫外線は皮膚老化（シワ・たるみ）の主要因。魚の鱗再生モデルを使い、UV照射が石灰化や線維層板形成に与える影響を、組織・分子レベルで解き明かしていきます。',
  },
];

const LAB_LIFE = [
  {
    title: '2週間に1回のゼミ',
    body: '論文紹介・研究紹介を通して、世界の最新知見をみんなで共有。「読む力」と「伝える力」が自然と身につきます。',
  },
  {
    title: '長期休暇中の集中実験',
    body: '魚の飼育から顕微鏡観察、PCRなどの分子生物学実験まで、長期休暇に腰を据えてじっくり手技を習得。',
  },
  {
    title: '卒業式のお祝いなど、和やかな雰囲気',
    body: '研究だけに打ち込む場所じゃない。学生同士・教員とのコミュニケーションを大切に、メリハリのある研究室生活。',
  },
  {
    title: '卒業生が気軽に顔を出してくれる、自慢のコミュニティ',
    body: '卒業しても続くつながり。社会人になった先輩と話せるのも、この研究室の魅力です。',
  },
];

const GRADUATION_TOPICS = [
  '魚の鱗再生を利用したヒアルロン酸機能の解析',
  '紫外線照射が鱗の石灰化・線維層板形成に与える影響',
  'ゼブラフィッシュ・金魚を用いた食品成分の骨・皮膚への作用評価',
];

export default function LabIimura() {
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
          <h1 className="lab-page__title">飯村 九林 研究室</h1>
          <p className="lab-page__subtitle">小型魚類を研究モデルに、食品と生命科学の接点を探る研究室</p>
        </motion.div>

        <div className="lab-page__content">
          {/* ===== Feature Story Hero ===== */}
          <motion.section
            className="lab-story-feature lab-story-feature--forest"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> FEATURE STORY
            </span>
            <h2 className="lab-story-feature__title">
              魚は「食料」じゃなくて<em>「研究モデル」</em>！？<br />
              金魚やゼブラフィッシュと探る<br />
              皮膚の老化メカニズム
            </h2>
            <p className="lab-story-feature__lead">
              大学での学びは、答えのない問いに挑戦する冒険です。飯村研究室では、
              <strong>ゼブラフィッシュや金魚などの小型魚類</strong>を使って、骨や皮膚の再生、
              アンチエイジングの未来を見つめる<strong>ユニークな研究</strong>を行っています。
              教科書には載っていない「？」を「！」に変える、アットホームな研究室生活をご紹介！
            </p>
            <div className="lab-story-feature__tags">
              <span>#ゼブラフィッシュ</span>
              <span>#アンチエイジング</span>
              <span>#バイオミネラリゼーション</span>
              <span>#食物栄養学科</span>
            </div>
          </motion.section>

          {/* ===== 研究室について ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">飯村研究室ってどんなところ？</h2>
            <p className="lab-section__body">
              飯村研究室では、魚を「食料」ではなく「研究モデル」として活用するという、
              ちょっと変わったアプローチで食品科学・生命科学の研究を進めています。
              ゼブラフィッシュや金魚などの小型魚類は、低コストで飼育でき、
              <strong>鱗・尾びれ・心臓など様々な組織を短期間で再生できる</strong>のが特徴です。
            </p>
            <p className="lab-section__body">
              私たちはこの特性を活かして、骨や皮膚の再生メカニズム、老化と深く関わるヒアルロン酸の機能、
              紫外線が皮膚に与える影響などを解析しています。ミクロな分子の世界から、
              食と健康の未来を見つめる——それが私たちの研究スタイルです。
            </p>
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
            <div className="lab-theme-list">
              {RESEARCH_THEMES.map((theme, i) => {
                const Icon = theme.icon;
                return (
                  <motion.div
                    key={i}
                    className="lab-theme-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="lab-theme-card__icon" aria-hidden="true">
                      <Icon size={28} />
                    </div>
                    <div className="lab-theme-card__content">
                      <span className="lab-theme-card__tag">{theme.tag}</span>
                      <h3>{theme.title}</h3>
                      <p>{theme.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <p className="lab-section__body" style={{ marginTop: '1.5rem', fontSize: '13px', color: 'var(--stone-light)' }}>
              ※ これまでの研究では、アフラトキシン（カビ毒）産生阻害や、アシタバなど植物由来機能性成分の遺伝子解析も行ってきました。
            </p>
          </motion.section>

          {/* ===== 研究室生活ハイライト ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室生活と卒業研究</h2>
            <p className="lab-section__body">
              本研究室の卒業研究では、学生一人ひとりが主役です。自ら立てた研究計画に基づき、
              実験・文献調査・データ解析・発表という一連の研究プロセスを主体的に経験します。
              論理的思考力、問題解決能力、プレゼンテーション能力が、着実に身についていきます。
            </p>

            <div className="lab-life-highlights">
              <p className="lab-life-highlights__lead">飯村ラボの「ふだん」をのぞいてみよう</p>
              <ul>
                {LAB_LIFE.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <CheckCircle2 size={22} aria-hidden="true" />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.body}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="lab-section__card" style={{ marginTop: '24px' }}>
              <h3>卒業研究テーマの例</h3>
              <ul className="lab-publication-list" style={{ marginTop: '8px' }}>
                {GRADUATION_TOPICS.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* ===== 先生のメッセージ（引用カード） ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-quote-card">
              <Quote size={36} className="lab-quote-card__icon" aria-hidden="true" />
              <p>
                大学での学びは、答えのない問いに挑戦する冒険です。研究室では、
                教科書には載っていない<em>「？」を自分自身の力で「！」に変える</em>経験ができます。
                失敗を恐れず、好奇心を大切に、一緒に研究を楽しみましょう。
                卒業後も続くような、温かいコミュニティを築いていきたいと思っています。
              </p>
              <footer className="lab-quote-card__author">
                <span className="lab-quote-card__role">飯村研究室 主宰</span>
                <span className="lab-quote-card__name">飯村 九林 教授</span>
              </footer>
            </div>
          </motion.section>

          {/* ===== 教員紹介 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員紹介</h2>
            <div className="lab-pi-profile">
              <p><strong>飯村 九林（いいむら くりん）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              <p><strong>専門分野:</strong> 農芸化学, 水圏応用科学（生物有機化学・水圏生命科学・バイオミネラリゼーション）</p>
              <p><strong>研究キーワード:</strong> 小型魚類, 鱗再生, ヒアルロン酸, 石灰化, 老化, 紫外線, コラーゲン, バイオミネラリゼーション, 食品機能性成分</p>
              <p><strong>所属学会:</strong> 日本農芸化学会, 日本水産学会</p>
              <p><strong>職歴（抜粋）:</strong> 北海道大学大学院 博士課程修了後、東京大学大学院 農学生命科学研究科 特任研究員、日本女子大学 家政学部 助教を経て、2020年より現職（2026年4月より教授）。</p>
            </div>
          </motion.section>

          {/* ===== 代表的な研究業績 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">代表的な研究業績</h2>
            <ul className="lab-publication-list">
              <li><strong>著書『イラスト食品学各論』(2023, 共著):</strong> 食品学の基礎をイラストで分かりやすく解説した教科書。</li>
              <li><strong>真珠貝（アコヤガイ）のカルシウム結合タンパク質に関する論文 (2021):</strong> 真珠層の形成に関わるサルコプラズミックカルシウム結合タンパク質の精製・結晶化・X線解析。</li>
              <li><strong>アシタバのセスキテルペン合成酵素遺伝子に関する論文 (2020):</strong> アシタバ（Angelica keiskei）の機能性成分合成に関わる酵素遺伝子のクローニングと機能解析。</li>
              <li><strong>食品添加物を用いたアフラトキシン汚染防除（Bio industry, 2017, 共著）:</strong> 食品添加物によるカビ毒汚染防除手法をまとめた総説論文。</li>
              <li><strong>アフラトキシン産生阻害機構に関する論文（Toxins, 2017, 共著）:</strong> cyclo(L-Ala-L-Pro)によるアフラトキシン産生阻害メカニズムを明らかにした研究。</li>
              <li><strong>博士（水産科学）取得 (2012):</strong> 北海道大学大学院 水産科学院 海洋応用生命科学専攻。魚類の分子生物学的研究に従事。</li>
            </ul>
          </motion.section>

          {/* ===== 受賞・特許 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">受賞・特許</h2>
            <ul className="lab-publication-list">
              <li><strong>ISMYCO 2016 Silver Presentation Award (2016):</strong> アフラトキシン産生特異的阻害剤 cyclo(L-Ala-L-Pro) の標的分子に関する研究発表により受賞。</li>
              <li><strong>特許「アフラトキシン産生阻害剤及びアフラトキシン汚染防除方法」(登録 2016/03/29):</strong> 食品を汚染するカビ毒産生を抑制する新規手法に関する特許。</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
