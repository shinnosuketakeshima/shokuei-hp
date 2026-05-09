import JisshuSeiImage from '../jisshu-sei.jpg';
import KoushaImage from '../university_kousha.jpg';

export default function CampusLife() {
  return (
    <section className="section" id="campus-life">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">キャンパスライフ</h2>
          <p className="section__subtitle">Campus Life &amp; Environment</p>
        </div>

        <div className="campus-life__grid">
          <div className="campus-life__card">
            <div className="campus-life__image-wrapper">
              <img src={JisshuSeiImage} alt="実習中の学生の様子" className="campus-life__image" />
            </div>
            <div className="campus-life__text">
              <h3 className="campus-life__title">いきいきとした学生の姿</h3>
              <p className="campus-life__body">調理実習や実験、グループワークなど、真剣かつ和やかな雰囲気の中で、学生たちは主体的に学んでいます。</p>
            </div>
          </div>

          <div className="campus-life__card campus-life__card--reverse">
            <div className="campus-life__image-wrapper">
              <img src={KoushaImage} alt="緑豊かなキャンパス" className="campus-life__image" />
            </div>
            <div className="campus-life__text">
              <h3 className="campus-life__title">緑あふれる学習環境</h3>
              <p className="campus-life__body">四季の移ろいを感じられる緑豊かなキャンパスが、学生たちの学びと成長を静かに見守ります。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
