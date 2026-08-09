# 国試対策ページ（/support）更新 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `docs/国家試験対策.pptx`（食物栄養学科の新しい国試対策フレーム）の内容を反映し、`/support`ページ・ホーム要約・関連ページの記述を最新化する。

**Architecture:** `NationalExamSupport.astro`を「Part A: 新規の白背景解説パート（合格率・試験内容・学習サイクル・4年間ロードマップ、`/support`のみ）」＋「Part B: 既存の緑背景セクションを3項目に再編（ホーム要約と`/support`共通）」の2部構成に再編する。既存の`KokushiReport.astro`が使う`kr-*`系CSSクラスをPart Aで流用し、新規CSSは追加しない。あわせて、同じ数値・施策（130点目標／年8回模試／e-Learning／6段階）を参照している`FAQ.astro`・`StatsBar.astro`・`HowToBecome.astro`・`pageMeta.js`・`src/lib/seo.js`（構造化データ）を整合させる。

**追記（Task 1完了後に発覚）:** `src/lib/seo.js`に、当初のファイル調査（`.astro`ファイルのみgrep）で見落としていた、`/support`・`/faq`・`/`向けのJSON-LD構造化データ（FAQPageのQ&A、CollegeOrUniversityの説明文）に同じ旧表現（年8回・130点・6段階・e-Learning）がハードコードされていることが判明した。ユーザーに確認のうえ、Task 6として追加し、既存の「最終確認」タスクをTask 7に繰り下げた。

**Tech Stack:** Astro（`.astro`コンポーネント、フロントマターJS）、既存の`src/index.css`（新規CSS追加なし）。このリポジトリに自動テストランナーは存在しないため、各タスクの検証は`npx astro check`（型・ビルドエラー検出）＋ `npx astro dev`での目視確認で行う。

## Global Constraints

- 参照元スペック: `docs/superpowers/specs/2026-08-09-national-exam-support-update-design.md`（このplanは同spec準拠。内容の食い違いがあれば実装よりspecを優先して確認する）
- 合格率の数値は必ず `KokushiReport.astro`（`/kokushi-report`）と一致させる: 本学 前2回平均（第38・39回）83.9%／本学 第40回 72.7%／全国平均（第40回）79.4%。pptxスライド2の「新卒全国平均25年83.9%/26年72.7%」という文言は誤ラベルであり使用しない。
- `KokushiReport.astro`（`/kokushi-report`）自体は変更しない。
- 新規CSSクラスの追加は行わない。既存の`kr-*`系（`KokushiReport.astro`が使用）・`support__*`系クラスの流用で完結させる。
- pptxの画像素材は使用しない（テキスト内容のみ反映）。
- 全コード内テキストは日本語。既存の命名規則（英語識別子・日本語文字列）に従う。
- `src/lib/seo.js`冒頭の「Phase 6でベースラインとdeep-equal検証するため、内容・順序を変えないこと」というコメントは、React→Astro移行（2026-07-06カットオーバー、本番稼働確認済み）の検証用であり役割を終えている（ユーザー確認済み）。このplanの範囲でこのファイルの該当箇所を更新してよい。

---

### Task 1: NationalExamSupport.astro を新しい2部構成に書き換える

**Files:**
- Modify: `src/components/NationalExamSupport.astro`（全体を書き換え。現在115行）

**Interfaces:**
- Consumes: なし（他タスクへの依存なし）
- Produces: `NationalExamSupport`コンポーネントは引き続き`summary?: boolean`プロップを受け取る。`summary=true`（ホーム`src/pages/index.astro`が使用）と`summary=false`（`src/pages/support.astro`が使用）の両方で正しく描画されること。他タスクはこのコンポーネントの内部実装に依存しないため、後続タスクへ影響する新しいエクスポートや型はない。

現在のファイル全文（書き換え前）:

