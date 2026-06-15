import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, BookOpen, Home } from 'lucide-react';

const SPOTLIGHTS = [
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
    id: 'living-alone',
    icon: Home,
    label: '学生生活',
    title: 'はじめての一人暮らし',
    description: '学生寮とアパートの費用を総額で比較。シミュレーターで検討できます。',
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
];

export default function FeatureSpotlight() {
  return (
    <section className="bg-[#FFF9F9] pt-[clamp(28px,4vw,40px)]" aria-label="注目コンテンツへのリンク">
      <div className="container px-[clamp(20px,5vw,72px)]">
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {SPOTLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br ${item.accent} px-6 py-5 text-white shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="text-[11px] font-medium tracking-[0.15em] text-white/80 uppercase">{item.label}</span>
                      <h3 className="text-balance font-serif text-[clamp(16px,2vw,19px)] leading-snug font-bold">{item.title}</h3>
                      <p className="mt-1 hidden text-pretty text-[12px] leading-[1.7] font-light text-white/85 sm:block">{item.description}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
