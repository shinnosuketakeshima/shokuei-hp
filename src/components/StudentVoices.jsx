import { motion } from 'framer-motion'

const VOICES = [
  {
    initial: 'A.N',
    year: '4年生',
    course: '臨床栄養コース',
    quote: '最初は衛生管理者って何？って感じでしたが、就活で絶対強みになりました。取れてよかったです。',
    category: '資格',
  },
  {
    initial: 'K.W',
    year: '2年生',
    course: '給食管理コース',
    quote: '先生に名前で呼んでもらえるのが、最初は驚きでした。相談しやすい雰囲気が本当にありがたいです。',
    category: '少人数教育',
  },
  {
    initial: 'A.I',
    year: '4年生',
    course: '臨床栄養コース',
    quote: '病院実習で初めて患者さんと関わって、勉強していたことがぜんぶつながった感じがしました。',
    category: '実習',
  },
  {
    initial: 'S.A',
    year: '4年生',
    course: '公衆栄養コース',
    quote: 'やりたいことを話したら、先生が一緒に考えてくれた。「ここでよかった」って思える4年間でした。',
    category: '学生生活',
  },
  {
    initial: 'A.O',
    year: '4年生',
    course: '臨床栄養コース',
    quote: '国試の勉強、ひとりだったら折れてたと思います。仲間がいたから最後まで続けられました。',
    category: '国試対策',
  },
  {
    initial: 'N.S',
    year: '3年生',
    course: '給食管理コース',
    quote: '同じ目標を持った友達ができた。それだけで、ここに来た意味があったと思っています。',
    category: '学生生活',
  },
]

export default function StudentVoices() {
  return (
    <section className="voices" id="voices">
      <div className="container">
        <motion.div 
          className="voices__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">学生の声 / Student Voices</p>
          <h2 className="section-title">
            在学生からのメッセージ
          </h2>
        </motion.div>

        <div className="voices__grid">
          {VOICES.map((v, i) => (
            <motion.div
              key={i}
              className="voice-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <p className="voice-card__category">{v.category}</p>
              <blockquote className="voice-card__quote">
                「{v.quote}」
              </blockquote>
              <div className="voice-card__author">
                <span className="voice-card__initial">{v.initial}</span>
                <div className="voice-card__meta">
                  <span className="voice-card__year">{v.year}</span>
                  <span className="voice-card__course">{v.course}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

