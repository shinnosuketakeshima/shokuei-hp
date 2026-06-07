import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, GraduationCap, BookOpen } from 'lucide-react'
import { STATIC_NEWS, newsDateMillis, formatNewsDate } from '../newsData'

const FILTERS = [
  { id: 'all', label: '全て' },
  { id: '学生コラム', label: '学生コラム' },
  { id: '教員コラム', label: '教員コラム' },
]

export default function Columns() {
  const [activeFilter, setActiveFilter] = useState('all')

  const columns = STATIC_NEWS
    .filter(n => n.type === 'column')
    .sort((a, b) => newsDateMillis(b.date) - newsDateMillis(a.date))

  const filtered = activeFilter === 'all'
    ? columns
    : columns.filter(c => c.tag === activeFilter)

  return (
    <div className="lab-page">
      <div className="container">

        <motion.div
          className="lab-page__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </Link>
          <p className="lab-page__eyebrow">十文字学園女子大学 食物栄養学科</p>
          <h1 className="lab-page__title">コラム</h1>
          <p className="lab-page__subtitle">
            学生と教員、それぞれの視点で綴る、学びと現場のリアル。実習やゼミでの気づきから、教育・キャリアへの想いまで。
          </p>
        </motion.div>

        <div className="lab-page__content">
          <div className="columns-filter">
            {FILTERS.map(f => (
              <button
                key={f.id}
                type="button"
                className={`columns-filter__tab${activeFilter === f.id ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div className="columns-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => {
                const isStudent = c.tag === '学生コラム'
                const Icon = isStudent ? GraduationCap : BookOpen
                return (
                  <motion.div
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={c.href || '/'} className="column-card">
                      <div className="column-card__top">
                        <span className={`column-card__badge column-card__badge--${isStudent ? 'student' : 'faculty'}`}>
                          <Icon size={13} aria-hidden="true" />
                          {c.tag}
                        </span>
                        <span className="column-card__date">{formatNewsDate(c.date)}</span>
                      </div>
                      <h2 className="column-card__title">{c.title}</h2>
                      {c.description && <p className="column-card__desc">{c.description}</p>}
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="columns-empty">該当するコラムがありません。</p>
          )}
        </div>
      </div>
    </div>
  )
}
