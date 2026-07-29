# 在学生向け学習教材セクション Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `docs/応用栄養学_演習問題_20問.html` の自己採点クイズをサイトに移植し、`/study` を起点に今後も科目別クイズを追加できる「学習教材」セクションを新設する。

**Architecture:** 質問データ（`src/data/quizzes/*.js`）→ 共通の `QuizEngine.astro`（採点・解説表示ロジック） → 科目ごとの薄いページコンポーネント、という3層構成。ハブページ `/study` は各科目データをインポートしてカード一覧を表示する。既存の Labs/Columns と同じ「ページ = BaseLayout でコンポーネントを包むだけ」のパターンに従う。

**Tech Stack:** Astro 7（`.astro` コンポーネント、frontmatterでのSSRレンダリング、vanilla `<script>` によるクライアント側の採点ロジック）。新規npm依存は追加しない。

## Global Constraints

- このプロジェクトには自動テストランナー（vitest/jest等）が存在しない。検証は `npx astro check`（型チェック）と `npx astro dev` での手動確認のみ（`CLAUDE.md` 記載の既存方針）。
- 新規CSSファイルは作らない。すべて `src/index.css` に追記する。
- スタイルは既存デザイントークン（`--cream`/`--terracotta`/`--forest`/`--charcoal`/`--stone`/`--font-serif`/`--font-sans`、`src/index.css:8-25`）を使う。元HTMLの青系配色（`--primary:#1e3a8a` 等）は使わない。
- ページファイルはサブディレクトリを作らず `src/pages/` 直下にフラットなハイフン区切りファイル名で置く（既存の `lab-kamiyama-report.astro` 等の規則を踏襲）。
- 新規ルートは `src/data/pageMeta.js` の `PAGE_META` に登録しないと `BaseLayout.astro` がビルドエラーを出す（`src/layouts/BaseLayout.astro:16-22`）。
- インタラクティブ処理は vanilla `<script>` + `querySelectorAll<HTMLElement>` 等のTS element genericsで書く（React/クライアントフレームワークは使わない）。`tsconfig.json` は `noImplicitAny: false` / `strictNullChecks: false` のため型付けは既存コンポーネント程度の粒度でよい。
- メインヘッダー（`Header.astro`）・News/Columns一覧（`src/newsData.js`）には追加しない（設計で確定済み、`docs/superpowers/specs/2026-07-29-student-study-materials-design.md` 参照）。

---

## Task 1: 応用栄養学クイズの質問データを切り出す

**Files:**
- Create: `src/data/quizzes/appliedNutrition.js`

**Interfaces:**
- Produces: `export const QUIZ = { title: string, description: string, questions: QuizQuestion[] }` where `QuizQuestion = { sec: string, q: string, opts: string[5], ans: number, exp: string[5], note?: string }`。Task 4・Task 5がこの形をそのまま利用する。

- [ ] **Step 1: データファイルを作成する**

`docs/応用栄養学_演習問題_20問.html` の `QUESTIONS` 配列（20問）をそのまま `QUIZ.questions` に移植する。文言は一切変更しない。

