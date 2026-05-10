import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function KokushiReport() {
  return (
    <div className="kr-page">
      <div className="container">

        {/* 戻るリンク */}
        <a href="#" className="lab-page__back-link">
          <ArrowLeft size={16} />
          <span>トップページに戻る</span>
        </a>

        {/* ページヘッダー */}
        <div className="kr-header">
          <p className="kr-header__eyebrow">国家試験 / Exam Report</p>
          <h1 className="kr-header__title">
            第40回管理栄養士国家試験<br />
            結果と本学の取り組みについて
          </h1>
          <p className="kr-header__meta">2026年5月 食物栄養学科</p>
        </div>

        {/* セクション1：正直な報告 */}
        <section className="kr-section">
          <div className="kr-section__label">Section 01</div>
          <h2 className="kr-section__title">今年度の結果を、まずご報告します</h2>

          <div className="kr-stats-row">
            <div className="kr-stat kr-stat--highlight">
              <div className="kr-stat__num">72.7<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">本学 第40回合格率</div>
            </div>
            <div className="kr-stat">
              <div className="kr-stat__num kr-stat__num--muted">79.4<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">全国平均（第40回）</div>
            </div>
            <div className="kr-stat">
              <div className="kr-stat__num">83.9<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">本学 前2回平均<br /><span className="kr-stat__sublabel">（第38・39回）</span></div>
            </div>
          </div>

          <div className="kr-honest-box">
            <p>前2回（第38・39回）は83.9%で全国平均を上回っていました。今回は全国平均を6.7ポイント下回る結果となりました。</p>
            <p>本学科として、この結果を真摯に受け止めています。数値は公開情報であり、先に自分たちからお伝えすることが誠実だと判断しました。以下では、背景・原因・対策を順にご説明します。</p>
          </div>
        </section>

        {/* セクション2：試験の変化 */}
        <section className="kr-section">
          <div className="kr-section__label">Section 02</div>
          <h2 className="kr-section__title">管理栄養士国家試験は、今、大きく変わっています</h2>
          <p className="kr-body">言い訳ではなく、背景としてお伝えします。</p>

          <div className="kr-change-stat">
            <span className="kr-change-stat__num">47.6%</span>
            <span className="kr-change-stat__desc">第40回（2026年）の全体合格率。4年連続で低下しています。</span>
          </div>

          <p className="kr-body">試験の出題方針が、「知識の暗記」から「論理的思考・最新情報への対応・多職種連携」へと大きく転換しています。</p>

          <ul className="kr-list">
            <li>最新の保健政策（健康日本21第三次、睡眠ガイド2023等）の直接出題</li>
            <li>実際のデータ表から疫学指標を自力で計算する問題</li>
            <li>法制度に基づいてどう行動するかを問う「最適解」選択問題</li>
          </ul>

          <p className="kr-body">複数の大学で合格率が下落しており、全国的な出題傾向の変化への対応が共通課題となっています。本学でも、この変化に正面から向き合います。</p>
        </section>

        {/* セクション3：要因分析 */}
        <section className="kr-section">
          <div className="kr-section__label">Section 03</div>
          <h2 className="kr-section__title">なぜ、今回の結果になったか</h2>
          <p className="kr-body">学内で分析した3点をお伝えします。</p>

          <div className="kr-cause-grid">
            <div className="kr-cause-card">
              <div className="kr-cause-card__num">①</div>
              <h3 className="kr-cause-card__title">最新の出題傾向への対応の遅れ</h3>
              <p className="kr-cause-card__body">これまでの対策が過去問中心の学習に偏っており、毎年改定される国の政策・ガイドラインへの対応が十分でなかった。</p>
            </div>
            <div className="kr-cause-card">
              <div className="kr-cause-card__num">②</div>
              <h3 className="kr-cause-card__title">データ解釈・計算問題への対応力</h3>
              <p className="kr-cause-card__body">疫学データを読み、計算し、意味を解釈する「データリテラシー」のトレーニングが不足していた。</p>
            </div>
            <div className="kr-cause-card">
              <div className="kr-cause-card__num">③</div>
              <h3 className="kr-cause-card__title">科目を横断した総合的思考力</h3>
              <p className="kr-cause-card__body">試験の後半30問（応用力試験）は複数の科目知識を組み合わせて解く設問で、各科目が連携した学習が求められる。この点で課題があった。</p>
            </div>
          </div>
        </section>

        {/* セクション4：対策 */}
        <section className="kr-section">
          <div className="kr-section__label">Section 04</div>
          <h2 className="kr-section__title">私たちが取り組むこと</h2>

          <div className="kr-slogan">
            「全員合格」を、第41回（令和9年度）に向けたスローガンとして掲げます。
          </div>

          <div className="kr-measures">
            <div className="kr-measure">
              <div className="kr-measure__head">
                <span className="kr-measure__tag">取り組み 01</span>
                <h3 className="kr-measure__title">国試対策の仕組みを再構築します</h3>
              </div>
              <ul className="kr-list">
                <li>国家試験対策委員会を強化し、厚生労働省の最新ガイドライン・政策動向を常時モニタリング</li>
                <li>過去問だけに頼らず、教員が作成するオリジナル予測問題を対策講座に随時組み込む</li>
              </ul>
            </div>

            <div className="kr-measure">
              <div className="kr-measure__head">
                <span className="kr-measure__tag">取り組み 02</span>
                <h3 className="kr-measure__title">データリテラシーのトレーニングを強化します</h3>
              </div>
              <ul className="kr-list">
                <li>実際の統計データを使った計算演習を授業・対策講座に組み込む</li>
                <li>「計算して終わり」ではなく、結果が何を意味するかまで考える訓練を行う</li>
              </ul>
            </div>

            <div className="kr-measure">
              <div className="kr-measure__head">
                <span className="kr-measure__tag">取り組み 03</span>
                <h3 className="kr-measure__title">分野を横断した思考力を養います</h3>
              </div>
              <ul className="kr-list">
                <li>複数の科目知識を組み合わせて解くケーススタディ学習（Case-Based Learning）を導入</li>
                <li>「最も適切な解はどれか」を議論するグループ学習を実施</li>
              </ul>
            </div>

            <div className="kr-measure">
              <div className="kr-measure__head">
                <span className="kr-measure__tag">取り組み 04</span>
                <h3 className="kr-measure__title">一人ひとりに合わせた個別指導を深化させます</h3>
              </div>
              <ul className="kr-list">
                <li>模擬試験の結果を得点の総合点だけでなく、分野別・問題タイプ別に詳細分析</li>
                <li>ゼミ担任による「弱点に基づいた個別の学習計画」の提供</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション5：受験生へ */}
        <section className="kr-section kr-section--message">
          <div className="kr-section__label">Section 05</div>
          <h2 className="kr-section__title">本学で管理栄養士をめざす皆さんへ</h2>

          <p className="kr-body">今年度の合格率は、本学の現状を正直にお伝えするために公開しています。</p>
          <p className="kr-body">管理栄養士の国家試験は難しくなっています。しかし、それは全国共通の課題であり、適切な対策を組織として行っている大学では高い合格率を維持しています。私たちは、その差を埋めるために本気で動いています。</p>

          <div className="kr-strengths">
            <p className="kr-strengths__heading">本学の強みは変わりません。</p>
            <ul className="kr-list">
              <li>管理栄養士＋第一種衛生管理者のダブルライセンスが取得できる国内でも希少なカリキュラム</li>
              <li>病院・学校・地域での豊富な実習</li>
              <li>担任制とゼミ担任による二重のサポート体制</li>
            </ul>
          </div>

          <p className="kr-body kr-body--emphasis">国家試験合格率は、今後の取り組みで必ず回復させます。その過程ごと、皆さんと一緒に歩んでいきます。</p>
        </section>

        {/* セクション6：お問い合わせ */}
        <section className="kr-section">
          <div className="kr-section__label">Section 06</div>
          <h2 className="kr-section__title">更新情報・お問い合わせ</h2>
          <p className="kr-body">今後、取り組みの進捗をこのページで随時更新していきます。</p>

          <div className="kr-links">
            <a href="https://www.jumonji-u.ac.jp/humanlife/food/" className="kr-link-btn" target="_blank" rel="noopener noreferrer">
              入試相談・オープンキャンパス情報 <ArrowRight size={14} />
            </a>
            <a href="https://www.jumonji-u.ac.jp/humanlife/food/" className="kr-link-btn kr-link-btn--outline" target="_blank" rel="noopener noreferrer">
              学科公式HP <ArrowRight size={14} />
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
