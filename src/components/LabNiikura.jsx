import {
  ArrowLeft,
  Sparkles,
  Microscope,
  Brain,
  Database,
  FlaskConical,
  CheckCircle2,
  Quote,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';

const RESEARCH_THEMES = [
  {
    icon: Microscope,
    tag: 'テーマ 01',
    title: '腸内細菌のナゾを解く！「ピロリ菌」がいなくなった後のガンの予防法',
    body: '胃ガンの原因として知られるピロリ菌。でも、菌を除去した後もガンになる人がいます。新倉研究室では、お腹の中の細菌（腸内細菌）がどう関わっているのか、最新の分析技術でそのメカニズムを解明します。「菌を消せばOK」ではない、次世代の予防医学に挑んでいます。',
  },
  {
    icon: Brain,
    tag: 'テーマ 02',
    title: 'AI（人工知能）が病気を見つける！？医療のDXを加速させる研究',
    body: '膨大な医療データや内視鏡の画像を、AI（機械学習）を使って分析します。医師の経験だけに頼らず、AIの力を借りて病気をいち早く見つけるための「未来の診断モデル」を構築しています。',
  },
  {
    icon: Database,
    tag: 'テーマ 03',
    title: '「大規模データ」で病気のリスクを予測する！臨床疫学の最前線',
    body: '数万人規模のコホート研究や多施設データベースを活用し、胃腸の出血やガンのリスク因子を統計的に特定します。「なぜその人が病気になるのか？」をデータが答えを出す時代が来ています。',
  },
  {
    icon: FlaskConical,
    tag: 'テーマ 04',
    title: '食べ物で病気を防ぐ！「化学予防（ケモプリベンション）」の研究',
    body: '特定の食品成分や薬が、胃腸のガン発生をどう抑制できるかを研究します。日々の食生活が実は最強の「予防薬」になり得ることを、臨床データで証明します。',
  },
];

const LAB_HIGHLIGHTS = [
  {
    title: '臨床研究と教育が融合した環境',
    body: '先生の豊富な臨床経験と最新の研究知見が融合した教育環境。リアルな医療現場のデータや知見から学べる、他にはない研究室です。',
  },
  {
    title: 'AIとデータサイエンスを本格活用',
    body: '機械学習モデルの構築、大規模データベースの統計解析など、最先端のデータサイエンス手法を食・健康研究に応用。テクノロジーと医学の融合点を体験できます。',
  },
  {
    title: '国際トップジャーナルへの掲載実績',
    body: '先生の論文は Gut・Gastric Cancer・Scientific Reports などのトップジャーナルに掲載されています。世界基準の研究スタイルに触れることができます。',
  },
  {
    title: '「食と健康」をエビデンスで語れるようになる',
    body: '「健康に良い食事とは？」という問いを感覚ではなくデータで答える力を養います。論文を読み、統計を学び、研究者の思考回路が自然と身につきます。',
  },
];

const PUBLICATION_SECTIONS = [
  {
    label: '査読論文（代表的なもの）',
    items: [
      'Metabolic factors associated with colorectal neoplasms: a single center retrospective cross-sectional analysis. BMC Gastroenterology. 2026. (共著)',
      'Long-term use of potassium-competitive acid blockers and proton pump inhibitors and the risk of metachronous gastric cancer after H. pylori eradication: a multicenter cohort study. Gastric Cancer. 2026. (共著)',
      'Non-Helicobacter pylori細菌と胃発癌との関連. 日本ヘリコバクター学会誌. 26(2). 2025. (共著)',
      'The impact of machine learning-based prediction model on annual surveillance endoscopy costs for detecting gastric cancer. iGIE. 2024. (共著)',
      'Intragastric bacterial infection and endoscopic findings in Helicobacter pylori-negative patients. Journal of Clinical Biochemistry and Nutrition. 75(1):65-70. 2024. (共著)',
      'Long-term endoscopic gastric mucosal changes up to 20 years after Helicobacter pylori eradication therapy. Scientific Reports. 14(1):13003. 2024. (共著)',
      'Association Between Vonoprazan and the Risk of Gastric Cancer After Helicobacter pylori Eradication. Clinical Gastroenterology and Hepatology. 22(6):1217-1225. 2024. (共著)',
      'Autoimmune gastritis may be less susceptible to cancer development than Helicobacter pylori-related gastritis. Gut. 73(6):1037-1038. 2024. (共著)',
      'Comparison of clinical utility of deep learning-based systems for small-bowel capsule endoscopy reading. Journal of Gastroenterology and Hepatology. 39(1):157-164. 2024. (共著)',
      'Prediction of the Severity of Gastrointestinal Bleeding: Reassessing Dominant Wisdom. Digestive Diseases and Sciences. 69(5):1530-1531. 2024. (共著)',
      'Special Issue: The Role of Gut Microbiota in Gastrointestinal Cancers-From Pathogenesis to Therapeutic Perspectives. Biomedicines. 11(11). 2023. (単著)',
      'Association of probiotic use with nivolumab effectiveness against various cancers: A multicenter retrospective cohort study. Cancer Medicine. 12(16):16876-16880. 2023. (共著)',
      'Improvement of dyspeptic symptoms after Helicobacter pylori eradication therapy in Japanese patients. JGH Open. 7(12):855-862. 2023. (共著)',
    ],
  },
];

export default function LabNiikura() {
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
          <h1 className="lab-page__title">新倉 量太 研究室</h1>
          <p className="lab-page__subtitle">医療×AI×腸内細菌。データサイエンスで「病気にならない食生活」をデザインする。</p>
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
              医療×AI×腸内細菌。<br />
              データサイエンスで<br />
              <em>「病気にならない食生活」</em>をデザインする。
            </h2>
            <p className="lab-story-feature__lead">
              豊富な臨床経験を活かしながら、
              AIやデータサイエンスを駆使して胃腸の病気やガンの予防に挑む新倉研究室。
              私たちの体の中に住む<strong>「腸内細菌」</strong>と、日々の<strong>「食」</strong>がどう関わっているのか。
              最先端のテクノロジーで、まだ誰も知らない健康の答えを一緒に探しに行きませんか？
            </p>
            <div className="lab-story-feature__tags">
              <span>#腸内細菌</span>
              <span>#AI診断</span>
              <span>#大規模データ解析</span>
              <span>#ガン予防</span>
              <span>#食と医療の融合</span>
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
            <h2 className="lab-section__title">研究テーマ：最先端のテクノロジーで「食と健康」に挑む</h2>
            <p className="lab-section__body">
              新倉研究室の研究テーマは多岐にわたりますが、すべて共通する問いがあります——
              「どうすれば、病気を防げるのか？」。
              腸内細菌、AI、ビッグデータ。これらのキーワードが、あなたの未来の「食の処方箋」につながります。
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

          {/* ===== 知識コラム ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">知識コラム：「腸内細菌」ってそもそも何者？</h2>
            <p className="lab-section__body">
              私たちの腸には、約100兆個もの細菌が住んでいます。この「腸内細菌叢（マイクロバイオーム）」が
              健康・免疫・さらにはガン発症まで左右することが、近年の研究で明らかになってきました。
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
              marginTop: '24px',
            }}>
              <div style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                padding: '20px 24px',
                borderTop: '4px solid var(--forest)',
              }}>
                <p style={{ fontWeight: 700, color: 'var(--forest)', fontSize: '13px', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  腸内細菌が多様な状態（健康）
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['免疫システムが正常に機能する', 'ガンや炎症のリスクが低い', '消化・栄養吸収が効率的', '腸と脳の連絡（腸脳軸）が良好'].map((item, i) => (
                    <li key={i} style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--charcoal)', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--forest)' }}>▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                padding: '20px 24px',
                borderTop: '4px solid var(--terracotta)',
              }}>
                <p style={{ fontWeight: 700, color: 'var(--terracotta)', fontSize: '13px', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  腸内細菌が乱れた状態（ディスバイオーシス）
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['炎症性腸疾患・大腸ガンのリスク上昇', 'ピロリ菌除菌後の胃ガン発症リスク残存', '免疫機能の低下', '代謝異常・肥満との関連'].map((item, i) => (
                    <li key={i} style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--charcoal)', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--terracotta)' }}>▶</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{
              marginTop: '16px',
              fontSize: '13px',
              color: 'var(--forest)',
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
              新倉研究室の研究は、腸内細菌と「食・病気・予防」の関係を科学的に解明することを目指しています。
            </p>
          </motion.section>

          {/* ===== ラボのユニークな特徴 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">新倉ラボで身につくこと・出会えるもの</h2>
            <p className="lab-section__body">
              「医師でありながら研究者」という先生のユニークな立場が、このゼミを唯一無二にしています。
              臨床の現場と研究の最前線、両方の「リアル」に触れられる場所です。
            </p>
            <div className="lab-life-highlights lab-life-highlights--terracotta">
              <p className="lab-life-highlights__lead">新倉ラボの「ここがユニーク」</p>
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

          {/* ===== こんな人に向いています ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, var(--cream) 0%, #eef4f0 100%)',
              borderRadius: '16px',
              padding: '32px',
              borderLeft: '4px solid var(--forest)',
            }}>
              <p style={{ fontWeight: 700, color: 'var(--forest)', fontSize: '15px', marginBottom: '16px', letterSpacing: '0.05em' }}>
                こんな人に向いています
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'データを使って客観的に「食と健康」を考えたい人',
                  '最新のテクノロジー（AI・機械学習）に興味がある人',
                  '医療や病気の予防に関心がある人',
                  '「なぜ？」を大切にし、論文を読んだり統計を学んだりすることが好きな人',
                  '将来、管理栄養士として医療・研究・クリニックで活躍したい人',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.7, color: 'var(--charcoal)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--forest)', flexShrink: 0, marginTop: '3px' }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* ===== Quote Card ===== */}
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
                腸内細菌と食と医療——<br />
                <em>まだ誰も知らない「健康の答え」</em>を、<br />
                データの海から一緒に探しませんか？
              </p>
              <footer className="lab-quote-card__author">
                <span className="lab-quote-card__role">新倉研究室からのメッセージ</span>
                <span className="lab-quote-card__name">— R. Niikura Lab</span>
              </footer>
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
            <div className="lab-media-profile">
              <div className="lab-media-profile__header">
                <div className="lab-media-profile__name">
                  <span className="lab-media-profile__role">十文字学園女子大学 食物栄養学科</span>
                  <h3>新倉 量太 教授</h3>
                </div>
                <div className="lab-media-profile__badges">
                  <span>消化器内視鏡専門医</span>
                  <span>臨床研究医</span>
                  <span>データサイエンス</span>
                </div>
              </div>
              <p className="lab-media-profile__intro">
                胃腸の出血・ガン発症・腸内細菌を専門とする消化器内科医・臨床研究者。
                大規模コホート研究や無作為化比較試験を中心に、リスク因子の特定・予測モデルの開発・治療戦略の評価を行う。
                内視鏡診断への機械学習・AI応用でも先駆的な研究実績を持つ。
                十文字学園女子大学 人間生活学部 食物栄養学科 教授。
              </p>
              <div className="lab-media-profile__achievements">
                <div className="lab-media-profile__box">
                  <h4>専門分野</h4>
                  <ul>
                    <li>消化管出血・リスク層別化</li>
                    <li>胃腸ガン発症・化学予防</li>
                    <li>腸内細菌叢（マイクロバイオーム）</li>
                    <li>臨床疫学・大規模データベース研究</li>
                    <li>内視鏡AI・画像診断モデル</li>
                  </ul>
                </div>
                <div className="lab-media-profile__box">
                  <h4>主な掲載ジャーナル</h4>
                  <ul>
                    <li><em>Gut</em>（消化器科トップジャーナル）</li>
                    <li><em>Gastric Cancer</em></li>
                    <li><em>Scientific Reports</em></li>
                    <li><em>Clinical Gastroenterology and Hepatology</em></li>
                    <li>論文総数 141本以上（2026年現在）</li>
                  </ul>
                </div>
              </div>
              <div className="lab-media-profile__message">
                <p>
                  「十文字学園女子大学で、次世代の栄養・医療の担い手を育てたい。<br />
                  <strong>研究・教育、すべてのフィールドで、データと食が人を救う世界を一緒に作りましょう。」</strong>
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
                      color: 'var(--terracotta)',
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
                    <span>消化器内科学</span>
                    <span>臨床疫学</span>
                    <span>腸内細菌学</span>
                    <span>医療AI</span>
                  </div>
                </div>
                <div>
                  <h4>掲載学術誌</h4>
                  <div className="lab-data-archive__tags">
                    <span>Gut</span>
                    <span>Gastric Cancer</span>
                    <span>Scientific Reports</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ===== Contact & Academic Links ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: 'var(--cream)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '8px', fontFamily: 'var(--font-sans)' }}>
                Contact &amp; Academic Links
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--stone)', marginBottom: '24px' }}>
                十文字学園女子大学 人間生活学部 食物栄養学科
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a
                  href="mailto:rniikura@jumonji-u.ac.jp"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--forest)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <Mail size={18} aria-hidden="true" />
                  rniikura@jumonji-u.ac.jp
                </a>
                <a
                  href="https://gyoseki.acoffice.jp/jmuhp/KgApp/k03/resid/S000306"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--forest)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  業績ページ（十文字学園女子大学）
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
