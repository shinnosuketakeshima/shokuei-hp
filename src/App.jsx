import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryBanners from './components/CategoryBanners'
import StatsBar from './components/StatsBar'
import Features from './components/Features'
import Labs from './components/Labs'
import Qualifications from './components/Qualifications'
import NationalExamSupport from './components/NationalExamSupport'
import News from './components/News'
import SNSSection from './components/SNSSection'
import Career from './components/Career'
import CareerPage from './components/CareerPage'
import StudentVoices from './components/StudentVoices'
import CampusLife from './components/CampusLife'
import Footer from './components/Footer'
import LabTakeshima from './components/LabTakeshima'
import LabKamoshita from './components/LabKamoshita'
import LabKunii from './components/LabKunii'
import LabIimura from './components/LabIimura'
import LabKamiyama from './components/LabKamiyama'
import LabIshii from './components/LabIshii'
import LabKomeichi from './components/LabKomeichi'
import LabNakaoka from './components/LabNakaoka'
import KoudaiProject from './components/KoudaiProject'
import KokushiReport from './components/KokushiReport'
import StudentColumn1 from './components/StudentColumn1'
import LabShibasaki from './components/LabShibasaki'
import LabYamazaki from './components/LabYamazaki'
import LabNiikura from './components/LabNiikura'
import LabOkamoto from './components/LabOkamoto'
import EventSpecial0525 from './components/EventSpecial0525'
import StudentColumn3 from './components/StudentColumn3'
import LabKamiyamaReport from './components/LabKamiyamaReport'
import EiyoAppReport from './components/EiyoAppReport'
import NewsArchive from './components/NewsArchive'
import FAQ from './components/FAQ'
import './App.css'

