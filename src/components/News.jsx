import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react'; // useStateとuseEffectをインポート
import { collection, getDocs, query, orderBy } from 'firebase/firestore'; // Firestoreの関数をインポート
import { db } from '../main.jsx'; // dbインスタンスをインポート

export default function News() {
  const [news, setNews] = useState([]); // ニュースデータを管理するstate

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollectionRef = collection(db, 'news'); // 'news'コレクションへの参照
      const q = query(newsCollectionRef, orderBy('date', 'desc')); // 日付で降順ソート
      const querySnapshot = await getDocs(q); // ドキュメントを取得

      const newsData = querySnapshot.docs.map(doc => ({
        id: doc.id, // ドキュメントIDも保持
        ...doc.data()
      }));
      setNews(newsData); // 取得したデータをstateにセット
    };

    fetchNews();
  }, []); // コンポーネントマウント時に一度だけ実行

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

          <ul className="news-list" data-reveal data-reveal-delay="2">
            {news.map((n) => ( // ハードコードされたNEWSからFirestoreのnewsに変更
              <li key={n.id}> {/* keyをdoc.idに変更 */}
                <a href={n.href || '#'} className="news-item">
                  <span className="news-item__date">{n.date instanceof Date ? n.date.toDate().toLocaleDateString('ja-JP') : n.date}</span> {/* 日付のフォーマットを考慮 */}
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
