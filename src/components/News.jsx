import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase.js';

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
    return value.toDate().toLocaleDateString('ja-JP');
  }
  if (value instanceof Date) {
    return value.toLocaleDateString('ja-JP');
  }
  if (typeof value === 'string') return value;
  return '';
}

export default function News() {
  const [news, setNews] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setFetchError(null);
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
        setNews(newsData);
      } catch (err) {
        setNews([]);
        setFetchError(err?.code || 'fetch-failed');
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news__layout">
          <div className="news__header" data-reveal>
            <p className="eyebrow">お知らせ / News</p>
            <h2 className="section-title">新着情報</h2>
            <a href="#" className="news__more">
              一覧へ <ArrowRight size={13} />
            </a>
          </div>

          <ul className="news-list">
            {fetchError && (
              <li className="news-list__error" role="alert">
                {fetchError === 'permission-denied'
                  ? 'お知らせを読み込めませんでした（アクセス権限の設定を確認してください）。'
                  : 'お知らせを読み込めませんでした。時間をおいて再度お試しください。'}
              </li>
            )}
            {news.map((n) => (
              <li key={n.id}>
                <a href={n.href || '#'} className="news-item">
                  <span className="news-item__date">{formatNewsDate(n.date)}</span>
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
