import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, ogType = 'website', customJsonLd }) {
  const location = useLocation();
  const url = `https://shokuei-hp.web.app${location.pathname}`;
  const siteName = '十文字学園女子大学 食物栄養学科';

  // 基本のJSON-LD（全ページ共通ベース）
  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'CollegeOrUniversity',
      name: siteName,
      url: 'https://shokuei-hp.web.app/',
    },
  };

  // カスタムJSON-LDが渡された場合は上書き・拡張
  if (customJsonLd) {
    jsonLd = { ...jsonLd, ...customJsonLd };
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Language/Locale */}
      <link rel="alternate" hrefLang="ja" href={url} />
      <link rel="alternate" hrefLang="ja-JP" href={url} />

      {/* Open Graph / Social */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* GEO Targeting */}
      <meta name="geo.position" content="35.8193;139.6291" />
      <meta name="ICBM" content="35.8193, 139.6291" />

      {/* GEO (Generative Engine Optimization)対策:
          AIクローラー向けにより明確なコンテキストを示すため、
          JSON-LDによるセマンティックな構造化データを必ず出力 */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
