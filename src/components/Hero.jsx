import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      {/* left — text */}
      <div className="hero__left">
        <p className="hero__tag">Jissen Women's University — Food &amp; Nutrition</p>

        <h1 className="hero__heading">
          食を学び、<br />
          <em>いのちを育む。</em>
        </h1>

        <p className="hero__body">
          管理栄養士・栄養士をはじめ、多彩な資格取得をサポートする4年間。
          食と健康の専門家として、社会に貢献できる力を育てます。
        </p>

        <div className="hero__actions">
          <a href="#features" className="btn-primary">
            学科の特色を見る
            <ArrowRight size={15} />
          </a>
          <a href="#" className="btn-secondary">
            資料請求
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* right — visual canvas */}
      <div className="hero__right">
        <div className="hero__canvas">
          <div className="hero__canvas-circle hero__canvas-circle--1" />
          <div className="hero__canvas-circle hero__canvas-circle--2" />
          <div className="hero__canvas-line" />
          <div className="hero__canvas-dots">
            {Array.from({ length: 25 }).map((_, i) => <span key={i} />)}
          </div>
          <span className="hero__canvas-text">栄</span>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-line" />
        Scroll
      </div>
    </section>
  )
}
