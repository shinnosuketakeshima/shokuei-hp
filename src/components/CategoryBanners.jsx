import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical, HeartHandshake, Sprout } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'regional',
    icon: Sprout,
    title: '地域連携・商品開発',
    description:
      '黒たまねぎマフィン開発、おだんご先生の高大連携、市民健康まつりなど、社会を動かすプロジェクト。',
    href: '#labs-regional',
    accent: 'from-[#3D6B4F]/90 to-[#2E5340]/95',
    tag: '社会とつながる',
  },
  {
    id: 'science',
    icon: FlaskConical,
    title: '最先端サイエンス',
    description:
      'キンギョやゼブラフィッシュの老化実験、ウイルスと遺伝子、胃消化シミュレーターなど、白衣で挑む科学の最前線。',
    href: '#labs-science',
    accent: 'from-[#5a4a6b]/90 to-[#3d3450]/95',
    tag: '白衣の実験室',
  },
  {
    id: 'welfare',
    icon: HeartHandshake,
    title: '子ども・高齢者・福祉',
    description:
      '小中学生の骨量測定、こども食堂のアレルギー対応、特養・老健のケアマネジメントなど、誰かのいのちを支える実践。',
    href: '#labs-welfare',
    accent: 'from-[#A87878]/95 to-[#7a5555]/95',
    tag: 'いのちを支える',
  },
];

export default function CategoryBanners() {
  return (
    <section className="bg-[#FFF9F9] py-[clamp(48px,8vw,88px)]" aria-labelledby="category-banners-heading">
      <div className="container px-[clamp(20px,5vw,72px)]">
        <motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#A87878] uppercase">Pick your story</p>
          <h2
            id="category-banners-heading"
            className="mt-3 font-serif text-[clamp(24px,3.5vw,36px)] leading-snug font-bold text-[#4A3F3F]"
          >
            あなたの「好き」から、学びを選ぶ
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.id}
                href={cat.href}
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${cat.accent} p-7 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl md:min-h-[280px] md:p-8`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-sm">
                    <Icon size={14} aria-hidden="true" />
                    {cat.tag}
                  </span>
                  <h3 className="mt-5 font-serif text-[clamp(20px,2.2vw,26px)] leading-snug font-bold">
                    【{cat.title}】
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.9] font-light text-white/90">{cat.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-white/95">
                  ストーリーを見る
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
