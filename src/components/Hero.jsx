import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBg from '../top.jpg';

const CTAS = [
  { label: '学生たちのリアルを見る', href: '/voices', external: false },
  { label: '12の研究室ストーリー', href: '#labs', external: false },
  {
    label: '公式サイトでカリキュラムを見る',
    href: 'https://www.jumonji-u.ac.jp/humanlife/food/',
    external: true,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#2a1e1a]/85 via-[#2a1e1a]/45 to-[#2a1e1a]/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1e1a]/50 via-transparent to-transparent" aria-hidden="true" />

      <div className="container relative z-10 flex min-h-[92svh] flex-col justify-end px-[clamp(20px,5vw,72px)] pb-[clamp(48px,8vw,96px)] pt-[clamp(100px,14vw,140px)]">
        <motion.p
          className="mb-4 text-[11px] font-medium tracking-[0.22em] text-white/75 uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          十文字学園女子大学 食物栄養学科 ― 補完サイト
        </motion.p>

        <motion.h1
          className="max-w-3xl font-serif text-[clamp(28px,4.6vw,56px)] leading-[1.3] font-bold tracking-[0.02em] text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
        >
          管理栄養士をめざす毎日って、
          <br />
          実際どんな感じ？
        </motion.h1>

        <motion.p
          className="mt-3 max-w-2xl text-[clamp(13px,1.6vw,15px)] leading-[1.9] font-light text-white/70"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          「食」を、科学する。社会を、動かす。
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-[clamp(14px,1.8vw,17px)] leading-[2] font-light text-white/90"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          ここは、十文字学園女子大学 食物栄養学科の「公式サイトでは見えにくい部分」を伝える補完サイトです。研究室の素顔、学生の本音、教員のことばを通じて、入学後の毎日をリアルに知ることができます。
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {CTAS.map((cta) => {
            const className =
              'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-6 py-3 text-[13px] font-medium tracking-wide transition-all duration-300 ' +
              (cta.external
                ? 'border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                : 'bg-white text-[#4a3f3f] shadow-lg hover:-translate-y-0.5 hover:bg-[#fff9f9]');

            if (cta.external) {
              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={className}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              );
            }

            if (cta.href.startsWith('#')) {
              return (
                <a key={cta.label} href={cta.href} className={className}>
                  {cta.label}
                </a>
              );
            }

            return (
              <Link key={cta.label} to={cta.href} className={className}>
                {cta.label}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