```astro
---
import { ArrowRight } from '@lucide/astro'

interface Props {
  summary?: boolean
}
const { summary = false } = Astro.props

const ITEMS = [
  {
    num: '01',
    title: '1・2年次からの早期意識づけ',
    body: '「4年生からでは遅い」という方針のもと、入学直後から国家試験を意識した学習習慣を形成。基礎固めと意識づけを早期に徹底します。',
  },
  {
    num: '02',
    title: '3年次：夏・冬の模擬試験',
    body: '3年次の夏・冬に模擬試験を実施。学習の中間チェックポイントとして弱点を可視化し、4年次に向けた対策の方向性を定めます。',
  },
  {
    num: '03',
    title: '4年次：模擬試験を年8回実施',
    body: '4年次には模擬試験を年8回実施。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。',
  },
  {
    num: '04',
    title: '130点突破を全員の目標に',
    body: '4年7月の模試で「130点」を合否の分岐点として明確に設定。具体的な数値目標が学習意欲と達成感を生み出します。',
  },
  {
    num: '05',
    title: '外部講師による特別講義',
    body: '各教員による対策講座に加え、外部の専門講師による特別講義も実施。多様な視点で試験範囲を深く理解します。',
  },
  {
    num: '06',
    title: 'e-Learningで自学自習を支援',
    body: 'e-Learningシステムを活用し、自分のペースで反復学習が可能。苦手分野の集中対策や隙間時間の有効活用を支援します。',
  },
]

const displayItems = summary ? ITEMS.slice(0, 3) : ITEMS
const TitleTag = summary ? 'h2' : 'h1'
---

<section class="support" id="support">
  <div class="support__orb support__orb--1" aria-hidden="true"></div>
  <div class="support__orb support__orb--2" aria-hidden="true"></div>

  <div class="support__inner container">
    <div data-reveal>
      <p class="eyebrow">国試対策 / Exam Support</p>
      <TitleTag class="section-title">
        {summary ? (
          <>合格率を支える<br />6段階のサポートプログラム</>
        ) : (
          <>管理栄養士国家試験<br />合格を支える6段階のサポートプログラム</>
        )}
      </TitleTag>
      <p class="support__subtitle">
        1年次からの早期意識づけに始まり、4年次は年8回の模擬試験で本番力を養成。
        多角的なサポートで、全員合格をめざします。
      </p>
    </div>

    <div class="support__grid">
      {displayItems.map((item, i) => (
        <div class="support-item" data-reveal style={`--reveal-delay: ${(i % 3) * 0.1}s`}>
          <p class="support-item__num">{item.num}</p>
          <h3 class="support-item__title">{item.title}</h3>
          {!summary && <p class="support-item__body">{item.body}</p>}
        </div>
      ))}
    </div>

    {summary && (
      <div style="margin-top: 48px; text-align: center">
        <a href="/support" class="button button--outline">
          国家試験対策を詳しく見る <ArrowRight size={16} style="margin-left: 8px" />
        </a>
      </div>
    )}

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
  </div>
</section>
```

- [ ] **Step 1: `src/components/NationalExamSupport.astro` の全文を以下に置き換える**

見出し階層についての注記: 従来`TitleTag`は`summary`時`h2`・フル時`h1`だったが、今回フルモードの先頭に新しい`kr-header`（`h1`）を追加するため、`.support`セクション側の見出しは`summary`/フル問わず常に`h2`に統一する（ページ内で`h1`が重複／`h2`が`h1`より先に出る、という2つの不整合を避けるため）。

