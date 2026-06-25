import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function StudentLife() {
  return (
    <section className="bg-gradient-to-br from-[#7A6868]/5 to-[#C89B9B]/5 py-[clamp(56px,10vw,96px)]" aria-labelledby="student-life-heading">
      <div className="container px-[clamp(20px,5vw,72px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#A87878] uppercase">学生生活</p>
          <h2
            id="student-life-heading"
            className="mt-3 text-balance font-serif text-[clamp(28px,4vw,40px)] leading-snug font-bold text-[#4A3F3F]"
          >
            新座で一人暮らしするなら
          </h2>
          <p className="mt-6 text-lg text-[#7A6868] leading-relaxed">
            新座市での学生寮・アパート費用と学費を、<br className="hidden sm:block" />
            年間・4年間の総額で比較できるシミュレーターを用意しました。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/living-alone"
            className="group inline-flex items-center gap-3 rounded-full bg-[#4A3F3F] px-8 py-4 text-white font-medium transition-all duration-300 hover:gap-4 hover:shadow-lg hover:-translate-y-1"
          >
            <Home size={20} aria-hidden="true" />
            一人暮らしコスト比較を見る
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
