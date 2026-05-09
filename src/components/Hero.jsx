import HeroBg from '../eiyo-kagaku.png'; // ヒーロー背景画像をインポート

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h1 className="hero__catchphrase">
            食と健康を、<br />
            科学する。
          </h1>
        </div>
      </div>
    </section>
  );
}