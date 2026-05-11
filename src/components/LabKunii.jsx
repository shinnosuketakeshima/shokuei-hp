import { ArrowLeft } from 'lucide-react';
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
          <a href="#" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 人間生活学部 食物栄養学科</p>
          <h1 className="lab-page__title">國井 大輔 研究室</h1>
          <p className="lab-page__subtitle">「栄養管理をもっと身近に！」みんなの実践食事学</p>
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
              國井研究室は、「公衆栄養学・健康科学」と「実践食事学」を2本柱に、地域・企業・海外を舞台とした活動を展開しています。
              管理栄養士を目指す学生が主体となり、「食と健康をつなぐ専門スキルを活用した社会貢献活動」に取り組むことが研究室の大きな特徴です。
            </p>
            <p className="lab-section__body">
              ゼミのスローガンは「栄養管理をもっと身近に！」。栄養管理の知識・技術を、地域住民・企業・消費者にわかりやすく届けることを重視し、
              商品開発・社会連携プロジェクト・産学連携など、多彩な実践活動を学生とともに行っています。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">食べかた研究所</h2>
            <p className="lab-section__body">
              國井研究室の食事管理プログラム「食べかた研究所」は、食事や健康が気になりながらも「情報が多すぎて何をすればよいかわからない」方を対象に、
              経験豊富な専門家があなたの身体状態や目的に合わせた食事管理プログラムを通じて「食事の食べかた」をサポートする個別・グループ対応プログラムです。
            </p>
            <div className="lab-section__grid">
              {[
                { title: "知る", body: "最新の健康診断の結果から、現在のご自身の健康リスクを把握します。" },
                { title: "学ぶ", body: "健康食品やサプリメントも含め、身体の負担を下げる食べ方を学びます。" },
                { title: "体験する", body: "目標達成のために学びを体験につなぎ、ご自身の生活に実践していきます。" }
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
            <motion.ul 
              className="lab-publication-list" 
              style={{ marginTop: '1.25rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <li><strong>対象:</strong> 個人・グループ（年齢性別・目的や病気の有無は問いません）</li>
              <li><strong>会場:</strong> 1号棟2階「ここプラス」</li>
              <li><strong>開催:</strong> 土曜日・日曜日午後（毎月1〜2回）</li>
              <li><strong>時間:</strong> 1回60分（完全予約制）</li>
              <li><strong>費用:</strong> 1回1,000円（お土産ナッツ・資料付き）</li>
            </motion.ul>
            <p className="lab-section__body" style={{ marginTop: '1rem' }}>
              お問い合わせ・参加申込は十文字学園女子大学事務局（℡ 048-456-7890、月〜金 9:00〜17:00）まで。
            </p>
          </motion.section>

          <motion.section 
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ・専門領域</h2>
            <div className="lab-section__grid">
              {[
                { title: "公衆栄養学・健康科学", body: "地域住民を対象とした生活習慣病予防・集団栄養教育・行動変容支援を軸に、エビデンスに基づいた公衆栄養介入研究を行っています。" },
                { title: "実践食事学・食育リスキリング", body: "体験を通じた「食べる学び」を実生活に結びつける「実践食事学」を提唱。「食育リスキリング」として社会実装を進めています。" },
                { title: "国際・多文化栄養", body: "台湾・ベトナム・日本の学童における過体重とアレルギーの比較研究など、多国間での公衆栄養研究を展開しています。在日ベトナム人向け健康情報発信にも取り組んでいます。" }
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
            <h2 className="lab-section__title">社会連携・産学連携プロジェクト</h2>
            <p className="lab-section__body">
              國井ゼミでは、学生が主体となったさまざまな社会連携プロジェクトを実施しています。
            </p>
            <ul className="lab-publication-list">
              {[
                { label: "桑葉粉末入り商品の協働開発（マルイファミリー志木店「N・E・Oフェス」）:", text: "障がい者就労支援事業所や地域のパン・スイーツ事業者と連携し、桑葉粉末入りミルククリームフランスパン・おから豆乳カップケーキ・ヘルシークリームフルーツサンドを協働開発・販売支援。" },
                { label: "「みんなの実践食事学」セミナー（川島町商工会商業部）:", text: "講義・ワーク・料理試食を組み合わせたセミナーを事業者向けに実施し、健康と食事の学びを提供。" },
                { label: "コストコ向け商品「ナッツ&フルーツ」監修:", text: "栄養成分を考慮した低糖質・食塩不使用の間食向け商品を約5年にわたり監修。食前に少量のナッツを食べる「ナッツファースト」という新しい食習慣を提唱。" },
                { label: "在日ベトナム人向けWeb連載（HICO）:", text: "株式会社WAPが運営する医療サポートサービス「HICO」と連携し、「実践食事学」に関するWeb記事を連載。多文化背景を持つ在留外国人への健康情報発信を展開。" }
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
                { title: "論文:", text: "「Overweight is associated with allergy in school children of Taiwan and Vietnam but not Japan」— 台湾・ベトナム・日本の学童におけるBMIとアレルギー発症の多国間比較研究。" },
                { title: "論文:", text: "「Biomarkers of bone health appropriate for evaluating functional foods designed to reduce risk of osteoporosis」（British Journal of Nutrition）— 骨健康評価に関する機能性食品の研究（共著）。" },
                { title: "行政経験:", text: "厚生労働省健康局生活習慣病対策室 栄養指導係長として健康・栄養政策に従事。文部科学省科学技術学術政策局にも在籍。" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <strong>{item.title}</strong> {item.text}
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
              <p><strong>國井 大輔（Kunii Daisuke）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・特任教授</p>
              <p><strong>資格:</strong> 管理栄養士・上級心理カウンセラー</p>
              <p><strong>専門分野:</strong> 公衆衛生学・健康科学、環境生理学（体力医学・栄養生理学を含む）</p>
              <p><strong>主な役職:</strong> 一般社団法人 日本栄養管理サービス協会 理事長</p>
              <p><strong>海外ポジション:</strong> 上海健康医学院 客員教授 / 北京大学付属病院 天津北大医療海洋石油病院 医学顧問</p>
              <p><strong>兼任:</strong> 東京家政学院大学 人間栄養学部 非常勤講師</p>
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
              國井大輔特任教授のより詳細な情報や研究業績は、以下のリンクからご覧いただけます。
            </p>
            <ul className="lab-publication-list">
              {[
                { href: "https://gyoseki.acoffice.jp/jmuhp/KgApp?resId=S000169", text: "教員情報データベース（十文字学園女子大学）" },
                { href: "https://nrid.nii.ac.jp/ja/nrid/1000090320100/", text: "研究者データベース（NRID）" },
                { href: "https://www.mcsg.co.jp/kentatsu/expert/36036", text: "専門家紹介ページ" }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="lab-section__link">
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

