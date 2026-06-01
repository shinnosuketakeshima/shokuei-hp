# プリレンダリング実装設計

## 目的

React SPAをビルド時にHTMLへ変換し、JavaScriptを実行しないAIクローラー（Claude等）が全ページのコンテンツを読めるようにする。

## 対象ルート（13ページ）

```
/
/lab-takeshima  /lab-kamoshita  /lab-kunii    /lab-iimura
/lab-kamiyama   /lab-ishii       /lab-komeichi /lab-nakaoka
/lab-shibasaki  /lab-yamazaki    /lab-niikura  /lab-okamoto
```

## アーキテクチャ

### ビルドパイプライン

```
npm run build
  1. vite build               → dist/          (クライアントバンドル)
  2. vite build --ssr ...     → dist-ssr/       (Node.js互換SSRバンドル)
  3. node prerender.js        → dist/ に13ファイル上書き
```

Firebase deploy は `dist/` を参照するため、デプロイフローは変わらない。

### 出力ファイル構造

```
dist/
  index.html                ← / のプリレンダー済みHTML（上書き）
  lab-takeshima/
    index.html              ← /lab-takeshima のプリレンダー済みHTML（新規）
  lab-kamoshita/
    index.html
  ...（ラボページ12個）
```

Firebase Hosting の `"source": "**" → "/index.html"` リライトルールにより、JSが有効な通常ブラウザでは `/lab-takeshima/index.html` → Reactアプリとして動作（ハイドレーション）。

## ファイル変更一覧

### 新規作成

**`src/entry-server.jsx`**

SSR用エントリーポイント。`StaticRouter`（URL固定）と`HelmetProvider`（SSRモード）でAppをラップし、HTML文字列とhelmデータを返す。

```jsx
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
```

**`prerender.js`**（プロジェクトルート）

```js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ROUTES = [
  '/',
  '/lab-takeshima', '/lab-kamoshita', '/lab-kunii', '/lab-iimura',
  '/lab-kamiyama',  '/lab-ishii',     '/lab-komeichi', '/lab-nakaoka',
  '/lab-shibasaki', '/lab-yamazaki',  '/lab-niikura', '/lab-okamoto',
]

async function main() {
  const { render } = await import('./dist-ssr/entry-server.js')
  const template   = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')

  for (const route of ROUTES) {
    const { html: appHtml, helmet } = render(route)

    // <title> と <meta name="description"> をSSR結果から注入
    let html = template
      .replace(/<title>.*?<\/title>/, helmet?.title?.toString() ?? '<title>食物栄養学科</title>')
      .replace('</head>', `${helmet?.meta?.toString() ?? ''}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath = route === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, html)
    console.log(`✓ pre-rendered ${route}`)
  }
}

main()
```

### 既存ファイルの変更

**`vite.config.js`** — SSR向けFirebase外部化設定を追加

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssr: {
    external: ['firebase/app', 'firebase/firestore'],
  },
})
```

**`package.json`** — `build` スクリプトを3ステップに更新

```json
"build": "vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node prerender.js"
```

### 変更不要なファイル

| ファイル | 理由 |
|---|---|
| `src/main.jsx` | クライアントエントリーは変更なし |
| `Labs.jsx` | `window.location.hash` はすべて `useEffect` 内 → SSR時に実行されない |
| `Header.jsx` | `window` アクセスはすべて `useEffect` 内 |
| `News.jsx` | Firestoreコールは `useEffect` 内 → SSR時はSTATIC_NEWSも実行されず空配列 |
| 各ラボページ | 静的JSXのみ、`useEffect`内に副作用 |

## ハイドレーション

プリレンダーHTMLには `<div id="root">{コンテンツ}</div>` が含まれ、クライアントJSが読み込まれると `hydrateRoot`（React 19）で既存DOMを再利用する。

プリレンダーされていないルート（`/features` 等）では `<div id="root">` が空のため、`hydrateRoot` を使うとhydrationミスマッチが発生する。`src/main.jsx` でDOMの状態を確認して切り替える。

```jsx
// src/main.jsx の変更
import { createRoot, hydrateRoot } from 'react-dom/client'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)   // プリレンダー済みページ
} else {
  createRoot(container).render(app)  // 通常ページ
}
```

## エラーハンドリング

- プリレンダー中にコンポーネントがクラッシュした場合、`prerender.js` はエラーをthrowしビルドを失敗させる（サイレント失敗を防ぐ）。
- `dist-ssr/` はgitignoreに追加する（一時ビルド成果物）。
