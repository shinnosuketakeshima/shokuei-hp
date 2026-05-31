import {
  ArrowLeft,
  Sparkles,
  Utensils,
  Activity,
  Heart,
  Tv,
  BookOpen,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabShibasaki() {
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
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">芝崎 本実 研究室</h1>
          <p className="lab-page__subtitle">和菓子と調理科学で「おいしい」を解き明かす（おだんごゼミ）</p>
        </motion.div>

        <div className="lab-page__content">
          {/* ===== Feature Story Hero ===== */}
          <motion.section
            className="lab-story-feature"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="lab-story-feature__label">
              <Sparkles size={12} /> FEATURE STORY
            </span>
            <h2 className="lab-story-feature__title">
              「好き」を科学に変える！<br />
              おだんご先生と解き明かす<br />
              <em>「和菓子と調理科学」</em>の世界
            </h2>
            <p className="lab-story-feature__lead">
              「お菓子作りが好き」「日本の食文化に興味がある」——そんな純粋なトキメキを、
              <strong>最先端の科学で探究</strong>する芝崎研究室（おだんごゼミ）。
              和菓子職人としての現場経験を持つ<strong>「おだんご先生」</strong>と一緒に、
              伝統のあんこから未来のアスリート食まで、美味しくて体に優しい和菓子の可能性を追いかける、
              熱いゼミ活動をご紹介します！
            </p>
            <div className="lab-story-feature__tags">
              <span>#おだんごゼミ</span>
              <span>#和菓子×調理科学</span>
              <span>#スイーツ開発</span>
              <span>#職人技をデータ化</span>
            </div>
          </motion.section>

          {/* ===== 専門用語の「高校生向けチュートリアル」 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究テーマ：科学の目で和菓子をアップデート！</h2>
            <p className="lab-section__body">
              「好き」という気持ちからスタートした研究も、中身は本格的。
              大学の最先端の実験機器を使って、職人の勘や経験をデータに変えていきます。
            </p>

            <div className="lab-theme-list lab-theme-list--terracotta" style={{ marginTop: '24px' }}>
              <div className="lab-theme-card">
                <div className="lab-theme-card__icon" aria-hidden="true">
                  <Activity size={28} />
                </div>
                <div className="lab-theme-card__content">
                  <span className="lab-theme-card__tag">テーマ 01</span>
                  <h3>お腹の中を再現！？「ヒト胃消化シミュレーター」で見る和菓子の優しさ</h3>
                  <p>
                    おだんごやあんこが、お腹の中でどのように消化されていくのかを、機械を使ってリアルに再現して可視化（見える化）します。
                    「胃に負担をかけない、体に優しい和菓子」の秘密をデータで解き明かします。
                  </p>
                </div>
              </div>

              <div className="lab-theme-card">
                <div className="lab-theme-card__icon" aria-hidden="true">
                  <Utensils size={28} />
                </div>
                <div className="lab-theme-card__content">
                  <span className="lab-theme-card__tag">テーマ 02</span>
                  <h3>職人の技をデータにする！伝統レシピ × 栄養強化のイノベーション</h3>
                  <p>
                    職人の勘や経験を「破断強度」などの科学データに落とし込みます。
                    美味しさはそのままに、高齢者やアスリートが必要な栄養を補給できる「進化系和菓子」を開発しています。
                  </p>
                </div>
              </div>

              <div className="lab-theme-card">
                <div className="lab-theme-card__icon" aria-hidden="true">
                  <Heart size={28} />
                </div>
                <div className="lab-theme-card__content">
                  <span className="lab-theme-card__tag">テーマ 03</span>
                  <h3>おやつで体をサポート！ライフステージに合わせた和菓子研究</h3>
                  <p>
                    成長期の子ども、スポーツをする人、そして高齢者。それぞれのライフステージや活動レベルに合わせて、
                    最適なエネルギー補給ができる「おやつ」としての和菓子のあり方を探究します。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ===== 「活動の熱量」をストーリー化 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">社会とつながるプロジェクト</h2>
            <div className="lab-project-story">
              <div className="lab-project-story__header">
                <Award size={24} className="lab-project-story__icon" />
                <h3>高校生と一緒に開発！「青春三色パン」と地域をむすぶ「しらりん食堂」</h3>
              </div>
              <div className="lab-project-story__body">
                <p>
                  研究室を飛び出し、駒場学園高等学校・食物調理科の生徒たちとタッグを組んだ高大連携プロジェクトが進行中！
                  若者の食生活をハッピーに改善するコラボパン<strong>「青春三色パン」</strong>を共同開発しました。
                </p>
                <p>
                  さらに、地域還元プロジェクトとして「適塩（ちょうどいい塩分）」をテーマにした<strong>「しらりん食堂」</strong>での活動も展開。
                  ただ料理を作るだけでなく、食を通じて社会の課題を解決する楽しさを実践しています。
                </p>
                <div className="lab-project-story__award">
                  <span className="lab-project-story__award-label">🏆 AWARD</span>
                  <p>
                    令和7年度「みどり戦略学生チャレンジ」関東ブロック大会にて、
                    <strong>農林水産省関東農政局 準グランプリ</strong>を獲得！（令和6年度は特別賞を受賞）
                    ゼミ生たちの熱い想いが、社会を動かしています。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ===== 「教員のキャラクター」を前に出す ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">おだんご先生の素顔</h2>
            <div className="lab-media-profile">
              <div className="lab-media-profile__header">
                <div className="lab-media-profile__name">
                  <span className="lab-media-profile__role">和菓子屋情報MAPサイト「おだんご日和」主宰</span>
                  <h3>芝崎 本実 准教授</h3>
                </div>
                <div className="lab-media-profile__badges">
                  <span>管理栄養士</span>
                  <span>調理師</span>
                  <span>製菓衛生師</span>
                  <span>フードスペシャリスト</span>
                </div>
              </div>
              <p className="lab-media-profile__intro">
                和菓子職人としての現場経験を活かし、地域に根ざした和菓子文化を調理科学と栄養学の視点から次世代につなぐ活動を精力的に行っています。
              </p>

              <div className="lab-media-profile__achievements">
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2"><Tv size={16} /> メディア出演</h4>
                  <ul>
                    <li><strong>TBS「マツコの知らない世界」</strong>（みたらし団子の世界）</li>
                    <li>「新説！所JAPAN」</li>
                    <li>「マツコ＆有吉 かりそめ天国」</li>
                    <li>「ノンストップ」 ほか多数出演</li>
                  </ul>
                </div>
                <div className="lab-media-profile__box">
                  <h4 className="flex items-center gap-2"><BookOpen size={16} /> 主な著書</h4>
                  <ul>
                    <li>『究極のあんこを炊く 職人技と調理科学の融合』</li>
                    <li>『あんこのことがすべてわかる本』（監修）</li>
                    <li>『おだんご先生のおいしい 手作り和菓子』シリーズ</li>
                  </ul>
                </div>
              </div>

              <div className="lab-media-profile__message">
                <p>
                  「大好きなおだんごを、科学的に語れるようになりたい」<br />
                  そんな気持ちを大切に、実験とフィールドワークの両面から「食のプロ」としての視点を養います。<br />
                  <strong>おだんごやあんこが大大好きな皆さんの参加を待っています！</strong>
                </p>
              </div>
            </div>
          </motion.section>

          {/* ===== 詳細データ格納 ===== */}
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lab-data-archive">
              <h2 className="lab-data-archive__title">Research Data & Background</h2>
              <div className="lab-data-archive__grid">
                <div>
                  <h4>専門分野</h4>
                  <div className="lab-data-archive__tags">
                    <span>調理科学</span>
                    <span>和菓子・郷土菓子</span>
                    <span>食文化</span>
                    <span>管理栄養士養成</span>
                  </div>
                </div>
                <div>
                  <h4>キーワード</h4>
                  <div className="lab-data-archive__tags">
                    <span>あんこ</span>
                    <span>みたらし団子</span>
                    <span>郷土菓子</span>
                    <span>低エネルギー甘味料</span>
                    <span>食育</span>
                    <span>in vitro消化解析</span>
                  </div>
                </div>
                <div className="col-span-full">
                  <h4>略歴</h4>
                  <p>
                    帝京平成大学大学院修了 博士（健康科学）、女子栄養大学大学院修了 修士（栄養学）。<br />
                    帝京平成大学 健康栄養学科 助教、農研機構 食品研究部門 依頼研究員を経て現職。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
