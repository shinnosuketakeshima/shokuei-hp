import {
  ArrowLeft,
  Sparkles,
  Dna,
  Globe2,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import { motion } from 'framer-motion';

const RESEARCH_THEMES = [
  {
    icon: Dna,
    tag: 'テーマ 01',
    title: '同じウイルスなのに、なぜ違う？「個体差」を遺伝子から解き明かす',
    body: '同じBLVに感染しても、ウイルス量や発症リスクは牛ごとに大きく違います。私たちは「宿主側の遺伝子（BoLA-DRB3）」に注目し、感染症の "個性" の正体を解析しています。',
  },
  {
    icon: Globe2,
    tag: 'テーマ 02',
    title: '世界中の牛からウイルスを追跡！国際共同で挑む分子疫学',
    body: '世界各地のBLV流行状況と遺伝子型の分布を調査。南米のフィールド試料から新たな「第9遺伝子型」を発見するなど、国際共同研究をリードしています。',
  },
  {
    icon: ShieldCheck,
    tag: 'テーマ 03',
    title: '自分たちで開発！次世代の検査キットとワクチン',
    body: '超高感度な定量法「BLV-CoCoMo-qPCR法」や、感受性の高い牛をターゲットにした「VLP（ウイルス様粒子）ワクチン」など、現場で本当に使える感染制御技術を開発しています。',
  },
  {
    icon: Microscope,
    tag: 'テーマ 04',
    title: 'ウイルスはどこに「住みつく」？がんが生まれる起点を探る',
    body: 'プロウイルスがゲノムのどこに組み込まれるかを網羅的に解析。リンパ腫発症に関わる宿主遺伝子クラスターを発見するなど、がんの発症メカニズムに迫ります。',
  },
  {
    icon: HeartHandshake,
    tag: 'テーマ 05',
    title: '「家畜の健康」と「人の食」をつなぐ — One Health 研究',
    body: '日本のヒト検体ではBLV感染の証拠は見られないことを報告するなど、獣医学と公衆衛生・栄養学を橋渡しする One Health の視点で「食の安全」を見つめます。',
  },
];

const LAB_HIGHLIGHTS = [
  {
    title: '世界とつながる国際共同研究',
    body: '南米・アジア・欧米の研究機関と連携し、世界規模のサンプルで研究を進められる環境。グローバルな視点が自然と身につきます。',
  },
  {
    title: '最先端の分子生物学・ゲノム解析',
    body: 'リアルタイムPCR、次世代シークエンサーを使ったゲノム解析、組換えタンパク質を用いたワクチン開発まで、研究の "現場の手技" を体験できます。',
  },
  {
    title: 'One Health の横断的な学び',
    body: '獣医ウイルス学 × 公衆衛生 × 食物栄養学。「食卓」と「感染症」を一本の線でつなぐ、ここでしかできない学際的なアプローチ。',
  },
  {
    title: '「なぜ？」を科学する観察眼',
    body: '同じ条件でも結果が違う——その「？」を放置せず、データで「！」に変える。研究者の基本姿勢が、自然と身につきます。',
  },
];

export default function LabTakeshima() {
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
          <h1 className="lab-page__title">竹嶋 伸之輔 研究室</h1>
          <p className="lab-page__subtitle">ウイルスと遺伝子から、“家畜の健康”と“人の食”を守る</p>
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
              食物栄養学科で<em>「ウイルス研究」</em>！？<br />
              ——牛の遺伝子が教えてくれる、<br />
              感染症と「食の安全」のひみつ
            </h2>
            <p className="lab-story-feature__lead">
              「同じウイルスに感染しても、<strong>発症する牛と発症しない牛がいる</strong>。なぜ？」
              ——その問いを入口に、世界規模のサンプル解析、ワクチン開発、
              <strong>One Health の視点</strong>まで。食卓と感染症の意外な関係を、
              ゲノムレベルで解き明かす研究室です。
            </p>
            <div className="lab-story-feature__tags">
              <span>#One_Health</span>
              <span>#ゲノム解析</span>
              <span>#国際共同研究</span>
              <span>#ワクチン開発</span>
              <span>#食の安全</span>
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
            <h2 className="lab-section__title">竹嶋研究室ってどんなところ？</h2>
            <p className="lab-section__body">
              竹嶋研究室では、<strong>ウシ伝染性リンパ腫ウイルス（BLV）</strong>と
              <strong>ウシ主要組織適合遺伝子複合体（BoLA）</strong>をモデルに、
              「なぜ同じウイルスに感染しても、発症する牛と発症しない牛がいるのか」
              という素朴で奥深い問いに取り組んでいます。
            </p>
            <p className="lab-section__body">
              BoLA-DRB3 多型の世界規模解析や、超高感度検査法「BLV-CoCoMo-qPCR」、
              ウイルス様粒子（VLP）ワクチンの開発を通じて、<strong>現場で使える感染制御戦略</strong>の
              構築を目指しています。さらに、BLVのゲノム組込み部位の解析や、
              ヒトへの感染リスク評価まで、One Health の視点から
              「家畜の健康」と「人の食と健康」をつなぐ研究を展開しています。
            </p>
          </motion.section>

          {/* ===== 研究テーマ（5 アイコンカード） ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ</h2>
            <div className="lab-theme-list lab-theme-list--terracotta">
              {RESEARCH_THEMES.map((theme, i) => {
                const Icon = theme.icon;
                return (
                  <motion.div
                    key={i}
                    className="lab-theme-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
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
          </motion.section>

          {/* ===== 竹嶋ラボの特徴（チェックマーク一覧） ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">竹嶋ラボで身につくこと・出会えるもの</h2>
            <p className="lab-section__body">
              「食物栄養学科でウイルス研究？」と驚かれることもありますが、
              「食」と「感染症」は、One Health の視点で見れば、地続きの世界です。
              竹嶋研究室で過ごす時間で、こんな経験ができます。
            </p>
            <div className="lab-life-highlights lab-life-highlights--terracotta">
              <p className="lab-life-highlights__lead">竹嶋ラボの「ここがユニーク」</p>
              <ul>
                {LAB_HIGHLIGHTS.map((item, i) => (
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
          </motion.section>

          {/* ===== 研究のコア・クエスチョン（引用カード） ===== */}
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
                なぜ同じウイルスに感染しても、<br />
                <em>発症する牛と発症しない牛</em>がいるのか？
              </p>
              <footer className="lab-quote-card__author">
                <span className="lab-quote-card__role">竹嶋研究室の核心となる問い</span>
                <span className="lab-quote-card__name">— from BLV × BoLA Research</span>
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
            <motion.div
              className="lab-pi-profile"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p><strong>竹嶋 伸之輔（Takeshima Shinnosuke）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              <p>人間生活学部 学部長 / 食物栄養学科 学科長</p>
              <p><strong>専門分野:</strong> 獣医ウイルス学, 動物遺伝学, 免疫学</p>
              <p><strong>担当科目:</strong> 解剖生理学, 病原物質・微生物学 など</p>
            </motion.div>
          </motion.section>

          {/* ===== 代表的な論文 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">代表的な論文</h2>
            <ul className="lab-publication-list">
              {[
                { title: 'BoLA-DRB3とBLVプロウイルス量の関連 (Retrovirology, 2019):', text: '全国調査により、BLVプロウイルス量がBoLA-DRB3多型と強く関連することを示した研究。' },
                { title: 'BoLA-DRB3多型とリンパ腫・プロウイルス量 (Viruses, 2020):', text: 'BLV誘発リンパ腫とプロウイルス量の双方に関わるBoLA-DRB3多型を解析した論文。' },
                { title: '南米における新規BLV遺伝子型（genotype-9）の同定 (Retrovirology, 2016):', text: '全ゲノム解析から新たなBLV第9遺伝子型を報告し、BLVの進化と国際的な理解を更新した研究。' },
                { title: 'BLV組込み部位とリンパ腫関連遺伝子クラスター (Int. J. Mol. Sci., 2025):', text: 'BLV誘発リンパ腫の分子機構に迫った最新成果。' },
                { title: '日本人検体におけるBLV感染の検討 (Retrovirology, 2022):', text: '日本におけるBLVとヒト疾患の関連は現時点では支持されないと結論づけた研究。' },
              ].map((pub, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <strong>{pub.title}</strong> {pub.text}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