```js
// src/data/quizzes/appliedNutrition.js
export const QUIZ = {
  title: '応用栄養学 演習問題（20問）',
  description: '管理栄養士国家試験「応用栄養学」の頻出分野から5肢択一・20問。環境と栄養（特殊環境・ストレス・生体リズム）、身体活動・運動と体力、スポーツ栄養、災害時の栄養管理の4分野で構成。選択肢をクリックすると採点結果と解説が表示されます。',
  questions: [
    {
      sec: 'Ⅰ．環境と栄養（特殊環境・ストレス・生体リズム）',
      q: '特殊環境下における生体応答に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '高地（低圧・低酸素）環境下では、エリスロポエチンの分泌が抑制される。',
        '高地環境下では、エネルギー代謝において脂質の利用割合が高まる。',
        '無重力環境下では、荷重刺激の消失により骨吸収が抑制される。',
        '無重力環境下では、抗重力筋を中心に筋たんぱく質の分解が促進される。',
        '低温環境下では、ふるえによらない熱産生（非ふるえ熱産生）は起こらない。',
      ],
      ans: 4,
      exp: [
        '誤り。低酸素刺激により腎臓からのエリスロポエチン分泌が亢進し、赤血球産生が促進される。',
        '誤り。酸素供給が制限されるため、同じ酸素量あたりのATP産生効率が高い糖質の利用割合が高まる。',
        '誤り。荷重（機械的刺激）が消失するため骨吸収が促進し、尿中カルシウム排泄が増える。',
        '正しい。自重を支える必要がなくなるため、姿勢維持に働く抗重力筋を中心に筋たんぱく質の分解が進み萎縮する。',
        '誤り。褐色脂肪組織による非ふるえ熱産生が起こる。',
      ],
    },
    {
      sec: 'Ⅰ．環境と栄養（特殊環境・ストレス・生体リズム）',
      q: '高温環境および暑熱順化に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '暑熱順化が成立すると、発汗が始まるまでの時間が延長する。',
        '暑熱順化が成立すると、汗中のナトリウム濃度が低下する。',
        '高温環境下では、皮膚血管が収縮して熱放散が促進される。',
        '高温環境下での長時間運動では、循環血漿量が増加する。',
        '熱中症のうち熱失神は、高体温と意識障害を主徴とする。',
      ],
      ans: 2,
      exp: [
        '誤り。順化により発汗開始が早くなり、発汗量も増える。',
        '正しい。アルドステロン分泌の亢進などにより汗腺でのナトリウム再吸収が高まり、汗が薄くなる。電解質の損失が抑えられる。',
        '誤り。皮膚血管は拡張し、皮膚血流量が増えて熱放散が進む。',
        '誤り。発汗による水分喪失で循環血漿量は減少し、心拍数が上昇する。',
        '誤り。高体温（40℃以上）と意識障害を主徴とするのは熱射病。熱失神は皮膚血管拡張による一過性の血圧低下で起こる。',
      ],
    },
    {
      sec: 'Ⅰ．環境と栄養（特殊環境・ストレス・生体リズム）',
      q: 'ストレス負荷時の生体反応と栄養代謝に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '急性ストレス期には、副腎皮質刺激ホルモン（ACTH）の分泌が抑制される。',
        'ストレス初期には、糖新生が抑制されて低血糖をきたす。',
        'ストレス時には、交感神経の緊張によりアドレナリンの分泌が増大する。',
        'ストレス負荷時には、体内でのビタミンCの消費量が減少する。',
        'ストレスが持続すると、たんぱく質の合成が分解を上回り正の窒素出納となる。',
      ],
      ans: 3,
      exp: [
        '誤り。視床下部－下垂体－副腎皮質系（HPA軸）が活性化し、ACTH分泌は亢進する。',
        '誤り。コルチゾールやアドレナリンにより糖新生とグリコーゲン分解が促進され、血糖値は上昇する。',
        '正しい。交感神経系が興奮し、副腎髄質からアドレナリン・ノルアドレナリンが分泌される。',
        '誤り。副腎皮質でのホルモン合成などに使われ、ビタミンCの消費量は増大する。',
        '誤り。体たんぱく質の分解が優位となり、負の窒素出納に傾く。',
      ],
    },
    {
      sec: 'Ⅰ．環境と栄養（特殊環境・ストレス・生体リズム）',
      q: 'ストレスに対する汎適応症候群（セリエ）に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '汎適応症候群は、警告反応期・抵抗期・疲憊（ひはい）期の順に進行する。',
        '警告反応期のショック相では、血圧が上昇する。',
        '抵抗期では、副腎皮質が萎縮する。',
        '疲憊期では、生体の抵抗力が正常レベルを上回る。',
        '抵抗期には、尿中への窒素排泄量が減少する。',
      ],
      ans: 1,
      exp: [
        '正しい。警告反応期（ショック相→反ショック相）→抵抗期→疲憊期の順に進む。',
        '誤り。ショック相では血圧低下・体温低下・血糖低下がみられ、抵抗力が一時的に低下する。',
        '誤り。抵抗期では副腎皮質は肥大し、糖質コルチコイドの分泌が高まる。',
        '誤り。疲憊期では適応が破綻し、抵抗力は正常レベルを下回る。',
        '誤り。体たんぱく質の異化が進み、尿中窒素排泄量は増加する。',
      ],
    },
    {
      sec: 'Ⅰ．環境と栄養（特殊環境・ストレス・生体リズム）',
      q: '生体リズム（概日リズム）に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '生体時計の中枢（主時計）は、大脳皮質に存在する。',
        'メラトニンは、日中の明期に松果体からの分泌量が増加する。',
        '朝食などの摂食行動は、末梢時計の同調因子として働く。',
        '夜間の副交感神経優位な状態では、エネルギー消費量が最大となる。',
        'BMAL1たんぱく質は、昼間に発現量が高まり脂肪合成を促進する。',
      ],
      ans: 3,
      exp: [
        '誤り。主時計は視床下部の視交叉上核にある。',
        '誤り。メラトニンは夜間の暗期に分泌が増える。',
        '正しい。主時計は主に朝の光刺激で、肝臓などの末梢時計は主に食事のタイミングで同調する。朝食欠食はこのずれを生む。',
        '誤り。エネルギー消費量は交感神経が優位な日中に高い。',
        '誤り。BMAL1は夜間（22時〜翌2時ごろ）に発現量が高まり、脂肪蓄積を促進する。',
      ],
    },
    {
      sec: 'Ⅱ．身体活動・運動と体力',
      q: '身体活動時のエネルギー代謝と骨格筋・心肺機能に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '低強度の有酸素運動時の主要なエネルギー源は、血中グルコースのみである。',
        '遅筋線維（赤筋）は、速筋線維（白筋）に比べて解糖系酵素の活性が高い。',
        '最大酸素摂取量（VO₂max）は、全身持久力（心肺体力）の客観的指標である。',
        'レジスタンス運動は、主として骨格筋の有酸素性酸化能力を向上させる。',
        '運動開始直後のエネルギー供給は、主としてクエン酸回路（TCA回路）が担う。',
      ],
      ans: 3,
      exp: [
        '誤り。低〜中強度では遊離脂肪酸の酸化割合が高い。強度が上がるほど糖質の割合が増す。',
        '誤り。解糖系酵素活性が高いのは速筋線維。遅筋線維はミトコンドリアと酸化系酵素に富む。',
        '正しい。VO₂max（最大酸素摂取量）は全身持久力・心肺機能の代表的な指標。',
        '誤り。レジスタンス運動が主に高めるのは筋力・筋量。有酸素性能力の向上は持久性トレーニングによる。',
        '誤り。運動開始直後はATP-CP系、続いて解糖系（無酸素系）が働く。',
      ],
    },
    {
      sec: 'Ⅱ．身体活動・運動と体力',
      q: '「健康日本21（第三次）」および「健康づくりのための身体活動・運動ガイド2023」に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        'メッツ（METs）は、身体活動の総量を表す単位である。',
        '成人（20〜64歳）の1日あたりの歩数の目標値は、10,000歩である。',
        '成人に対して「今より少しでも身体を動かす（＋10：プラス・テン）」が推奨されている。',
        '高齢者に対して、筋力トレーニングやバランス運動は推奨されていない。',
        'メッツ・時は、強度（メッツ）を座位行動時間で除して算出する。',
      ],
      ans: 3,
      exp: [
        '誤り。メッツは身体活動の「強度」を表す単位（安静時の何倍か）。総量はメッツ・時で表す。',
        '誤り。健康日本21（第三次）の歩数目標は20〜64歳が8,000歩/日、65歳以上が6,000歩/日（男女とも）。身体活動・運動ガイド2023の推奨値と一致する。',
        '正しい。今より10分多く身体を動かすことを促す「＋10」が引き続き示されている。',
        '誤り。高齢者では、筋力・バランスなどを含む多要素の運動が週3日以上推奨されている。',
        '誤り。メッツ・時＝強度（メッツ）×実施時間（時間）。',
      ],
      note: '歩数・座位行動の目標値は改定で変わりやすい項目。最新の告示・ガイド本文で確認を。',
    },
    {
      sec: 'Ⅱ．身体活動・運動と体力',
      q: '体重60kgの成人が、4メッツの身体活動を30分間行った。この活動によるエネルギー消費量として最も適当なのはどれか。1つ選べ。ただし、簡易式（エネルギー消費量＝1.05×メッツ×時間×体重）を用いる。',
      opts: ['42 kcal', '63 kcal', '126 kcal', '189 kcal', '252 kcal'],
      ans: 3,
      exp: [
        '誤り。',
        '誤り。安静時相当分（1メッツ分）を差し引いた正味の値に近いが、設問の式では求めない。',
        '正しい。1.05×4メッツ×0.5時間×60kg＝126 kcal。',
        '誤り。',
        '誤り。時間を1時間として計算した場合の値。',
      ],
      note: 'メッツ・時＝4×0.5＝2メッツ・時。これに1.05と体重を掛ける。安静時分を除いた正味の消費量を問う場合は（メッツ−1）を使う。',
    },
    {
      sec: 'Ⅱ．身体活動・運動と体力',
      q: '運動の生活習慣病予防効果に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '習慣的な有酸素運動は、インスリン抵抗性を改善する。',
        '骨格筋の収縮は、インスリンに依存しない糖の取り込み（GLUT4の細胞膜移行）を抑制する。',
        '習慣的な有酸素運動は、血清HDL-コレステロール値を低下させる。',
        '習慣的な有酸素運動は、安静時心拍数を増加させる。',
        '運動による減量では、内臓脂肪より皮下脂肪が優先的に減少する。',
      ],
      ans: 1,
      exp: [
        '正しい。骨格筋での糖取り込みの改善などにより、インスリン感受性が高まる。',
        '誤り。筋収縮はインスリン非依存的にGLUT4を細胞膜へ移行させ、糖の取り込みを促進する。',
        '誤り。HDL-コレステロールは上昇し、血清トリグリセリドは低下する。',
        '誤り。1回拍出量が増えるため、安静時心拍数は減少（徐脈化）する。',
        '誤り。運動では内臓脂肪が先に減少しやすい。',
      ],
    },
    {
      sec: 'Ⅱ．身体活動・運動と体力',
      q: '加齢に伴う骨格筋の変化（サルコペニア）とその対策に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        'サルコペニアの判定基準には、握力や歩行速度は含まれない。',
        'サルコペニアとは、加齢に伴う骨格筋量の増加をいう。',
        'サルコペニア対策として、分岐鎖アミノ酸（BCAA）、特にロイシンの摂取が有効である。',
        '高齢者のサルコペニア予防では、食事制限による減量を最優先とする。',
        '加齢に伴う骨格筋の萎縮は、速筋線維より遅筋線維で著しい。',
      ],
      ans: 3,
      exp: [
        '誤り。骨格筋量の低下に加え、筋力（握力）または身体機能（歩行速度など）の低下で判定する。',
        '誤り。加齢に伴う骨格筋量と筋力・身体機能の進行性の低下をいう。',
        '正しい。筋たんぱく質合成を刺激するロイシンなどのBCAA摂取と、レジスタンス運動の併用が有効。',
        '誤り。過度の減量はサルコペニアを助長する。十分なエネルギーとたんぱく質の確保が前提。',
        '誤り。萎縮は速筋線維（Type II）で著しい。',
      ],
    },
    {
      sec: 'Ⅲ．スポーツ栄養',
      q: 'スポーツ選手のエネルギー代謝およびグリコーゲンローディングに関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '体内のグリコーゲン蓄積量は、体脂肪として蓄えられるエネルギー量より大きい。',
        'グリコーゲンローディングは、10秒程度の短時間パワー系種目で最も効果を発揮する。',
        '改良法（古典法から改良された方法）では、極端な高脂肪・低糖質期を設けない。',
        '筋グリコーゲンが枯渇すると、高強度運動の継続が容易になる。',
        '運動直後の糖質補給は、筋グリコーゲンの再合成を遅らせる。',
      ],
      ans: 3,
      exp: [
        '誤り。グリコーゲン蓄積量は数千kcal程度で、体脂肪に比べてはるかに少ない。',
        '誤り。効果が期待できるのは90分を超える持久性種目。',
        '正しい。改良法では運動量を漸減させながら、試合前3日ほど高糖質食（体重1kgあたり8〜10g程度）を摂る。古典法の枯渇期による体調不良を避けられる。',
        '誤り。枯渇は著しい疲労とパフォーマンス低下（いわゆる「ハンガーノック」）を招く。',
        '誤り。運動直後はインスリン感受性とグリコーゲン合成酵素活性が高く、再合成が促進される。',
      ],
    },
    {
      sec: 'Ⅲ．スポーツ栄養',
      q: 'アスリートの栄養素摂取に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '持久系種目の糖質摂取量の目安は、体重1kgあたり1〜2g/日である。',
        'たんぱく質摂取量の目安は、体重1kgあたり1.2〜2.0g/日である。',
        '除脂肪量の増加を目指す増量期には、エネルギー摂取量を消費量より少なく設定する。',
        '筋グリコーゲンの回復には、運動終了から2時間以上あけて糖質を摂るのがよい。',
        '減量期には、たんぱく質摂取量を通常期より減らす。',
      ],
      ans: 2,
      exp: [
        '誤り。持久系では体重1kgあたり6〜10g/日程度が目安。1〜2gでは全く足りない。',
        '正しい。競技特性や時期によるが、体重1kgあたり1.2〜2.0g/日が一般的な目安。過剰摂取に上乗せの効果はない。',
        '誤り。増量期はエネルギー出納を正に保つ必要がある。',
        '誤り。運動後できるだけ早い糖質補給が再合成に有利。',
        '誤り。減量期はエネルギーを絞る分、除脂肪量維持のためたんぱく質は維持〜やや増やす。',
      ],
    },
    {
      sec: 'Ⅲ．スポーツ栄養',
      q: '女性アスリートの三主徴（Female Athlete Triad）およびスポーツ障害に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '三主徴は、利用可能エネルギー不足、無月経、骨粗鬆症である。',
        '利用可能エネルギー量は、食事エネルギー摂取量から基礎代謝量を減じて算出する。',
        '運動性無月経では、エストロゲンの分泌が亢進する。',
        '疲労骨折の予防には、カルシウムを過剰に摂取することが有効である。',
        '運動性貧血の主な原因は、銅の蓄積による赤血球の破壊である。',
      ],
      ans: 1,
      exp: [
        '正しい。①利用可能エネルギー不足（LEA）②無月経（月経異常）③骨粗鬆症（骨密度低下）の3つ。',
        '誤り。利用可能エネルギー量＝（食事エネルギー摂取量－運動によるエネルギー消費量）÷除脂肪量で表す。',
        '誤り。エネルギー不足で視床下部性にゴナドトロピン分泌が低下し、エストロゲンは低下する。',
        '誤り。まずエネルギー不足の解消。そのうえで十分なカルシウムとビタミンDを確保する。',
        '誤り。主因は着地衝撃などによる溶血と、発汗・需要増による鉄欠乏。',
      ],
    },
    {
      sec: 'Ⅲ．スポーツ栄養',
      q: 'スポーツ活動時の水分・電解質補給および熱中症予防に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '運動中の水分補給は、口渇感を自覚してから開始することが推奨される。',
        '暑熱環境下での長時間運動では、電解質を含まない水のみを多量に補給する。',
        '熱中症予防を目的とする飲料の食塩濃度は、0.1〜0.2%程度が適している。',
        '長時間の運動では、糖質濃度15〜20%の飲料が水分補給に最適である。',
        '運動中の水分補給の目標は、運動前より体重を増加させることである。',
      ],
      ans: 3,
      exp: [
        '誤り。口渇感は脱水が進んでから生じるため、自覚前からこまめに補給する。',
        '誤り。水のみを大量に摂ると血漿ナトリウム濃度が下がり、低ナトリウム血症（水中毒）を招く。',
        '正しい。食塩0.1〜0.2%（ナトリウム40〜80mg/100mL）、糖質4〜8%程度が推奨される。',
        '誤り。糖質濃度が高いと胃排出が遅れる。4〜8%程度が適切。',
        '誤り。体重減少を2%以内に抑えることが目安。増加させる必要はない。',
      ],
    },
    {
      sec: 'Ⅲ．スポーツ栄養',
      q: '試合期の食事およびサプリメントに関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '試合3〜4時間前の食事は、脂質と食物繊維を多く含むものが適している。',
        '減量を目的とした短期間の急速な減量は、脱水を伴いパフォーマンスを低下させる。',
        'カフェインは、現在ドーピング禁止物質に指定されている。',
        'クレアチンは、持久系種目の有酸素性能力向上を主な目的として用いられる。',
        'サプリメントは、日常の食事より優先して用いる。',
      ],
      ans: 2,
      exp: [
        '誤り。脂質・食物繊維は胃内停滞時間を長くする。試合前は消化のよい高糖質食にする。',
        '正しい。発汗や水分制限による急速減量は、循環血漿量の減少や筋グリコーゲンの低下を招く。減量は計画的に緩やかに行う。',
        '誤り。カフェインは2004年に禁止表から除外され、現在は監視プログラムの対象。',
        '誤り。クレアチンはATP-CP系の再合成を助け、高強度・短時間の反復運動で効果が期待される。',
        '誤り。基本は食事（フード・ファースト）。サプリメントは不足を補う位置づけで、汚染による意図しないドーピングのリスクもある。',
      ],
    },
    {
      sec: 'Ⅳ．災害時の栄養管理',
      q: '発災直後から数日間における食事・栄養支援に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '発災直後の最優先課題は、ビタミンCの十分な供給である。',
        '発災直後の避難所では、水分とエネルギーの確保を最優先とする。',
        '発災初期の非常食には、調理に多量の水を要する乾麺が適している。',
        '食物アレルギーの確認は、発災後1か月を経過してから行う。',
        '発災直後から、すべての避難者に食事摂取基準の推奨量を厳密に充足させる。',
      ],
      ans: 2,
      exp: [
        '誤り。ビタミン類の不足は避難生活が長期化してから問題になる。',
        '正しい。急性期はライフラインが途絶しており、そのまま食べられる食品による水分・エネルギー確保が最優先。',
        '誤り。水・熱源が限られる初期は、加熱や水を要しない食品が適する。',
        '誤り。誤食は生命に関わるため、発災直後から確認が必要。',
        '誤り。初期は最低限のエネルギーと水の確保が優先される。',
      ],
    },
    {
      sec: 'Ⅳ．災害時の栄養管理',
      q: '避難所生活の長期化に伴う栄養課題と対応に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '炭水化物に偏った食事により、たんぱく質やビタミンの不足が顕在化する。',
        '野菜不足による食物繊維の欠乏に伴い、下痢が最も高頻度の課題となる。',
        '高齢者では、活動量の低下によりフレイルの発症リスクが低下する。',
        '炊き出しなど温かい食事の提供は、心理的ケアや食欲の改善には結びつかない。',
        '生活不活発病の予防には、日中の安静・臥床を推奨する。',
      ],
      ans: 1,
      exp: [
        '正しい。おにぎり・パン・カップ麺に偏りやすく、たんぱく質・ビタミン・ミネラル・食物繊維が不足する。',
        '誤り。食物繊維・水分の不足と活動量低下により、下痢ではなく便秘が多い。',
        '誤り。活動量低下と低栄養によりフレイルのリスクは高まる。既存の生活習慣病も悪化しやすい。',
        '誤り。温かい食事はQOLや食欲の改善に有効で、精神面の支えにもなる。',
        '誤り。生活不活発病の予防には、適度な身体活動と役割の確保が重要。',
      ],
    },
    {
      sec: 'Ⅳ．災害時の栄養管理',
      q: '「避難所における食事提供の計画・評価のために当面の目標とする栄養の参照量」に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '個人の栄養素摂取量の過不足を判定するために用いる。',
        'エネルギーとたんぱく質のほか、ビタミンB₁、B₂、Cが示されている。',
        '20歳以上を対象として算定されている。',
        '発災直後から、この参照量に基づく献立作成を行う。',
        '脂質エネルギー比率の目標値が、最優先の項目とされている。',
      ],
      ans: 2,
      exp: [
        '誤り。避難者集団に対する食事提供の計画・評価に用いるもので、個人の判定には使わない。',
        '正しい。エネルギー・たんぱく質に加え、避難所で不足しやすく欠乏症のリスクが高いビタミンB₁・B₂・Cが示されている。',
        '誤り。1歳以上を対象に、1人1日あたりの量として示されている。',
        '誤り。ライフラインが途絶した直後は適用が難しい。食事提供体制が整ってから活用する。',
        '誤り。脂質エネルギー比率は含まれない。長期化に際してはカルシウム・ビタミンA・鉄などへの配慮も求められる。',
      ],
    },
    {
      sec: 'Ⅳ．災害時の栄養管理',
      q: '災害時における要配慮者（乳幼児・高齢者・病者）への支援に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        '乳児用液体ミルクは、調乳用の水や加熱源がない状況でも使用できる。',
        '高齢者には、失禁を防ぐため水分摂取を制限する。',
        '嚥下障害のある高齢者には、乾パンをそのまま提供する。',
        '特殊栄養食品（濃厚流動食など）は、健康な成人の非常食として優先的に配分する。',
        '妊産婦に対しては、鉄や葉酸への配慮は不要である。',
      ],
      ans: 1,
      exp: [
        '正しい。開封してそのまま飲ませることができ、衛生面でも有利。ただし開封後は使い切る。',
        '誤り。高齢者は口渇感を自覚しにくく脱水に陥りやすい。トイレを気にして水分を控えがちな点にも配慮し、積極的に促す。',
        '誤り。窒息・誤嚥のリスクが高い。かゆ、とろみ、ゼリーなど形態を調整した食事を用意する。',
        '誤り。特殊栄養食品は、疾患や摂食嚥下障害のある要配慮者へ優先的に配分する。',
        '誤り。鉄・葉酸・カルシウムなどへの配慮が必要。授乳婦には水分とエネルギーの確保も欠かせない。',
      ],
    },
    {
      sec: 'Ⅳ．災害時の栄養管理',
      q: '災害時の栄養・食生活支援体制に関する記述である。最も適当なのはどれか。1つ選べ。',
      opts: [
        'JDA-DATは、日本栄養士会が組織する災害支援チームである。',
        'DMATは、被災地の長期的な栄養管理を主たる任務とする。',
        '都道府県の地域防災計画に、栄養・食生活支援は含まれない。',
        '特殊栄養食品ステーションは、一般の避難者に通常食を配分する拠点である。',
        '被災地での栄養支援は、行政栄養士は関与せず民間団体のみが担う。',
      ],
      ans: 1,
      exp: [
        '正しい。JDA-DAT（日本栄養士会災害支援チーム）は、発災後の被災地で栄養・食生活支援を行う。',
        '誤り。DMATは災害急性期の医療（救命・搬送等）を担う。',
        '誤り。栄養・食生活支援は地域防災計画に位置づけられ、行政栄養士が中心となって平時から備える。',
        '誤り。アレルギー対応食品、えん下困難者用食品、乳児用ミルクなどを要配慮者へ届ける拠点。',
        '誤り。行政栄養士が実態把握、関係機関との調整、支援チームの受け入れなどの中核を担う。',
      ],
    },
  ],
}
```

