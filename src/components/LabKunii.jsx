import { ArrowLeft, Mail, MapPin, Lightbulb, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabKunii() {
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
          <h1 className="lab-page__title">國井 大輔 研究室</h1>
          <p className="lab-page__subtitle">栄養管理・実践教育研究室（NutriEdu Praxis Lab）</p>
        </motion.div>

        <div className="lab-page__content">
          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室のビジョン</h2>
            <p className="lab-section__body">
              國井ゼミでは、<strong>「栄養管理技術の実社会還元（事業化）」</strong>をメインテーマに掲げています。
              学生が主体となり、専門家として新たな価値を創造する「実践レベル」の調査研究を行います。
            </p>
            <p className="lab-section__body">
              「基礎・専門」の学びを「実践・応用」へとつなげ、社会人として通用する<strong>「実践技術」「考え方・取り組み方」</strong>を習得することを目指します。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">注力する2つの領域</h2>
            <div className="lab-section__grid">
              {[
                { 
                  icon: <Lightbulb className="text-primary" />,
                  title: "商品・サービス開発", 
                  body: "企業と協業し、栄養管理技術を活用した新商品やレシピの企画開発、既存品の改良などに取り組みます。" 
                },
                { 
                  icon: <Rocket className="text-primary" />,
                  title: "実践教育プログラム開発", 
                  body: "実践レベルでの指導ツールや教育プログラムの企画開発を行い、社会実装（トライアル）を推進します。" 
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
                  <div className="mb-4">{card.icon}</div>
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
            <h2 className="lab-section__title">「実践食事学」と「食育リスキリング」</h2>
            <p className="lab-section__body">
              若年世代から社会人前期（18歳〜22歳以降）を対象に、習慣が固定化される前に「食事を選ぶ力・食べ方」を支援する<strong>「食育リスキリング」</strong>環境の構築に取り組んでいます。
            </p>
            <div className="lab-section__card" style={{ background: '#f8f9fa', borderLeft: '4px solid #e11d48' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>実践食事学の3つのステップ</h3>
              <ul className="lab-publication-list">
                <li>① 食べものの<strong>特徴と食べ方</strong>を知っておく</li>
                <li>② からだの<strong>仕組み</strong>を知っておく</li>
                <li>③ 学びを実生活で<strong>つなぐ（体験する）</strong></li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">近年の活動実績</h2>
            <div className="lab-section__grid">
              {[
                { label: "プラスちゃんナッツの開発", text: "本学キャラクター「プラスちゃん」を採用した、管理栄養士監修のナッツ・フルーツ商品を企業と共同開発。" },
                { label: "「すったて」うどんコラボ", text: "地域の名店と連携し、実践食事学に基づいたメニューの展開や社会実装トライアルを実施。" },
                { label: "地域社会連携", text: "地域事業者の皆さまと「実践食事学」をベースにした食品開発プロセスの体験・連携。" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="lab-section__card"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <strong>{item.label}</strong>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.text}</p>
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
            <h2 className="lab-section__title">学生の皆さんへ</h2>
            <div className="lab-section__card" style={{ textAlign: 'center', padding: '2rem' }}>
              <p className="lab-section__body">
                卒業研究に対する考え方や取り組み方について、より詳しく<strong>オンライン</strong>で説明します。<br />
                興味・関心がある学生さんは、まずはメールでご連絡ください。実施日時をお知らせします。
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:kunii@jumonji-u.ac.jp" className="lab-section__link" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    kunii@jumonji-u.ac.jp
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666' }}>
                  <MapPin size={18} />
                  <span>8号棟5階：8509室</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}