import { ArrowLeft, ArrowRight, Book, ExternalLink, GraduationCap, Microscope, Tv } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LabShibasaki() {
  return (
    <div className="lab-page">
      <div className="container">

        <motion.a
          href="#"
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
              <a href="#koudai-project" className="btn-secondary">
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
            <h2 className="lab-section__title">研究室プロフィール</h2>
            <div className="lab-pi-profile">
              <p><strong>芝崎 本実（准教授）</strong></p>
              <p className="mb-4">Motomi Shibasaki / 十文字学園女子大学 食物栄養学科</p>
              <p>
                和菓子屋情報MAPサイト「おだんご日和」主宰。
                地域に根ざした和菓子文化を、栄養・健康の視点も交えて次世代につなぐ活動を精力的に行っています。
              </p>
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
