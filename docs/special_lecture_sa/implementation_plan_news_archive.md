# 実装計画：新着情報一覧（アーカイブ）ページ

## 1. デザイン案
- **ヒーローセクション**: 「ニュース・コラム一覧」というタイトル。
- **フィルタータブ**: 「全て」「教員コラム」「学生コラム」「イベント」「お知らせ」のタブを設置。
- **リスト表示**:
    - 各項目は、日付、タグ、タイトルで構成。
    - カード形式または清潔感のあるリスト形式。
    - マウスホバー時のエフェクト。

## 2. 技術仕様
- **データ取得**: `src/components/News.jsx` のロジックを共通化するか、同様のロジックを実装。
- **ステート管理**: 選択中のフィルターカテゴリーを `useState` で管理。
- **アニメーション**: `framer-motion` を使用して、カテゴリー切り替え時にふわっと表示されるようにする。

## 3. ファイル変更
- `src/components/NewsArchive.jsx` (新規作成)
- `src/App.jsx` (ルーティング追加)
- `src/components/News.jsx` (リンク先修正)

## 4. 構成案（NewsArchive.jsx）
```jsx
// 擬似コード
export default function NewsArchive() {
  const [filter, setFilter] = useState('all');
  const allNews = [...firestoreNews, ...DUMMY_NEWS];
  const filteredNews = filter === 'all' ? allNews : allNews.filter(n => n.type === filter);
  
  return (
    <div className="archive-page">
      <FilterTabs active={filter} onChange={setFilter} />
      <div className="news-list">
        {filteredNews.map(news => <NewsItem key={news.id} {...news} />)}
      </div>
    </div>
  );
}
```
