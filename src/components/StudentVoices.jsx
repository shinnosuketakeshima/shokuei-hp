const VOICES = [
  {
    initial: 'A.N',
    year: '4年生',
    quote: '管理栄養士と第一種衛生管理者を同時取得できるのは本学だけ。卒業後の選択肢が広がりました。',
    category: '資格',
  },
  {
    initial: 'K.W',
    year: '2年生',
    quote: '先生との距離感が近く、何でも相談できる厚い信頼関係があります。少人数だからこその環境です。',
    category: '少人数教育',
  },
  {
    initial: 'A.I',
    year: '4年生',
    quote: '実習を通して実際に現場に立つことで、栄養士として働く準備ができました。',
    category: '実習',
  },
  {
    initial: 'S.A',
    year: '4年生',
    quote: '自分のやりたい！を後押ししてくれる環境が整っています。やりたいことに全力で挑戦できます。',
    category: '学生生活',
  },
  {
    initial: 'A.O',
    year: '4年生',
    quote: 'チームとして学習に向かうことが当たり前のようになっています。仲間と一緒に高め合えます。',
    category: '国試対策',
  },
  {
    initial: 'N.S',
    year: '3年生',
    quote: '同じ目標を持った仲間達と切磋琢磨しながら頑張っています。ここで出会えた仲間は一生の宝です。',
    category: '学生生活',
  },
]

export default function StudentVoices() {
  return (
    <section className="voices" id="voices">
      <div className="container">
        <div className="voices__header" data-reveal>
          <p className="eyebrow">学生の声 / Student Voices</p>
          <h2 className="section-title">
            在学生からのメッセージ
          </h2>
        </div>

        <div className="voices__grid">
          {VOICES.map((v, i) => (
            <div
              key={i}
              className="voice-card"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <p className="voice-card__category">{v.category}</p>
              <blockquote className="voice-card__quote">
                「{v.quote}」
              </blockquote>
              <div className="voice-card__author">
                <span className="voice-card__initial">{v.initial}</span>
                <span className="voice-card__year">{v.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
