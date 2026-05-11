import { motion } from 'framer-motion';
import HeroBg from '../top.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <motion.h1 
            className="hero__catchphrase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            栄養を通して、<br />
            一人ひとりを未来へ導く。
            <motion.span 
              className="hero__catchphrase-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              病院で。地域で。<br />
              誰かの日常を支える学び。
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}