import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function buildBreadcrumbs(pathname, title, url) {
  if (pathname === '/') return null;

  const base = { name: 'ホーム', url: 'https://shokuei-hp.web.app/' };
  const pageLabel = title.split('|')[0].trim();

  if (pathname.startsWith('/lab-') && !pathname.includes('report')) {
    return [
      base,
      { name: '研究室一覧', url: 'https://shokuei-hp.web.app/#labs' },
      { name: pageLabel, url },
    ];
  }
  if (
    pathname.includes('column') ||
    pathname.includes('report') ||
    pathname.includes('project') ||
    pathname.includes('event')
  ) {
    return [
      base,
      { name: 'お知らせ・コラム', url: 'https://shokuei-hp.web.app/news' },
      { name: pageLabel, url },
    ];
  }
  return [base, { name: pageLabel, url }];
}

export default function SEO({ title, description, ogType = 'website', customJsonLd, keywords }) {
  const location = useLocation();
  const url = `https://shokuei-hp.web.app${location.pathname}`;
  const siteName = '十文字学園女子大学 食物栄養学科';

  let jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'CollegeOrUniversity',
      name: siteName,
      url: 'https://shokuei-hp.web.app/',
    },
  };

  if (customJsonLd) {
    jsonLd = { ...jsonLd, ...customJsonLd };
  }

  const breadcrumbs = buildBreadcrumbs(location.pathname, title, url);
  const breadcrumbJsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
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
      {breadcrumbJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
