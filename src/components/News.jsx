import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.js';
import { motion } from 'framer-motion';

const DUMMY_NEWS = [
  {
    id: 'col2',
    date: '2026.5.12',
    tag: '学生コラム',
    type: 'column',
    title: '健康×SNS映え！？竹嶋ゼミ・芝崎ゼミの「機能性和洋菓子」開発会議に潜入取材！',
    href: '#student-column-2',
  },
  {
    id: 'col1',
    date: '2026.5.11',
    tag: '学生コラム',
    type: 'column',
    title: '白衣の「三権分立」？管理栄養士の卵たちのリアルな裏事情',
    href: '#student-column-1',
  },
  {
    id: 'dummy-1',
    date: '2026.4.20',
    tag: '実習レポート',
    type: 'report',
    title: '病院実習に行ってきました ─ 初めてみた栄養指導の現場',
    href: '#',
  },
  {
    id: 'dummy-2',
    date: '2026.3.18',
    tag: '学生の声',
    type: 'voice',
    title: '栄養計算、3回やり直してやっと合格した話',
    href: '#',
  },
  {
    id: 'dummy-4',
    date: '2025.12.14',
    tag: '実習レポート',
    type: 'report',
    title: '給食経営管理実習の1日 ─ 朝7時から18時まで',
    href: '#',
  },
  {
    id: 'dummy-5',
    date: '2025.11.01',
    tag: '先生のはなし',
    type: 'sensei',
    title: '災害栄養って実際なにするの？國井先生に聞いてみた',
    href: '#',
  },
]

function newsDateMillis(value) {
  if (value == null) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'string') {
    const t = Date.parse(value.replace(/\./g, '-'));
    return Number.isNaN(t) ? 0 : t;
  }
  return 0;
}

function formatNewsDate(value) {
  if (value == null) return '';
  if (typeof value.toDate === 'function') {
    const d = value.toDate();
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  }
  if (value instanceof Date) {
    return `${value.getFullYear()}.${String(value.getMonth()+1).padStart(2,'0')}.${String(value.getDate()).padStart(2,'0')}`;
  }
  if (typeof value === 'string') return value;
  return '';
}

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
    ...DUMMY_NEWS,
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
            <a href="#" className="news__more">
              一覧へ <ArrowRight size={13} />
            </a>
          </motion.div>

          <motion.ul 
            className="news-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {allNews.map((n, i) => (
              <motion.li 
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <a href={n.href || '#'} className="news-item">
                  <span className="news-item__date">{n.date}</span>
                  <span className={`news-tag news-tag--${n.type}`}>{n.tag}</span>
                  <span className="news-item__title">{n.title}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

