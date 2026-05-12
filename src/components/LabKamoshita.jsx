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
          <p className="lab-page__subtitle">食生活と健康を支える大豆・食文化の研究</p>
        </motion.div>

        <div className="lab-page__content">
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室について</h2>
            <p className="lab-section__body">
              本研究室では、加工大豆食品やテンペなどの食品を通して、食物繊維摂取の向上、健康維持、食文化の発展に関する研究に取り組んでいます。
              「食生活学」「国際栄養学」「公衆衛生学」を基盤とし、新しい食習慣による健康増進を目指した研究を展開しています。特に、加工大豆食品を活用して食物繊維の摂取量を増やし、それが健康に与える影響を主要なテーマとしています。
            </p>
            <p className="lab-section__body">
              また、簡易食事調査や食育実践を通じて、若年層の食行動変容や教育効果の評価にも取り組んでいます。学生が主体的にテーマを設定し、実験、調査、データ解析まで一貫して行うことで、実践力を養うことを重視しています。
            </p>
          </motion.section>

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
                { title: "加工大豆食品と食物繊維摂取", body: "加工大豆食品を用いて食物繊維の摂取量を増加させ、腸内環境や健康指標に与える影響を評価します。これまでの代表研究として、博士論文「加工大豆食品の利用による食物繊維摂取の増加とその健康への影響に関する研究」があります。" },
                { title: "テンペを活用した新しい食文化の提案", body: "アジアの伝統食品であるテンペを活用し、日本人向けの新しい食文化の導入が生活習慣病の予防にどう貢献するかを探求します。食の多様性と健康増進の可能性を追求します。" },
                { title: "食育効果の評価と食行動変容", body: "簡易食事調査や食育実践プログラムを通じて、若年層の食行動変容や食育活動の教育効果を科学的に評価します。" }
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

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">進行中の研究プロジェクト</h2>
            <p className="lab-section__body">
              本研究室では、2023年度以降も複数の研究課題に取り組んでおり、受託研究や科研費の獲得にも積極的に挑戦しています。
              現在は、特に「地域における食育推進モデルの構築」や「特定保健指導における行動変容支援ツールの開発」といったテーマで研究を進めています。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">代表的な研究業績</h2>
            <ul className="lab-publication-list">
              {[
                { label: "著書:", text: "『（仮題）食事設計と献立プロセス』（共著）" },
                { label: "論文:", text: "「The Effect of Problem-Solving-Based Blood Glucose Management through Real-Time Continuous Glucose Monitoring on Self-Management of Type 2 Diabetes Mellitus Patients」（2026年1月発表予定）" },
                { label: "博士論文:", text: "「加工大豆食品の利用による食物繊維摂取の増加とその健康への影響に関する研究」（2018年）" },
                { label: "学会発表:", text: "日本テンペ研究会におけるテンペ의機能性に関する発表（複数）" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <strong>{item.label}</strong> {item.text}
                </motion.li>
              ))}
            </ul>
            <p className="lab-section__body" style={{ marginTop: '1rem' }}>
              より詳細な研究業績は、教員情報データベースをご覧ください。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">担当科目・ゼミナール</h2>
            <p className="lab-section__body">
              鴨下研究室では、食物栄養学科で学ぶ内容が、どのように研究や社会貢献に繋がるかを体験できます。
              授業で得た知識を、ゼミナールや卒業研究でさらに深く掘り下げ、実践的なスキルを身につけます。
            </p>
            <ul className="lab-publication-list">
              {[
                { label: "食事計画論Ⅰ（演習を含む）:", text: "バランスの取れた食事を設計するための理論と実践を学びます。" },
                { label: "調理学実習Ⅳ:", text: "高度な調理技術と、それに関連する科学的知識を習得します。" },
                { label: "食と発達:", text: "ライフステージごとの栄養や食生活の課題について理解を深めます。" },
                { label: "読書入門ゼミナール:", text: "少人数での文献購読とディスカッションを通じて、研究の基礎を築きます。" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <strong>{item.label}</strong> {item.text}
                </motion.li>
              ))}
            </ul>
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>卒業研究テーマ例</h3>
            <ul className="lab-publication-list">
              {["食物繊維摂取と腸内環境改善に関する研究", "大豆食品の機能性評価と新しい利用法の開発", "食習慣と生活習慣病予防のための介入研究", "地域における食育プログラムの効果測定", "栄養教育における行動変容支援ツールの開発"].map((text, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">教育・社会連携</h2>
            <p className="lab-section__body">
              高大連携や社会連携活動を通して、研究成果を教育現場や地域社会へ還元することも重視しています。
              高校生との食育活動や実践型学習、企業・外部機関との連携を通じて、食と健康に関する社会課題の解決に貢献しています。
              特に、駒場学園高等学校との連携プロジェクト「自分たちの青春に健康プラスワンプロジェクト」では、学生と共同で授業・実習・フィールドワークを展開しています。
            </p>
            <p className="lab-section__body">
              <a href="/koudai-project" className="lab-section__link">
                高大連携プロジェクト「食の未来を創る」の詳細を見る
              </a>
            </p>
          </motion.section>

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
              <p><strong>鴨下 澄子（Kamoshita Sumiko）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・准教授</p>
              <p><strong>専門分野:</strong> 生活科学, 食生活学, 国際栄養学, 公衆衛生学</p>
              <p><strong>所属学会:</strong> 日本テンペ研究会, アジアの栄養・食文化研究所</p>
              <p><strong>学位:</strong> 博士（学術）</p>
            </motion.div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">外部リンク</h2>
            <p className="lab-section__body">
              鴨下澄子准教授のより詳細な情報や研究業績は、以下のリンクからご覧いただけます。
            </p>
            <a href="https://gyoseki.acoffice.jp/jmuhp/KgApp/k03/resid/S000233;jsessionid=21C4137957064FC5B14E93AB2E712EF8?local=0&headerTitle=%E5%8D%81%E6%96%87%E5%AD%97%E5%AD%A6%E5%9C%92%E5%A5%B3%E5%AD%90%E5%A4%A7%E5%AD%A6" target="_blank" rel="noopener noreferrer" className="lab-section__link">
              教員情報データベースで詳細を見る
            </a>
          </motion.section>
        </div>
      </div>
    </div>
  );
}