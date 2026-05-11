import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

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
          <a href="#" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">竹嶋 伸之輔 研究室</h1>
          <p className="lab-page__subtitle">ウイルスと遺伝子から、“家畜の健康”と“人の食”を守る</p>
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
            竹嶋研究室では、ウシ伝染性リンパ腫ウイルス（BLV）とウシ主要組織適合遺伝子複合体（BoLA）をモデルとして、「なぜ同じウイルスに感染しても、発症する牛と発症しない牛がいるのか」という問いに取り組んでいます。
            </p>
            <p className="lab-section__body">
            BLVプロウイルス量やリンパ腫発症リスクに関わるBoLA-DRB3多型を世界規模のサンプルで解析するとともに、高感度検査法（BLV-CoCoMo-qPCR）やウイルス様粒子ワクチンの開発を通じて、現場で使える感染制御戦略の構築を目指しています。
            </p>
            <p className="lab-section__body">
            さらに、BLVのゲノム組込み部位やヒトへの感染リスク評価など、One Healthの視点から「家畜の健康」と「人の食と健康」をつなぐ研究を展開しています。
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
                { title: "BLVとBoLAによる「個体差」の解明", body: "同じBLVに感染しても、プロウイルス量やリンパ腫発症リスクが大きく異なる「宿主側要因（BoLA遺伝子）」に注目した研究を展開しています。" },
                { title: "BLVの分子疫学・遺伝的多様性", body: "世界的な流行状況と遺伝子型の分布を調査し、南米のフィールド試料から新たな「第9遺伝子型」を同定するなど、国際共同研究を推進しています。" },
                { title: "BLVプロウイルス量制御とワクチン・検査技術", body: "高感度な定量法「BLV-CoCoMo-qPCR法」や、感受性牛をターゲットとした「VLPワクチン」の開発など、実践的な感染制御技術を研究しています。" },
                { title: "BLVゲノム組込み部位とリンパ腫発症メカニズム", body: "プロウイルスの組込み部位を網羅的に解析し、リンパ腫発症に関わる宿主遺伝子クラスターを発見するなど、発症機構の解明に迫ります。" },
                { title: "BLVとヒトへの感染リスク評価（One Health）", body: "日本のヒト検体におけるBLV感染の証拠は現時点で見られないことを報告するなど、獣医学と公衆衛生・栄養学を橋渡しする研究を行っています。" }
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
            <h2 className="lab-section__title">代表的な論文</h2>
            <ul className="lab-publication-list">
              {[
                { title: "BoLA-DRB3とBLVプロウイルス量の関連 (Retrovirology, 2019):", text: "全国調査により、BLVプロウイルス量がBoLA-DRB3多型と強く関連することを示した研究。" },
                { title: "BoLA-DRB3多型とリンパ腫・プロウイルス量 (Viruses, 2020):", text: "BLV誘発リンパ腫とプロウイルス量の双方に関わるBoLA-DRB3多型を解析した論文。" },
                { title: "南米における新規BLV遺伝子型（genotype-9）の同定 (Retrovirology, 2016):", text: "全ゲノム解析から新たなBLV第9遺伝子型を報告し、BLVの進化と国際的な理解を更新した研究。" },
                { title: "BLV組込み部位とリンパ腫関連遺伝子クラスター (Int. J. Mol. Sci., 2025):", text: "BLV誘発リンパ腫の分子機構に迫った最新成果。" },
                { title: "日本人検体におけるBLV感染の検討 (Retrovirology, 2022):", text: "日本におけるBLVとヒト疾患の関連は現時点では支持されないと結論づけた研究。" }
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
        </div>
      </div>
    </div>
  );
}

