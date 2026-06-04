import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, ogType = 'website', customJsonLd, datePublished }) {
  const location = useLocation();
  const url = `https://shokuei-hp.web.app${location.pathname}`;
  const siteName = '十文字学園女子大学 食物栄養学科';

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

  if (datePublished) {
    jsonLd.datePublished = datePublished;
    jsonLd.dateModified = '2026-06-04';
  }

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
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content="https://shokuei-hp.web.app/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://shokuei-hp.web.app/og-image.jpg" />

      {/* GEO Targeting（全ページ共通） */}
      <meta name="geo.position" content="35.8193;139.6291" />
      <meta name="ICBM" content="35.8193, 139.6291" />
      <meta name="geo.placename" content="新座市, 埼玉県, 日本" />
      <meta name="geo.region" content="JP-11" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
