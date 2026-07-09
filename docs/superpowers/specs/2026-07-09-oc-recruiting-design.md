# 食物栄養学科 募集・広報サイト化 設計仕様書

**日付**: 2026-07-09  
**目的**: shokuei-hp をオープンキャンパス（OC）申込への誘導サイトとして機能させる  
**フェーズ**: 2段階（フェーズ1 夏OC直前 / フェーズ2 秋以降SEO）

---

## 背景と課題

### 現状
- サイトは「公式サイトでは見えにくい部分を伝える補完サイト」として定義されている
- コンテンツは充実（研究室12室・学生の声・就職実績・FAQ・スポーツ栄養特集）
- しかし **そもそも見つけてもらえていない**（SEO・SNS流入が弱い）
- OC申込への動線がどこにもない

### ターゲット
- 高校生（食栄が気になっており、他大学とも比較検討している段階）
- 保護者・進路指導の先生（補助的）

### コンバージョンゴール
- 公式OC申込ページへの誘導  
- 申込URL: `https://mypage.s-axol.jp/jumonji-u/login`（初回はアカウント登録が必要）

### 役割分担
| このサイト | 公式サイト（jumonji-u.ac.jp） |
|---|---|
| リアルな学生像・研究室・就職実績・FAQで「行ってみたい」に変換 | カリキュラム詳細・入試要項・資料請求・OC申込フォーム |

---

## フェーズ1：OC動線の設置（2〜3週間、夏OC前）

### 1. OC告知ランディングページ新設（`/open-campus`）

新規コンポーネント `OpenCampus.jsx` を作成。

**構成（上から順）**:
1. ヒービジュアル + 見出し「オープンキャンパス 2025夏」
2. 開催日程バッジ（7月・8月の日程）※ 実装時に竹嶋先生から実際の日程を入力してもらう
3. 当日プログラムの流れ（学科説明 → 模擬授業 → 施設見学 → 個別相談）
4. 「こんな方へ」ブロック（管理栄養士が気になる / 少人数が知りたい / 先生に話したい）
5. **申込CTA**（大ボタン）＋「※ 初めての方はアカウント登録（無料）が必要です」の注記
6. 関連リンク（在学生の声 / 研究室一覧 / FAQ）

**App.jsx への追加**:
- `PAGE_META` に `/open-campus` エントリ追加
- `SUB_PATHS` に `/open-campus` 追加
- `<Route path="/open-campus" element={<OpenCampus />} />` 追加
- `Header.jsx` と `Footer.jsx` のナビにリンク追加

### 2. Header への常設OCボタン

`Header.jsx` のナビゲーション右端に追加：

```jsx
<a
  href="https://mypage.s-axol.jp/jumonji-u/login"
  target="_blank"
  rel="noopener noreferrer"
  className="header__oc-btn"
>
  オープンキャンパス申込 <ArrowUpRight size={14} />
</a>
```

モバイルでは画面下部に固定バー（`position: fixed; bottom: 0; z-index: 100`）として表示。既存の `Footer` コンポーネントとの重なりを避けるため、`body` に `padding-bottom: 56px` を付与する。

**Header内の配置**: `LAB_CATEGORIES`（研究室ドロップダウン）ではなく、トップレベルのナビゲーション右端に独立ボタンとして配置する。

### 3. Heroの調整

**削除**: 小文字テキスト「十文字学園女子大学 食物栄養学科 ― 補完サイト」

**CTAリストの順序変更**（最上段が最も目立つ白ボタン）:
1. 「オープンキャンパスに申し込む ↗」← 追加・最上段
2. 「学生たちのリアルを見る」
3. 「12の研究室ストーリー」
4. 「公式サイトでカリキュラムを見る ↗」

### 4. SNSセクション強化

既存 `SNSSection.jsx` に公式アカウントへの明示的なフォローCTAを追加：

- Instagram `@jumonji_shokuei` → 「フォローする ↗」ボタン
- TikTok `@ishokssov49` → 「見てみる ↗」ボタン

---

## フェーズ2：SEO・SNS流入基盤（秋以降）

### 1. メタタグ最適化

`App.jsx` の `PAGE_META` を検索意図に沿ったtitle/descriptionに書き直す。

**対象ページと改善例**:

