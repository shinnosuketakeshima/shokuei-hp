export const STATIC_NEWS = [
  {
    id: 'tabeken-launch',
    date: '2026.8.8',
    tag: 'レポート',
    type: 'report',
    title: '食物栄養学科「食べかた研究所（たべけん）」第1期がスタートしました',
    hook: '國井研究室が展開する、健康診断結果をもとにした3か月間の食事管理プログラム。8月8日の事前説明会を皮切りに、4名の第1期生への伴走支援がいよいよ始まりました。学生も助手として運営をサポートしています。',
    href: '/tabeken-report',
  },
  {
    id: 'how-to-become',
    date: '2026.7.17',
    tag: 'お知らせ',
    type: 'info',
    title: '高校生向け進路ガイド「管理栄養士になるには？」を公開しました',
    hook: '栄養士との違い、なるための最短ルート、「文系でも大丈夫？」などのよくある不安まで、1ページにまとめて解説。',
    href: '/how-to-become',
  },
  {
    id: 'event-0726',
    date: '2026.7.14',
    tag: 'イベント',
    type: 'event',
    title: '【7/26開催・無料】管理栄養士の"伝える"技術を考える探求型イベント',
    hook: '大学入試の面接を題材に、AIも活用しながら"自分の意見"を伝える技術を学ぶ。総合型選抜の面接対策にもピッタリ。',
    href: '/event-0726',
  },
  {
    id: 'col4',
    date: '2026.7.7',
    tag: '学生コラム',
    type: 'column',
    title: '夢を掴む夏の「寺子屋」へ。国試模試に挑む食栄生たちの熱い自習室',
    hook: '夏の特別集中講座「寺子屋」の選抜を兼ねた国試模試が目前。新しくなった社会連携センター「ここプラス」に満ちる熱気を学生記者がレポート。',
    href: '/student-column-4',
  },
  {
    id: 'takeshima-column-1',
    date: '2026.6.6',
    tag: '教員コラム',
    type: 'column',
    title: '失敗が消えない時代に、どう育つか（竹嶋伸之輔 教授）',
    hook: '「マニュアルがないとできない」と言われる学生たちの背景に、何があるのか。',
    href: '/lab-takeshima-column',
  },
  {
    id: 'eiyo-app-report',
    date: '2026.5.26',
    tag: '教員コラム',
    type: 'column',
    title: '解剖生理学実験×生成AI！学生が"自分の栄養アドバイスアプリ"を開発した話',
    hook: 'InBodyの測定データをもとに、生成AIで自分専用の栄養アドバイスアプリを作る実習とは。',
    href: '/eiyo-app-report',
  },
  {
    id: 'kamiyama-sa-report',
    date: '2026.5.15',
    tag: '教員コラム',
    type: 'column',
    title: '先輩が授業をサポート！総合科目「いちから学ぶnutrition science」SAレポート',
    hook: '先輩が後輩を教える「SA」の活動から見える、教える力と学ぶ力の育ち方。',
    href: '/lab-kamiyama-report',
  },
  {
    id: 'col3',
    date: '2026.5.13',
    tag: '学生コラム',
    type: 'column',
    title: 'チーズに"王様"と"女王様"がいた！骨の衝撃映像と食育論セミナーレポート',
    hook: 'チーズの"王様"と"女王様"って何のこと？学生記者が体験した特別講義のリアル。',
    href: '/student-column-3',
  },
  {
    id: 'col1',
    date: '2026.5.11',
    tag: '学生コラム',
    type: 'column',
    title: '白衣の「三権分立」？管理栄養士の卵たちのリアルな裏事情',
    hook: '実習着・白衣・エプロン…用途で使い分ける理由を、現役学生が解説。',
    href: '/student-column-1',
  },
  {
    id: 'col2',
    date: '2026.5.12',
    tag: '学生コラム',
    type: 'column',
    title: '健康×SNS映え！？竹嶋ゼミ・芝崎ゼミの「機能性和洋菓子」開発会議に潜入取材！',
    hook: '桑の葉パンとブラックみたらし団子。機能性とSNS映えを両立させる商品開発の裏側をレポート。',
    href: '/student-column-2',
  },
  {
    id: 'koudai-project',
    date: '2026.5.12',
    tag: 'お知らせ',
    type: 'info',
    title: '高大連携プロジェクト「食の未来を創る」十文字大×駒場学園高が始動',
    hook: '高校生と大学生がタッグを組み、商品開発や地域食堂で食課題に挑む実践レポート。',
    href: '/koudai-project',
  },
]

export function newsDateMillis(value) {
  if (value == null) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'string') {
    const t = Date.parse(value.replace(/\./g, '-'));
    return Number.isNaN(t) ? 0 : t;
  }
  return 0;
}

export function formatNewsDate(value) {
  if (value == null) return '';
  if (typeof value.toDate === 'function') {
    const d = value.toDate();
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  }
  if (value instanceof Date) {
    return `${value.getFullYear()}.${String(value.getMonth()+1).padStart(2,'0')}.${String(value.getDate()).padStart(2,'0')}`;
  }
  if (typeof value === 'string') return value;
  return '';
}