- [ ] **Step 2: 件数を確認する**

`src/data/quizzes/appliedNutrition.js` の `QUIZ.questions.length` が20であることを目視で確認する（配列要素を数える、またはNode REPLで確認: `node -e "console.log(require('./src/data/quizzes/appliedNutrition.js'))"` はESMのため使えないので、単純に目視カウントでよい）。4セクション×5問=20問。

- [ ] **Step 3: コミット**

```bash
git add src/data/quizzes/appliedNutrition.js
git commit -m "$(cat <<'EOF'
feat: 応用栄養学クイズの質問データを追加

docs/応用栄養学_演習問題_20問.html のQUESTIONS配列をデータモジュールとして切り出し。QuizEngineコンポーネントから利用する。
EOF
)"
```

---

## Task 2: クイズ用CSSを `src/index.css` に追加する

**Files:**
- Modify: `src/index.css`（末尾に追記。既存の `.lab-section`/`.column-card` 等のブロックの後、ファイル末尾でよい）

**Interfaces:**
- Produces: Task 3の `QuizEngine.astro` が参照するクラス名一式（下記CSSに列挙）。クラス名はここで確定し、Task 3はこれと完全に一致させる。

- [ ] **Step 1: index.css の末尾にクイズ用スタイルを追記する**

```css
/* =============================================
   STUDY QUIZ — 学習教材：自己採点クイズ
   ============================================= */
.quiz-scorebar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  background: var(--charcoal);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 14px;
  margin-bottom: 32px;
  font-size: 13px;
}
.quiz-scorebar__num {
  font-size: 18px;
  font-weight: 700;
  font-family: var(--font-serif);
}
.quiz-scorebar__reset {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.15);
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 12px;
  transition: background var(--transition);
}
.quiz-scorebar__reset:hover {
  background: rgba(255, 255, 255, 0.3);
}

.quiz-card {
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}
.quiz-card__head {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 16px;
  color: var(--charcoal);
  margin-bottom: 16px;
  line-height: 1.7;
}
.quiz-card__no {
  display: inline-block;
  background: var(--terracotta-10);
  color: var(--terracotta-dark);
  border-radius: 6px;
  padding: 2px 10px;
  margin-right: 10px;
  font-size: 13px;
}

.quiz-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.quiz-opt {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  font: inherit;
  color: var(--charcoal);
  background: var(--cream-alt);
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  transition: background var(--transition), border-color var(--transition);
}
.quiz-opt:hover:not(:disabled) {
  background: var(--terracotta-10);
}
.quiz-opt:disabled {
  cursor: default;
}
.quiz-opt:focus-visible {
  outline: 2px solid var(--terracotta);
  outline-offset: 2px;
}
.quiz-opt__mark {
  flex: 0 0 auto;
  font-weight: 700;
  color: var(--stone);
  min-width: 2.4em;
}
.quiz-opt__text {
  flex: 1;
  line-height: 1.7;
}
.quiz-opt--correct {
  background: var(--forest-10);
  border-color: var(--forest);
}
.quiz-opt--wrong {
  background: var(--terracotta-20);
  border-color: var(--terracotta-dark);
}
.quiz-opt--correct::after {
  content: '正解';
  margin-left: auto;
  flex: 0 0 auto;
  font-weight: 700;
  font-size: 12px;
  color: var(--forest-dark);
}
.quiz-opt--wrong::after {
  content: '×';
  margin-left: auto;
  flex: 0 0 auto;
  font-weight: 700;
  font-size: 12px;
  color: var(--terracotta-dark);
}

.quiz-reveal-btn {
  margin-top: 14px;
  background: var(--white);
  color: var(--charcoal);
  border: 1px solid var(--terracotta);
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13px;
  transition: background var(--transition);
}
.quiz-reveal-btn:hover {
  background: var(--terracotta-10);
}

.quiz-exp {
  margin-top: 16px;
  background: var(--forest-10);
  border: 1px solid rgba(61, 107, 79, 0.25);
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 14px;
}
.quiz-exp__answer {
  font-weight: 700;
  color: var(--forest-dark);
  margin: 0 0 10px;
}
.quiz-exp ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.quiz-exp li {
  margin-bottom: 6px;
  line-height: 1.7;
  color: var(--charcoal);
}
.quiz-exp li.quiz-exp__item--hit {
  font-weight: 700;
}
.quiz-exp__note {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dashed rgba(61, 107, 79, 0.3);
  color: var(--stone);
  font-size: 13px;
}

@media (max-width: 600px) {
  .quiz-card {
    padding: 18px;
  }
  .quiz-scorebar {
    font-size: 12px;
    padding: 10px 14px;
  }
}
```