```astro
---
import { ArrowRight } from '@lucide/astro'

interface Props {
  summary?: boolean
}
const { summary = false } = Astro.props

const ITEMS = [
  {
    num: '01',
    title: '対策開始がとにかく早い',
    body: '本学では、常に国家試験を意識した授業を実施し、2年生から模擬試験も始まります。入学前には入学者対象イベント「十文字デビューDay」を実施し、勉強法についてもしっかりアドバイス。入学前から国家試験対策を始めることができます。',
  },
  {
    num: '02',
    title: '集中講座で苦手分野を克服',
    body: '4年生の夏休みに夏期講習を実施。午前中から夕方まで9日間、集中的に勉強することで苦手分野を克服し、合格に近づきます。',
  },
  {
    num: '03',
    title: '十文字オリジナル問題集',
    body: '各分野の教員が協力し、オリジナル問題集を作成。独自の問題集を利用することで十文字に特化したきめ細やかな対策が可能です。必要に応じて、各教員が質問対応や独自の対策講座も実施します。',
  },
]

const EXAM_SUBJECTS = [
  { name: '社会・環境と健康', courses: '公衆衛生学、健康管理概論 など' },
  { name: '人体の構造と機能及び疾病の成り立ち', courses: '解剖生理学、病態生理学 など' },
  { name: '食べ物と健康', courses: '食品学I・Ⅱ、食品衛生学 など' },
  { name: '基礎栄養学', courses: '基礎栄養学 など' },
  { name: '応用栄養学', courses: '応用栄養学I〜Ⅲ など' },
  { name: '栄養教育論', courses: '栄養教育論I・Ⅱ など' },
  { name: '臨床栄養学', courses: '臨床栄養学I〜Ⅳ など' },
  { name: '公衆栄養学', courses: '公衆栄養学I・Ⅱ など' },
  { name: '給食経営管理論', courses: '給食経営管理論I・Ⅱ など' },
]

const ROADMAP = [
  { period: '入学前', support: '勉強方法のガイダンス', student: '高校までの学習を振り返る' },
  { period: '1・2年次', support: '授業による基礎力の定着、定期試験による到達度確認', student: '授業の復習を習慣化する' },
  { period: '3年次', support: '模試や外部講座の実施、苦手分野の確認', student: '模試の復習、学修計画の実行' },
  { period: '4年次', support: '模試や外部講座の実施、夏期講習や寺子屋の実施', student: '苦手分野の克服、試験に備える' },
]
---

{!summary && (
  <div class="kr-page">
    <div class="container">
      <div class="kr-header" data-reveal>
        <p class="kr-header__eyebrow">国試対策 / Exam Support</p>
        <h1 class="kr-header__title">大学の支援と学生の取り組みで<br />合格を目指します</h1>
      </div>

      <section class="kr-section" data-reveal>
        <div class="kr-section__label">Section 01</div>
        <h2 class="kr-section__title">管理栄養士国家試験の合格率</h2>
        <p class="kr-body">管理栄養士になるには、管理栄養士国家試験に合格する必要があります。試験は年々難化傾向にあり、4年生になってから対策を始めても間に合いません。</p>

        <div class="kr-stats-row">
          <div class="kr-stat">
            <div class="kr-stat__num">83.9<span class="kr-stat__unit">%</span></div>
            <div class="kr-stat__label">本学 合格率<br />（第38・39回平均）</div>
          </div>
          <div class="kr-stat kr-stat--highlight">
            <div class="kr-stat__num">72.7<span class="kr-stat__unit">%</span></div>
            <div class="kr-stat__label">本学 合格率<br />（第40回）</div>
          </div>
          <div class="kr-stat">
            <div class="kr-stat__num kr-stat__num--muted">79.4<span class="kr-stat__unit">%</span></div>
            <div class="kr-stat__label">全国平均<br />（第40回）</div>
          </div>
        </div>

        <p class="kr-body">全国平均も5年間で90%台から70%台後半まで低下しており、試験全体が難化傾向にあります。夢を実現するために、入学した今から勉強習慣をつけておきましょう。</p>

        <a href="/kokushi-report" class="kr-link-btn">
          国試レポートを読む <ArrowRight size={14} />
        </a>
      </section>

      <section class="kr-section" data-reveal>
        <div class="kr-section__label">Section 02</div>
        <h2 class="kr-section__title">管理栄養士国家試験の内容</h2>
        <p class="kr-body">試験の内容は以下のように多岐に渡ります。そのため、1年生からの対策が必要となります。</p>

        <ul class="kr-list">
          {EXAM_SUBJECTS.map((s) => (
            <li><strong>{s.name}</strong>（{s.courses}）</li>
          ))}
        </ul>

        <p class="kr-body kr-body--emphasis">管理栄養士国家試験は200問（200点満点）出題され、合格するためには120点以上の取得が必要です。</p>
      </section>

      <section class="kr-section" data-reveal>
        <div class="kr-section__label">Section 03</div>
        <h2 class="kr-section__title">大学の授業が、一番の国家試験対策です</h2>
        <p class="kr-body">国家試験の内容は幅広いですが、その内容は大学の授業で1つずつ学びます。つまり、授業で学んだ内容を復習し、知識を積み重ねることが、国家試験対策の第一歩となります。</p>

        <ul class="kr-list">
          <li>授業で学ぶ</li>
          <li>復習する</li>
          <li>定期試験で確認する</li>
          <li>苦手分野を学び直す</li>
        </ul>

        <p class="kr-body">例えば、1年生で習う食品学・食品衛生学は「食べ物と健康」に、解剖生理学は「人体の構造と機能及び疾病の成り立ち」に、基礎栄養学は「基礎栄養学」に、そのままつながっています。</p>
        <p class="kr-body">そのため本学では、授業で学んだ内容を振り返る習慣を身につけるこのサイクルを大切にしています。</p>
      </section>

      <section class="kr-section" data-reveal>
        <div class="kr-section__label">Section 04</div>
        <h2 class="kr-section__title">4年間の伴走ロードマップ</h2>
        <p class="kr-body">入学前から4年次まで、段階的に国家試験対策を行います。大学の支援と学生自身の取り組みを組み合わせ、合格に必要な力を育てます。合格には学生自身の継続的な学習が欠かせません。十文字は、その努力を4年間支えます。</p>

        {ROADMAP.map((r) => (
          <p class="kr-body"><strong>{r.period}</strong> — 大学の支援：{r.support}／学生の取り組み：{r.student}</p>
        ))}
      </section>
    </div>
  </div>
)}

<section class="support" id="support">
  <div class="support__orb support__orb--1" aria-hidden="true"></div>
  <div class="support__orb support__orb--2" aria-hidden="true"></div>

  <div class="support__inner container">
    <div data-reveal>
      {summary && <p class="eyebrow">国試対策 / Exam Support</p>}
      <h2 class="section-title">
        {summary ? (
          <>大学の支援と学生の取り組みで<br />合格を目指す3つのサポート</>
        ) : (
          <>管理栄養士国家試験<br />合格を支える十文字の3つの支援</>
        )}
      </h2>
      <p class="support__subtitle">
        入学前から国家試験を意識した学びを重ね、夏の集中講座と十文字オリジナル問題集で苦手を克服。
        大学の支援と学生自身の取り組みを組み合わせ、全員合格をめざします。
      </p>
    </div>

    <div class="support__grid">
      {ITEMS.map((item, i) => (
        <div class="support-item" data-reveal style={`--reveal-delay: ${(i % 3) * 0.1}s`}>
          <p class="support-item__num">{item.num}</p>
          <h3 class="support-item__title">{item.title}</h3>
          {!summary && <p class="support-item__body">{item.body}</p>}
        </div>
      ))}
    </div>

    {!summary && (
      <div style="margin-top: 48px; text-align: center" data-reveal="scale">
        <p class="support__subtitle" style="margin: 0 auto; text-align: center; max-width: 560px;">
          国家試験合格には、学生自身の継続的な学習が欠かせません。合格をめざして努力する学生を、十文字は一人にしません。
        </p>
      </div>
    )}

    {summary && (
      <div style="margin-top: 48px; text-align: center">
        <a href="/support" class="button button--outline">
          国家試験対策を詳しく見る <ArrowRight size={16} style="margin-left: 8px" />
        </a>
      </div>
    )}

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
  </div>
</section>
```

