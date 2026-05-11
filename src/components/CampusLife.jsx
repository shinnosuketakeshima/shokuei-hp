import { motion } from 'framer-motion';
import JisshuSeiImage from '../jisshu-sei.jpg';
import KoushaImage from '../university_kousha.jpg';
import TairyouImage from '../tairyou.png';
import KuwanohaImage from '../kuwanoha.jpg';
import KokushiImage from '../kokushi.png';

const PHOTOS = [
  {
    src: TairyouImage,
    alt: '大量調理実習の様子',
    caption: '大量調理',
  },
  {
    src: KuwanohaImage,
    alt: '桑の葉あんぱんの試作',
    caption: '桑の葉あんぱんの試作',
  },
  {
    src: KokushiImage,
    alt: '国家試験模擬試験の様子',
    caption: '国家試験模擬試験の様子',
  },
  {
    src: KoushaImage,
    alt: '緑豊かなキャンパス',
    caption: '緑豊かなキャンパス、春',
  },
]

export default function CampusLife() {
  return (
    <section className="section" id="campus-life">
      <div className="container">
        <motion.div 
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">キャンパスライフ</h2>
          <p className="section__subtitle">Campus Life &amp; Environment</p>
        </motion.div>

        <motion.p 
          className="campus-life__lead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ここに来れば、学生の日常が見える。
        </motion.p>

        <div className="campus-photos">
          {PHOTOS.map((photo, i) => (
            <motion.figure 
              key={i} 
              className="campus-photo"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="campus-photo__img-wrap">
                <img src={photo.src} alt={photo.alt} className="campus-photo__img" />
              </div>
              <figcaption className="campus-photo__caption">{photo.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