- [ ] **Step 2: ビルドが壊れていないことを確認する**

Run: `npx astro check`
Expected: `0 errors`（CSSのみの変更なので型エラーは出ないはずだが、他の変更と合わせて最終確認する。ここでは単に構文が壊れていないことをdevサーバー起動で確認する）

Run: `npx astro dev`（起動確認後 Ctrl+C で終了、またはバックグラウンド起動でトップページが200を返すことを確認）

- [ ] **Step 3: コミット**

```bash
git add src/index.css
git commit -m "$(cat <<'EOF'
feat: 学習教材クイズ用のCSSを追加

サイトのデザイントークン（terracotta/forest/charcoal）に合わせた
自己採点クイズUI（スコアバー・選択肢・正誤ハイライト・解説）のスタイルを追加。
EOF
)"
```

---

## Task 3: 共通クイズコンポーネント `QuizEngine.astro` を作成する

**Files:**
- Create: `src/components/quiz/QuizEngine.astro`

**Interfaces:**
- Consumes: Task 1の `QUIZ.questions`（`QuizQuestion[]`）、Task 2で定義したCSSクラス名一式。
- Produces: `<QuizEngine questions={QuizQuestion[]} />` という呼び出しインターフェース。Task 4がこれを利用する。

- [ ] **Step 1: コンポーネントを作成する**

