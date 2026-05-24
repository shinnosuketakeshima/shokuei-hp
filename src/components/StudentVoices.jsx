import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

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

const COLUMNS = [
  {
    id: 'col3',
    title: 'チーズに"王様"と"女王様"がいた！食育論セミナーレポート',
    date: '2026.5.13',
    desc: '食育論の授業に雪印メグミルク様をお招き。骨の衝撃映像からチーズの試食まで体験した学生記者レポート。',
    href: '/student-column-3',
  },
  {
    id: 'col2',
    title: '健康×SNS映え！？「機能性和洋菓子」開発会議に潜入取材！',
    date: '2026.5.12',
    desc: '竹嶋ゼミ・芝崎ゼミが合同で取り組む機能性お菓子の開発現場をレポート。',
    href: '/student-column-2',
  },
  {
    id: 'col1',
    title: '白衣の「三権分立」？管理栄養士の卵たちのリアルな裏事情',
    date: '2026.5.11',
    desc: '実験、実習、そして白衣。管理栄養士を目指す学生たちの日常にある不思議なルールとは？',
    href: '/student-column-1',
  },
]

export default function StudentVoices({ summary = false }) {
  const displayVoices = summary ? VOICES.slice(0, 3) : VOICES
  const displayColumns = summary ? COLUMNS.slice(0, 1) : COLUMNS

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
          {displayVoices.map((v, i) => (
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

        <motion.div 
          className="voices__columns-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '80px', marginBottom: '40px' }}
        >
          <p className="eyebrow">学生コラム / Student Column</p>
          <h2 className="section-title">学生記者が伝える学科の日常</h2>
        </motion.div>

        <div className="voices__columns-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {displayColumns.map((c, i) => (
            <motion.div
              key={c.id}
              className="column-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <span className="column-card__date" style={{ fontSize: '13px', color: 'var(--stone)', marginBottom: '8px' }}>{c.date}</span>
              <h3 className="column-card__title" style={{ fontSize: '1.1rem', marginBottom: '12px', lineHeight: 1.5 }}>{c.title}</h3>
              <p className="column-card__desc" style={{ fontSize: '14px', color: 'var(--charcoal)', marginBottom: '20px', flex: 1 }}>{c.desc}</p>
              <Link to={c.href} className="text-link" style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--terracotta)', fontWeight: 'bold' }}>
                続きを読む <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {summary && (
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link to="/voices" className="button button--outline">
              学生の声・コラムをもっと見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
