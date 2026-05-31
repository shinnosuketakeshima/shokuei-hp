import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Microscope,
  CheckCircle2,
  Quote,
  BookOpen,
} from 'lucide-react';
import { motion } from 'framer-motion';

const RESEARCH_THEMES = [
  {
    icon: ShieldCheck,
    tag: 'テーマ 01',
    title: 'サプリと薬の「飲み合わせ」を解明する',
    body: 'セイヨウオトギリソウ（セントジョーンズワート）やウコンなど、身近なハーブが薬の効き目を変えてしまう「薬物相互作用」を研究。薬を分解する酵素「CYP（シップ）」の動きを解析し、安全な摂取目安を考えます。',
  },
  {
    icon: FlaskConical,
    tag: 'テーマ 02',
    title: '「一生毎日食べても大丈夫？」を決める科学',
    body: '食品添加物で使われる評価法（ADI：一日摂取許容量）を参考に、ハーブ製品に特化した独自の安全評価法（SDI-SE）を構築。動物実験（ラットの肝臓解析）を通して、私たちが一生安心して健康食品を楽しめる基準をつくります。',
  },
];

const LAB_METHODS = [
  {
    label: '動物実験',
    body: 'ラットへの投与試験を通して、成長曲線や肝臓重量への影響を精密に測定します。',
  },
  {
    label: '細胞実験',
    body: 'ヒトの培養肝細胞（HepG2）を使って、成分が細胞にどう作用するかを分析。',
  },
  {
    label: '遺伝子解析',
    body: 'リアルタイムRT-PCR法などの最先端技術で、目に見えないmRNA（遺伝子発現）の変化まで追いかけます。',
  },
];

const SENIOR_THEMES = [
  '機能性表示食品の安全性評価（動物実験）',
  'ハーブ抽出物が培養肝細胞に与える影響（細胞実験）',
];