```astro
---
// src/components/quiz/QuizEngine.astro
interface QuizQuestion {
  sec: string
  q: string
  opts: string[]
  ans: number
  exp: string[]
  note?: string
}

interface Props {
  questions: QuizQuestion[]
}

const { questions } = Astro.props
const MARK = ['(1)', '(2)', '(3)', '(4)', '(5)']

let currentSec = ''
const rows = questions.map((item, i) => {
  const isNewSection = item.sec !== currentSec
  if (isNewSection) currentSec = item.sec
  const sectionCount = questions.filter((q) => q.sec === item.sec).length
  return { item, index: i, isNewSection, sectionCount }
})
---

<div class="quiz-scorebar">
  <span>解答 <span class="quiz-scorebar__num" data-quiz-answered>0</span> / {questions.length}</span>
  <span>正答 <span class="quiz-scorebar__num" data-quiz-correct>0</span></span>
  <span>正答率 <span class="quiz-scorebar__num" data-quiz-rate>－</span></span>
  <button type="button" class="quiz-scorebar__reset" data-quiz-reset>やり直す</button>
</div>

{rows.map(({ item, index, isNewSection, sectionCount }) => (
  <Fragment>
    {isNewSection && (
      <h2 class="lab-section__title">{item.sec}（{sectionCount}問）</h2>
    )}
    <div class="quiz-card" data-quiz-card>
      <div class="quiz-card__head">
        <span class="quiz-card__no">問{index + 1}</span>
        {item.q}
      </div>
      <ul class="quiz-options">
        {item.opts.map((opt, j) => (
          <li>
            <button
              type="button"
              class="quiz-opt"
              data-index={j + 1}
              data-correct={j + 1 === item.ans ? 'true' : 'false'}
            >
              <span class="quiz-opt__mark">{MARK[j]}</span>
              <span class="quiz-opt__text">{opt}</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" class="quiz-reveal-btn">解答・解説を見る</button>
      <div class="quiz-exp" style="display: none;">
        <p class="quiz-exp__answer">正解：{MARK[item.ans - 1]}</p>
        <ul>
          {item.exp.map((e, j) => (
            <li class={j + 1 === item.ans ? 'quiz-exp__item--hit' : ''}>{MARK[j]} {e}</li>
          ))}
        </ul>
        {item.note && <p class="quiz-exp__note">補足：{item.note}</p>}
      </div>
    </div>
  </Fragment>
))}

<script>
  function initQuiz() {
    const cards = document.querySelectorAll<HTMLElement>('[data-quiz-card]')
    const answeredEl = document.querySelector<HTMLElement>('[data-quiz-answered]')
    const correctEl = document.querySelector<HTMLElement>('[data-quiz-correct]')
    const rateEl = document.querySelector<HTMLElement>('[data-quiz-rate]')
    let answered = 0
    let correct = 0

    function updateScore() {
      if (answeredEl) answeredEl.textContent = String(answered)
      if (correctEl) correctEl.textContent = String(correct)
      if (rateEl) rateEl.textContent = answered ? `${Math.round((correct / answered) * 100)}%` : '－'
    }

    function finish(card: HTMLElement, picked: number) {
      if (card.dataset.done) return
      card.dataset.done = '1'

      let correctIndex = -1
      card.querySelectorAll<HTMLElement>('.quiz-opt').forEach((opt) => {
        const idx = Number(opt.dataset.index)
        const isCorrect = opt.dataset.correct === 'true'
        if (isCorrect) correctIndex = idx
        opt.setAttribute('disabled', 'true')
        if (isCorrect) {
          opt.classList.add('quiz-opt--correct')
        } else if (idx === picked) {
          opt.classList.add('quiz-opt--wrong')
        }
      })

      const revealBtn = card.querySelector<HTMLElement>('.quiz-reveal-btn')
      const exp = card.querySelector<HTMLElement>('.quiz-exp')
      if (revealBtn) revealBtn.style.display = 'none'
      if (exp) exp.style.display = ''

      if (picked > 0) {
        answered++
        if (picked === correctIndex) correct++
        updateScore()
      }
    }

    cards.forEach((card) => {
      card.querySelectorAll<HTMLElement>('.quiz-opt').forEach((opt) => {
        opt.addEventListener('click', () => finish(card, Number(opt.dataset.index)))
      })
      const revealBtn = card.querySelector<HTMLElement>('.quiz-reveal-btn')
      if (revealBtn) revealBtn.addEventListener('click', () => finish(card, 0))
    })

    const resetBtn = document.querySelector<HTMLElement>('[data-quiz-reset]')
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        answered = 0
        correct = 0
        updateScore()
        cards.forEach((card) => {
          delete card.dataset.done
          card.querySelectorAll<HTMLElement>('.quiz-opt').forEach((opt) => {
            opt.removeAttribute('disabled')
            opt.classList.remove('quiz-opt--correct', 'quiz-opt--wrong')
          })
          const revealBtn = card.querySelector<HTMLElement>('.quiz-reveal-btn')
          const exp = card.querySelector<HTMLElement>('.quiz-exp')
          if (revealBtn) revealBtn.style.display = ''
          if (exp) exp.style.display = 'none'
        })
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz)
  } else {
    initQuiz()
  }
</script>
```

