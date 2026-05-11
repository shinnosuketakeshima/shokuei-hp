import { ArrowLeft } from 'lucide-react';

export default function LabIimura() {
  return (
    <div className="lab-page">
      <div className="container">
        <div className="lab-page__header">
          <a href="#" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 人間生活学部 食物栄養学科</p>
          <h1 className="lab-page__title">飯村 九林 研究室</h1>
          <p className="lab-page__subtitle">生体組織と食品機能を、分子レベルで探る研究室</p>
        </div>

        <div className="lab-page__content">
          <section className="lab-section">
            <h2 className="lab-section__title">研究室について</h2>
            <p className="lab-section__body">
              飯村研究室では、「生命」と「食」という私たちの生活に欠かせない2つのテーマを、分子生物学的な視点から深く探求しています。魚の鱗がどのように再生するのか、食品に含まれる成分がどのように健康に寄与するのか、あるいは食品を汚染するカビの毒素をどう防ぐのか。私たちは、生命の基本的な仕組みを解き明かす「基礎研究」と、その成果を食品や健康、環境保全へと応用する「応用研究」の両輪を大切にしています。ミクロな分子の世界から、私たちの未来の食卓と健康を見つめる。それが私たちの研究スタイルです。
            </p>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">研究テーマ</h2>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>魚類の鱗再生と骨形成の分子機構</h3>
                <p>魚の鱗は、骨と同じような硬い組織でできています。私たちは、金魚やゼブラフィッシュをモデルに、鱗がどのように作られ、再生するのかを遺伝子レベルで調べています。この研究は、骨の健康や再生医療にもつながる可能性を秘めています。</p>
              </div>
              <div className="lab-section__card">
                <h3>食品由来成分による真菌毒産生制御</h3>
                <p>食品がカビに汚染されると、アフラトキシンのような危険な毒素が作られることがあります。私たちは、食品添加物や天然の食品成分を使って、この毒素の産生を安全に防ぐ方法を開発しています。食品の安全性を守るための重要な研究です。</p>
              </div>
              <div className="lab-section__card">
                <h3>植物・天然物由来機能性成分の解析</h3>
                <p>アシタバなどの伝統的な食材には、私たちの健康に役立つ未知の機能性成分が眠っています。私たちは、それらの成分が体内でどのように働くのかを遺伝子解析などの手法を用いて解明し、新たな健康食品や医薬品の開発を目指しています。</p>
              </div>
            </div>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">代表的な研究業績</h2>
            <ul className="lab-publication-list">
              <li><strong>著書『イラスト食品学各論』(2023, 共著):</strong> 食品学の基礎をイラストで分かりやすく解説した教科書。</li>
              <li><strong>真珠貝のカルシウム結合タンパク質に関する論文 (2021):</strong> 真珠層の形成に関わるタンパク質の機能解析。バイオミネラリゼーションの理解を深める研究。</li>
              <li><strong>アシタバのセスキテルペン合成酵素遺伝子に関する論文 (2020):</strong> 健康機能性で注目されるアシタバの有用成分が作られる仕組みを遺伝子レベルで解明。</li>
              <li><strong>アフラトキシン産生阻害機構に関する論文 (2017):</strong> 食品汚染カビ毒の産生を抑制する化合物の作用メカニズムを明らかにした研究。</li>
              <li><strong>博士論文「魚類の鱗進化に関する分子生物学的研究」 (2012):</strong> 魚類の鱗が進化の過程でどのように多様化してきたかを分子レベルで探求。</li>
            </ul>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">教員紹介</h2>
            <div className="lab-pi-profile">
              <p><strong>飯村 九林（いいむら くりん）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              <p><strong>専門分野:</strong> 分子生物学, 食品科学, バイオミネラリゼーション</p>
              <p><strong>研究キーワード:</strong> 魚類鱗, 骨形成, 食品機能性成分, 真菌毒, 遺伝子解析</p>
              <p><strong>学生へのメッセージ:</strong>
              大学での学びは、答えのない問いに挑戦する冒険です。研究室では、教科書には載っていない「？」を自分自身の力で「！」に変える経験ができます。失敗を恐れず、好奇心を大切に、一緒に研究を楽しみましょう。卒業後も続くような、温かいコミュニティを築いていきたいと思っています。</p>
            </div>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">研究室生活と卒業研究</h2>
            <p className="lab-section__body">
            本研究室の卒業研究では、学生一人ひとりが主役です。自ら立てた研究計画に基づき、実験、文献調査、データ解析、そして発表という一連の研究プロセスを主体的に経験します。この過程を通じて、論理的思考力、問題解決能力、そしてプレゼンテーション能力が着実に身につきます。研究室は、研究だけに打ち込む場所ではありません。私たちは、学生同士や教員とのコミュニケーションを大切にしており、卒業式のお祝いなど、和やかな雰囲気の中で研究室生活を送っています。卒業生が気軽に顔を出してくれるのも、私たちの研究室の自慢です。
            </p>
            <h3 className="lab-subsection__title">卒業研究テーマの例</h3>
            <ul className="lab-publication-list">
              <li>アシタバ由来成分の抗酸化作用に関する研究</li>
              <li>食品添加物によるアフラトキシン産生阻害効果の比較検討</li>
              <li>ゼブラフィッシュを用いた鱗再生における遺伝子発現の観察</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