const PUBLICATION_SECTIONS = [
  {
    label: '査読論文',
    items: [
      'Near-Physiological Concentrations of Extracellular Pyruvate Stimulated Glucose Utilization along with Triglyceride Accumulation and Mitochondrial Activity in HepG2 Cells. J Nutr Sci Vitaminol. 2023;69(5):314-325. (共著)',
      'Application to Butterbur Products of a Suggested Daily Intake-Based Safety Evaluation of Individual Herbal Supplements with Cytochrome P450 Expression as a Major Index. J Nutr Sci Vitaminol. 2023;69(3):206-219. (共著)',
      'デンプン原料の異なる2種類のリン酸高架橋デンプンに対するヒト腸内細菌由来水素ガス測定による発酵性の評価. 安定同位体と生体ガス. 2022;14:46-57. (共著)',
      '母獣ラットの難消化性糖質継続摂取による腸内細菌由来水素ガスの体内分布と胎仔への移行. 安定同位体と生体ガス. 2021;13:13-22. (共著)',
      'Excessive folic acid supplementation in pregnant mice impairs insulin secretion and induces the expression of genes associated with fatty liver in their offsprings. 2020;6(4). (共著)',
      'Comparison of CYP Induction by Coleus forskohlii Extract and Recovery in the Small Intestine and Liver of Mice. Biol Pharm Bull. 2020;43:116-123. (共著)',
      'Science-Based Ratings of Safety and Effectiveness of Ingredients of Health Foods Distributed in Japan Differ among Health Food Categories. 2019;1(4):100-110. (共著)',
      '培養細胞内グリコーゲンの定量のための酵素蛍光法の検討. 十文字学園女子大学紀要. 2019;49:83-94. (共著)',
      '細胞内ATP測定への化学発光イメージング解析の応用. 十文字学園女子大学紀要. 2018;48(2):85-97. (共著)',
      '食品添加物の安全性評価の手法に準じたアマチャヅル製品の安全性の検討. 十文字学園女子大学紀要. 2018;48(2):75-84. (共著)',
      'ラットを1,5-アンヒドログルシトール飼料で飼育したときの成長，臓器重量，血液性状ならびに酸化ストレスなどに及ぼす影響. ルミナコイド研究. 2016;20(2):77-84. (共著)',
      'Induction of fatty liver by Coleus forskohlii extract through enhancement of de novo triglyceride synthesis in mice. Toxicology Reports. 2014;1:787-794. (共著)',
      'D-sorbose inhibits disaccharidase activity and demonstrates suppressive action on postprandial blood levels of glucose and insulin in the rat. Nutrition Research. 2014;34:961-967. (共著)',
      'Coleus forskohlii extract induces hepatic cytochrome P450 enzymes in mice. Food Chem Toxicol. 2012;50:750-755. (共著)',
      'ヒトにおけるD-タガトースの一過性下痢に対する最大無作用量，有効エネルギー量ならびに生体における利用性. 日本栄養・食糧学会誌. 2011;64(6):403-413. (共著)',
      '人気の高いハーブサプリメント素材のNatural Medicines Comprehensive Databaseに基づく安全性および有効性の評価検討. 栄養学雑誌. 2011;69(5):267-279. (共著)',
      'Influence of zinc deficiency to the mice infected with babesia microti. J Vet Med Sci. 2011;73(2):263-267. (共著)',
      'Time-Dependent Induction of Hepatic Cytochrome P450(CYP)s Enzyme Activity and mRNA Expression by Bilobalide in Rats. J Pharmacol Sci. 2009;109:459-462. (共著)',
      'High dose of commercial products of kava (Piper methysticum) markedly enhanced hepatic cytochrome P450 1A1 mRNA expression with liver enlargement in rats. Food Chem Toxicol. 2008;46:3732-3738. (共著)',
      '栄養士養成教育のための遺伝子解析実習プログラムの点検評価. 十文字学園女子短期大学研究紀要. 2000;31:113-122. (共著)',
      '栄養士養成に向けたチトクロームP450 1A1の遺伝子解析実習に関する教育研究. 十文字学園女子短期大学研究紀要. 1999;30:121-132. (共著)',
      '成長期の雄ラットにおける飲用水からのメラトニン摂取の影響. 十文字学園女子短期大学研究紀要. 1999;30:111-119. (共著)',
      '栄養士養成教育への遺伝子解析実習の導入の試み. 栄養学雑誌. 1999;57:229-240. (共著)',
      '中枢神経系局在カルシウム結合タンパク質セファロカルシンの分子多様性. 十文字学園女子短期大学研究紀要. 1996;27:155-170. (共著)',
    ],
  },
  {
    label: '著書',
    items: [
      '健康・栄養学用語辞典. 2012. (共著)',
      '食品機能性の科学. 2008. (共著)',
    ],
  },
  {
    label: 'レビュー・解説',
    items: [
      '抗うつ作用を志向するハーブ類サプリメントのエビデンス. アンチエイジング医学－日本抗加齢医学会雑誌. 2007;3(4):33-41. (共著)',
      'ハーブサプリメントの安全・安心な利用をめざして（連載12回）. FOOD Style 21. 2004-2005. (共著)',
      'ハーブサプリメントとその有用性. 医学のあゆみ. 2004;208(12):991-995. (共著)',
      'セイヨウオトギリソウと通常医薬品の相互作用：臨床試験の系統的レビュー. 栄養学雑誌. 2004;62(5):309. (単著)',
    ],
  },
];

