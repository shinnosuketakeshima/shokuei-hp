import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { STATIC_NEWS, newsDateMillis, formatNewsDate } from '../newsData.js';

export default function News() {
  const [firestoreNews, setFirestoreNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollectionRef = collection(db, 'news');
        let querySnapshot;
        try {
          const q = query(newsCollectionRef, orderBy('date', 'desc'));
          querySnapshot = await getDocs(q);
        } catch {
          querySnapshot = await getDocs(newsCollectionRef);
        }
        const newsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        newsData.sort((a, b) => newsDateMillis(b.date) - newsDateMillis(a.date));
        setFirestoreNews(newsData);
      } catch {
        setFirestoreNews([]);
      }
    };
    fetchNews();
  }, []);

  const allNews = [
    ...firestoreNews.map(n => ({
      ...n,
      date: formatNewsDate(n.date),
      type: n.type || 'info',
    })),
    ...STATIC_NEWS,
  ].sort((a, b) => newsDateMillis(b.date) - newsDateMillis(a.date));

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__layout">
          <motion.div 
            className="news__header"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">お知らせ / ブログ</p>
            <h2 className="section-title">新着情報</h2>
            <Link to="/news" className="news__more">
              一覧へ <ArrowRight size={13} />
            </Link>
          </motion.div>

          <motion.ul 
            className="news-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="新着情報一覧"
          >
            {allNews.map((n, i) => (
              <motion.li 
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <article>
                  <Link to={n.href || '/'} className="news-item" aria-label={`${n.date} ${n.tag}: ${n.title} の詳細を読む`}>
                    <span className="news-item__date">{n.date}</span>
                    <span className={`news-tag news-tag--${n.type}`}>{n.tag}</span>
                    <span className="news-item__title">{n.title}</span>
                  </Link>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

