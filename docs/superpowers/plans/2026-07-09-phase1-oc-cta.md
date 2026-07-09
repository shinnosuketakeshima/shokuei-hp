# フェーズ1 OC動線設置 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** オープンキャンパス申込への動線をサイト全体に設置し、比較検討中の高校生がOC申込（外部URL）にスムーズに進める状態にする。

**Architecture:** 既存コンポーネントへのCTA追加（Hero・Header・SNSSection・Footer）+ `/open-campus` ランディングページ新設。新規CSSクラスはすべて `src/index.css` に追記する。テストフレームワークなし — 検証はブラウザ目視確認。

**Tech Stack:** React 19 + Vite 8, Framer Motion, lucide-react, react-router-dom, Tailwind CSS 4（既存コンポーネントはindex.cssのみ使用 — OpenCampusも同様）

## Global Constraints

- 新規CSSファイルを作成しない。スタイルはすべて `src/index.css` に追記する
- Tailwindクラスは `OpenCampus.jsx` では使わない（既存コンポーネントはindex.css方式のため）
- 外部リンクはすべて `target="_blank" rel="noopener noreferrer"` を付ける
- OC申込URL: `https://mypage.s-axol.jp/jumonji-u/login`（変更不可）
- 日本語テキストのみ。コメントは意図が非自明な場合のみ
- `npm run build` がエラーなく通ることを各タスクの最後に確認する

---

### Task 1: Hero — OC申込CTA追加 + 「補完サイト」テキスト削除

**Files:**
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Produces: Heroセクションの最上段CTAが「オープンキャンパスに申し込む」白ボタン、「補完サイト」テキストなし

- [ ] **Step 1: Hero.jsx を開き、CTAS配列とキャッチコピー直前の `<motion.p>` を確認する**

  対象は以下の2箇所：
  1. `const CTAS = [...]` — 先頭にOCエントリを追加
  2. `<motion.p className="mb-4 text-[11px]...">十文字学園女子大学 食物栄養学科 ― 補完サイト</motion.p>` — 削除

- [ ] **Step 2: CTAS配列を更新する**

  `src/components/Hero.jsx` の `const CTAS = [` の行を以下に置き換える：

  ```js
  const CTAS = [
    {
      label: 'オープンキャンパスに申し込む',
      href: 'https://mypage.s-axol.jp/jumonji-u/login',
      external: true,
      primary: true,
    },
    { label: '学生たちのリアルを見る', href: '/voices', external: false },
    { label: '12の研究室ストーリー', href: '#labs', external: false },
    {
      label: '公式サイトでカリキュラムを見る',
      href: 'https://www.jumonji-u.ac.jp/humanlife/food/',
      external: true,
    },
  ];
  ```

- [ ] **Step 3: className 判定ロジックを修正して `primary` フラグを考慮する**

  現在：
  ```js
  (cta.external
    ? 'border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
    : 'bg-white text-[#4a3f3f] shadow-lg hover:-translate-y-0.5 hover:bg-[#fff9f9]');
  ```

  変更後（`cta.external && !cta.primary` で判定）：
  ```js
  (cta.external && !cta.primary
    ? 'border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
    : 'bg-white text-[#4a3f3f] shadow-lg hover:-translate-y-0.5 hover:bg-[#fff9f9]');
  ```

- [ ] **Step 4: 「補完サイト」テキストの `<motion.p>` ブロックを削除する**

  削除対象（Hero.jsx 内のこのブロック全体）：
  ```jsx
  <motion.p
    className="mb-4 text-[11px] font-medium tracking-[0.22em] text-white/75 uppercase"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
  >
    十文字学園女子大学 食物栄養学科 ― 補完サイト
  </motion.p>
  ```

- [ ] **Step 5: ブラウザで確認する**

  ```
  npm run dev
  ```
  確認項目：
  - Heroに「オープンキャンパスに申し込む」白ボタンが最上段に表示される
  - 「補完サイト」テキストが消えている
  - ボタンをクリックすると `https://mypage.s-axol.jp/jumonji-u/login` が新タブで開く
  - 2番目以降のCTAの見た目が変わっていない（白ボタン/アウトラインボタン）

