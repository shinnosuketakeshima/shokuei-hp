import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.js';

const DUMMY_NEWS = [
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
    id: 'dummy-3',
    date: '2026.2.05',
    tag: 'コラム',
    type: 'column',
    title: '白衣の洗濯どうしてる？実習着管理の実態調査',
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
    const t = Date.parse(value);
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
  ];

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__layout">
          <div className="news__header" data-reveal>
            <p className="eyebrow">お知らせ / ブログ</p>
            <h2 className="section-title">新着情報</h2>
            <a href="#" className="news__more">
              一覧へ <ArrowRight size={13} />
            </a>
          </div>

          <ul className="news-list">
            {allNews.map((n) => (
              <li key={n.id}>
                <a href={n.href || '#'} className="news-item">
                  <span className="news-item__date">{n.date}</span>
                  <span className={`news-tag news-tag--${n.type}`}>{n.tag}</span>
                  <span className="news-item__title">{n.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
