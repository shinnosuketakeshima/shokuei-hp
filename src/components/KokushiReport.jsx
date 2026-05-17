import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function KokushiReport() {
  return (
    <div className="kr-page">
      <div className="container">

        {/* 戻るリンク */}
        <motion.a
          href="/"
          className="lab-page__back-link"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={16} />
          <span>トップページに戻る</span>
        </motion.a>

        {/* ページヘッダー */}
        <motion.div
          className="kr-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="kr-header__eyebrow">国家試験 / Exam Report</p>
          <h1 className="kr-header__title">
            第40回管理栄養士国家試験<br />
            結果と本学の取り組みについて
          </h1>
          <p className="kr-header__meta">2026年5月（2026年度更新）食物栄養学科</p>
        </motion.div>

        {/* セクション1：正直な報告 ── 誠実さ→数字→次へ の順 */}
        <motion.section
          className="kr-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 01</div>
          <h2 className="kr-section__title">今年度の結果を、正直にお伝えします</h2>

          <motion.div
            className="kr-honest-box kr-honest-box--lead"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>大学のホームページには、良い数字だけを載せているところも少なくありません。でも私たちは、今年度の結果をそのままお伝えすることが、皆さんへの誠実さだと考えています。</p>
          </motion.div>

          <div className="kr-stats-row">
            <motion.div
              className="kr-stat kr-stat--highlight"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="kr-stat__num">72.7<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">本学 第40回合格率</div>
            </motion.div>
            <motion.div
              className="kr-stat"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="kr-stat__num kr-stat__num--muted">79.4<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">全国平均（第40回）</div>
            </motion.div>
            <motion.div
              className="kr-stat"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="kr-stat__num">83.9<span className="kr-stat__unit">%</span></div>
              <div className="kr-stat__label">本学 前2回平均<br /><span className="kr-stat__sublabel">（第38・39回）</span></div>
            </motion.div>
          </div>

          <motion.div
            className="kr-honest-box"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>前2回（第38・39回）は83.9%で全国平均を上回っていました。今回はその水準を下回る結果となり、学科として真剣に受け止めています。</p>
            <p>以下では、この結果の背景・原因・これからの取り組みを順にご説明します。</p>
          </motion.div>
        </motion.section>

        {/* セクション2：試験の変化 ── 高校生向けに平易化 */}
        <motion.section
          className="kr-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 02</div>
          <h2 className="kr-section__title">管理栄養士国家試験は、今、大きく変わっています</h2>
          <p className="kr-body">言い訳ではなく、背景としてお伝えします。</p>

          <motion.div
            className="kr-change-stat"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="kr-change-stat__num">47.6%</span>
            <span className="kr-change-stat__desc">第40回（2026年）の全体合格率。4年連続で低下しています。</span>
          </motion.div>

          <p className="kr-body">以前の試験は、「知識をどれだけ覚えているか」が中心でした。しかし近年は、<strong>「なぜそう考えるか」「その状況でどう判断するか」</strong>を問う問題が大きく増えています。</p>

          <motion.ul
            className="kr-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "最新の国の政策や健康ガイドラインを読んで答える問題",
              "グラフや表のデータを見て、自分で計算・読み取る問題",
              "「この状況で管理栄養士として何をすべきか」という判断力を問う問題"
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >{item}</motion.li>
            ))}
          </motion.ul>

          <p className="kr-body">この変化に対応できた大学とそうでない大学で、今回は差が出ました。本学もその影響を受けています。この変化に正面から向き合うことが、私たちの出発点です。</p>
        </motion.section>

        {/* セクション3：要因分析 ── 表現を平易に */}
        <motion.section
          className="kr-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 03</div>
          <h2 className="kr-section__title">なぜ、今回の結果になったか</h2>
          <p className="kr-body">学内で分析した3点をお伝えします。</p>

          <div className="kr-cause-grid">
            {[
              {
                num: "①",
                title: "試験の変化への対応が遅れた",
                body: "これまでの対策は過去問中心で、毎年変わる国の政策・ガイドラインへの対応が十分でなかった。"
              },
              {
                num: "②",
                title: "グラフや数字を読む練習が不足していた",
                body: "データを見て、計算して、「これは何を意味するのか」まで考える練習が足りなかった。"
              },
              {
                num: "③",
                title: "科目をつなげて考える力の育成",
                body: "試験の後半30問は、複数の科目の知識を組み合わせて解く問題。各科目が連携した学びが必要で、ここに課題があった。"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="kr-cause-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="kr-cause-card__num">{card.num}</div>
                <h3 className="kr-cause-card__title">{card.title}</h3>
                <p className="kr-cause-card__body">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* セクション4：対策 */}
        <motion.section
          className="kr-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 04</div>
          <h2 className="kr-section__title">私たちが取り組むこと</h2>

          <motion.div
            className="kr-slogan"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            「全員合格」を、第41回（令和9年度）に向けたスローガンとして掲げます。
          </motion.div>

          {/* ★ 新設ワークグループ ── 「シンクタンク」を平易な表現に */}
          <motion.div
            className="kr-wg-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="kr-wg-block__badge">2026年度 新設</div>
            <h3 className="kr-wg-block__title">
              先生たち全員で国家試験を分析し、<br />授業に生かすチームをつくりました
            </h3>
            <p className="kr-wg-block__body">
              昨年度の結果を受け、2026年度から「国試戦略ワークグループ」を学科内に設置しました。教員全員が集まって試験の傾向を読み解き、「どう授業に生かすか」を継続的に議論する場です。対策講座の改善だけでなく、<strong>1年生の授業から国試につながる学びを設計する</strong>ことが、このチームの役割です。
            </p>
            <div className="kr-wg-pillars">
              {[
                { icon: "📊", label: "傾向を読む", desc: "毎年の試験データを全教員で分析し、出題の変化をいち早く授業に反映する" },
                { icon: "🔗", label: "先生同士でつながる", desc: "科目の担当者どうしが情報を共有し、授業と国試対策がバラバラにならないようにする" },
                { icon: "🌱", label: "1年生から積み上げる", desc: "「4年生になって急いで対策を始める」ではなく、入学直後から国試につながるよう学びを設計する" }
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="kr-wg-pillar"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
                >
                  <span className="kr-wg-pillar__icon">{p.icon}</span>
                  <span className="kr-wg-pillar__label">{p.label}</span>
                  <span className="kr-wg-pillar__desc">{p.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4つの具体的施策 */}
          <div className="kr-measures">
            {[
              {
                num: "01",
                title: "国試対策の仕組みを作り直します",
                items: [
                  "毎年変わる国の政策・ガイドラインを常にチェックし、対策に反映する",
                  "過去問だけでなく、教員が作るオリジナルの予測問題も対策講座に取り入れる"
                ]
              },
              {
                num: "02",
                title: "データを読んで考える練習を増やします",
                items: [
                  "グラフや統計を使った読み取り・計算の演習を授業に組み込む",
                  "「答えを出して終わり」ではなく、「それが何を意味するか」まで考える習慣をつける"
                ]
              },
              {
                num: "03",
                title: "科目をつなげて考える力を育てます",
                items: [
                  "実際の場面を想定して複数の知識を組み合わせて解くグループ学習を導入",
                  "「一番適切な答えはどれか」を議論しながら考える授業を実施"
                ]
              },
              {
                num: "04",
                title: "一人ひとりに合わせたサポートを続けます",
                items: [
                  "模擬試験の結果を「合計点」だけでなく、得意・苦手を分野別に詳しく分析",
                  "ゼミ担任が一人ひとりの弱点に合わせた学習計画を一緒に立てる"
                ]
              }
            ].map((measure, i) => (
              <motion.div
                key={i}
                className="kr-measure"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="kr-measure__head">
                  <span className="kr-measure__tag">取り組み {measure.num}</span>
                  <h3 className="kr-measure__title">{measure.title}</h3>
                </div>
                <ul className="kr-list">
                  {measure.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* セクション5：学生の姿 ── 新規追加 */}
        <motion.section
          className="kr-section kr-section--students"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 05</div>
          <h2 className="kr-section__title">学生は、こうやって成長しています</h2>
          <p className="kr-body">国家試験は確かに難しい。でも、合格した先輩たちの多くは、入学時から得意だったわけではありません。</p>

          <div className="kr-student-cards">
            {[
              {
                tag: "苦手科目の克服",
                text: "生化学がどうしても苦手だった学生が、担任との面談を重ね、勉強の順番を変えたことで模擬試験の点数が大きく伸びた。"
              },
              {
                tag: "実習での気づき",
                text: "病院実習で患者さんと向き合うなかで「絶対に合格しなければ」という気持ちが芽生えた、という学生は少なくありません。"
              },
              {
                tag: "仲間と一緒に",
                text: "ゼミ仲間と問題を出し合い、教え合うことで、自分一人では気づかなかった理解の穴を埋めていく。それが本学のスタイルです。"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="kr-student-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <span className="kr-student-card__tag">{card.tag}</span>
                <p className="kr-student-card__text">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* セクション6：受験生へ */}
        <motion.section
          className="kr-section kr-section--message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 06</div>
          <h2 className="kr-section__title">本学で管理栄養士をめざす皆さんへ</h2>

          <p className="kr-body">今年度の合格率は、本学の現状を正直にお伝えするために公開しています。</p>
          <p className="kr-body">管理栄養士の国家試験は難しくなっています。でも、それは全国共通の変化です。この変化にきちんと対応できている大学では、今も高い合格率を維持しています。私たちは、その差を埋めるために教員全員で本気で動き始めています。</p>
          <p className="kr-body">2026年度から始まったワークグループの取り組みは、これから入学する皆さんの授業にも直接つながっています。<strong>入学した1年生のころから、国試に向けた学びが始まる</strong>。それが本学の新しいスタートラインです。</p>

          <motion.div
            className="kr-strengths"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="kr-strengths__heading">本学の強みは変わりません。</p>
            <ul className="kr-list">
              <li>管理栄養士＋第一種衛生管理者のダブルライセンスが取得できる、全国でも希少なカリキュラム</li>
              <li>病院・学校・地域での豊富な実習</li>
              <li>担任制とゼミ担任による、二重のサポート体制</li>
            </ul>
          </motion.div>

          <p className="kr-body kr-body--emphasis">国家試験の合格率は、必ず回復させます。その道のりを、皆さんと一緒に歩んでいきます。</p>
        </motion.section>

        {/* セクション7：お問い合わせ */}
        <motion.section
          className="kr-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="kr-section__label">Section 07</div>
          <h2 className="kr-section__title">更新情報・お問い合わせ</h2>
          <p className="kr-body">ワークグループの活動状況や取り組みの進捗を、このページで随時更新していきます。</p>

          <div className="kr-links">
            <a href="https://www.jumonji-u.ac.jp/humanlife/food/" className="kr-link-btn" target="_blank" rel="noopener noreferrer">
              入試相談・オープンキャンパス情報 <ArrowRight size={14} />
            </a>
            <a href="https://www.jumonji-u.ac.jp/humanlife/food/" className="kr-link-btn kr-link-btn--outline" target="_blank" rel="noopener noreferrer">
              学科公式HP <ArrowRight size={14} />
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
