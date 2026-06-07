import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, School } from 'lucide-react';

const AUDIENCES = [
  {
    id: 'student',
    icon: GraduationCap,
    label: '高校生の方へ',
    description: '在学生のリアルな声や、12の研究室で学べることを知る。',
    links: [
      { label: '在学生・卒業生の声', href: '/voices' },
      { label: '研究室ストーリーを見る', href: '#labs' },
    ],
  },
  {
    id: 'parent',
    icon: Users,
    label: '保護者の方へ',
    description: '就職率や国家試験サポート体制など、実績データで学科を知る。',
    links: [
      { label: '進路・就職実績を見る', href: '/career' },
      { label: '国家試験サポート体制', href: '/support' },
    ],
  },
  {
    id: 'teacher',
    icon: School,
    label: '進路指導の先生へ',
    description: '生徒に説明しやすい、学科の特色とよくある質問のまとめ。',
    links: [
      { label: '学科の特色を見る', href: '/features' },
      { label: 'よくある質問（FAQ）', href: '/faq' },
    ],
  },
];

export default function AudienceGuide() {
  return (
    <section className="bg-[#FFF9F9] pt-[clamp(28px,4vw,40px)]" aria-labelledby="audience-guide-heading">
      <div className="container px-[clamp(20px,5vw,72px)]">
        <motion.p
          id="audience-guide-heading"
          className="text-center font-serif text-[clamp(15px,1.8vw,18px)] font-bold text-[#4A3F3F]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          あなたに合わせて読む
        </motion.p>

        <div className="mt-5 grid gap-4 md:grid-cols-3 md:gap-5">
          {AUDIENCES.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.id}
                className="rounded-2xl border border-[#4A3F3F]/10 bg-white px-6 py-6 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A87878]/10 text-[#A87878]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-[clamp(16px,2vw,18px)] font-bold text-[#4A3F3F]">{a.label}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] font-light text-[#4A3F3F]/75">{a.description}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {a.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith('#') ? (
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#A87878] transition-colors hover:text-[#7a5555]"
                        >
                          {link.label}
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#A87878] transition-colors hover:text-[#7a5555]"
                        >
                          {link.label}
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
