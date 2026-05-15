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
          <p className="lab-page__subtitle">高齢者の「食べる力」を、レシピと研究の両輪で支える</p>
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
            <div className="lab-section__grid">
              {[
                {
                  title: '高齢者向けレシピの考案',
                  body: '在宅高齢者にとって作りやすく、おいしいレシピ本の作成に取り組みます。アンケート調査も組み合わせながら、実際に使える料理ブックとしてまとめることを目指します。',
                },
                {
                  title: '地域在住高齢者のサルコペニア・フレイル予防',
                  body: 'デイサービス・地域支援事業・体操教室に通う高齢者を対象に、身体状況の調査・食事調査・身体計測等を実施し、その関連を分析します。新座市内の高齢者を対象としたサルコペニア・フレイル予防が研究の柱です。',
                },
                {
                  title: '介護保険施設における栄養ケア・マネジメント',
                  body: '介護老人福祉施設（特養）・介護老人保健施設（老健）における栄養ケアの業務実態を調査・分析。施設種別・給食形態（直営・委託）の違いが業務内容に与える影響を明らかにし、質の向上を目指す研究を行っています。',
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

          {/* ゼミ活動 */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">ゼミ活動</h2>
            <p className="lab-section__body">
              研究活動だけでなく、食や文化にまつわる多彩な体験もゼミの魅力です。
            </p>
            <div className="lab-section__grid" style={{ marginTop: '16px' }}>
              {[
                {
                  title: '桐華祭での食品展示',
                  body: 'チーズチヂミなど、ゼミで考案したレシピを桐華祭で披露します。',
                },
                {
                  title: 'ペルー料理の研究',
                  body: 'ペルーの食文化や料理について学び、多様な食文化への視野を広げます。',
                },
                {
                  title: 'にんじん堀り',
                  body: '農作業体験を通じて、食材と生産現場への理解を深めます。',
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
                { title: '桐華祭でポスター発表', body: '卒業研究の成果を桐華祭でポスター発表します。' },
                { title: '卒業論文', body: '研究のまとめとして卒業論文を執筆します。' },
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

          {/* 研究業績 */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">主な研究業績</h2>
            <ul className="lab-publication-list">
              {[
                {
                  label: '著書（2025年）：',
                  text: '新版改定 給食経営管理論（共著）',
                },
                {
                  label: '論文（2022年）：',
                  text: '介護老人福祉施設・介護老人保健施設における栄養ケア・マネジメントの業務時間に関する研究～給食の直営と委託の違い～　日本健康栄養システム学会誌 22(2), 1–10（共著）',
                },
                {
                  label: '論文（2022年）：',
                  text: '介護老人福祉施設・介護老人保健施設における栄養ケア・マネジメントの業務時間に関する研究～特養と老健の課題～　日本健康・栄養システム学会誌 21(2), 10–21（共著）',
                },
                {
                  label: '著書（2020年）：',
                  text: '新版 給食経営管理論（共著）',
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <strong>{item.label}</strong>{item.text}
                </motion.li>
              ))}
            </ul>
            <p className="lab-section__body" style={{ marginTop: '1rem' }}>
              詳細は
              <a
                href="https://gyoseki.acoffice.jp/jmuhp/KgApp/k03/resid/S000082"
                target="_blank"
                rel="noopener noreferrer"
                className="lab-section__link"
              >
                教員情報データベース
              </a>
              をご覧ください。
            </p>
          </motion.section>

          {/* 学会発表 */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">主な学会発表</h2>
            <ul className="lab-publication-list">
              {[
                '第22回日本健康・栄養システム学会研究大会（2022年）',
                '第68回日本栄養改善学会学術総会（2021年）',
                '日本栄養改善学会学術総会 富山大会（令和元年）',
                '日本スポーツ栄養学会大会 京都（平成30年）',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
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
              <p><strong>岡本 節子（おかもと せつこ）教授</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科／大学院 食物栄養学専攻 研究指導教員</p>
              <p><strong>専門分野：</strong>応用健康科学、家政・生活学一般（給食経営管理、高齢者生活、生活福祉）</p>
              <p><strong>学位：</strong>博士（学術）／共立女子大学大学院（2012年）</p>
              <p className="lab-section__body" style={{ marginTop: '1.2em' }}>
                日本女子大学 食物学科卒業後、管理栄養士として新宿区の特別養護老人ホームに約12年間勤務。
                現場での豊富な実務経験を基盤に、共立女子大学大学院で博士号を取得後、
                2014年より十文字学園女子大学に着任（2023年より教授）。
                高齢者栄養と給食経営管理を軸に、現場に根ざした研究・教育を展開しています。
              </p>
            </motion.div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