- [ ] **Step 2: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors` （`NationalExamSupport.astro`関連のエラーがないこと。既存の無関係な警告が元々あった場合はタスクの範囲外として無視してよいが、新規エラーが出ていないか必ず確認する）

- [ ] **Step 3: 開発サーバーでホーム（summaryモード）を目視確認**

Run: `npx astro dev`
`http://localhost:4321/` を開き、「国試対策」セクションを確認:
- 見出しが「大学の支援と学生の取り組みで／合格を目指す3つのサポート」になっている
- カードが3枚（対策開始がとにかく早い／集中講座で苦手分野を克服／十文字オリジナル問題集）で、本文は表示されない（見出しのみ）
- 「国家試験対策を詳しく見る」ボタンが `/support` にリンクしている
- Part A（合格率・試験内容など）は**表示されない**こと

- [ ] **Step 4: 開発サーバーで`/support`（フルモード）を目視確認**

`http://localhost:4321/support` を開き、上から順に確認:
- 白背景の`kr-header`（「大学の支援と学生の取り組みで／合格を目指します」）
- Section 01〜04（合格率の数値が83.9%／72.7%／79.4%になっている、9科目リスト、学習サイクル4ステップ、4年間ロードマップ4件）
- 緑背景セクション（3項目カード、本文付き）
- カード下の「国家試験合格には〜一人にしません」の一文
- 既存の「国試レポート」「学習教材」バナー2つが引き続き表示されている
- レイアウト崩れ（`kr-stats-row`の3カラムがモバイル幅で1カラムに落ちるか等）がないこと

- [ ] **Step 5: コミット**