| パス | 改善後 title | 改善後 description |
|---|---|---|
| `/` | 管理栄養士をめざす4年間 \| 十文字学園女子大学 食物栄養学科 | 就職率100%・定員78名の少人数教育。管理栄養士＋衛生管理者のダブルライセンスが取れる全国唯一の学科。 |
| `/features` | 食物栄養学科が選ばれる3つの理由 \| 十文字学園女子大学 | 全国唯一のダブルライセンス・少人数78名・実践カリキュラム。管理栄養士養成の特色を詳しく解説。 |
| `/qualifications` | 取得できる資格一覧 \| 食物栄養学科 十文字学園女子大学 | 管理栄養士・第一種衛生管理者・栄養教諭一種免許。卒業と同時に取得できる資格と取得ルートを紹介。 |
| `/career` | 就職率100% 卒業生の進路実績 \| 食物栄養学科 | 病院・保育園・食品メーカー・一般企業など2025年3月卒業生の就職実績データを公開。 |
| `/faq` | よくある質問 \| 食物栄養学科 十文字学園女子大学 | 管理栄養士の資格・学費・就職・国家試験対策について受験生・保護者からよく聞かれる質問をまとめました。 |
| `/support` | 管理栄養士 国家試験サポート体制 \| 十文字学園女子大学 | 1年次から始まる6段階のサポート。4年次に年8回の模擬試験を実施。全国平均を超える合格実績。 |
| `/voices` | 在学生・卒業生の声 \| 食物栄養学科 十文字学園女子大学 | 管理栄養士をめざす学生のリアルな声。入学後の生活・授業・就活をインタビューで紹介。 |
| `/sports-nutrition` | スポーツ栄養士になるには \| 食物栄養学科 十文字学園女子大学 | 公認スポーツ栄養士への道、学科内のスポーツ関連科目、副指導教員制度を詳しく解説。 |

### 2. FAQ構造化データ（JSON-LD）

`SEO.jsx` を拡張し、`/faq` ページで `FAQPage` スキーマを出力する。

```js
// App.jsx の PAGE_META に faqSchema フィールドを追加
'/faq': {
  title: '...',
  desc: '...',
  faqSchema: true,  // SEO.jsx 側でFAQ_CATEGORIESをimportしてJSON-LD生成
}
```

`SEO.jsx` 内で `faqSchema` フラグがあるとき、`FAQ_CATEGORIES` の全Q&Aを `FAQPage` JSON-LDとして `<script type="application/ld+json">` に出力する。

`FAQ_CATEGORIES` を `src/faqData.js` に切り出して `FAQ.jsx` と `SEO.jsx` の両方からimportできるようにする。

### 3. OC参加レポートページ（`/open-campus-report`）

夏OC後（9月目処）に作成。狙うキーワード：「十文字学園 オープンキャンパス 感想」「食物栄養学科 OC」

**構成**:
1. 当日の写真（数枚）
2. プログラム内容レポート（模擬授業・施設見学・個別相談）
3. 参加した高校生・在学生スタッフのコメント
4. 次回OC案内 → 申込リンク

### 4. SNS連携の整備

- Instagramの最新投稿をSNSセクションに埋め込み（Instagram oEmbedまたはiframe）
- OC前後にInstagramで「このサイトも見てね」投稿し、リンクインバイオにこのサイトURLを設定

---

## 実装順序

### フェーズ1（優先度順）
1. Heroの「補完サイト」テキスト削除 + OC申込CTA追加
2. Header常設OCボタン追加
3. モバイル固定フッターバー追加
4. SNSセクション強化
5. `/open-campus` ページ新設

### フェーズ2（秋以降）
1. `FAQ_CATEGORIES` を `src/faqData.js` に切り出し
2. 全ページの `PAGE_META` を最適化
3. `SEO.jsx` に FAQ Schema JSON-LD 追加
4. `/open-campus-report` ページ新設（OC後）
5. Instagram埋め込み検討

---

## 変更ファイル一覧

### フェーズ1
- `src/App.jsx` — PAGE_META・SUB_PATHS・Routes 更新
- `src/components/Hero.jsx` — CTA追加・テキスト削除
- `src/components/Header.jsx` — OCボタン追加
- `src/index.css` — OCボタン・モバイル固定バーのスタイル追加
- `src/components/SNSSection.jsx` — フォローCTA追加
- `src/components/OpenCampus.jsx` — 新規作成

### フェーズ2
- `src/faqData.js` — 新規作成（FAQ_CATEGORIESを切り出し）
- `src/components/FAQ.jsx` — faqData.jsからimportに変更
- `src/components/SEO.jsx` — FAQ Schema JSON-LD出力追加
- `src/App.jsx` — PAGE_METAのtitle/description全面更新
- `src/components/OpenCampusReport.jsx` — 新規作成
