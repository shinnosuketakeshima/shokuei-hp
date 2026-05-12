import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabIwamoto() {
  return (
    <div className="lab-page">
      <div className="container">
        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 人間生活学部 食物栄養学科</p>
          <h1 className="lab-page__title">岩本 珠美 研究室</h1>
          <p className="lab-page__subtitle">食品の力で、生活習慣病を予防する</p>
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
              岩本研究室では、「動脈硬化性疾患予防のための食事療法」と「臨床栄養学」を2本柱に研究を進めています。
              食品に含まれるうま味成分（遊離型L-グルタミン酸）やポリフェノールなどの機能性成分が、減塩行動・血糖調節・生活習慣病予防にどのように寄与するかを、基礎から臨床応用まで幅広く探究しています。
            </p>
            <p className="lab-section__body">
              また、管理栄養士養成教育にも深く携わり、地域の食育実践・臨床栄養実習の充実を通じて、学生が「食と健康を社会につなぐ専門家」へと成長できる環境をゼミ全体で育んでいます。
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
                {
                  title: '動脈硬化性疾患予防のための食事療法',
                  body: '動脈硬化・脂質異常症・糖尿病など生活習慣病の予防を念頭に、食事療法の効果と機序を科学的に検証。エビデンスに基づいた栄養介入のあり方を探っています。',
                },
                {
                  title: 'うま味成分×減塩行動',
                  body: '遊離型L-グルタミン酸を含む調味料の活用が、ナトリウム摂取量の低減・維持にどう寄与するかを研究。うま味を活かした食教育プログラムの設計にも取り組んでいます。',
                },
                {
                  title: 'ポリフェノールと糖尿病予防',
                  body: '食品由来ポリフェノールの抗糖尿病作用を最新の知見から整理し、機能性食品・食事指導への応用を目指しています。',
                },
                {
                  title: '臨床栄養教育・実習の質向上',
                  body: '管理栄養士養成における臨床栄養臨地実習の実態を調査・分析し、実習内容の標準化と教育効果の向上を検討しています。',
                },
                {
                  title: '地域食育と栄養教育',
                  body: '保育所・学校・高齢者施設等を舞台に、学生主体の食育プログラムを企画・実践・評価。食育を通じた管理栄養士の専門性育成にも力を入れています。',
                },
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
            <h2 className="lab-section__title">ゼミ活動・地域連携</h2>
            <p className="lab-section__body">
              岩本ゼミでは、学生が主体となって地域・社会と積極的に関わる実践活動を多数展開しています。
            </p>
            <ul className="lab-publication-list">
              {[
                {
                  label: '郷土料理×減塩レシピコンテスト:',
                  text: 'うま味調味料を活用した郷土料理コンテストに岩本ゼミとして参加。地域食材と減塩の両立を目指したレシピ開発に学生とともに取り組んでいます。',
                },
                {
                  label: '地域食育実践（COC事業）:',
                  text: '十文字学園女子大学地域連携共同研究所のCOC事業プロジェクトとして、保育所・学校・高齢者施設等で食育プログラムを実施。学生は企画から振り返りまで一連のプロセスを経験します。',
                },
                {
                  label: '三次市・食育推進事業（県立広島大学との共同研究）:',
                  text: '地域単位での食育活動を可視化・共有し、保護者・地域住民・行政が連携した食育推進体制の構築を支援しました。',
                },
                {
                  label: '学食を活用した健康増進プロジェクト:',
                  text: 'ヘルシーメニューの開発・栄養表示・啓発ポスターを通じて、学内学生食堂から健康的な食選択を促す仕組みを構築しました。',
                },
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
                {
                  title: '論文（Frontiers in Nutrition）:',
                  text: '遊離型L-グルタミン酸を含む調味料の活用と減塩行動の関係を検討した研究（共著）。うま味調味料を用いた食教育がナトリウム摂取量の低減維持に寄与する可能性を示した。',
                },
                {
                  title: '総説（ポリフェノールと糖尿病）:',
                  text: 'ポリフェノールの抗糖尿病作用の機序について最新の知見を整理した共著総説論文。',
                },
                {
                  title: '紀要論文:',
                  text: '「臨床栄養臨地実習の実習内容に関する実態調査」— 管理栄養士養成課程における臨床栄養実習の実態と課題を整理。',
                },
                {
                  title: '紀要論文:',
                  text: '「栄養士養成課程学生における地域での食育実践からの学び」— 地域食育活動を通じた学生の専門性育成を分析（COC事業プロジェクト成果）。',
                },
                {
                  title: '共著書:',
                  text: '『臨床栄養管理 五訂 日本人の食事摂取基準準拠 第2版（2025年版）』— 臨床栄養教育の標準化に貢献する教科書の共著者として参加。',
                },
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
              <p><strong>岩本 珠美（Iwamoto Tamami）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授 / 学科長</p>
              <p><strong>学歴:</strong> 九州大学大学院 農学博士</p>
              <p><strong>専門分野:</strong> 食品生化学、食品免疫学、食品加工学、生活科学・健康科学</p>
              <p><strong>担当科目:</strong> 食品学Ⅰ、食品化学実験、食品加工学、食品加工学実習</p>
              <p><strong>学会:</strong> 日本栄養・食糧学会、日本栄養改善学会</p>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