```bash
git add src/components/NationalExamSupport.astro
git commit -m "$(cat <<'EOF'
feat: 国試対策ページを新しい3つの支援フレームに再編

docs/国家試験対策.pptx をベースに、合格率・試験内容・学習サイクル・
4年間ロードマップの解説パートを新設し、既存の6項目グリッドを
pptxの「3つの支援」（早期対策・夏期講習・オリジナル問題集）に再編。
合格率の数値は/kokushi-reportと整合させた（本学72.7%・全国79.4%等）。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: FAQ.astro の国試対策Q&A（e1〜e3）を更新する

**Files:**
- Modify: `src/components/FAQ.astro:76-90`

**Interfaces:**
- Consumes: なし
- Produces: なし（他タスクに影響しない独立した変更）

現在の該当箇所:

```astro
      {
        id: 'e1',
        q: '管理栄養士国家試験の合格率はどのくらいですか？',
        a: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。',
      },
      {
        id: 'e2',
        q: '国家試験対策はいつから始まりますか？',
        a: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。',
      },
      {
        id: 'e3',
        q: '4年次の模擬試験は何回ありますか？',
        a: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。',
      },
```

- [ ] **Step 1: `src/components/FAQ.astro` の該当ブロックを以下に置き換える**

`old_string`（上記コードブロックそのもの）を次の`new_string`に置き換える:

```astro
      {
        id: 'e1',
        q: '管理栄養士国家試験の合格率はどのくらいですか？',
        a: '本学の合格率は第38・39回平均83.9%、直近の第40回は72.7%（全国平均79.4%）でした。管理栄養士国家試験は年々難化傾向にあり、詳しい分析と今後の対策は「国試レポート」で公開しています。',
      },
      {
        id: 'e2',
        q: '国家試験対策はいつから始まりますか？',
        a: '「4年生からでは遅い」という方針のもと、入学前の「十文字デビューDay」から国家試験対策が始まります。2年次から模擬試験を実施し、大学の授業と復習のサイクルを通じて4年間かけて力を伸ばします。',
      },
      {
        id: 'e3',
        q: '国家試験対策で十文字ならではの取り組みは何ですか？',
        a: '各分野の教員が作成する十文字オリジナル問題集で、きめ細やかな対策が可能です。4年次の夏休みには9日間の夏期講習を実施し、苦手分野を集中的に克服します。',
      },
```

（`e4`「国家試験に向けて個別サポートはありますか？」は変更しない）

- [ ] **Step 2: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 3: 開発サーバーで`/faq`を目視確認**

`http://localhost:4321/faq` を開き、「管理栄養士 国家試験対策」カテゴリのQ&A3件が新しい文言に変わっていることを確認する。ホームのFAQサマリー（`summary`表示）にこのカテゴリが含まれる場合は`/`側も確認する。

- [ ] **Step 4: コミット**

```bash
git add src/components/FAQ.astro
git commit -m "$(cat <<'EOF'
fix: FAQの国試対策Q&Aを新しいサポート内容に合わせて更新

「年8回模試」「130点突破」など/supportから削除した旧数値への
言及を解消し、十文字デビューDay・夏期講習・オリジナル問題集の
説明に統一。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: StatsBar.astro の統計カードを更新する

**Files:**
- Modify: `src/components/StatsBar.astro:13-17`

**Interfaces:**
- Consumes: なし
- Produces: なし

現在の該当箇所:

```js
  {
    number: '8',    unit: '回',
    label: '4年次 国試模擬試験',
    note: '3年次にも夏・冬の2回実施',
  },
```

- [ ] **Step 1: `src/components/StatsBar.astro` の該当オブジェクトを以下に置き換える**

```js
  {
    number: '9',    unit: '日間',
    label: '夏期講習（4年次）',
    note: '苦手分野を集中的に克服',
  },
```

- [ ] **Step 2: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 3: 開発サーバーでホームを目視確認**

`http://localhost:4321/` のStatsBarセクションで、3番目のカードが「9 日間／夏期講習（4年次）／苦手分野を集中的に克服」になっていること、4枚のカードのレイアウトが崩れていないことを確認する。

- [ ] **Step 4: コミット**

```bash
git add src/components/StatsBar.astro
git commit -m "$(cat <<'EOF'
fix: ホームの統計カードを「年8回模試」から「夏期講習9日間」に変更

/support から削除した「年8回」の裏付けがなくなったため、
pptxで根拠のある「夏期講習9日間」の数値に差し替え。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: HowToBecome.astro の一文を更新する

**Files:**
- Modify: `src/components/HowToBecome.astro:159`

**Interfaces:**
- Consumes: なし
- Produces: なし

現在の該当行:

```astro
          十文字学園女子大学 食物栄養学科は、管理栄養士課程で<strong>第一種衛生管理者</strong>の免許も取れる全国唯一の大学。国家試験対策も1年次から始まり、4年次には模擬試験を年8回実施。「目指すだけ」で終わらせないサポート体制があります。