export default function LabYamazaki() {
  return (
    <div className="lab-page">
      <div className="container">

        {/* ===== ヘッダー ===== */}
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
          <h1 className="lab-page__title">山崎 優子 研究室</h1>
          <p className="lab-page__subtitle">
            サプリメントと健康食品の「本当の安全」を、科学で守る
          </p>
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
              そのサプリ、本当に安全？<br />
              「健康食品」を科学の眼で守る、<br />
              <em>リスク評価の最前線。</em>
            </h2>
            <p className="lab-story-feature__lead">
              コンビニやドラッグストアで手軽に買えるサプリメントやハーブ製品。でも、体の中ではどんな反応が起きているのでしょうか？
              山崎研究室では、<strong>動物実験や細胞実験を駆使して</strong>、健康食品の「本当の安全性」を科学的に評価しています。
              薬とサプリの飲み合わせ（相互作用）や、肝臓への影響を解明する、
              <strong>食の安全のスペシャリスト</strong>を目指してみませんか？
            </p>
            <div className="lab-story-feature__tags">
              <span>#食品安全学</span>
              <span>#薬物相互作用</span>
              <span>#リスク評価</span>
              <span>#健康食品</span>
              <span>#栄養生化学</span>
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
            <h2 className="lab-section__title">
              専門用語をひも解く：山崎ゼミの2大テーマ
            </h2>
            <p className="lab-section__body">
              パッと聞くと難しそうな研究も、中身を知れば「あ、これって自分たちの身近な話だ」と気づくはず。
              高校生向けに、ていねいに解説します。
            </p>
            <div className="lab-theme-list lab-theme-list--terracotta" style={{ marginTop: '24px' }}>
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
          </motion.section>

          {/* ===== 知識コラム：トクホ・機能性表示食品 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">知識コラム：「トクホ」と「機能性表示食品」って何が違う？</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginTop: '16px',
            }}>
              {[
                {
                  label: '特定保健用食品（トクホ）',
                  color: 'var(--terracotta)',
                  points: [
                    '消費者庁が個別審査・許可',
                    '科学的根拠を国が審査',
                    '「おなかの調子を整える」など効果を表示できる',
                    '代表例：特茶、ヤクルト 400W など',
                  ],
                },
                {
                  label: '機能性表示食品',
                  color: 'var(--forest)',
                  points: [
                    '企業が届け出・自己責任で表示',
                    '消費者庁への届け出が必要',
                    '「目のピントを調整する」などの表示が可能',
                    '2015年に創設されたより新しい制度',
                  ],
                },
              ].map((col, i) => (
                <div key={i} style={{
                  background: 'var(--white)',
                  borderRadius: '16px',
                  padding: '20px',
                  borderTop: `4px solid ${col.color}`,
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: col.color,
                    marginBottom: '12px',
                    letterSpacing: '0.04em',
                  }}>{col.label}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: '13px', color: 'var(--stone)', lineHeight: 1.7, paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: col.color }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--stone-light)', marginTop: '12px', lineHeight: 1.7 }}>
              山崎研究室の研究成果は、これらの制度において「科学的根拠」を担う安全性評価に直結しています。
            </p>
          </motion.section>

          {/* ===== 実験の舞台裏 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">実験の舞台裏</h2>
            <div className="lab-project-story">
              <div className="lab-project-story__header">
                <Microscope size={24} className="lab-project-story__icon" />
                <h3>動物・細胞・遺伝子。多角的なアプローチで答えを探す。</h3>
              </div>
              <div className="lab-project-story__body">
                {LAB_METHODS.map((m, i) => (
                  <p key={i}>
                    <strong>★ {m.label}：</strong>{m.body}
                  </p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ===== 先輩テーマ & ゼミ生活 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">山崎ゼミの空気感</h2>
            <div className="lab-life-highlights lab-life-highlights--terracotta">
              <p className="lab-life-highlights__lead">先輩たちの研究テーマ</p>
              <ul>
                {SENIOR_THEMES.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <CheckCircle2 size={22} aria-hidden="true" />
                    <div>
                      <strong>{t}</strong>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <p className="lab-section__body" style={{ marginTop: '24px' }}>
              平日の週1〜2回の実験や休み期間の集中実験を軸に、学園祭での発表、笑顔あふれる歓迎会・送別会まで——
              <strong>メリハリのある充実したゼミ生活</strong>が待っています。
              「実験楽しい！」「また失敗した…でも原因がわかった！」そんな声が飛び交う研究室です。
            </p>
          </motion.section>

          {/* ===== 引用カード ===== */}
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
                実験に興味のある方、大歓迎！<br />
                失敗しても原因を考え、改善策を練るプロセス。<br />
                教科書にはない<em>「発見」の喜び</em>を一緒に味わいましょう。
              </p>
              <footer className="lab-quote-card__author">
                <span className="lab-quote-card__role">山崎研究室からのメッセージ</span>
                <span className="lab-quote-card__name">— 山崎 優子 准教授</span>
              </footer>
            </div>
          </motion.section>

          {/* ===== プロフィール ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教員プロフィール</h2>
            <div className="lab-media-profile">
              <div className="lab-media-profile__header">
                <div className="lab-media-profile__name">
                  <span className="lab-media-profile__role">
                    食品安全学・栄養生化学
                  </span>
                  <h3>山崎 優子 准教授</h3>
                </div>
                <div className="lab-media-profile__badges">
                  <span>管理栄養士</span>
                  <span>食品安全学</span>
                  <span>栄養生化学</span>
                </div>
              </div>
              <p className="lab-media-profile__intro">
                サプリメントや健康食品に含まれる生理活性成分の安全性評価を専門とする研究者。
                薬物代謝酵素（CYP）を介した食品と医薬品の相互作用解析から、
                独自の安全評価指標（SDI-SE）の開発まで、食品安全の科学的基盤を構築しています。
              </p>
              <div className="lab-media-profile__achievements">
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2">
                    <ShieldCheck size={16} /> 専門分野
                  </h4>
                  <ul>
                    <li>食品安全学・リスク評価</li>
                    <li>栄養生化学</li>
                    <li>薬物代謝酵素（CYP）研究</li>
                    <li>健康食品・機能性食品の評価</li>
                  </ul>
                </div>
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2">
                    <BookOpen size={16} /> 主な研究キーワード
                  </h4>
                  <ul>
                    <li>薬物相互作用（セントジョーンズワート・ウコン）</li>
                    <li>ADI / SDI-SE（安全性評価法）</li>
                    <li>HepG2 培養肝細胞・リアルタイムRT-PCR</li>
                    <li>特定保健用食品・機能性表示食品</li>
                  </ul>
                </div>
              </div>
              <div className="lab-media-profile__message">
                <p>
                  「実験に興味のある方、大歓迎！ 失敗しても原因を考え、改善策を練るプロセス。
                  教科書にはない『発見』の喜びを一緒に味わいましょう。」
                </p>
              </div>
            </div>
          </motion.section>

          {/* ===== Researcher Records（折りたたみ） ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-data-archive">
              <h2 className="lab-data-archive__title">Researcher Records</h2>
              <details>
                <summary style={{
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: 'var(--stone)',
                  marginBottom: '16px',
                  userSelect: 'none',
                }}>
                  主要論文・学術業績を表示する
                </summary>
                {PUBLICATION_SECTIONS.map((section, si) => (
                  <div key={si} style={{ marginBottom: '24px' }}>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--terracotta-dark, var(--terracotta))',
                      letterSpacing: '0.1em',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}>
                      {section.label}
                    </p>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      {section.items.map((pub, i) => (
                        <li key={i} style={{
                          fontSize: '12px',
                          lineHeight: '1.8',
                          color: 'var(--stone)',
                          paddingLeft: '14px',
                          borderLeft: '2px solid var(--terracotta)',
                        }}>
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </details>
              <div className="lab-data-archive__grid" style={{ marginTop: '16px' }}>
                <div>
                  <h4>専門分野</h4>
                  <div className="lab-data-archive__tags">
                    <span>食品安全学</span>
                    <span>栄養生化学</span>
                    <span>薬物代謝</span>
                    <span>リスク評価</span>
                  </div>
                </div>
                <div>
                  <h4>掲載学術誌</h4>
                  <div className="lab-data-archive__tags">
                    <span>J. Nutr. Sci. Vitaminol.</span>
                    <span>Food Chem. Toxicol.</span>
                    <span>Food Funct.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