- [ ] **Step 6: ビルド確認 + コミット**

  ```bash
  npm run build
  git add src/components/Hero.jsx
  git commit -m "feat: add OC signup CTA to Hero and remove supplementary site label"
  ```

---

### Task 2: Header — デスクトップOCボタン + モバイル固定バー

**Files:**
- Modify: `src/components/Header.jsx`
- Modify: `src/App.jsx` （モバイル固定バーをグローバルに追加）
- Modify: `src/index.css` （2箇所のスタイル追加）

**Interfaces:**
- Consumes: Task 1 完了（依存なし、並行可）
- Produces:
  - デスクトップ（≥769px）: Headerの「学科公式HP ↗」リンクの右に「OC申込 ↗」ボタン
  - モバイル（≤768px）: 画面下部に固定バー「オープンキャンパス 7月・8月開催 → 申し込む」

- [ ] **Step 1: Header.jsx に `ArrowUpRight` のimportを追加する**

  `src/components/Header.jsx` の1行目を以下に変更（`ChevronDown` に追加）：
  ```js
  import { useState, useEffect, useRef } from 'react'
  import { useLocation } from 'react-router-dom'
  import { ChevronDown, ArrowUpRight } from 'lucide-react'
  ```

- [ ] **Step 2: Header.jsx の `</nav>` と `<button className="header__menu-btn"` の間にOCボタンを挿入する**

  ```jsx
  <a
    href="https://mypage.s-axol.jp/jumonji-u/login"
    target="_blank"
    rel="noopener noreferrer"
    className="header__oc-btn"
    onClick={closeAll}
  >
    OC申込 <ArrowUpRight size={14} aria-hidden="true" />
  </a>
  ```

  挿入位置（`</nav>` の直後、`<button className="header__menu-btn"` の直前）：
  ```jsx
        </nav>

        {/* ↓ ここに挿入 */}
        <a
          href="https://mypage.s-axol.jp/jumonji-u/login"
          target="_blank"
          rel="noopener noreferrer"
          className="header__oc-btn"
          onClick={closeAll}
        >
          OC申込 <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        {/* ↑ ここまで */}

        <button
          className={`header__menu-btn${menuOpen ? ' open' : ''}`}
  ```

- [ ] **Step 3: src/index.css に `.header__oc-btn` のスタイルを追加する**

  `src/index.css` の末尾に追記：
  ```css
  /* Header OC button (desktop only) */
  .header__oc-btn {
    display: none;
  }
  @media (min-width: 769px) {
    .header__oc-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-left: 12px;
      padding: 8px 16px;
      border-radius: 20px;
      background: var(--terracotta);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    .header__oc-btn:hover {
      background: #8a5f5f;
    }
  }

  /* Mobile OC sticky bar */
  .mobile-oc-bar {
    display: none;
  }
  @media (max-width: 768px) {
    .mobile-oc-bar {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 200;
      background: var(--terracotta);
      padding: 0;
    }
    .mobile-oc-bar__link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      padding: 14px 20px;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-decoration: none;
    }
    body {
      padding-bottom: 52px;
    }
  }
  ```