```

- [ ] **Step 1: `src/components/HowToBecome.astro` の該当行を以下に置き換える**

```astro
          十文字学園女子大学 食物栄養学科は、管理栄養士課程で<strong>第一種衛生管理者</strong>の免許も取れる全国唯一の大学。国家試験対策も入学前から始まり、4年間を通じて段階的にサポート。「目指すだけ」で終わらせないサポート体制があります。
```

- [ ] **Step 2: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 3: 開発サーバーで`/how-to-become`を目視確認**

`http://localhost:4321/how-to-become` を開き、「十文字ならではのプラスα」セクションの文言が更新されていることを確認する。

- [ ] **Step 4: コミット**

```bash
git add src/components/HowToBecome.astro
git commit -m "$(cat <<'EOF'
fix: how-to-becomeページの「年8回模試」表記を除去

/support から削除した具体的な模試回数への言及を、入学前からの
段階的サポートという表現に統一。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: pageMeta.js の /support エントリを更新する

**Files:**
- Modify: `src/data/pageMeta.js:150-154`（`PAGE_META['/support']`）
- Modify: `src/data/pageMeta.js:224`（`keywordsMap['/support']`）

**Interfaces:**
- Consumes: なし
- Produces: なし。ただし`BaseLayout.astro`が`PAGE_META[pathname]`未登録時にビルドエラーを出す仕様があるため、キー`'/support'`自体は削除しないこと。

現在の該当箇所（`PAGE_META`）:

```js
  '/support': {
    title: '管理栄養士 国家試験対策サポート | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学の管理栄養士国家試験対策は1年次から開始。年8回の模擬試験・130点突破目標など6段階の合格サポートプログラムを詳しく紹介。',
    ogType: 'website',
  },
```

現在の該当箇所（`keywordsMap`）:

```js
  '/support': '管理栄養士 国家試験,国試対策,合格率,管理栄養士 勉強,受験対策,模擬試験,e-Learning',
```

- [ ] **Step 1: `PAGE_META['/support']`の`description`を以下に置き換える**

`old_string`:
```js
    description: '十文字学園女子大学の管理栄養士国家試験対策は1年次から開始。年8回の模擬試験・130点突破目標など6段階の合格サポートプログラムを詳しく紹介。',
```

`new_string`:
```js
    description: '十文字学園女子大学の管理栄養士国家試験対策は入学前から開始。合格率・試験内容・4年間の伴走ロードマップと、夏期講習や十文字オリジナル問題集など3つの支援を詳しく紹介。',
```

（`title`・`ogType`は変更しない）

- [ ] **Step 2: `keywordsMap['/support']`を以下に置き換える**

`old_string`:
```js
  '/support': '管理栄養士 国家試験,国試対策,合格率,管理栄養士 勉強,受験対策,模擬試験,e-Learning',
```

`new_string`:
```js
  '/support': '管理栄養士 国家試験,国試対策,合格率,管理栄養士 勉強,受験対策,模擬試験',
```

- [ ] **Step 3: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors`（`PAGE_META`未登録パスのビルドエラーが発生しないこと）

- [ ] **Step 4: コミット**