- [ ] **Step 2: 型チェックを実行する**

Run: `npx astro check`
Expected: `0 errors`（このコンポーネントはまだどこからも呼ばれていないため、`QuizEngine.astro` 単体の構文・型エラーのみが対象）

- [ ] **Step 3: コミット**

```bash
git add src/components/quiz/QuizEngine.astro
git commit -m "$(cat <<'EOF'
feat: 再利用可能なQuizEngineコンポーネントを追加

質問データ配列を受け取り、選択→採点→解説表示・スコア集計を行う
共通クイズUIコンポーネント。今後の科目追加時もこれを再利用する。
EOF
)"
```

---

## Task 4: 応用栄養学クイズページを追加する

**Files:**
- Create: `src/components/StudyAppliedNutrition.astro`
- Create: `src/pages/study-applied-nutrition.astro`
- Modify: `src/data/pageMeta.js`（`PAGE_META` に `/study-applied-nutrition` を追加）

**Interfaces:**
- Consumes: Task 1の `QUIZ`（`src/data/quizzes/appliedNutrition.js`）、Task 3の `QuizEngine`。
- Produces: `/study-applied-nutrition` という公開ルート。Task 5（ハブページ）がこのURLへリンクする。

- [ ] **Step 1: ページコンポーネントを作成する**