- [ ] **Step 4: Header.jsx にモバイル固定バーを追加する**

  `src/components/Header.jsx` の `return (` を Fragment に変更し、固定バーを追加する。

  現在の return:
  ```jsx
  return (
    <header className={`header...`}>
      ...
    </header>
  )
  ```

  変更後（`<>` で囲んでモバイルバーを追加）：
  ```jsx
  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}${onHero ? ' header--on-hero' : ''}`}>
        <div className="header__inner">
          {/* 既存のロゴ・ナビ・OC ボタン・ハンバーガーボタン — 変更なし */}
          ...
        </div>
      </header>

      <div className="mobile-oc-bar">
        <a
          href="https://mypage.s-axol.jp/jumonji-u/login"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-oc-bar__link"
        >
          オープンキャンパス 7月・8月開催 — 申し込む ↗
        </a>
      </div>
    </>
  )
  ```

  `ArrowUpRight` アイコンは使わず `↗` テキストで代替（Header.jsx は `ArrowUpRight` を Step 1 で追加済みだが、モバイルバーでの使用はCSSサイズ調整が面倒なためテキスト矢印にする）。

- [ ] **Step 5: ブラウザで確認する**

  ```
  npm run dev
  ```
  確認項目（デスクトップ 1280px幅）：
  - Headerの右端（ハンバーガーボタンの左）に赤い「OC申込 ↗」ボタンが表示される
  - ボタンをクリックすると申込URLが新タブで開く
  - ヘッダースクロール後も表示が崩れない

  確認項目（モバイル 375px幅、DevToolsで切り替え）：
  - 画面最下部に赤い固定バーが表示される
  - ページコンテンツが固定バーに隠れていない（padding-bottomが効いている）
  - バーをタップすると申込URLが新タブで開く

- [ ] **Step 6: ビルド確認 + コミット**

  ```bash
  npm run build
  git add src/components/Header.jsx src/App.jsx src/index.css
  git commit -m "feat: add OC button to header and mobile sticky bar"
  ```

---

### Task 3: SNSSection — フォローCTAを常時表示化

**Files:**
- Modify: `src/components/SNSSection.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Task 1・2 完了（依存なし、並行可）
- Produces: InstagramカードとTikTokカードのハンドル名の下に「フォローする ↗」テキストが常時表示される

- [ ] **Step 1: SNSSection.jsx に `ArrowUpRight` のimportを追加する**

  ```js
  import { motion } from 'framer-motion';
  import { ArrowUpRight } from 'lucide-react';
  ```

- [ ] **Step 2: Instagramカードに常時表示フォローCTAを追加する**

  `<p className="sns-card__handle">@jumonji_shokuei</p>` の直後に追記：
  ```jsx
  <p className="sns-card__handle">@jumonji_shokuei</p>
  <span className="sns-card__follow-label">
    フォローする <ArrowUpRight size={12} aria-hidden="true" />
  </span>
  ```

- [ ] **Step 3: TikTokカードにも同様に追加する**

  `<p className="sns-card__handle">@ishokssov49</p>` の直後に追記：
  ```jsx
  <p className="sns-card__handle">@ishokssov49</p>
  <span className="sns-card__follow-label">
    フォローする <ArrowUpRight size={12} aria-hidden="true" />
  </span>
  ```

- [ ] **Step 4: src/index.css に `.sns-card__follow-label` のスタイルを追加する**

  `src/index.css` 末尾に追記：
  ```css
  /* SNS card follow label (always visible) */
  .sns-card__follow-label {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    margin-top: 10px;
    padding: 5px 14px;
    border-radius: 20px;
    border: 1px solid currentColor;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    opacity: 0.85;
  }
  ```

- [ ] **Step 5: ブラウザで確認する**

  ```
  npm run dev
  ```
  `/` (ホーム) のSNSセクションを確認：
  - Instagramカードに「フォローする ↗」が常時表示されている
  - TikTokカードに同様に表示されている
  - ホバー時の既存アニメーションが壊れていない

- [ ] **Step 6: ビルド確認 + コミット**

  ```bash
  npm run build
  git add src/components/SNSSection.jsx src/index.css
  git commit -m "feat: make SNS follow CTA permanently visible"
  ```

---

### Task 4: /open-campus ページ新設 + Footer更新