```bash
git add src/data/pageMeta.js
git commit -m "$(cat <<'EOF'
docs: /support のSEO説明文・キーワードを新しい内容に合わせて更新

「年8回の模擬試験・130点突破目標など6段階」という旧description、
および使わなくなった e-Learning キーワードを、新しい3つの支援と
4年間ロードマップの内容に差し替え。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: src/lib/seo.js の構造化データ（JSON-LD）を更新する

**Files:**
- Modify: `src/lib/seo.js:1-2`（ファイル先頭コメント）
- Modify: `src/lib/seo.js`（`/`用`buildCustomJsonLd`内、`mainEntity`の1問目の`text`。現在の内容の行番号は`grep -n "6段階サポートが特徴です" src/lib/seo.js`で確認すること）
- Modify: `src/lib/seo.js`（`if (pathname === '/support')`ブロック全体）
- Modify: `src/lib/seo.js`（`if (pathname === '/faq')`ブロック内、国試対策関連の3問）

**Interfaces:**
- Consumes: なし
- Produces: なし（他タスクに影響しない独立した変更）

**背景:** Task 1実装後のビルド検証で、`src/lib/seo.js`に`/support`・`/faq`・`/`向けのJSON-LD構造化データが別途ハードコードされており、`NationalExamSupport.astro`・`FAQ.astro`から削除した旧表現（年8回模試・130点突破・6段階・e-Learning）がそのまま残っていることが判明した。ユーザー確認済みで、このタスクで整合させる。ファイル先頭の「内容・順序を変えないこと」というコメントはReact→Astro移行検証用で役割を終えているため、あわせて更新する。

- [ ] **Step 1: ファイル先頭のコメントを更新する**

`old_string`:
```js
// JSON-LD ビルダー（旧 App.jsx の customJsonLd 分岐と旧 SEO.jsx の逐語移植）。
// Phase 6 でベースラインと deep-equal 検証するため、内容・順序を変えないこと。
```

`new_string`:
```js
// JSON-LD ビルダー（旧 App.jsx の customJsonLd 分岐と旧 SEO.jsx の逐語移植）。
// 移行完了後は通常のコンテンツファイルと同様に更新してよい。
```

- [ ] **Step 2: `/`（トップページ）の説明文から「6段階サポート」表現を外す**

`old_string`（`pathname === '/'`ブロック内、1問目の`acceptedAnswer.text`）:
```js
            text: '埼玉県新座市にある十文字学園女子大学 食物栄養学科（人間生活学部）は、管理栄養士・栄養士を育成する4年制の学科です。定員78名の少人数教育、全国唯一の管理栄養士＋第一種衛生管理者ダブルライセンス取得、国家試験全員合格を目指す6段階サポートが特徴です。',
```

`new_string`:
```js
            text: '埼玉県新座市にある十文字学園女子大学 食物栄養学科（人間生活学部）は、管理栄養士・栄養士を育成する4年制の学科です。定員78名の少人数教育、全国唯一の管理栄養士＋第一種衛生管理者ダブルライセンス取得、入学前から4年間続く国家試験対策サポートが特徴です。',
```

- [ ] **Step 3: `/support`のFAQPageブロックを新しい4問に置き換える**

`old_string`（`if (pathname === '/support') {` から、その閉じの `}` まで全体。6問）:
```js
  if (pathname === '/support') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '管理栄養士国家試験の合格率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験対策はいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。',
          },
        },
        {
          '@type': 'Question',
          name: '4年次の模擬試験は何回ありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'e-Learningはどのように活用できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'e-Learningシステムにより、自分のペースで反復学習が可能です。苦手分野の集中対策や隙間時間の有効活用に役立ちます。授業外での自学自習をシステムが支援します。',
          },
        },
        {
          '@type': 'Question',
          name: '外部講師による特別講義はありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。各教員による対策講座に加え、外部の専門講師による特別講義も実施しています。多様な視点で試験範囲を深く理解することができます。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験に向けて個別サポートはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。',
          },
        },
      ],
    }
  }
```

`new_string`（4問。「e-Learning」「外部講師特別講義」の2問は、該当機能をページから削除したため構造化データからも削除する）:
```js
  if (pathname === '/support') {
    return {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '管理栄養士国家試験の合格率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '本学の合格率は第38・39回平均83.9%、直近の第40回は72.7%（全国平均79.4%）でした。管理栄養士国家試験は年々難化傾向にあり、詳しい分析と今後の対策は「国試レポート」で公開しています。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験対策はいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '「4年生からでは遅い」という方針のもと、入学前の「十文字デビューDay」から国家試験対策が始まります。2年次から模擬試験を実施し、大学の授業と復習のサイクルを通じて4年間かけて力を伸ばします。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験対策で十文字ならではの取り組みは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '各分野の教員が作成する十文字オリジナル問題集で、きめ細やかな対策が可能です。4年次の夏休みには9日間の夏期講習を実施し、苦手分野を集中的に克服します。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験に向けて個別サポートはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。',
          },
        },
      ],
    }
  }
