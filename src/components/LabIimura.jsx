import { ArrowLeft } from 'lucide-react';

export default function LabIimura() {
  return (
    <div className="lab-page">
      <div className="container">
        <div className="lab-page__header">
          <a href="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </a>
          <p className="lab-page__eyebrow">十文字学園女子大学 人間生活学部 食物栄養学科</p>
          <h1 className="lab-page__title">飯村 九林 研究室</h1>
          {/* 旧: 「分子レベルで探る」→現在の研究軸（食品・老化・小型魚類モデル）を反映して修正 */}
          <p className="lab-page__subtitle">小型魚類を研究モデルに、食品と生命科学の接点を探る研究室</p>
        </div>

        <div className="lab-page__content">
          <section className="lab-section">
            <h2 className="lab-section__title">研究室について</h2>
            {/* 旧: 真菌毒の記述が現在の主軸でないため、現在の研究テーマ（小型魚類・老化モデル・ヒアルロン酸）を中心に書き直し */}
            <p className="lab-section__body">
              飯村研究室では、魚を「食料」としてではなく「研究モデル」として活用するという、ユニークなアプローチで食品科学・生命科学の研究を進めています。ゼブラフィッシュや金魚などの小型魚類は、低コストで飼育でき、鱗・尾びれ・心臓など様々な組織を短期間で再生できるという特性を持っています。私たちはこの特性を活かして、骨や皮膚の再生メカニズム、老化と深く関わるヒアルロン酸の機能、紫外線が皮膚に与える影響などを解析しています。ミクロな分子の世界から、食と健康の未来を見つめる——それが私たちの研究スタイルです。
            </p>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">研究テーマ</h2>
            <div className="lab-section__grid">
              {/* 旧: 3テーマすべてが現在の研究室の主軸とズレていたため、PPT・業績ページをもとに更新 */}
              <div className="lab-section__card">
                <h3>小型魚類を用いた食品研究モデルの確立</h3>
                <p>ゼブラフィッシュや金魚などの小型魚類は、哺乳類に似た組織を持ちながら、安価・短期間で実験できる優れた研究モデルです。食品成分の骨・皮膚への効果を調べる「スクリーニング系」の構築を目指しています。</p>
              </div>
              <div className="lab-section__card">
                <h3>ヒアルロン酸と鱗・皮膚の再生・老化機構</h3>
                <p>ヒアルロン酸は多くの組織に含まれ、老化とともに減少することが知られています。魚の鱗における再生過程でのヒアルロン酸の局在や機能を解析し、骨・皮膚の老化モデルとしての応用を目指しています。</p>
              </div>
              <div className="lab-section__card">
                <h3>紫外線（UV）による光老化メカニズムの解析</h3>
                <p>紫外線は皮膚の老化（シワ・たるみ）の主要因のひとつです。魚の鱗再生モデルを使って、UV照射が石灰化や線維層板形成に与える影響を組織・分子レベルで解明する研究を進めています。</p>
              </div>
            </div>
            {/* 追記: 過去の研究テーマ（アシタバ・真菌毒）についても一言触れる */}
            <p className="lab-section__body" style={{marginTop: '1rem', fontSize: '0.9em', color: 'var(--color-muted)'}}>
              ※ これまでの研究では、アフラトキシン（カビ毒）産生阻害や、アシタバなど植物由来機能性成分の遺伝子解析も行ってきました。
            </p>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">代表的な研究業績</h2>
            <ul className="lab-publication-list">
              <li><strong>著書『イラスト食品学各論』(2023, 共著):</strong> 食品学の基礎をイラストで分かりやすく解説した教科書。</li>
              <li><strong>真珠貝（アコヤガイ）のカルシウム結合タンパク質に関する論文 (2021):</strong> 真珠層の形成に関わるサルコプラズミックカルシウム結合タンパク質の精製・結晶化・X線解析。</li>
              <li><strong>アシタバのセスキテルペン合成酵素遺伝子に関する論文 (2020):</strong> アシタバ（Angelica keiskei）の機能性成分合成に関わる酵素遺伝子のクローニングと機能解析。</li>
              {/* 追記: 業績ページに記載のある2017年和文論文が漏れていたため追加 */}
              <li><strong>食品添加物を用いたアフラトキシン汚染防除（Bio industry, 2017, 共著）:</strong> 食品添加物によるカビ毒汚染防除手法をまとめた総説論文。</li>
              <li><strong>アフラトキシン産生阻害機構に関する論文（Toxins, 2017, 共著）:</strong> cyclo(L-Ala-L-Pro)によるアフラトキシン産生阻害メカニズムを明らかにした研究。</li>
              {/* 旧: 博士論文タイトル「魚類の鱗進化に関する分子生物学的研究」は業績ページ未記載のため、学位・所属情報に修正 */}
              <li><strong>博士（水産科学）取得 (2012):</strong> 北海道大学大学院 水産科学院 海洋応用生命科学専攻。魚類の分子生物学的研究に従事。</li>
            </ul>
          </section>

          {/* 追記: 受賞・特許セクションを新設（業績ページに記載あり） */}
          <section className="lab-section">
            <h2 className="lab-section__title">受賞・特許</h2>
            <ul className="lab-publication-list">
              <li><strong>ISMYCO 2016 Silver Presentation Award (2016):</strong> アフラトキシン産生特異的阻害剤 cyclo(L-Ala-L-Pro) の標的分子に関する研究発表により受賞。</li>
              <li><strong>特許「アフラトキシン産生阻害剤及びアフラトキシン汚染防除方法」(登録 2016/03/29):</strong> 食品を汚染するカビ毒産生を抑制する新規手法に関する特許。</li>
            </ul>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">教員紹介</h2>
            <div className="lab-pi-profile">
              <p><strong>飯村 九林（いいむら くりん）</strong></p>
              <p>十文字学園女子大学 人間生活学部 食物栄養学科・教授</p>
              {/* 旧: 「分子生物学, 食品科学」→ 業績ページの専門分野に修正 */}
              <p><strong>専門分野:</strong> 農芸化学, 水圏応用科学（生物有機化学・水圏生命科学・バイオミネラリゼーション）</p>
              {/* 旧: キーワードを現在の研究テーマ・PPPTに合わせて更新 */}
              <p><strong>研究キーワード:</strong> 小型魚類, 鱗再生, ヒアルロン酸, 石灰化, 老化, 紫外線, コラーゲン, バイオミネラリゼーション, 食品機能性成分</p>
              {/* 追記: 所属学会・職歴を簡潔に追記 */}
              <p><strong>所属学会:</strong> 日本農芸化学会, 日本水産学会</p>
              <p><strong>職歴（抜粋）:</strong> 北海道大学大学院 博士課程修了後、東京大学大学院 農学生命科学研究科 特任研究員、日本女子大学 家政学部 助教を経て、2020年より現職（2026年4月より教授）。</p>
              <p><strong>学生へのメッセージ:</strong>
              大学での学びは、答えのない問いに挑戦する冒険です。研究室では、教科書には載っていない「？」を自分自身の力で「！」に変える経験ができます。失敗を恐れず、好奇心を大切に、一緒に研究を楽しみましょう。卒業後も続くような、温かいコミュニティを築いていきたいと思っています。</p>
            </div>
          </section>

          <section className="lab-section">
            <h2 className="lab-section__title">研究室生活と卒業研究</h2>
            <p className="lab-section__body">
            本研究室の卒業研究では、学生一人ひとりが主役です。自ら立てた研究計画に基づき、実験、文献調査、データ解析、そして発表という一連の研究プロセスを主体的に経験します。この過程を通じて、論理的思考力、問題解決能力、そしてプレゼンテーション能力が着実に身につきます。研究室は、研究だけに打ち込む場所ではありません。私たちは、学生同士や教員とのコミュニケーションを大切にしており、卒業式のお祝いなど、和やかな雰囲気の中で研究室生活を送っています。卒業生が気軽に顔を出してくれるのも、私たちの研究室の自慢です。
            </p>
            {/* PPTのスケジュール説明も反映 */}
            <p className="lab-section__body">
            ゼミは2週間に1回程度（論文紹介・研究紹介など）。実験は特に長期休暇期間中を中心に実施します。魚の飼育から顕微鏡観察、PCRなどの分子生物学実験まで、幅広い手技を習得できます。
            </p>
            <h3 className="lab-subsection__title">卒業研究テーマの例</h3>
            {/* 旧: アシタバ・アフラトキシン中心 → 現在の研究室テーマに合わせて更新 */}
            <ul className="lab-publication-list">
              <li>魚の鱗再生を利用したヒアルロン酸機能の解析</li>
              <li>紫外線照射が鱗の石灰化・線維層板形成に与える影響</li>
              <li>ゼブラフィッシュ・金魚を用いた食品成分の骨・皮膚への作用評価</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
