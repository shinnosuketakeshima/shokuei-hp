import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import KoushaImage from '../university_kousha.jpg';
import TairyouImage from '../tairyou.png';
import KuwanohaImage from '../kuwanoha.jpg';
import KokushiImage from '../kokushi.png';

const PHOTOS = [
  {
    src: TairyouImage,
    alt: '食物栄養学科の大量調理実習。給食経営管理実習の様子。',
    caption: '大量調理実習',
  },
  {
    src: KuwanohaImage,
    alt: '地域連携活動。桑の葉あんぱんの試作品。',
    caption: '桑の葉あんぱんの試作',
  },
  {
    src: KokushiImage,
    alt: '管理栄養士国家試験の模擬試験。真剣に取り組む学生たち。',
    caption: '国家試験模擬試験',
  },
  {
    src: KoushaImage,
    alt: '十文字学園女子大学の緑豊かなキャンパス風景。',
    caption: '緑豊かなキャンパス、春',
  },
]

export default function CampusLife({ summary = false }) {
  const displayPhotos = summary ? PHOTOS.slice(0, 2) : PHOTOS
  const TitleTag = summary ? 'h2' : 'h1'

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
          <TitleTag className="section__title">キャンパスライフ</TitleTag>
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
          {displayPhotos.map((photo, i) => (
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

        {summary && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link to="/campus-life" className="button button--outline">
              キャンパスライフをもっと見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