```astro
---
// src/components/StudyAppliedNutrition.astro
import { ArrowLeft } from '@lucide/astro'
import QuizEngine from './quiz/QuizEngine.astro'
import { QUIZ } from '../data/quizzes/appliedNutrition.js'
---

<div class="lab-page">
  <div class="container">
    <div class="lab-page__header" data-reveal>
      <a href="/study" class="lab-page__back-link">
        <ArrowLeft size={16} />
        <span>学習教材一覧に戻る</span>
      </a>
      <p class="lab-page__eyebrow">在学生向け / Study</p>
      <h1 class="lab-page__title">{QUIZ.title}</h1>
      <p class="lab-page__subtitle">{QUIZ.description}</p>
    </div>
    <div class="lab-page__content">
      <QuizEngine questions={QUIZ.questions} />
    </div>
  </div>
</div>
```

- [ ] **Step 2: ページファイルを作成する**

```astro
---
// src/pages/study-applied-nutrition.astro
import BaseLayout from '../layouts/BaseLayout.astro'
import StudyAppliedNutrition from '../components/StudyAppliedNutrition.astro'
---

<BaseLayout>
  <StudyAppliedNutrition />
</BaseLayout>
```

- [ ] **Step 3: `PAGE_META` にエントリを追加する**

`src/data/pageMeta.js` の `PAGE_META` オブジェクトに、`/living-alone` エントリの直後（オブジェクトの末尾、閉じ括弧の直前）に以下を追加する:

```js
  '/study-applied-nutrition': {
    title: '応用栄養学 演習問題（20問）| 学習教材 | 十文字学園女子大学 食物栄養学科',
    description: '管理栄養士国家試験「応用栄養学」の自己採点式演習問題。環境と栄養、身体活動・運動、スポーツ栄養、災害時の栄養管理の4分野・全20問。選択肢をクリックすると即採点・解説が表示されます。',
    ogType: 'article',
  },
```

- [ ] **Step 4: 型チェックを実行する**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 5: devサーバーで動作確認する**

Run: `npx astro dev`

ブラウザで `http://localhost:4321/study-applied-nutrition` を開き、以下を確認する:
- 20問すべてが4セクションの見出し付きで表示される
- 選択肢をクリックすると正解が緑・誤答（クリックした選択肢）が赤でハイライトされ、解説カードが表示される
- 「解答・解説を見る」ボタンでも同様に解説が表示される（正誤ハイライトなしで解答が見られる）
- スコアバーの「解答」「正答」「正答率」が選択のたびに更新される
- 「やり直す」ボタンで全問リセットされ、スコアが0に戻る
- モバイル幅（375px程度）で崩れずに表示される

- [ ] **Step 6: コミット**

```bash
git add src/components/StudyAppliedNutrition.astro src/pages/study-applied-nutrition.astro src/data/pageMeta.js
git commit -m "$(cat <<'EOF'
feat: 応用栄養学クイズページを /study-applied-nutrition に追加

docs/応用栄養学_演習問題_20問.html の内容をサイトのデザイントークンに
合わせて移植。QuizEngineコンポーネントを利用。
EOF
)"
```

---

## Task 5: 学習教材ハブページ `/study` を追加する

**Files:**
- Create: `src/components/Study.astro`
- Create: `src/pages/study.astro`
- Modify: `src/data/pageMeta.js`（`PAGE_META` に `/study` を追加）

**Interfaces:**
- Consumes: Task 1の `QUIZ`（`src/data/quizzes/appliedNutrition.js`）。今後クイズを追加する際は、このファイルの `QUIZZES` 配列に1エントリ追加するだけでよい設計にする。
- Produces: `/study` という公開ルート。Task 6（Footer）・Task 7（support CTA）がこのURLへリンクする。

- [ ] **Step 1: ハブコンポーネントを作成する**

```astro
---
// src/components/Study.astro
import { ArrowLeft, BookOpen } from '@lucide/astro'
import { QUIZ as APPLIED_NUTRITION_QUIZ } from '../data/quizzes/appliedNutrition.js'

const QUIZZES = [
  {
    subject: '応用栄養学',
    href: '/study-applied-nutrition',
    quiz: APPLIED_NUTRITION_QUIZ,
  },
]
---

<div class="lab-page">
  <div class="container">
    <div class="lab-page__header" data-reveal>
      <a href="/" class="lab-page__back-link">
        <ArrowLeft size={16} />
        <span>トップページに戻る</span>
      </a>
      <p class="lab-page__eyebrow">在学生向け / Study</p>
      <h1 class="lab-page__title">学習教材</h1>
      <p class="lab-page__subtitle">
        国家試験対策の自己採点クイズなど、在学生が自習に使える教材をまとめています。
      </p>
    </div>

    <div class="lab-page__content">
      <div class="columns-grid">
        {QUIZZES.map(({ subject, href, quiz }) => (
          <a href={href} class="column-card">
            <div class="column-card__top">
              <span class="column-card__badge column-card__badge--student">
                <BookOpen size={13} aria-hidden="true" />
                {subject}
              </span>
              <span class="column-card__date">全{quiz.questions.length}問</span>
            </div>
            <h2 class="column-card__title">{quiz.title}</h2>
            <p class="column-card__desc">{quiz.description}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: ページファイルを作成する**

```astro
---
// src/pages/study.astro
import BaseLayout from '../layouts/BaseLayout.astro'
import Study from '../components/Study.astro'
---

<BaseLayout>
  <Study />
