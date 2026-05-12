import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabOkamoto() {
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
          <h1 className="lab-page__title">岡本 節子 研究室</h1>
          <p className="lab-page__subtitle">高齢者の「食べる力」を、栄養ケアで支える</p>
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
              岡本研究室では、超高齢社会における食と健康の課題に、栄養科学の視点から正面から向き合っています。
              地域で暮らす高齢者のサルコペニア（筋肉量・筋力の低下）予防から、介護施設における栄養ケア体制の整備、
              さらには調理システムの改善まで——「食の現場」と「研究データ」を往復しながら、実践に役立つ知見を積み重ねています。
            </p>
            <p className="lab-section__body">
              ゼミでは、地域の高齢者サロンや介護施設・社会福祉協議会と連携した調査・実践活動を重視。
              学生が現場に出て、調査設計からデータ解析、提案まで一貫して経験することで、
              チーム医療・介護チームで即戦力となれる管理栄養士の専門性を育てています。
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
                  title: '地域在住高齢者の骨格筋・身体機能と栄養',
                  body: '地域在住高齢者を対象に、骨格筋指数（SMI）の低下と身体機能（歩行・バランス等）・栄養素摂取状況との関連を縦断的に評価。サルコペニア予防に向けた栄養介入の方策を科学的根拠から検討しています。',
                },
                {
                  title: '介護施設における栄養ケア・マネジメント',
                  body: '介護老人福祉施設・介護老人保健施設での栄養ケアの実態と課題を調査。施設間での管理栄養士の配置や栄養ケア体制の違いが、利用者の栄養状態・身体機能に与える影響を明らかにし、標準化・質向上の方策を検討しています。',
                },
                {
                  title: '特別養護老人ホームにおける新調理システムの評価',
                  body: 'クックチル等の新調理システムを導入した特養施設を対象に、利用者の食事摂取量・満足度・安全性や調理現場の負担軽減を多角的に評価。高齢者施設における給食システムのあり方を探っています。',
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
              岡本ゼミでは、地域・施設との協働実践を軸に、学生が主体的に企画・調査・提案を担う機会を多く設けています。
            </p>
            <ul className="lab-publication-list">
              {[
                {
                  label: '地域高齢者サロンとの連携:',
                  text: '地域の高齢者サロンや介護予防事業と協力し、身体機能・栄養摂取状況の調査を実施。調査結果をもとにした食生活改善プログラムの提案や講座開催を通じて、地域住民への還元も行っています。',
                },
                {
                  label: '新座市社会福祉協議会との協働:',
                  text: '「調理ボランティアさんのレシピ集」への高齢者向けメニュー提供（岡本節子先生 監修）。咀嚼・嚥下機能や栄養バランスに配慮した実践的なレシピを地域に届けています。',
                },
                {
                  label: '介護施設・医療機関との共同研究:',
                  text: '介護老人福祉施設・介護老人保健施設の施設管理栄養士や医療・介護専門職と連携し、栄養ケア実態の調査や新調理システムの効果検証を実施。チーム医療・介護における管理栄養士の役割を現場から学びます。',
                },
                {
                  label: '高齢者向け献立・レシピ開発:',
                  text: '咀嚼・嚥下機能の低下や嗜好に配慮した高齢者向け献立・レシピを学生とともに開発。施設や地域イベントでの実践提供を通じて、食事の「おいしさ」と「安全性」を両立する方法を研究しています。',
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
                  title: '論文（栄養ケア・マネジメント専門誌）:',
                  text: '介護老人福祉施設・介護老人保健施設における栄養ケアの実態調査（責任著者）。施設間の管理栄養士配置の違いが利用者の栄養状態・身体機能に与える影響を検討。',
                },
                {
                  title: '論文（十文字学園女子大学学術機関リポジトリ）:',
                  text: '「特別養護老人ホームにおける新調理システムに関する調査」。クックチル等の導入施設における給食提供の現状と課題を整理した研究。',
                },
                {
                  title: '大学院FD研究報告:',
                  text: '「地域在住高齢者の身体機能，栄養素等摂取量に関する研究」。骨格筋指数（SMI）と栄養摂取状況の縦断的評価を報告。',
                },
                {
                  title: '共著書（2025年版）:',
                  text: '臨床栄養・高齢者栄養・栄養ケア・マネジメントに関する教科書の分担執筆。管理栄養士養成における在宅・施設栄養管理教育の充実に貢献。',
                },
                {
                  title: '共著書（2020年）:',
                  text: '高齢者栄養・栄養ケア関連の実務書・教科書への参加。施設・在宅における管理栄養士の実践的役割を解説。',
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
            <h2 className="lab-section__title">卒業研究テーマの例</h2>
            <p className="lab-section__body">
              岡本ゼミでは、調査設計・データ収集・解析・報告書作成・発表という一連のプロセスを学生が主体的に経験します。
              扱うテーマの領域は以下の通りです。
            </p>
            <ul className="lab-publication-list">
              {[
                '地域在住高齢者の身体機能・栄養状態評価と食生活支援プログラムの検討',
                '介護老人福祉施設における管理栄養士の栄養ケア実践の実態調査',
                '特別養護老人ホームへの新調理システム導入に伴う食事摂取量・満足度の変化',
                '咀嚼・嚥下機能に配慮した高齢者向け献立・レシピの開発と評価',
                '高齢者の骨格筋指数（SMI）と日常食習慣・食品群別摂取量の関連',
              ].map((theme, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {theme}
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
              <p><strong>岡本 節子（Okamoto Setsuko）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              <p><strong>専門分野:</strong> 応用健康科学、家政・生活学一般（高齢者栄養・栄養ケア・マネジメント）</p>
              <p><strong>担当科目:</strong> 調理学、卒業研究、ゼミナール</p>
              <p><strong>研究キーワード:</strong> 地域在住高齢者、サルコペニア、骨格筋指数（SMI）、栄養ケア・マネジメント、新調理システム、介護施設栄養管理</p>
              <p><strong>学会活動:</strong> 日本健康・栄養システム学会 研究大会実行委員（第24回大会）</p>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
