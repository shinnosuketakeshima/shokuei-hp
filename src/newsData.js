export const STATIC_NEWS = [
  {
    id: 'miraitaikenday-2026',
    date: '2026.6.21',
    tag: 'イベント',
    type: 'info',
    title: 'ひとつのトマトが、３つの未来を開く─未来体験Day 6月21日開催',
    description: '食物栄養・健康栄養・食品開発の3学科合同イベント。高校生が同じ食材「トマト」から3つの専門分野を体験。',
    href: 'https://www.jumonji-u.ac.jp/info/jumonji_miraitaikenday/',
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
    id: 'event-0531',
    date: '2026.5.18',
    tag: 'イベント',
    type: 'event',
    title: '【5/31開催・無料】管理栄養士について考える探求型イベント「食と栄養で未来をデザイン」',
    hook: '管理栄養士のリアルな仕事や大学での学びを体験できる、参加無料の特別企画。',
    href: '/event-0531',
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