const PAGE_META = {
  '/': {
    title: '食物栄養学科 | 十文字学園女子大学 - 管理栄養士・栄養士を育成',
    description: '埼玉県新座市にある十文字学園女子大学 食物栄養学科（人間生活学部）の非公式情報メディア。4年間を通じた実践的なカリキュラム、国家試験合格率を支えるサポート体制、最新の研究室情報など、食と栄養のプロフェッショナルを目指す高校生に向けたリアルな学びの魅力を発信します。',
    ogType: 'website',
  },
  '/lab-takeshima': {
    title: '竹嶋伸之輔研究室（獣医ウイルス学・動物遺伝学） | 十文字学園女子大学 食物栄養学科',
    description: '食物栄養学科でウイルス研究！？竹嶋研究室では、牛の伝染性リンパ腫ウイルス（BLV）と遺伝子の関係をゲノムレベルで解析。ワクチン開発や国際共同研究を通じ、One Health（ワンヘルス）の視点から「家畜の健康」と「人の食の安全」をつなぐ最先端の学びを提供します。',
    ogType: 'article',
  },
  '/lab-kamoshita': {
    title: '鴨下澄子研究室（食品加工・機能性） | 十文字学園女子大学 食物栄養学科',
    description: '加工大豆食品やテンペの研究を通じて、食物繊維摂取の向上と健康維持を探求する鴨下研究室。大豆の新しい可能性を引き出し、毎日の食卓から健康寿命を延ばすアプローチを学びます。',
    ogType: 'article',
  },
  '/lab-kunii': {
    title: '國井大輔研究室（公衆栄養学・実践食事学） | 十文字学園女子大学 食物栄養学科',
    description: '公衆栄養学・実践食事学を軸に、地域・企業・海外と連携する國井研究室。フィールドワークを通じて、人々が健康に暮らせるための社会的な食環境づくりや栄養施策を実践的に学びます。',
    ogType: 'article',
  },
  '/lab-iimura': {
    title: '飯村九林研究室（水圏生命科学・バイオミネラリゼーション） | 十文字学園女子大学 食物栄養学科',
    description: '魚は食料ではなく研究モデル！？飯村研究室では、ゼブラフィッシュや金魚などの小型魚類を用いて、ヒアルロン酸による骨・皮膚の再生や、紫外線による光老化メカニズムを分子レベルで解明し、アンチエイジングの未来を探究します。',
    ogType: 'article',
  },
  '/lab-kamiyama': {
    title: '神山真澄研究室（栄養生化学・機能性食品） | 十文字学園女子大学 食物栄養学科',
    description: '「おいしい」を数値化！神山研究室では、黒たまねぎや味噌など身近な食品に含まれるポリフェノール等の機能性成分を解析。企業とコラボした「くろたまフィン」開発など、美味しさと生活習慣病予防を両立する食品科学を実践的に学びます。',
    ogType: 'article',
  },
  '/lab-ishii': {
    title: '石井和美研究室（調理科学・食品物性） | 十文字学園女子大学 食物栄養学科',
    description: '雑穀粉パンや膨化食品の物性解析を通じて、「おいしい」と「体にやさしい」を両立する食をデザインする石井研究室。調理の科学的メカニズムを解き明かします。',
    ogType: 'article',
  },
  '/lab-komeichi': {
    title: '古明地夕佳研究室（公衆栄養・地域連携） | 十文字学園女子大学 食物栄養学科',
    description: 'エビデンスに基づく公衆栄養実践で、地域に根ざした食と健康づくりを実践する古明地研究室。人々の生活習慣の改善と健康寿命の延伸をサポートするプロフェッショナルを目指します。',
    ogType: 'article',
  },
  '/lab-nakaoka': {
    title: '中岡加奈絵研究室（応用栄養学・食育） | 十文字学園女子大学 食物栄養学科',
    description: '子どもの食生活・食育や応用栄養学を専門とする中岡研究室。成長期の栄養課題からライフステージごとの適切な栄養管理まで、実践的な食育のアプローチを学びます。',
    ogType: 'article',
  },
  '/lab-shibasaki': {
    title: '芝崎本実研究室・おだんごゼミ（和菓子・調理科学） | 十文字学園女子大学 食物栄養学科',
    description: '「好き」を科学に変える！和菓子職人の経験を持つ「おだんご先生」率いる芝崎研究室。胃消化シミュレーターを用いた和菓子の消化性解析から、高校生とコラボした「青春三色パン」開発まで、伝統と科学を掛け合わせた最先端の調理科学を探究します。',
    ogType: 'article',
  },
  '/lab-yamazaki': {
    title: '山崎優子研究室（食品安全学・栄養生化学） | 十文字学園女子大学 食物栄養学科',
    description: 'サプリメントと健康食品の「本当の安全」を科学で守る山崎研究室。薬物相互作用（CYP解析）から独自の安全評価法SDI-SEまで、食品安全学・栄養生化学のスペシャリストを育成します。',
    ogType: 'article',
  },
  '/lab-niikura': {
    title: '新倉量太研究室（消化器内科学・腸内細菌・医療AI） | 十文字学園女子大学 食物栄養学科',
    description: '医療×AI×腸内細菌。東大病院の消化器内科医・新倉量太教授が率いる研究室。大規模データ解析・AIを活用した胃腸ガン予防・腸内細菌研究で、「食で病気を防ぐ」科学の最前線へ。',
    ogType: 'article',
  },
  '/lab-okamoto': {
    title: '岡本節子研究室（高齢者栄養・臨床栄養） | 十文字学園女子大学 食物栄養学科',
    description: '高齢者のサルコペニア予防から介護施設の栄養ケアまで、超高齢社会の食と健康に真正面から向き合う岡本研究室。臨床の現場で求められる実践的な栄養マネジメントを学びます。',
    ogType: 'article',
  },
  '/koudai-project': {
    title: '高大連携プロジェクト「食の未来を創る」 | 食物栄養学科 | 十文字学園女子大学',
    description: '十文字学園女子大学 食物栄養学科と駒場学園高等学校による高大連携プロジェクトの詳細レポート。高校生と大学生がタッグを組み、商品開発や地域食堂を通じて若者の食課題解決に取り組む実践的教育の様子を紹介します。',
    ogType: 'article',
  },
  '/kokushi-report': {
    title: '第40回 管理栄養士国家試験 結果レポート | 食物栄養学科 | 十文字学園女子大学',
    description: '十文字学園女子大学 食物栄養学科の第40回管理栄養士国家試験の結果報告。合格率の実績、過去の傾向との比較要因分析、そして全員合格に向けた今後の本学科の国家試験対策サポート体制を公開しています。',
    ogType: 'article',
  },
  '/student-column-1': {
    title: '学生コラム：管理栄養士の卵たちのリアルな裏事情・白衣の「三権分立」とは？ | 食物栄養学科',
    description: '【食物栄養学科のリアル】実習着、白衣、エプロン…用途に合わせて使い分ける「白衣の三権分立」って？管理栄養士を目指す十文字学園女子大学の学生たちが、キャンパスライフのリアルな裏事情をお届けするコラムです。',
    ogType: 'article',
  },
  '/event-0531': {
    title: '【参加無料】管理栄養士探求型イベント開催（5/31） | 十文字学園女子大学 食物栄養学科',
    description: '食と栄養で未来をデザイン！5月31日に開催される十文字学園女子大学 食物栄養学科の特別探求型イベント。高校生・保護者向けに、管理栄養士のリアルな仕事や大学での学びを体験できるスペシャル企画の詳細と参加申し込みのご案内です。',
    ogType: 'article',
  },
  '/student-column-3': {
    title: 'チーズに"王様"と"女王様"がいた！？食育論セミナー体験レポート | 十文字学園女子大学',
    description: '十文字学園女子大学 食物栄養学科の「食育論」特別講義レポート。雪印メグミルク様をお招きし、骨の衝撃映像やチーズの王様・女王様エピソード、高タンパク・低糖質な栄養価の秘密から試食体験まで、学生記者が熱く語ります。',
    ogType: 'article',
  },
  '/lab-kamiyama-report': {
    title: '総合科目「いちから学ぶnutrition science」SA活動レポート | 食物栄養学科',
    description: '十文字学園女子大学の総合科目「いちから学ぶnutrition science」にて、神山ゼミの学生たちがSA（スチューデント・アシスタント）として活躍する様子をレポート。アクティブラーニング形式の授業で育つ「教える力」と「学ぶ力」に迫ります。',
    ogType: 'article',
  },
  '/eiyo-app-report': {
    title: '解剖生理学実験×生成AI！学生が作る栄養アドバイスアプリ開発レポート | 食物栄養学科',
    description: '食物栄養学科の実験がDX化！2年生の解剖生理学実験で、InBodyやMedGemの測定データを活用し、GeminiやChatGPTなどの生成AIを使って学生自身がオリジナルの栄養アドバイスアプリをプログラミング・開発した革新的な授業レポートです。',
    ogType: 'article',
  },
  '/news': {
    title: '新着情報・コラム一覧 | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学 食物栄養学科の最新ニュース、学生・教員コラム、イベント情報の一覧ページです。管理栄養士を目指す学生のキャンパスライフや、最先端の研究室の取り組みなど、食と栄養の最前線をお届けします。',
    ogType: 'website',
  },
  '/features': {
    title: '学科の特色・カリキュラム | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学 食物栄養学科の3つの特色をご紹介。理論と実践を結びつける豊富な実習カリキュラム、国家試験への強力なサポート体制、地域と連携した実践的な食育活動を通じて、即戦力となる管理栄養士を育成します。',
    ogType: 'article',
  },
  '/qualifications': {
    title: '取得できる資格（管理栄養士・栄養教諭など） | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学 食物栄養学科で取得可能な資格一覧。管理栄養士国家試験受験資格をはじめ、栄養士、栄養教諭一種免許状、食品衛生管理者など、食と健康のプロフェッショナルとして社会で活躍するための資格取得を徹底サポートします。',
    ogType: 'article',
  },
  '/support': {
    title: '管理栄養士 国家試験対策サポート | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学 食物栄養学科が誇る、管理栄養士国家試験への手厚いサポート体制。全国平均を上回る高い合格実績を支える、1年次からのステップアップ指導や特別講座、個別面談などの具体的な対策プログラムをご紹介します。',
    ogType: 'article',
  },
  '/career': {
    title: '進路・就職先実績 | 十文字学園女子大学 食物栄養学科',
    description: '食物栄養学科の卒業後の進路と就職実績。病院・福祉施設での臨床栄養から、食品メーカーでの商品開発、学校での栄養教諭まで、管理栄養士の資格を活かして多様なフィールドで活躍する卒業生たちのキャリアと、大学の就職支援体制をご紹介。',
    ogType: 'article',
  },
  '/campus-life': {
    title: 'キャンパスライフ・施設紹介 | 十文字学園女子大学 食物栄養学科',
    description: '十文字学園女子大学 食物栄養学科の学生たちの日常をのぞいてみよう。最新の調理実習室や科学実験室などの充実した施設設備、学園祭やサークル活動など、学びも遊びも全力で楽しむ充実のキャンパスライフをお届けします。',
    ogType: 'article',
  },
  '/voices': {
    title: '在学生・卒業生の声 | 十文字学園女子大学 食物栄養学科',
    description: '食物栄養学科で学ぶ在学生や、社会で管理栄養士として活躍する卒業生たちのリアルなインタビュー体験談。十文字を選んだ理由、学生生活の思い出、そして将来の夢など、受験生の参考になる生の声を集めました。',
    ogType: 'article',
  },
  '/faq': {
    title: 'よくある質問 | 十文字学園女子大学 食物栄養学科',
    description: '食物栄養学科への入学・資格・就職・国家試験対策についてよくある質問をまとめました。管理栄養士の資格取得方法、第一種衛生管理者のダブルライセンス、就職率99.2%を支えるサポート体制など、受験生の疑問にお答えします。',
    ogType: 'website',
  },
}

