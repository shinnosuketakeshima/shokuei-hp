import { GraduationCap, Users, School } from '@lucide/astro'

// 対象者別導線。AudienceGuide.astro（ホーム）と Header.astro（対象別メニュー）で共有する。
export const AUDIENCES = [
  {
    id: 'student',
    icon: GraduationCap,
    label: '高校生の方へ',
    shortLabel: '高校生',
    description: '「管理栄養士になるには？」から、在学生のリアルな声まで。',
    primaryHref: '/how-to-become',
    links: [
      { label: '管理栄養士になるには', href: '/how-to-become' },
      { label: '在学生・卒業生の声', href: '/voices' },
      { label: '12の研究室ストーリー', href: '#labs' },
    ],
  },
  {
    id: 'parent',
    icon: Users,
    label: '保護者の方へ',
    shortLabel: '保護者',
    description: '就職率や国家試験サポート体制など、実績データで学科を知る。',
    primaryHref: '/career',
    links: [
      { label: '進路・就職実績', href: '/career' },
      { label: '国家試験サポート体制', href: '/support' },
      { label: '一人暮らしの費用比較', href: '/living-alone' },
    ],
  },
  {
    id: 'teacher',
    icon: School,
    label: '進路指導の先生へ',
    shortLabel: '先生',
    description: '生徒に説明しやすい、学科の特色とよくある質問のまとめ。',
    primaryHref: '/features',
    links: [
      { label: '学科の特色', href: '/features' },
      { label: '取得できる資格', href: '/qualifications' },
      { label: 'よくある質問（FAQ）', href: '/faq' },
    ],
  },
]
