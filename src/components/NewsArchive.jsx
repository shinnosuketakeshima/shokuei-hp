import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase.js'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Filter } from 'lucide-react'
import { DUMMY_NEWS, newsDateMillis, formatNewsDate } from './News'

const CATEGORIES = [
  { id: 'all', label: '全て' },
  { id: 'column', label: 'コラム' },
  { id: 'event', label: 'イベント' },
  { id: 'info', label: 'お知らせ' },
]

export default function NewsArchive() {
  const [firestoreNews, setFirestoreNews] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollectionRef = collection(db, 'news')
        let querySnapshot
        try {
          const q = query(newsCollectionRef, orderBy('date', 'desc'))
          querySnapshot = await getDocs(q)
        } catch {
          querySnapshot = await getDocs(newsCollectionRef)
        }
        const newsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        newsData.sort((a, b) => newsDateMillis(b.date) - newsDateMillis(a.date))
        setFirestoreNews(newsData)
      } catch {
        setFirestoreNews([])
      }
    }
    fetchNews()
  }, [])

  const allNews = [
    ...firestoreNews.map(n => ({
      ...n,
      date: formatNewsDate(n.date),
      type: n.type || 'info',
    })),
    ...DUMMY_NEWS,
  ].sort((a, b) => newsDateMillis(b.date) - newsDateMillis(a.date))

  const filteredNews = activeFilter === 'all' 
    ? allNews 
    : allNews.filter(n => n.type === activeFilter)

  return (
    <div className="news-archive-page">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="lab-page__back-link">
            <ArrowLeft size={16} />
            <span>トップページに戻る</span>
          </Link>
        </motion.div>

        <motion.div 
          className="archive-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="archive-title">新着情報・コラム一覧</h1>
          <p className="archive-subtitle">食物栄養学科の最新ニュース、学生・教員のコラムをお届けします。</p>
        </motion.div>

        <div className="archive-filter">
          <div className="archive-filter__label">
            <Filter size={16} />
            <span>絞り込み:</span>
          </div>
          <div className="archive-filter__tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`archive-filter__tab ${activeFilter === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="archive-list-container"
          layout
        >
          <AnimatePresence mode="popLayout">
            <motion.ul className="archive-list">
              {filteredNews.map((n) => (
                <motion.li 
                  key={n.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={n.href || '/'} className="archive-item">
                    <div className="archive-item__meta">
                      <span className="archive-item__date">{n.date}</span>
                      <span className={`news-tag news-tag--${n.type}`}>{n.tag}</span>
                    </div>
                    <h2 className="archive-item__title">{n.title}</h2>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          
          {filteredNews.length === 0 && (
            <div className="archive-empty">
              該当する記事がありません。
            </div>
          )}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-archive-page {
          padding: 8rem 0 4rem;
          min-height: 80vh;
        }
        .archive-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .archive-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .archive-subtitle {
          color: #64748b;
          font-size: 1.1rem;
        }
        .archive-filter {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: auto;
        }
        .archive-filter__label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-weight: 600;
          white-space: nowrap;
        }
        .archive-filter__tabs {
          display: flex;
          gap: 0.75rem;
        }
        .archive-filter__tab {
          padding: 0.5rem 1.25rem;
          border-radius: 2rem;
          background: #f1f5f9;
          color: #64748b;
          font-weight: 600;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .archive-filter__tab:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        .archive-filter__tab.is-active {
          background: var(--primary-color, #2563eb);
          color: white;
        }
        .archive-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .archive-item {
          display: block;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s;
          text-decoration: none;
        }
        .archive-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: var(--primary-color, #2563eb);
        }
        .archive-item__meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .archive-item__date {
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          color: #64748b;
        }
        .archive-item__title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.4;
        }
        .archive-empty {
          text-align: center;
          padding: 4rem;
          color: #64748b;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .archive-title {
            font-size: 2rem;
          }
          .archive-filter {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}} />
    </div>
  )
}
