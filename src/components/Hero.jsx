import HeroBg from '../top.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h1 className="hero__catchphrase">
            栄養を通して、<br />
            一人ひとりを未来へ導く。
            <span className="hero__catchphrase-detail">
              病院で。地域で。<br />
              誰かの日常を支える学び。
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}