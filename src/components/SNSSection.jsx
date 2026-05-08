function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  )
}

export default function SNSSection() {
  return (
    <section className="sns">
      <div className="container">
        <div className="sns__header" data-reveal>
          <p className="eyebrow">SNS / Social Media</p>
          <h2 className="section-title">学科のいまを発信中</h2>
          <p style={{ marginTop: '14px', fontSize: '14px', color: 'var(--stone)' }}>
            授業・実習・学生生活の様子をリアルタイムで発信しています。
          </p>
        </div>

        <div className="sns__grid" data-reveal data-reveal-delay="2">
          <a
            href="https://www.instagram.com/jumonji_shokuei/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-card sns-card--instagram"
            aria-label="Instagram @jumonji_shokuei"
          >
            <div className="sns-card__icon"><InstagramIcon size={44} /></div>
            <p className="sns-card__name">Instagram</p>
            <p className="sns-card__handle">@jumonji_shokuei</p>
            <div className="sns-card__hover">
              <span className="sns-card__cta">フォローする</span>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@ishokssov49"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-card sns-card--tiktok"
            aria-label="TikTok @ishokssov49"
          >
            <div className="sns-card__icon"><TikTokIcon size={44} /></div>
            <p className="sns-card__name">TikTok</p>
            <p className="sns-card__handle">@ishokssov49</p>
            <div className="sns-card__hover">
              <span className="sns-card__cta">フォローする</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
