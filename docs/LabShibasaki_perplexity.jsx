import React from "react";

// 十文字学園女子大学 食物栄養学科 芝崎研究室（おだんごゼミ）ページ
// 非公式学科HP からリンクされる想定の単独セクションコンポーネント

const LabShibazaki = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-800">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
          <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 blur-3xl" />
          <div className="absolute right-0 top-10 w-72 h-72 rounded-full bg-gradient-to-tr from-orange-200 to-amber-100 blur-3xl" />
          <div className="absolute -right-10 bottom-0 w-64 h-64 rounded-full bg-gradient-to-tl from-rose-200 to-orange-100 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide mb-4 shadow-sm">
                十文字学園女子大学 人間生活学部 食物栄養学科
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                和菓子と調理科学で
                <br className="hidden sm:block" />
                「おいしい」を解き明かす
                <span className="block mt-2 text-amber-600 text-2xl sm:text-3xl">
                  芝崎研究室（おだんごゼミ）
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700">
                和菓子職人としての経験と、調理科学・栄養学の研究を掛け合わせて、
                郷土菓子やあんこ、おだんごの世界を科学的に探究する研究室です。
                「好き」を研究に変えたい学生が全国から集まっています。
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="https://shokuei-hp.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-md transition transform hover:-translate-y-0.5"
                >
                  学科・非公式サイトへ
                  <span className="ml-2 text-xs">↗</span>
                </a>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-amber-100">
                    #おだんご先生
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-rose-100">
                    #和菓子 × 調理科学
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-orange-100">
                    #管理栄養士養成
                  </span>
                </div>
              </div>
            </div>

            {/* 先生イメージカード（写真が入る前提のダミー枠） */}
            <div className="lg:pl-4">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-300 via-rose-300 to-orange-300 opacity-70 blur" />
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm border border-amber-100 shadow-xl overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-amber-200 via-rose-100 to-orange-100 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/80 border-4 border-amber-300 flex items-center justify-center text-4xl">
                      🍡
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold tracking-wide text-amber-600 mb-1">
                      Motomi Shibasaki
                    </p>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">
                      芝崎 本実 准教授（おだんご先生）
                    </h2>
                    <p className="text-xs text-slate-500 mb-3">
                      十文字学園女子大学 人間生活学部 食物栄養学科
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700 mb-4">
                      和菓子職人としての現場経験と、調理科学研究者としての視点を持つ「おだんご先生」。
                      郷土菓子やあんこ、お団子の歴史とおいしさを科学の言葉で語ります。
                    </p>
                    <dl className="text-xs grid grid-cols-2 gap-y-2 gap-x-4 text-slate-600">
                      <div>
                        <dt className="font-semibold text-slate-800">専門分野</dt>
                        <dd>調理科学、和菓子・郷土菓子、食文化</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-800">資格</dt>
                        <dd>管理栄養士</dd>
                      </div>
                      <div className="col-span-2 mt-1">
                        <dt className="font-semibold text-slate-800">キーワード</dt>
                        <dd>あんこ、みたらし団子、郷土菓子、低エネルギー甘味料、食育</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ゼミ概要 */}
      <section className="bg-white/80 border-y border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
            <div className="lg:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                芝崎研究室ってどんなところ？
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
                郷土菓子および和菓子の伝統的な製法をフィールドワークと実験で掘り下げ、
                その「おいしさ」や「かたさ」「もちもち感」を調理科学的に解明する研究室です。
                地域に根ざした和菓子文化を、栄養・健康の視点も交えて次世代につなぎます。
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
                ゼミでは、和菓子店での聞き取り調査や試作・官能評価、ヒト胃消化シミュレーターを用いた
                消化挙動の解析など、多様なアプローチで「和菓子とからだの関係」を追究します。
                おだんごやあんこが大好きな学生はもちろん、「実験もフィールドワークも両方やってみたい」
                という人にぴったりです。
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">
                    主なゼミテーマ
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    郷土菓子・和菓子の伝統的製法調査、製あんに関する調理科学的研究、
                    低エネルギー甘味料を用いた和菓子開発、栄養強化和菓子の開発 など
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                  <h3 className="text-sm font-semibold text-rose-800 mb-1">
                    こんな学生におすすめ
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    和菓子・おだんご・あんこがとにかく好きな人、
                    食文化や地域食に興味がある人、
                    実験とものづくりの両方を楽しみたい人
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100">
                  <h3 className="text-sm font-semibold text-orange-800 mb-1">
                    学べる力
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    調理科学実験の計画・解析力、プレゼンテーション力、
                    食文化を伝える文章力、企画力（講習会・イベント運営など）
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="rounded-2xl bg-slate-900 text-amber-50 p-5 shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/40 to-rose-400/40" />
                <div className="relative">
                  <h3 className="text-sm font-semibold tracking-wide text-amber-200 mb-1">
                    Message from Lab
                  </h3>
                  <p className="text-lg font-bold mb-3">
                    「好き」な和菓子を、
                    <br />
                    研究テーマにしてみませんか？
                  </p>
                  <p className="text-xs leading-relaxed text-amber-50/90 mb-3">
                    芝崎研究室では、
                    「おだんご」「あんこ」「郷土菓子」といった
                    身近なお菓子を入口に、
                    科学的なものの見方・考え方を身につけます。
                  </p>
                  <p className="text-xs leading-relaxed text-amber-50/90">
                    実験室だけで完結しない、
                    お店・地域・メディアともつながる学びの場で、
                    一緒に新しい和菓子文化を発信していきましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 研究・業績ハイライト */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              研究テーマ & 学会発表
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              芝崎研究室では、和菓子・郷土菓子の伝統的製法や食文化の調査に加え、
              ヒト胃消化シミュレーターを用いた消化挙動の解析、機能性食材を用いた
              菓子開発など、基礎から応用まで幅広い研究に取り組んでいます。
            </p>

            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/80 border border-amber-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  in vitro消化挙動の解析
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  ヒト胃消化シミュレーターを用いて、白米飯や各種パン、食物繊維添加食品などの
                  デンプン・たんぱく質の消化過程を可視化し、食感と消化性の関係を探る研究を
                  行っています（日本食品科学工学会、日本消化吸収学会 ほか）。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-rose-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  郷土菓子・和菓子の調理科学
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  埼玉県の郷土餅菓子「塩あんびん」や伝統的な蒸し菓子「浮島」などを対象に、
                  材料配合や工程が物性・嗜好性に及ぼす影響を検討し、栄養強化和菓子への応用を
                  試みています（日本調理科学会、日本家政学会 ほか）。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-orange-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  高齢者・アスリートの食と和菓子
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  在宅高齢者の食生活調査や、陸上競技選手の補助栄養食摂取に関する研究など、
                  ライフステージや身体活動レベルに応じた「おやつ」のあり方も探究しています
                  （日本応用老年学会、日本消化吸収学会 ほか）。
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              著書・メディア出演
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              「おだんご先生」として、一般向けの書籍や雑誌、テレビ・ラジオでも
              和菓子の魅力と科学を発信しています。授業やゼミでは、こうしたアウトリーチの
              裏側の企画・構成の考え方も共有します。
            </p>

            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/80 border border-amber-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  主な著書・監修</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>『職人技と調理科学の融合 究極のあんこを炊く』（日本栄養大学出版部）</li>
                  <li>『あんこのことがすべてわかる本 つくる、食べる、もてなす』（監修）</li>
                  <li>『おだんご先生のおいしい 手作り和菓子』四季シリーズ（春・夏・秋・冬）</li>
                  <li>「和菓子の時間」（『栄養と料理』連載） ほか、多数のレシピ・解説記事</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-rose-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  テレビ・ラジオ・新聞など</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>「マツコの知らない世界」みたらし団子の世界（TBSテレビ）</li>
                  <li>「新説！所JAPAN」「マツコ＆有吉 かりそめ天国」「ノンストップ」ほか和菓子特集</li>
                  <li>文化放送「大竹まこと ゴールデンラジオ」、静岡新聞 などであんこ・和菓子解説</li>
                  <li>阪急うめだ本店「時をかけるあん」セミナー講師・催事監修  など</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white/80 border border-orange-100">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Web & プロジェクト</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>和菓子屋情報MAPサイト「おだんご日和」主宰</li>
                  <li>「おだんごマップ」で全国各地のお団子を紹介</li>
                  <li>子ども向け食育和菓子教室・親子講習会の企画・運営</li>
                  <li>国産小豆普及や食品ロス削減に関する講演・シンポジウム登壇</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ゼミの1年と学生の声 */}
      <section className="bg-amber-50/60 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            おだんごゼミの1年
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-2xl bg-white/90 border border-amber-100">
                <h3 className="text-sm font-semibold text-amber-800 mb-1">春学期：テーマ設定と基礎トレーニング</h3>
                <p>
                  郷土菓子・和菓子の文献調査や、お店でのフィールドワークを通して、
                  各自の卒業研究テーマ候補を広げていきます。調理科学実験の基礎や、
                  あんこの炊き比べ、団子生地の配合比較などのミニ実験も行います。
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/90 border border-rose-100">
                <h3 className="text-sm font-semibold text-rose-800 mb-1">秋学期：実験・試作とデータ解析</h3>
                <p>
                  実際の店舗や生産者の協力も得ながら、和菓子の試作や官能評価、
                  物性測定、消化挙動の評価などを本格的に進めます。結果のまとめ方や
                  プレゼンテーションの方法も丁寧に指導します。
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/90 border border-orange-100">
                <h3 className="text-sm font-semibold text-orange-800 mb-1">冬〜春：発表とアウトリーチ</h3>
                <p>
                  学内発表会や学会でのポスター発表にチャレンジするほか、
                  高校生向けオープンキャンパス企画や、和菓子講習会をゼミで
                  企画・運営することもあります。卒業式の日には、
                  ゼミ生オリジナルのお団子でお祝いするのが恒例です。
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="h-full rounded-2xl bg-slate-900 text-amber-50 p-5 shadow-lg flex flex-col">
                <h3 className="text-sm font-semibold tracking-wide text-amber-200 mb-3">
                  ゼミ生の声
                </h3>
                <div className="space-y-3 text-xs leading-relaxed flex-1">
                  <p>
                    「大好きなおだんごを、科学的に語れるようになったのが一番の収穫です。
                    実験もフィールドワークもあって、4年生の1年間があっという間でした。」
                  </p>
                  <p>
                    「和菓子店や百貨店のイベントで、プロの職人さんと一緒に仕事ができるのが
                    このゼミならではだと思います。将来は商品開発の仕事に就くのが目標です。」
                  </p>
                  <p>
                    「おだんごゼミは、いつも甘い香りと笑い声にあふれています。
                    でも、データをまとめるときはすごく真剣。オンとオフの切り替えも
                    学べる研究室です。」
                  </p>
                </div>
                <div className="mt-4 text-[10px] text-amber-200/80">
                  ※ゼミ生のコメントは、これまでの学生の感想をもとに再構成したイメージです。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 受験生・在学生へのメッセージ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              受験生のみなさんへ
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              「和菓子が好き」「おだんごを見るとつい買ってしまう」——。
              そんな気持ちも、立派な研究の入口です。芝崎研究室では、
              好きな食べ物への「どうして？」を大切にしながら、
              科学的な探究心と表現力を育てていきます。
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              管理栄養士としての専門性に、和菓子・食文化の知識が加わることで、
              将来のキャリアの幅も広がります。病院・行政・企業・メディアなど、
              さまざまな舞台で「食の専門家」として活躍したい人を歓迎します。
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              在学生のみなさんへ
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              ゼミ配属を考えている方は、ぜひ授業やオープンキャンパス、
              学内イベントで芝崎研究室のブースを覗いてみてください。
              研究内容だけでなく、ゼミの雰囲気や先輩たちの様子も
              きっと伝わるはずです。
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
              研究テーマの相談や、和菓子に関する質問も大歓迎です。
              一緒に「おだんご日和」なキャンパスライフをつくっていきましょう。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabShibazaki;