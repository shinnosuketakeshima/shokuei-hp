import { Trophy, BookOpen, Home, Heart, Award, Compass } from '@lucide/astro'

// 特集コンテンツ。FeatureSpotlight.astro とホームの RealVoices.astro（特集タブ）で共有する。
export const SPOTLIGHTS = [
  {
    id: 'how-to-become',
    icon: Compass,
    label: '高校生向け進路ガイド',
    title: '管理栄養士になるには？',
    description: '栄養士との違い・最短ルート・「文系でも大丈夫？」まで、最初の疑問にまとめて答える。',
    href: '/how-to-become',
    accent: 'from-[#C96C51]/90 to-[#9E4D36]/95',
  },
  {
    id: 'sports-nutrition',
    icon: Trophy,
    label: '特集ページ',
    title: 'スポーツ栄養特集',
    description: '2学科共通で学べる、スポーツ栄養の最前線。教員紹介や学びのルートを紹介。',
    href: '/sports-nutrition',
    accent: 'from-[#3D6B4F]/90 to-[#2E5340]/95',
  },
  {
    id: 'kotosupport',
    icon: Heart,
    label: '全学伴走支援',
    title: 'ことサポ for 食栄',
    description: '忙しい4年間を、ひとりにしない。2027年度スタートの伴走支援。',
    href: '/kotosupport',
    accent: 'from-[#C96C51]/90 to-[#9E4D36]/95',
  },
  {
    id: 'submajor',
    icon: Award,
    label: '新学び方',
    title: '副専攻×管理栄養士',
    description: '管理栄養士＋もうひとつ。あなただけのキャリアをデザインする。',
    href: '/submajor',
    accent: 'from-[#5F7F6A]/90 to-[#476050]/95',
  },
  {
    id: 'living-alone',
    icon: Home,
    label: '学生生活',
    title: '新座 一人暮らし 費用比較',
    description: '寮費・アパート家賃・学費を総額シミュレーション。新座市で進学するなら。',
    href: '/living-alone',
    accent: 'from-[#8A7B7B]/90 to-[#6B5959]/95',
  },
  {
    id: 'columns',
    icon: BookOpen,
    label: 'コラム',
    title: '学生・教員コラム',
    description: '学びの気づきから現場でのリアルな声まで。学生と教員、それぞれの視点で綴る記事。',
    href: '/columns',
    accent: 'from-[#A87878]/95 to-[#7a5555]/95',
  },
]
