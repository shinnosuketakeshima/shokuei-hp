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
import LabOkamoto from './components/LabOkamoto'
import EventSpecial0525 from './components/EventSpecial0525'
import StudentColumn3 from './components/StudentColumn3'
import LabKamiyamaReport from './components/LabKamiyamaReport'
import EiyoAppReport from './components/EiyoAppReport'
import NewsArchive from './components/NewsArchive'
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
}

const SUB_PATHS = [
  '/lab-takeshima', '/lab-kamoshita', '/lab-kunii', '/lab-iimura', '/lab-kamiyama',
  '/lab-ishii', '/lab-komeichi', '/lab-nakaoka', '/lab-shibasaki', '/lab-yamazaki',
  '/lab-okamoto', '/koudai-project', '/kokushi-report', '/student-column-1',
  '/event-0531', '/student-column-3', '/lab-kamiyama-report', '/eiyo-app-report',
  '/news', '/features', '/qualifications', '/support', '/career', '/campus-life', '/voices',
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
      name: '十文字学園女子大学 食物栄養学科（非公式情報メディア）',
      alternateName: '十文字学園女子大学 食物栄養学科',
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: '十文字学園女子大学',
        url: 'https://www.jumonji-u.ac.jp/'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '菅沢2-1-28',
        addressLocality: '新座市',
        addressRegion: '埼玉県',
        postalCode: '352-8510',
        addressCountry: 'JP'
      }
    }
  } else if (location.pathname.startsWith('/lab-')) {
    customJsonLd = {
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: meta.title.split('（')[0].replace('研究室', ''), // "竹嶋伸之輔研究室" -> "竹嶋伸之輔"
        jobTitle: '教授',
        affiliation: {
          '@type': 'CollegeOrUniversity',
          name: '十文字学園女子大学 食物栄養学科'
        }
      }
    }
  } else if (location.pathname.includes('column') || location.pathname.includes('report')) {
    customJsonLd = {
      '@type': 'Article',
      author: {
        '@type': 'Organization',
        name: '十文字学園女子大学 食物栄養学科 学生・教員有志'
      }
    }
  }

  return (
    <>
      <SEO 
        title={meta.title} 
        description={meta.description} 
        ogType={meta.ogType} 
        customJsonLd={customJsonLd} 
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
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