const SUB_PATHS = [
  '/lab-takeshima', '/lab-kamoshita', '/lab-kunii', '/lab-iimura', '/lab-kamiyama',
  '/lab-ishii', '/lab-komeichi', '/lab-nakaoka', '/lab-shibasaki', '/lab-yamazaki',
  '/lab-niikura', '/lab-okamoto', '/koudai-project', '/kokushi-report', '/student-column-1',
  '/event-0531', '/student-column-3', '/lab-kamiyama-report', '/eiyo-app-report',
  '/news', '/features', '/qualifications', '/support', '/career', '/campus-life', '/voices', '/faq',
]

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    if (SUB_PATHS.includes(location.pathname)) return

    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [location.pathname])

  const meta = PAGE_META[location.pathname] || PAGE_META['/']

  // ページごとに固有のカスタムJSON-LDを生成（GEO対応）
  let customJsonLd = {}
  if (location.pathname === '/') {
    customJsonLd = {
      '@type': 'CollegeOrUniversity',
      '@id': 'https://shokuei-hp.web.app/#organization',
      name: '十文字学園女子大学 食物栄養学科',
      alternateName: '食物栄養学科',
      description: '埼玉県新座市にある十文字学園女子大学 食物栄養学科。管理栄養士・栄養士を育成する4年間の実践的カリキュラムと国家試験対策サポート体制が特徴。',
      url: 'https://shokuei-hp.web.app/',
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: '十文字学園女子大学',
        url: 'https://www.jumonji-u.ac.jp/'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '埼玉県新座市菅沢2-1-28',
        addressLocality: '新座市',
        addressRegion: '埼玉県',
        postalCode: '352-8510',
        addressCountry: 'JP'
      },
      telephone: '+81-48-481-1111',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '35.8193',
        longitude: '139.6291'
      },
      foundingDate: '2000',
      areaServed: [
        { '@type': 'State', name: '埼玉県' },
        { '@type': 'State', name: '東京都' },
        { '@type': 'State', name: '神奈川県' },
        { '@type': 'State', name: '千葉県' },
        { '@type': 'State', name: '群馬県' },
        { '@type': 'State', name: '栃木県' },
      ],
      sameAs: [
        'https://www.jumonji-u.ac.jp/',
        'https://www.instagram.com/jumonji_shokuei/',
        'https://www.tiktok.com/@ishokssov49',
      ],
      mainEntity: [
        {
          '@type': 'Question',
          name: '十文字学園女子大学 食物栄養学科はどんな学科ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '埼玉県新座市にある十文字学園女子大学 食物栄養学科（人間生活学部）は、管理栄養士・栄養士を育成する4年制の学科です。定員78名の少人数教育、全国唯一の管理栄養士＋第一種衛生管理者ダブルライセンス取得、国家試験全員合格を目指す6段階サポートが特徴です。',
          },
        },
        {
          '@type': 'Question',
          name: '管理栄養士になるにはどんな大学に行けばいいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士になるには、厚生労働省が認定した管理栄養士養成施設（4年制大学など）を卒業し、管理栄養士国家試験に合格する必要があります。十文字学園女子大学 食物栄養学科は管理栄養士養成課程として、1年次からの国試対策サポート体制を整えています。',
          },
        },
        {
          '@type': 'Question',
          name: 'キャンパスはどこにありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '埼玉県新座市菅沢2-1-28にあります。西武池袋線「ひばりヶ丘駅」からバスでアクセスできます。緑豊かなキャンパスに調理実習室・科学実験室などの充実した施設が整っています。',
          },
        },
        {
          '@type': 'Question',
          name: '十文字学園女子大学 食物栄養学科の就職率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '就職率99.2%（2025年3月卒業生実績）を達成しています。保育園・病院・食品メーカー・一般企業など多様な分野で卒業生が活躍しており、関東圏を中心に全国で就職しています。',
          },
        },
        {
          '@type': 'Question',
          name: '研究室（ゼミ）はどのような種類がありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '獣医ウイルス学・食品加工・公衆栄養学・水圏生命科学・栄養生化学・調理科学・応用栄養学・動物実験・臨床栄養・食品安全学・腸内細菌・医療AIなど、12の多彩な研究室があります。3年次にゼミに配属され、4年次の卒業研究へとつながります。',
          },
        },
      ],
    }
  } else if (location.pathname.startsWith('/lab-') && !location.pathname.includes('report')) {
    const jobTitleMap = {
      '/lab-nakaoka': '准教授',
      '/lab-komeichi': '教授',
      '/lab-yamazaki': '准教授',
      '/lab-niikura': '教授',
    }
    const jobTitle = jobTitleMap[location.pathname] || '教授'
    customJsonLd = {
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: meta.title.split('（')[0].replace('研究室', '').trim(),
        jobTitle,
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: '十文字学園女子大学 食物栄養学科',
          address: {
            '@type': 'PostalAddress',
            addressLocality: '新座市',
            addressRegion: '埼玉県',
            addressCountry: 'JP',
          }
        }
      }
    }
  } else if (location.pathname === '/support') {
    customJsonLd = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '管理栄養士国家試験の合格率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験対策はいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。',
          },
        },
        {
          '@type': 'Question',
          name: '4年次の模擬試験は何回ありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'e-Learningはどのように活用できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'e-Learningシステムにより、自分のペースで反復学習が可能です。苦手分野の集中対策や隙間時間の有効活用に役立ちます。授業外での自学自習をシステムが支援します。',
          },
        },
        {
          '@type': 'Question',
          name: '外部講師による特別講義はありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。各教員による対策講座に加え、外部の専門講師による特別講義も実施しています。多様な視点で試験範囲を深く理解することができます。',
          },
        },
        {
          '@type': 'Question',
          name: '国家試験に向けて個別サポートはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。',
          },
        },
      ],
    }
  } else if (location.pathname === '/qualifications') {
    customJsonLd = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '食物栄養学科で管理栄養士の資格は取れますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '卒業と同時に管理栄養士国家試験の受験資格が得られます。国家試験に合格することで管理栄養士の資格を取得できます。医療・行政・企業など幅広い分野で活躍できる国家資格です。',
          },
        },
        {
          '@type': 'Question',
          name: '第一種衛生管理者とはどんな資格で、なぜ全国唯一なのですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '第一種衛生管理者は従業員50名以上の事業場への配置が法律で義務付けられた国家資格です。管理栄養士養成課程でこの資格を卒業と同時に取得できるのは全国の大学で本学のみです。管理栄養士との「ダブルライセンス」が企業への就職に大きく有利に働きます。',
          },
        },
        {
          '@type': 'Question',
          name: '卒業と同時に取得できる資格は何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '栄養士免許と第一種衛生管理者は卒業と同時に取得できます。管理栄養士は卒業後に国家試験合格が必要です。栄養教諭一種免許状は所定の教職課程修了で取得できます。',
          },
        },
        {
          '@type': 'Question',
          name: '栄養教諭になることはできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '所定の教職課程を修了することで栄養教諭一種免許状を取得できます。学校に配属され、児童生徒の食習慣改善や食育を担う教育職です。',
          },
        },
        {
          '@type': 'Question',
          name: 'NR・サプリメントアドバイザーとはどんな資格ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '日本臨床栄養協会が認定する資格で、サプリメント・健康食品の有効性・安全性についてアドバイスする専門家です。食品メーカーや薬局・ドラッグストアなどでの活躍が期待できます。',
          },
        },
        {
          '@type': 'Question',
          name: '取得した資格はどのような職場で活かせますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士は病院・クリニック、保育園・学校、福祉施設、食品メーカー、行政機関など多岐にわたる職場で活躍できます。第一種衛生管理者は一般企業（産業保健）分野での就職にも強みになります。2025年3月卒業生の就職率は99.2%です。',
          },
        },
      ],
    }
  } else if (location.pathname === '/features') {
    customJsonLd = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '食物栄養学科の定員は何名ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '定員は78名の少人数教育です。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。先生に名前で呼ばれる関係が生まれるほどの距離感が特徴です。',
          },
        },
        {
          '@type': 'Question',
          name: 'ダブルライセンスとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '管理栄養士養成課程の中で「第一種衛生管理者」の国家資格を卒業と同時に取得できる、全国唯一の組み合わせです。50名以上の事業場で配置が義務付けられており、企業の産業保健分野への就職に大きく有利です。',
          },
        },
        {
          '@type': 'Question',
          name: '就職率はどのくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '就職率99.2%（2025年3月卒業生実績）を達成しています。少人数教育と1年次からのキャリア支援、そして管理栄養士＋衛生管理者のダブルライセンスが高い就職実績を支えています。',
          },
        },
        {
          '@type': 'Question',
          name: '4年間のカリキュラムの特徴は何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次の基礎固めから4年次の国試対策まで段階的に深める体系的なカリキュラムです。給食経営管理実習（150食の実際の給食運営）、病院・福祉施設での臨地実習、地域連携活動など、現場で役立つ実践力を養います。',
          },
        },
      ],
    }
  } else if (location.pathname === '/career') {
    customJsonLd = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '卒業生の主な就職先はどこですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2025年3月卒業生127名の就職先は、保育園（25名）・調剤薬局・ドラッグストア（21名）・病院・クリニック（18名）・給食受託会社（14名）・食品メーカー（11名）などが主な就職先です。東京都・埼玉県を中心に関東圏全域で活躍しています。',
          },
        },
        {
          '@type': 'Question',
          name: '病院で管理栄養士として働けますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。2025年3月卒業生では18名が病院・クリニックに就職しています。2年次から病院・福祉施設での臨地実習を行い、患者さんへの栄養アセスメントや栄養管理を実践的に学ぶことで、即戦力として活躍できる力を養います。',
          },
        },
        {
          '@type': 'Question',
          name: '食品メーカーに就職することはできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。食品メーカー・関連企業には11名が就職しています（2025年3月卒業生実績）。管理栄養士の知識に加え、第一種衛生管理者のダブルライセンスが企業での就職活動で強みになります。',
          },
        },
        {
          '@type': 'Question',
          name: '就職サポートはいつから始まりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '1年次から就職サポートを開始します。ガイダンスや先輩との交流でキャリアを意識し、2年次には現場実習、3年次には個別進路相談と模擬試験・業界研究会、4年次には教員が一人ひとりの状況に合わせた個別フォローを行います。',
          },
        },
        {
          '@type': 'Question',
          name: '一般企業（食品以外）への就職もできますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。一般企業（金融・物流ほか）に11名、公務員・自衛官に4名が就職しています（2025年3月実績）。第一種衛生管理者の資格は50名以上の事業場への配置が義務付けられているため、幅広い業種の一般企業でも活躍できます。',
          },
        },
      ],
    }
  } else if (location.pathname === '/faq') {
    customJsonLd = {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '食物栄養学科の定員は何名ですか？', acceptedAnswer: { '@type': 'Answer', text: '定員は78名の少人数制です。教員が一人ひとりの学習状況を早期に把握し、入学から卒業・就職まで親身にサポートします。先生に名前で呼ばれるほどの距離感が特徴で、国家試験対策でも個別フォローが可能です。' } },
        { '@type': 'Question', name: '4年間のカリキュラムの特徴は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '1年次の基礎固めから4年次の国試対策まで段階的に深める体系的なカリキュラムです。給食経営管理実習（150食の実際の給食運営）、病院・福祉施設での臨地実習、地域連携活動など、現場で役立つ実践力を養います。' } },
        { '@type': 'Question', name: '給食経営管理実習とはどのような授業ですか？', acceptedAnswer: { '@type': 'Answer', text: '実際の給食施設を使い、学生自身が150食規模の給食を一から企画・調理・提供する授業です。メニュー設計から食材の発注、衛生管理、原価計算まで、給食現場のすべてを体験できる集大成となる実習です。' } },
        { '@type': 'Question', name: '十文字学園女子大学はどこにありますか？', acceptedAnswer: { '@type': 'Answer', text: '埼玉県新座市菅沢2-1-28にあります。JR武蔵野線・新座駅から徒歩10〜15分でアクセスできます。東京都内や埼玉各地から通いやすい立地です。' } },
        { '@type': 'Question', name: '管理栄養士の資格は取得できますか？', acceptedAnswer: { '@type': 'Answer', text: '卒業と同時に管理栄養士国家試験の受験資格が得られます。国家試験に合格することで管理栄養士の資格を取得できます。医療・行政・企業など幅広い分野で活躍できる国家資格です。' } },
        { '@type': 'Question', name: '第一種衛生管理者とはどんな資格で、なぜ全国唯一なのですか？', acceptedAnswer: { '@type': 'Answer', text: '第一種衛生管理者は従業員50名以上の事業場への配置が法律で義務付けられた国家資格です。管理栄養士養成課程でこの資格を卒業と同時に取得できるのは全国の大学で本学のみです。管理栄養士との「ダブルライセンス」が企業への就職に大きく有利に働きます。' } },
        { '@type': 'Question', name: '卒業と同時に取得できる資格は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '栄養士免許と第一種衛生管理者は卒業と同時に取得できます。管理栄養士は卒業後に国家試験合格が必要です。栄養教諭一種免許状は所定の教職課程修了で取得できます。' } },
        { '@type': 'Question', name: '栄養教諭になることはできますか？', acceptedAnswer: { '@type': 'Answer', text: '所定の教職課程を修了することで栄養教諭一種免許状を取得できます。学校に配属され、児童生徒の食習慣改善や食育を担う教育職です。' } },
        { '@type': 'Question', name: '管理栄養士国家試験の合格率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '1年次からの早期意識づけ、4年次の年8回模擬試験、外部講師による特別講義など6段階のサポート体制で国家試験合格をめざします。' } },
        { '@type': 'Question', name: '国家試験対策はいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '「4年生からでは遅い」という方針のもと、入学直後の1年次から学習習慣の形成と基礎固めを開始します。3年次の夏・冬に模擬試験を実施し、4年次は年8回の模擬試験で本番力を高めます。' } },
        { '@type': 'Question', name: '4年次の模擬試験は何回ありますか？', acceptedAnswer: { '@type': 'Answer', text: '4年次には年8回の模擬試験を実施します。本番さながらの環境で繰り返し演習し、得点力と時間管理の精度を高めます。4年7月の模試で「130点突破」を全員の目標として明確に設定しています。' } },
        { '@type': 'Question', name: '国家試験に向けて個別サポートはありますか？', acceptedAnswer: { '@type': 'Answer', text: '少人数教育（定員78名）の強みを活かし、教員が一人ひとりの学習状況を把握して個別にサポートします。4年次には就職活動・国家試験対策・卒業研究の三本柱を、教員が個別フォローしながら進めます。' } },
        { '@type': 'Question', name: '就職率はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '就職率99.2%（2025年3月卒業生実績）を達成しています。少人数教育と1年次からのキャリア支援、そして管理栄養士＋衛生管理者のダブルライセンスが高い就職実績を支えています。' } },
        { '@type': 'Question', name: '卒業生の主な就職先はどこですか？', acceptedAnswer: { '@type': 'Answer', text: '2025年3月卒業生の主な就職先は、保育園（25名）・調剤薬局・ドラッグストア（21名）・病院・クリニック（18名）・給食受託会社（14名）・食品メーカー（11名）などです。東京都・埼玉県を中心に関東圏全域で活躍しています。' } },
        { '@type': 'Question', name: '就職サポートはいつから始まりますか？', acceptedAnswer: { '@type': 'Answer', text: '1年次から就職サポートを開始します。ガイダンスや先輩との交流でキャリアを意識し、2年次には現場実習、3年次には個別進路相談と業界研究会、4年次には教員が一人ひとりの状況に合わせた個別フォローを行います。' } },
        { '@type': 'Question', name: '一般企業（食品以外）への就職もできますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。一般企業（金融・物流ほか）に11名、公務員・自衛官に4名が就職しています（2025年3月実績）。第一種衛生管理者の資格は50名以上の事業場への配置が義務付けられているため、幅広い業種の一般企業でも強みになります。' } },
      ],
    }
  } else if (
    location.pathname.includes('column') ||
    location.pathname.includes('report') ||
    location.pathname.includes('project') ||
    location.pathname.includes('event')
  ) {
    const articleDateMap = {
      '/student-column-1': '2026-05-11',
      '/student-column-3': '2026-05-13',
      '/koudai-project': '2026-05-12',
      '/kokushi-report': '2026-05-01',
      '/lab-kamiyama-report': '2026-05-15',
      '/eiyo-app-report': '2026-05-26',
      '/event-0531': '2026-05-18',
    }
    customJsonLd = {
      '@type': 'Article',
      datePublished: articleDateMap[location.pathname] || '2026-05-01',
      dateModified: '2026-06-04',
      author: {
        '@type': 'Organization',
        name: '十文字学園女子大学 食物栄養学科'
      },
      publisher: {
        '@type': 'CollegeOrUniversity',
        name: '十文字学園女子大学',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '新座市',
          addressRegion: '埼玉県',
          addressCountry: 'JP'
        }
      }
    }
  }

  const keywordsMap = {
    '/': '管理栄養士,栄養士,食物栄養学科,十文字学園女子大学,埼玉県,新座市,食と栄養,大学進学,管理栄養士 大学,栄養士 大学',
    '/support': '管理栄養士 国家試験,国試対策,合格率,管理栄養士 勉強,受験対策,模擬試験,e-Learning',
    '/qualifications': '管理栄養士 資格,栄養士 資格,第一種衛生管理者,栄養教諭,NR サプリメントアドバイザー,ダブルライセンス',
    '/career': '管理栄養士 就職,栄養士 就職先,食品メーカー,病院 管理栄養士,学校 栄養教諭,進路',
    '/features': '食物栄養 カリキュラム,実習,管理栄養士 養成,学科の特色',
    '/campus-life': 'キャンパスライフ,学生生活,調理実習室,十文字 施設',
    '/voices': '在学生の声,卒業生,体験談,管理栄養士 体験',
    '/news': '食物栄養 ニュース,学科 お知らせ,コラム,イベント',
    '/faq': 'よくある質問,管理栄養士 疑問,食物栄養学科 入学,管理栄養士 大学 埼玉,Q&A',
  }
  const keywords = keywordsMap[location.pathname] ||
    (location.pathname.startsWith('/lab-') ? '研究室,ゼミ,卒業研究,食物栄養学科,十文字学園女子大学' : null)

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        ogType={meta.ogType}
        customJsonLd={customJsonLd}
        keywords={keywords}
      />
      <Header />
      <main>
        <Routes>
          <Route path="/lab-takeshima" element={<LabTakeshima />} />
          <Route path="/lab-kamoshita" element={<LabKamoshita />} />
          <Route path="/lab-kunii" element={<LabKunii />} />
          <Route path="/lab-iimura" element={<LabIimura />} />
          <Route path="/lab-kamiyama" element={<LabKamiyama />} />
          <Route path="/lab-ishii" element={<LabIshii />} />
          <Route path="/lab-komeichi" element={<LabKomeichi />} />
          <Route path="/lab-nakaoka" element={<LabNakaoka />} />
          <Route path="/lab-shibasaki" element={<LabShibasaki />} />
          <Route path="/lab-yamazaki" element={<LabYamazaki />} />
          <Route path="/lab-niikura" element={<LabNiikura />} />
          <Route path="/lab-okamoto" element={<LabOkamoto />} />
          <Route path="/koudai-project" element={<KoudaiProject />} />
          <Route path="/kokushi-report" element={<KokushiReport />} />
          <Route path="/student-column-1" element={<StudentColumn1 />} />
          <Route path="/event-0531" element={<EventSpecial0525 />} />
          <Route path="/student-column-3" element={<StudentColumn3 />} />
          <Route path="/lab-kamiyama-report" element={<LabKamiyamaReport />} />
          <Route path="/eiyo-app-report" element={<EiyoAppReport />} />
          <Route path="/news" element={<NewsArchive />} />
          <Route path="/features" element={<Features />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/support" element={<NationalExamSupport />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/voices" element={<StudentVoices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={
            <>
              <Hero />
              <CategoryBanners />
              <News />
              <StatsBar />
              <Features summary={true} />
              <Labs />
              <Qualifications summary={true} />
              <NationalExamSupport summary={true} />
              <SNSSection />
              <Career summary={true} />
              <StudentVoices summary={true} />
              <CampusLife summary={true} />
              <FAQ summary={true} />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