```

- [ ] **Step 4: `/faq`のFAQPageブロック内、国試対策関連の3問を更新する**

`/faq`用の`mainEntity`配列は1行1問の書式（他の学科カテゴリの問と同じ配列に混在している）。国試対策に該当する3問だけを置き換える。それ以外の行（就職・資格・カリキュラム等）は変更しない。

`old_string`:
```js
        { '@type': 'Question', name: '管理栄養士国家試験の合格率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。' } },
        { '@type': 'Question', name: '国家試験対策はいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。' } },
        { '@type': 'Question', name: '4年次の模擬試験は何回ありますか？', acceptedAnswer: { '@type': 'Answer', text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。' } },
```

`new_string`:
```js
        { '@type': 'Question', name: '管理栄養士国家試験の合格率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '本学の合格率は第38・39回平均83.9%、直近の第40回は72.7%（全国平均79.4%）でした。管理栄養士国家試験は年々難化傾向にあり、詳しい分析と今後の対策は「国試レポート」で公開しています。' } },
        { '@type': 'Question', name: '国家試験対策はいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '「4年生からでは遅い」という方針のもと、入学前の「十文字デビューDay」から国家試験対策が始まります。2年次から模擬試験を実施し、大学の授業と復習のサイクルを通じて4年間かけて力を伸ばします。' } },
        { '@type': 'Question', name: '国家試験対策で十文字ならではの取り組みは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '各分野の教員が作成する十文字オリジナル問題集で、きめ細やかな対策が可能です。4年次の夏休みには9日間の夏期講習を実施し、苦手分野を集中的に克服します。' } },
```

（この3行の直後にある「国家試験に向けて個別サポートはありますか？」の行は変更しない）

- [ ] **Step 5: 型・ビルドチェック**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 6: ビルドして構造化データを確認**

Run: `npx astro build`
`dist-astro/support.html`と`dist-astro/faq.html`を開き、`<script type="application/ld+json">`内のJSON-LDに`年8回`・`130点`・`6段階`・`e-Learning`という文字列が**含まれていない**こと、代わりに`83.9`・`72.7`・`79.4`・`十文字デビューDay`・`夏期講習`・`十文字オリジナル問題集`が含まれていることを確認する（`grep`でよい）。

- [ ] **Step 7: コミット**

```bash
git add src/lib/seo.js
git commit -m "$(cat <<'EOF'
fix: 構造化データ(JSON-LD)の国試対策関連の記述を更新

src/lib/seo.js にハードコードされた/support・/faq・/向けの
FAQPage構造化データに残っていた「年8回模試」「130点突破」
「6段階」「e-Learning」を、NationalExamSupport.astro/FAQ.astro
と同じ新しい内容に統一。移行検証用だった「内容を変えない」
コメントも役割終了として更新。

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: 最終確認（ビルド・全ページQA・数値突合）

**Files:** なし（コード変更なし。検証のみ）

**Interfaces:**
- Consumes: Task 1〜6ですべて変更済みのファイル一式
- Produces: なし

このリポジトリに自動テストランナーはなく、実装を担当するsubagentにブラウザは使えない。目視確認は「開発サーバーを開いて見る」のではなく、`npx astro build`が生成した`dist-astro/`配下のHTMLをgrepして期待する文字列の有無を確認する方式で行う。

- [ ] **Step 1: プロダクションビルドで全体エラーがないことを確認**

Run: `npx astro build`
Expected: ビルドが成功し、`dist-astro/`に`index.html`・`support.html`・`faq.html`・`how-to-become.html`・`kokushi-report.html`が生成される。エラーが出ていないこと。

- [ ] **Step 2: `npx astro check` を最終実行**

Run: `npx astro check`
Expected: `0 errors`

- [ ] **Step 3: 生成されたHTMLに旧表現が残っていないか横断的に確認**

Run: `grep -rn "年8回\|130点突破\|6段階\|e-Learning" dist-astro/index.html dist-astro/support.html dist-astro/faq.html dist-astro/how-to-become.html`
Expected: 何もヒットしない（0件）。ヒットした場合は該当ファイル（`NationalExamSupport.astro`／`FAQ.astro`／`StatsBar.astro`／`HowToBecome.astro`／`pageMeta.js`／`seo.js`のいずれか）を特定し、該当タスクに戻って修正・追加コミットする。

- [ ] **Step 4: 数値の突合確認**

`grep -o "83\.9\|72\.7\|79\.4" dist-astro/support.html` と `grep -o "83\.9\|72\.7\|79\.4" dist-astro/kokushi-report.html` を実行し、両方に同じ3つの数値（83.9・72.7・79.4）が出現していることを確認する。`KokushiReport.astro:113,117,121`の値と食い違いがないか、該当箇所を`Read`で見比べる。不一致があれば`NationalExamSupport.astro`または`seo.js`側を修正し、追加コミットで補う。

- [ ] **Step 5: 問題がなければ完了。問題があれば該当タスクに戻って修正しコミットする。**