</BaseLayout>
```

- [ ] **Step 3: `PAGE_META` にエントリを追加する**

`src/data/pageMeta.js` の `PAGE_META` に、Task 4で追加した `/study-applied-nutrition` の直後に以下を追加する:

```js
  '/study': {
    title: '学習教材 | 十文字学園女子大学 食物栄養学科',
    description: '在学生が自習に使える学習教材のまとめページ。管理栄養士国家試験対策の自己採点クイズなどを科目別に掲載しています。',
    ogType: 'website',
  },
```

- [ ] **Step 4: 型チェックを実行する**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 5: devサーバーで動作確認する**

`http://localhost:4321/study` を開き、以下を確認する:
- 「応用栄養学」のカードが1件表示される（バッジ・全20問・タイトル・説明文）
- カードをクリックすると `/study-applied-nutrition` に遷移する
- 「トップページに戻る」リンクが `/` に遷移する

- [ ] **Step 6: コミット**

```bash
git add src/components/Study.astro src/pages/study.astro src/data/pageMeta.js
git commit -m "$(cat <<'EOF'
feat: 学習教材ハブページ /study を追加

科目別クイズのカード一覧。今後クイズを追加する際は
QUIZZES配列に1エントリ追加するだけで済む構成にした。
EOF
)"
```

---

## Task 6: Footerナビに「学習教材」リンクを追加する

**Files:**
- Modify: `src/components/Footer.astro:2-14`（`LINKS_1` 配列）

**Interfaces:**
- Consumes: Task 5で追加した `/study` ルート。

- [ ] **Step 1: リンクを追加する**

`src/components/Footer.astro` の `LINKS_1` 配列で、`'国試対策'` エントリの直後に追加する:

```js
const LINKS_1 = [
  { label: '学科について', href: '/features' },
  { label: '取得資格',    href: '/qualifications' },
  { label: '国試対策',    href: '/support' },
  { label: '学習教材',    href: '/study' },
  { label: '進路・就職',  href: '/career' },
  { label: '学生の声',    href: '/voices' },
  { label: '学生生活',    href: '/campus-life' },
  { label: 'よくある質問', href: '/faq' },
  { label: 'スポーツ栄養特集', href: '/sports-nutrition' },
  { label: 'ことサポ for 食栄', href: '/kotosupport' },
  { label: '副専攻×管理栄養士', href: '/submajor' },
  { label: 'コラム', href: '/columns' },
]
```

- [ ] **Step 2: devサーバーで確認する**

`http://localhost:4321/`（またはFooterが表示されるどのページでもよい）を開き、フッターの「サイトマップ」列に「学習教材」リンクが表示され、クリックすると `/study` に遷移することを確認する。

- [ ] **Step 3: コミット**

```bash
git add src/components/Footer.astro
git commit -m "$(cat <<'EOF'
feat: Footerナビに「学習教材」リンクを追加

新設した /study ハブページへの導線をサイト共通フッターに追加。
EOF
)"
```

---

## Task 7: `/support` ページに学習教材へのCTAを追加する

**Files:**
- Modify: `src/components/NationalExamSupport.astro`

**Interfaces:**
- Consumes: Task 5で追加した `/study` ルート。

- [ ] **Step 1: フル表示（`/support`）にCTAバナーを追加する**

`src/components/NationalExamSupport.astro` の既存の `{!summary && (...)}` の国試レポートバナー（`support__report-banner`）ブロックの直後に、同じCSSクラスを再利用したバナーを追加する:

```astro
    {!summary && (
      <div class="support__report-banner" data-reveal="scale">
        <div class="support__report-banner-inner">
          <div>
            <p class="support__report-banner-label">国試レポート</p>
            <p class="support__report-banner-title">第40回管理栄養士国家試験 結果と本学の取り組みについて</p>
            <p class="support__report-banner-sub">合格率・要因分析・今後の対策を公開しています</p>
          </div>
          <a href="/kokushi-report" class="support__report-banner-link">
            詳細を読む <ArrowRight size={14} />
          </a>
        </div>
      </div>
    )}

    {!summary && (
      <div class="support__report-banner" data-reveal="scale">
        <div class="support__report-banner-inner">
          <div>
            <p class="support__report-banner-label">学習教材</p>
            <p class="support__report-banner-title">応用栄養学 演習問題（20問）を解いてみる</p>
            <p class="support__report-banner-sub">選択肢をクリックすると即採点・解説が表示される自己採点クイズです</p>
          </div>
          <a href="/study" class="support__report-banner-link">
            演習問題を見る <ArrowRight size={14} />
          </a>
        </div>
      </div>
    )}
```

- [ ] **Step 2: 型チェックを実行する**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 3: devサーバーで確認する**

`http://localhost:4321/support` を開き、既存の「国試レポート」バナーの下に新しい「学習教材」バナーが表示され、「演習問題を見る」リンクが `/study` に遷移することを確認する。ホームページの `Career`/`NationalExamSupport` summary表示側（`summary=true`）には影響がないことも確認する（`{!summary && ...}` の中にのみ追加しているため）。

- [ ] **Step 4: コミット**

```bash
git add src/components/NationalExamSupport.astro
git commit -m "$(cat <<'EOF'
feat: 国試対策ページに学習教材へのCTAバナーを追加

/support の全文表示に、新設した /study への導線を追加。
EOF
)"
```

---

## Task 8: 最終検証

**Files:**
- なし（検証のみ）

- [ ] **Step 1: 型チェックを実行する**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 2: 本番ビルドを実行する**

Run: `npx astro build`
Expected: ビルドが正常終了し、`dist-astro/study.html` と `dist-astro/study-applied-nutrition.html` が生成される

- [ ] **Step 3: ビルド成果物を確認する**

Run: `ls dist-astro/study.html dist-astro/study-applied-nutrition.html`（PowerShellの場合は `Get-ChildItem dist-astro/study*.html`）
Expected: 両ファイルが存在する

- [ ] **Step 4: `npx astro preview` で本番ビルドを一通り確認する**

- `/` → フッターの「学習教材」リンク → `/study` → カードクリック → `/study-applied-nutrition` の一連の導線
- `/support` → 「学習教材」CTAバナー → `/study`
- `/study-applied-nutrition` で20問すべて回答し、正答率が正しく計算されることを1〜2問サンプルで確認
- 「やり直す」でリセットされることを確認

- [ ] **Step 5: 最終コミット（必要な場合のみ）**

Step 1〜4で修正が発生した場合のみ、修正内容をコミットする。修正がなければこのタスクはコミット不要。
