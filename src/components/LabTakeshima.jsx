import { ArrowLeft } from 'lucide-react';

export default function LabTakeshima() {
  return (
    <div className="lab-page">
      <div className="container">
        <div className="lab-page__header">
          <a href="#" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">竹嶋 伸之輔 研究室</h1>
          <p className="lab-page__subtitle">ウイルスと遺伝子から、“家畜の健康”と“人の食”を守る</p>
        </div>

        <div className="lab-page__content">
          <section className="lab-section">
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
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">研究テーマ</h2>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>BLVとBoLAによる「個体差」の解明</h3>
                <p>同じBLVに感染しても、プロウイルス量やリンパ腫発症リスクが大きく異なる「宿主側要因（BoLA遺伝子）」に注目した研究を展開しています。</p>
              </div>
              <div className="lab-section__card">
                <h3>BLVの分子疫学・遺伝的多様性</h3>
                <p>世界的な流行状況と遺伝子型の分布を調査し、南米のフィールド試料から新たな「第9遺伝子型」を同定するなど、国際共同研究を推進しています。</p>
              </div>
              <div className="lab-section__card">
                <h3>BLVプロウイルス量制御とワクチン・検査技術</h3>
                <p>高感度な定量法「BLV-CoCoMo-qPCR法」や、感受性牛をターゲットとした「VLPワクチン」の開発など、実践的な感染制御技術を研究しています。</p>
              </div>
              <div className="lab-section__card">
                <h3>BLVゲノム組込み部位とリンパ腫発症メカニズム</h3>
                <p>プロウイルスの組込み部位を網羅的に解析し、リンパ腫発症に関わる宿主遺伝子クラスターを発見するなど、発症機構の解明に迫ります。</p>
              </div>
              <div className="lab-section__card">
                <h3>BLVとヒトへの感染リスク評価（One Health）</h3>
                <p>日本のヒト検体におけるBLV感染の証拠は現時点で見られないことを報告するなど、獣医学と公衆衛生・栄養学を橋渡しする研究を行っています。</p>
              </div>
            </div>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">代表的な論文</h2>
            <ul className="lab-publication-list">
              <li><strong>BoLA-DRB3とBLVプロウイルス量の関連 (Retrovirology, 2019):</strong> 全國調査により、BLVプロウイルス量がBoLA-DRB3多型と強く関連することを示した研究。</li>
              <li><strong>BoLA-DRB3多型とリンパ腫・プロウイルス量 (Viruses, 2020):</strong> BLV誘発リンパ腫とプロウイルス量の双方に関わるBoLA-DRB3多型を解析した論文。</li>
              <li><strong>南米における新規BLV遺伝子型（genotype-9）の同定 (Retrovirology, 2016):</strong> 全ゲノム解析から新たなBLV第9遺伝子型を報告し、BLVの進化と国際的な理解を更新した研究。</li>
              <li><strong>BLV組込み部位とリンパ腫関連遺伝子クラスター (Int. J. Mol. Sci., 2025):</strong> BLV誘発リンパ腫の分子機構に迫った最新成果。</li>
              <li><strong>日本人検体におけるBLV感染の検討 (Retrovirology, 2022):</strong> 日本におけるBLVとヒト疾患の関連は現時点では支持されないと結論づけた研究。</li>
            </ul>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">教員紹介</h2>
            <div className="lab-pi-profile">
              <p><strong>竹嶋 伸之輔（Takeshima Shinnosuke）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              <p>人間生活学部 学部長 / 食物栄養学科 学科長</p>
              <p><strong>専門分野:</strong> 獣医ウイルス学, 動物遺伝学, 免疫学</p>
              <p><strong>担当科目:</strong> 解剖生理学, 病原物質・微生物学 など</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
