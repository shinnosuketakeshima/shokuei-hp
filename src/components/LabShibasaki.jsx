import { ArrowLeft, ArrowRight, Book, ExternalLink, GraduationCap, Tv } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LabShibasaki() {
  return (
    <div className="lab-page">
      <div className="container">

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

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="lab-page__eyebrow">研究室紹介 / Laboratory</p>
          <h1 className="lab-page__title">
            和菓子と調理科学で<br />
            「おいしい」を解き明かす
          </h1>
          <p className="lab-page__subtitle">芝崎本実研究室（おだんごゼミ）</p>
        </motion.div>

        <div className="lab-page__content">
          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">研究室の概要</h2>
            <p className="lab-section__body">
              和菓子職人としての現場経験と、調理科学研究者としての視点を掛け合わせ、
              郷土菓子やあんこ、おだんごの世界を科学的に探究する研究室です。
              「好き」を研究に変えたい学生が集まり、伝統的な製法から現代的な機能性開発まで、
              幅広く和菓子の可能性を追求しています。
            </p>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <h3>専門分野</h3>
                <p>調理科学、和菓子・郷土菓子、食文化、管理栄養士養成</p>
              </div>
              <div className="lab-section__card">
                <h3>キーワード</h3>
                <p>あんこ、みたらし団子、郷土菓子、低エネルギー甘味料、食育、in vitro消化解析</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">主な研究テーマ</h2>
            <div className="lab-publication-list">
              <li>
                <strong>in vitro 消化挙動の解析：</strong>
                ヒト胃消化シミュレーターを用いて、デンプンやたんぱく質の消化過程を可視化し、食感と消化性の関係を解明します。
              </li>
              <li>
                <strong>郷土菓子・和菓子の調理科学：</strong>
                材料配合や工程が物性・嗜好性に及ぼす影響を検討し、栄養強化和菓子への応用を試みています。
              </li>
              <li>
                <strong>高齢者・アスリートの食と和菓子：</strong>
                ライフステージや身体活動レベルに応じた「おやつ」としての和菓子のあり方を探究しています。
              </li>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">メディア実績・著書</h2>
            <p className="lab-section__body">
              「おだんご先生」として、メディアを通じて和菓子の魅力と科学を発信しています。
            </p>
            <div className="lab-section__grid">
              <div className="lab-section__card">
                <div className="flex items-center gap-2 mb-2">
                  <Tv size={18} className="text-terracotta" />
                  <h3 className="m-0">テレビ出演</h3>
                </div>
                <p>
                  TBS「マツコの知らない世界」みたらし団子の世界<br />
                  「新説！所JAPAN」「マツコ＆有吉 かりそめ天国」「ノンストップ」ほか多数
                </p>
              </div>
              <div className="lab-section__card">
                <div className="flex items-center gap-2 mb-2">
                  <Book size={18} className="text-terracotta" />
                  <h3 className="m-0">主な著書</h3>
                </div>
                <p>
                  『究極のあんこを炊く』（日本栄養大学出版部）<br />
                  『あんこのことがすべてわかる本』（監修）<br />
                  『おだんご先生のおいしい 手作り和菓子』四季シリーズ
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">社会貢献・高大連携</h2>
            <p className="lab-section__body">
              地域社会や教育機関との連携を重視し、食を通じた課題解決に取り組んでいます。
            </p>
            <div className="lab-section__card">
              <h3 className="flex items-center gap-2">
                <ExternalLink size={18} className="text-terracotta" />
                駒場学園高等学校との高大連携
              </h3>
              <p className="mb-4">
                食物調理科の生徒たちと共同で、若者の食生活改善を目指した「青春三色パン」の開発や、
                適塩をテーマにした地域還元プロジェクト「しらりん食堂」での活動などを展開しています。
              </p>
              <a href="/koudai-project" className="btn-secondary">
                高大連携プロジェクトの詳細を見る <ArrowRight size={14} />
              </a>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">受賞歴</h2>
            <div className="lab-publication-list">
              <li>
                <strong>令和7年度 みどり戦略学生チャレンジ 関東ブロック大会：</strong>
                「高大連携：食の未来を創るプロジェクト」農林水産省関東農政局 準グランプリ
                <br />
                <a href="/koudai-project" className="text-terracotta hover:underline text-xs inline-flex items-center gap-1 mt-1">
                  プロジェクト詳細はこちら <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <strong>令和6年度 みどり戦略学生チャレンジ 関東ブロック大会：</strong>
                「高大連携：食の未来を創るプロジェクト」農林水産省関東農政局 特別賞
              </li>
              <li>
                <strong>令和7年度 武蔵野会賞：</strong>
                フードドライブプラス2024（指導教員）入選
              </li>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="lab-section__title">経歴・プロフィール</h2>
            <div className="lab-pi-profile">
              <p className="mb-2"><strong>芝崎 本実（准教授）</strong></p>
              <p className="text-xs mb-4">Motomi Shibasaki / 十文字学園女子大学 食物栄養学科</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-charcoal font-medium text-sm mb-2 border-l-2 border-terracotta pl-2">職歴</h4>
                  <ul className="text-xs space-y-1 list-none p-0">
                    <li>十文字学園女子大学 准教授（現職）</li>
                    <li>十文字学園女子大学 専任講師</li>
                    <li>農研機構 食品研究部門 依頼研究員</li>
                    <li>帝京平成大学 健康栄養学科 助教</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-charcoal font-medium text-sm mb-2 border-l-2 border-terracotta pl-2">学歴・学位</h4>
                  <ul className="text-xs space-y-1 list-none p-0">
                    <li>帝京平成大学大学院 修了 博士（健康科学）</li>
                    <li>女子栄養大学大学院 修了 修士（栄養学）</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-charcoal font-medium text-sm mb-2 border-l-2 border-terracotta pl-2">資格</h4>
                <p className="text-xs">
                  管理栄養士、調理師、製菓衛生師、フードスペシャリスト
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-xs leading-relaxed">
                  和菓子屋情報MAPサイト「おだんご日和」主宰。
                  和菓子職人としての経験を活かし、地域に根ざした和菓子文化を調理科学と栄養学の視点から次世代につなぐ活動を精力的に行っています。
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="lab-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl bg-charcoal text-white p-8 shadow-xl">
              <h2 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <GraduationCap className="text-terracotta" />
                ゼミ生へのメッセージ
              </h2>
              <p className="text-stone-light leading-relaxed mb-6">
                「大好きなおだんごを、科学的に語れるようになりたい」<br />
                そんな気持ちを大切に、実験とフィールドワークの両面から「食のプロ」としての視点を養います。<br />
                おだんごやあんこが大大好きな皆さんの参加を待っています！
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 text-xs border border-white/20">#おだんごゼミ</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-xs border border-white/20">#和菓子×調理科学</span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-xs border border-white/20">#フィールドワーク</span>
              </div>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  )
}
