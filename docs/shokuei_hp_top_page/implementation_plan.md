# 食物栄養学科 独自サイト トップページ 制作実装計画

十文字学園女子大学 食物栄養学科の独自ウェブサイトのトップページを、React + Vite + Tailwind CSS + Framer Motion を用いて構築します。

## ユーザーレビューが必要な事項

- **配色とトーン**: 指示に基づき、テラコッタ（オレンジ系）とグリーン（葉野菜系）を基調とした温かみのあるパレットを採用します。
- **アニメーション**: Framer Motion を使用し、スクロール時に各セクションがふわっと現れる効果を実装します。

## オープンクエスチョン

- 特になし（指示内容が詳細であるため、まずはプロトタイプを作成します）。

## 提案する変更内容

### プロジェクト基盤の構築

#### [NEW] `tailwind.config.js`
学科のトーンに合わせたカスタムカラー（テラコッタ、グリーン、オフホワイト等）と Google Fonts (Noto Sans JP) の設定を行います。

#### [NEW] `index.css`
Tailwind のベースディレクティブと、Google Fonts のインポート、共通のベーススタイルを定義します。

### コンポーネント開発

#### [NEW] `src/components/Header.jsx`
- ロゴ、ナビゲーション、モバイルメニュー。
- スクロールに応じた Sticky ヘッダー。

#### [NEW] `src/components/Hero.jsx`
- キャッチコピー、サブコピー、CTAボタン。
- フルワイドの画像エリア（プレースホルダー）。

#### [NEW] `src/components/StatsBar.jsx`
- アイコン付きの4項目ハイライト。

#### [NEW] `src/components/Features.jsx`
- 学科の3つの特色カード。

#### [NEW] `src/components/Qualifications.jsx`
- 取得資格の紹介。
- 「第一種衛生管理者」への「全国唯一」バッジの追加。

#### [NEW] `src/components/NationalExamSupport.jsx`
- 6つのサポート体制の紹介。

#### [NEW] `src/components/News.jsx`
- お知らせ一覧（ダミーデータ）。

#### [NEW] `src/components/SNSSection.jsx`
- Instagram/TikTok のプレースホルダーとリンク。

#### [NEW] `src/components/Career.jsx`
- 進路・就職先ハイライト。

#### [NEW] `src/components/Footer.jsx`
- 学科情報、コピーライト。

### デプロイ設定

#### [NEW] `firebase.json` / `.firebaserc`
- Firebase Hosting 用の設定ファイル。

## 検証計画

### 自動テスト
- `npm run build` によるビルドチェック。

### 手動確認
- ブラウザツールを使用したレスポンシブ動作の確認。
- アニメーションの発火タイミングの調整。
