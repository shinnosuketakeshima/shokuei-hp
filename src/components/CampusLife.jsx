import JisshuSeiImage from '../jisshu-sei.jpg';
import KoushaImage from '../university_kousha.jpg';

const PHOTOS = [
  {
    src: JisshuSeiImage,
    alt: '調理実習中の学生の様子',
    caption: '2026年春の調理実習より',
  },
  {
    src: KoushaImage,
    alt: '緑豊かなキャンパス',
    caption: '緑豊かなキャンパス、春',
  },
  {
    src: null,
    alt: '',
    caption: '実習室前の集合写真',
    placeholderColor: 'var(--forest)',
  },
  {
    src: null,
    alt: '',
    caption: '国家試験対策の勉強会',
    placeholderColor: 'var(--terracotta)',
  },
]

export default function CampusLife() {
  return (
    <section className="section" id="campus-life">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">キャンパスライフ</h2>
          <p className="section__subtitle">Campus Life &amp; Environment</p>
        </div>

        <p className="campus-life__lead">ここに来れば、学生の日常が見える。</p>

        <div className="campus-photos">
          {PHOTOS.map((photo, i) => (
            <figure key={i} className="campus-photo">
              <div className="campus-photo__img-wrap">
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} className="campus-photo__img" />
                ) : (
                  <div
                    className="campus-photo__placeholder"
                    style={{ background: photo.placeholderColor }}
                  />
                )}
              </div>
              <figcaption className="campus-photo__caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