**Files:**
- Create: `src/components/OpenCampus.jsx`
- Modify: `src/App.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Task 1・2 完了（依存なし）
- Produces:
  - `/open-campus` でアクセスできるOC告知ページ
  - Footerの「オープンキャンパス」リンクが `/open-campus` に更新される
  - App.jsx の PAGE_META・SUB_PATHS・Routes・importが更新される

- [ ] **Step 1: `src/components/OpenCampus.jsx` を新規作成する**

  ```jsx
  import { motion } from 'framer-motion'
  import { Link } from 'react-router-dom'
  import { ArrowUpRight, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'

  const OC_DATES = [
    { date: '7月XX日（土）', time: '10:00〜15:00（予定）' },
    { date: '8月XX日（土）', time: '10:00〜15:00（予定）' },
  ]

  const PROGRAM = [
    {
      num: '01',
      title: '学科説明',
      desc: '食物栄養学科の特色・カリキュラムを教員が説明します。管理栄養士の資格や就職実績についても詳しく紹介します。',
    },
    {
      num: '02',
      title: '模擬授業',
      desc: '実際の授業の一場面を体験。管理栄養士の学びが、4年間でどのように積み重なるかを先取りできます。',
    },
    {
      num: '03',
      title: '施設見学',
      desc: '最新の調理実習室・実験室・給食実習室などを見学。150食規模の給食実習を行う施設を実際に確認できます。',
    },
    {
      num: '04',
      title: '個別相談',
      desc: '入試・資格・就職・学費など、教員や在学生に何でも聞ける時間。気になることを直接確認できる機会です。',
    },
  ]

  const AUDIENCES = [
    '管理栄養士になりたい・興味がある',
    '少人数（定員78名）のアットホームな環境で学びたい',
    '管理栄養士＋第一種衛生管理者のダブルライセンスについて詳しく知りたい',
    '調理実習室や実験室を実際に見てみたい',
    '先生や在学生に直接話を聞きたい',
  ]

  const RELATED = [
    { label: '在学生の声を読む', href: '/voices' },
    { label: '取得できる資格を確認する', href: '/qualifications' },
    { label: '就職・進路の実績を見る', href: '/career' },
    { label: 'よくある質問（FAQ）', href: '/faq' },
  ]

  export default function OpenCampus() {
    return (
      <main className="oc-page">
        <section className="oc-hero">
          <div className="container">
            <motion.div
              className="oc-hero__inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Open Campus 2025 / オープンキャンパス</p>
              <h1 className="oc-hero__title">
                食物栄養学科で、<br />
                管理栄養士を目指す毎日を体験しよう。
              </h1>
              <p className="oc-hero__subtitle">
                少人数教育・ダブルライセンス・就職率100%——数字の背景にある学びを、この目で確かめてください。
              </p>
              <a
                href="https://mypage.s-axol.jp/jumonji-u/login"
                target="_blank"
                rel="noopener noreferrer"
                className="oc-hero__cta"
              >
                オープンキャンパスに申し込む <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="oc-hero__cta-note">※ 初めての方はアカウント登録（無料）が必要です</p>
            </motion.div>
          </div>
        </section>

        <section className="oc-dates">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">開催日程 / Schedule</p>
              <h2 className="section-title">2025年 開催スケジュール</h2>
            </motion.div>
            <div className="oc-dates__grid">
              {OC_DATES.map((d, i) => (
                <motion.div
                  key={i}
                  className="oc-date-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="oc-date-card__row">
                    <Calendar size={18} aria-hidden="true" />
                    <span className="oc-date-card__date">{d.date}</span>
                  </div>
                  <div className="oc-date-card__row">
                    <Clock size={16} aria-hidden="true" />
                    <span className="oc-date-card__time">{d.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="oc-dates__location">
              <MapPin size={14} aria-hidden="true" />
              十文字学園女子大学（埼玉県新座市菅沢2-1-28 / JR武蔵野線・新座駅 徒歩10〜15分）
            </p>
          </div>
        </section>

        <section className="oc-program">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">当日のプログラム / Program</p>
              <h2 className="section-title">当日の流れ</h2>
            </motion.div>
            <div className="oc-program__grid">
              {PROGRAM.map((p, i) => (
                <motion.div
                  key={i}
                  className="oc-program__item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="oc-program__num">{p.num}</span>
                  <h3 className="oc-program__title">{p.title}</h3>
                  <p className="oc-program__desc">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="oc-audience">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">こんな方へ / For You</p>
              <h2 className="section-title">こんな方におすすめです</h2>
            </motion.div>
            <ul className="oc-audience__list">
              {AUDIENCES.map((a, i) => (
                <motion.li
                  key={i}
                  className="oc-audience__item"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <span className="oc-audience__check" aria-hidden="true">✓</span>
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="oc-signup">
          <div className="container">
            <motion.div
              className="oc-signup__inner"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="oc-signup__title">参加申し込み</h2>
              <p className="oc-signup__body">
                公式サイトの申込フォームから参加登録をしてください。初めての方はアカウント登録（無料）が必要です。
              </p>
              <a
                href="https://mypage.s-axol.jp/jumonji-u/login"
                target="_blank"
                rel="noopener noreferrer"
                className="oc-signup__btn"
              >
                オープンキャンパスに申し込む <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="oc-signup__note">※ 初めての方はアカウント登録（無料）が必要です</p>
            </motion.div>
          </div>
        </section>

        <section className="oc-related">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">参加前に / Before You Come</p>
              <h2 className="section-title">参加前に読んでおきたい</h2>
            </motion.div>
            <ul className="oc-related__list">
              {RELATED.map((r, i) => (
                <motion.li
                  key={r.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link to={r.href} className="oc-related__link">
                    {r.label} <ChevronRight size={14} aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    )
  }
  ```

- [ ] **Step 2: src/index.css にOpenCampusページのスタイルを追加する**

  `src/index.css` 末尾に追記：
  ```css
  /* =========================================
     Open Campus Page
     ========================================= */
  .oc-page {
    padding-top: 80px; /* header height offset */
  }

  /* Hero */
  .oc-hero {
    padding: clamp(48px, 8vw, 96px) 0;
    background: var(--cream);
  }
  .oc-hero__inner {
    max-width: 760px;
  }
  .oc-hero__title {
    font-family: var(--font-serif);
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700;
    line-height: 1.4;
    color: var(--charcoal);
    margin-top: 16px;
  }
  .oc-hero__subtitle {
    margin-top: 16px;
    font-size: clamp(14px, 1.6vw, 16px);
    line-height: 1.9;
    color: var(--stone);
  }
  .oc-hero__cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    padding: 16px 32px;
    border-radius: 4px;
    background: var(--terracotta);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }
  .oc-hero__cta:hover {
    background: #8a5f5f;
    transform: translateY(-2px);
  }
  .oc-hero__cta-note {
    margin-top: 10px;
    font-size: 12px;
    color: var(--stone);
  }

  /* Dates */
  .oc-dates {
    padding: clamp(48px, 6vw, 72px) 0;
  }
  .oc-dates__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 32px;
  }
  .oc-date-card {
    padding: 24px;
    border: 1px solid var(--terracotta);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .oc-date-card__row {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--terracotta);
  }
  .oc-date-card__date {
    font-family: var(--font-serif);
    font-size: clamp(18px, 2.4vw, 22px);
    font-weight: 700;
    color: var(--charcoal);
  }
  .oc-date-card__time {
    font-size: 14px;
    color: var(--stone);
  }
  .oc-dates__location {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 20px;
    font-size: 13px;
    color: var(--stone);
  }

  /* Program */
  .oc-program {
    padding: clamp(48px, 6vw, 72px) 0;
    background: var(--cream);
  }
  .oc-program__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-top: 40px;
  }
  .oc-program__item {
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,.06);
  }
  .oc-program__num {
    display: block;
    font-size: 28px;
    font-weight: 800;
    color: var(--terracotta);
    opacity: 0.25;
    line-height: 1;
    margin-bottom: 8px;
  }
  .oc-program__title {
    font-family: var(--font-serif);
    font-size: 18px;
    font-weight: 700;
    color: var(--charcoal);
    margin-bottom: 10px;
  }
  .oc-program__desc {
    font-size: 13px;
    line-height: 1.8;
    color: var(--stone);
  }

  /* Audience */
  .oc-audience {
    padding: clamp(48px, 6vw, 72px) 0;
  }
  .oc-audience__list {
    list-style: none;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 600px;
  }
  .oc-audience__item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--charcoal);
  }
  .oc-audience__check {
    color: var(--terracotta);
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* Signup CTA */
  .oc-signup {
    padding: clamp(48px, 8vw, 96px) 0;
    background: var(--terracotta);
  }
  .oc-signup__inner {
    text-align: center;
    max-width: 560px;
    margin: 0 auto;
  }
  .oc-signup__title {
    font-family: var(--font-serif);
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 700;
    color: #fff;
  }
  .oc-signup__body {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.8;
    color: rgba(255,255,255,.85);
  }
  .oc-signup__btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    padding: 16px 40px;
    border-radius: 4px;
    background: #fff;
    color: var(--terracotta);
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.2s;
  }
  .oc-signup__btn:hover {
    transform: translateY(-2px);
  }
  .oc-signup__note {
    margin-top: 12px;
    font-size: 12px;
    color: rgba(255,255,255,.7);
  }

  /* Related links */
  .oc-related {
    padding: clamp(48px, 6vw, 72px) 0;
  }
  .oc-related__list {
    list-style: none;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 480px;
  }
  .oc-related__link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--terracotta);
    text-decoration: none;
    border-bottom: 1px solid var(--terracotta);
    transition: opacity 0.2s;
    width: 100%;
    justify-content: space-between;
  }
  .oc-related__link:hover {
    opacity: 0.7;
  }
  ```

- [ ] **Step 3: App.jsx を更新する（import・PAGE_META・SUB_PATHS・Route）**

  **importの追加**（既存importリストの末尾付近に追加）：
  ```js
  import OpenCampus from './components/OpenCampus'
  ```

  **PAGE_META への追加**（`'/living-alone': {...},` の後）：
  ```js
  '/open-campus': {
    title: 'オープンキャンパス 2025 | 十文字学園女子大学 食物栄養学科',
    description: '食物栄養学科のオープンキャンパス。2025年7月・8月開催。学科説明・模擬授業・施設見学・個別相談。就職率100%・定員78名の少人数教育を体感しよう。',
    ogType: 'website',
  },
  ```

  **SUB_PATHS への追加**（配列末尾）：
  ```js
  '/open-campus',
  ```
  ※ 現在の配列末尾 `'/living-alone',` の後に追加する

  **Route の追加**（`<Route path="/living-alone"` の後）：
  ```jsx
  <Route path="/open-campus" element={<OpenCampus />} />
  ```

- [ ] **Step 4: Footer.jsx の「オープンキャンパス」リンクを更新する**

  `src/components/Footer.jsx` の `LINKS_2` を以下に更新：
  ```js
  const LINKS_2 = [
    { label: '入試情報',          href: '#' },
    { label: 'オープンキャンパス', href: '/open-campus' },
    { label: '学科公式HP',        href: 'https://www.jumonji-u.ac.jp/humanlife/food/' },
    { label: 'アクセス',          href: '#' },
    { label: '大学ホームページ',   href: '#' },
  ]
  ```

- [ ] **Step 5: ブラウザで確認する**

  ```
  npm run dev
  ```
  確認項目：
  - `/open-campus` にアクセスして全セクションが表示される
  - 日程が「7月XX日」「8月XX日」のプレースホルダー表示になっている（実際の日程は後で入力）
  - 「オープンキャンパスに申し込む」ボタン（Hero・Signup両方）をクリックすると申込URLが新タブで開く
  - Footerの「オープンキャンパス」をクリックすると `/open-campus` に遷移する
  - ブラウザ幅375pxでも崩れずに表示される

- [ ] **Step 6: ビルド確認 + コミット**

  ```bash
  npm run build
  git add src/components/OpenCampus.jsx src/App.jsx src/components/Footer.jsx src/index.css
  git commit -m "feat: add /open-campus landing page and update footer links"
  ```

---

## 実装後の確認チェックリスト

すべてのタスク完了後に確認：

- [ ] ホームページ（`/`）のHeroに白いOCボタンが最上段にある
- [ ] デスクトップHeaderの右端に赤い「OC申込 ↗」ボタンがある
- [ ] スマートフォン（375px）で画面下部に赤い固定バーが表示される
- [ ] SNSセクションの両カードに「フォローする ↗」が常時表示される
- [ ] Footerの「オープンキャンパス」が `/open-campus` に遷移する
- [ ] `/open-campus` の全セクションが正しく表示される
- [ ] OCボタンをクリックすると `https://mypage.s-axol.jp/jumonji-u/login` が新タブで開く
- [ ] `npm run build` がエラーなく完了する

## 未入力情報（実装後に更新が必要）

- `/open-campus` の `OC_DATES` 配列にある日程「7月XX日（土）」「8月XX日（土）」を実際の開催日に変更する
- モバイル固定バーの「7月・8月開催」テキストも実際の月に合わせて修正する
