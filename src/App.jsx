import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Features from './components/Features'
import Labs from './components/Labs'
import Qualifications from './components/Qualifications'
import NationalExamSupport from './components/NationalExamSupport'
import News from './components/News'
import SNSSection from './components/SNSSection'
import Career from './components/Career'
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
import LabOkamoto from './components/LabOkamoto'
import EventSpecial0525 from './components/EventSpecial0525'
import StudentColumn3 from './components/StudentColumn3'
import LabKamiyamaReport from './components/LabKamiyamaReport'
import NewsArchive from './components/NewsArchive'
import './App.css'

const PAGE_META = {
  '/': {
    title: '食物栄養学科 | 十文字学園女子大学',
    desc: '十文字学園女子大学 食物栄養学科。管理栄養士・栄養士を育てる4年間。食と栄養の力で未来をデザインします。',
    ogType: 'website',
  },
  '/lab-takeshima': {
    title: '竹嶋研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '竹嶋伸之輔先生の研究室。BLVと宿主遺伝子の関係から家畜と人の食を守る研究室です。',
    ogType: 'article',
  },
  '/lab-kamoshita': {
    title: '鴨下研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '鴨下澄子先生の研究室。加工大豆食品やテンペの研究を通じて食物繊維摂取の向上と健康維持を探求します。',
    ogType: 'article',
  },
  '/lab-kunii': {
    title: '國井研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '國井大輔先生の研究室。公衆栄養学・実践食事学を軸に地域・企業・海外と連携する研究室です。',
    ogType: 'article',
  },
  '/lab-iimura': {
    title: '飯村研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '飯村九林先生の研究室。生体組織と食品機能を分子レベルで探る研究室です。',
    ogType: 'article',
  },
  '/lab-kamiyama': {
    title: '神山研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '神山真澄先生の研究室。ポリフェノールや機能性成分の解析から生活習慣病予防を探求します。',
    ogType: 'article',
  },
  '/lab-ishii': {
    title: '石井研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '石井和美先生の研究室。雑穀粉パンや膨化食品の物性解析でおいしいとやさしいを両立する食をデザインします。',
    ogType: 'article',
  },
  '/lab-komeichi': {
    title: '古明地研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '古明地夕佳先生の研究室。エビデンスに基づく公衆栄養実践で地域に根ざした食と健康づくりを実践します。',
    ogType: 'article',
  },
  '/lab-nakaoka': {
    title: '中岡研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '中岡加奈絵先生の研究室。子どもの食生活・食育や応用栄養学を専門とした研究室です。',
    ogType: 'article',
  },
  '/lab-shibasaki': {
    title: '芝崎研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '芝崎本実先生の研究室。和菓子職人としての経験と調理科学を融合し、郷土菓子の科学的解明に取り組みます。',
    ogType: 'article',
  },
  '/lab-okamoto': {
    title: '岡本研究室 | 食物栄養学科 | 十文字学園女子大学',
    desc: '岡本節子先生の研究室。高齢者のサルコペニア予防から介護施設の栄養ケアまで超高齢社会の食と健康に向き合います。',
    ogType: 'article',
  },
  '/koudai-project': {
    title: '高大連携プロジェクト | 食物栄養学科 | 十文字学園女子大学',
    desc: '十文字学園女子大学と駒場学園高等学校の高大連携プロジェクト「食の未来を創る」の詳細ページです。',
    ogType: 'article',
  },
  '/kokushi-report': {
    title: '国試レポート | 食物栄養学科 | 十文字学園女子大学',
    desc: '第40回管理栄養士国家試験の結果と本学科の取り組み。合格率・要因分析・今後の対策を公開しています。',
    ogType: 'article',
  },
  '/student-column-1': {
    title: '学生コラム | 食物栄養学科 | 十文字学園女子大学',
    desc: '管理栄養士の卵たちのリアルな裏事情。白衣の「三権分立」とは？',
    ogType: 'article',
  },
  '/event-0531': {
    title: '管理栄養士探求型イベント(5/31) | 食物栄養学科 | 十文字学園女子大学',
    desc: '食と栄養で未来をデザイン。管理栄養士について考える探求型イベントを5月31日に開催。高校生・保護者参加無料。',
    ogType: 'article',
  },
  '/student-column-3': {
    title: 'チーズに"王様"と"女王様"がいた！食育論セミナーレポート | 食物栄養学科',
    desc: '食育論の授業に雪印メグミルク様をお招き。骨の衝撃映像、チーズの王様・女王様エピソード、高タンパク・低糖質の栄養価、試食まで体験した学生記者レポート。',
    ogType: 'article',
  },
  '/lab-kamiyama-report': {
    title: '「いちから学ぶnutrition science」SAレポート | 食物栄養学科',
    desc: '総合科目「いちから学ぶnutrition science」での神山ゼミ生によるSA活動レポート。アクティブラーニング形式の授業の様子や学生の成長を伝えます。',
    ogType: 'article',
  },
  '/news': {
    title: '新着情報・コラム一覧 | 食物栄養学科 | 十文字学園女子大学',
    desc: '食物栄養学科の最新ニュース、学生コラム、教員コラムの一覧です。食と栄養の最前線をお届けします。',
    ogType: 'website',
  },
  '/features': {
    title: '学科の特色 | 食物栄養学科 | 十文字学園女子大学',
    desc: '十文字学園女子大学 食物栄養学科の特徴をご紹介します。食と栄養の専門知識を深める実践的なカリキュラム。',
    ogType: 'article',
  },
  '/qualifications': {
    title: '取得資格 | 食物栄養学科 | 十文字学園女子大学',
    desc: '食物栄養学科で取得可能な資格（管理栄養士、栄養士、栄養教諭など）について詳しく解説します。',
    ogType: 'article',
  },
  '/support': {
    title: '国家試験対策 | 食物栄養学科 | 十文字学園女子大学',
    desc: '管理栄養士国家試験合格に向けた、十文字学園女子大学の手厚いサポート体制と高い合格実績をご紹介します。',
    ogType: 'article',
  },
  '/career': {
    title: '進路・就職 | 食物栄養学科 | 十文字学園女子大学',
    desc: '食物栄養学科の卒業後の進路、就職実績、キャリア支援プログラムについてご紹介します。',
    ogType: 'article',
  },
  '/campus-life': {
    title: 'キャンパスライフ | 食物栄養学科 | 十文字学園女子大学',
    desc: '食物栄養学科の学生たちの日常、施設、イベントなど、充実したキャンパスライフをお届けします。',
    ogType: 'article',
  },
  '/voices': {
    title: '学生の声 | 食物栄養学科 | 十文字学園女子大学',
    desc: '食物栄養学科で学ぶ学生たちのインタビューや体験談を通じて、学科の魅力をお伝えします。',
    ogType: 'article',
  },
}


const SUB_PATHS = [
  '/lab-takeshima', '/lab-kamoshita', '/lab-kunii', '/lab-iimura', '/lab-kamiyama',
  '/lab-ishii', '/lab-komeichi', '/lab-nakaoka', '/lab-shibasaki',
  '/lab-okamoto', '/koudai-project', '/kokushi-report', '/student-column-1',
  '/event-0531', '/student-column-3', '/lab-kamiyama-report',
  '/news', '/features', '/qualifications', '/support', '/career', '/campus-life', '/voices',
]

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const meta = PAGE_META[location.pathname]
    if (meta) {
      const url = `https://shokuei-hp.web.app${location.pathname}`
      document.title = meta.title
      const q = (sel) => document.querySelector(sel)
      const set = (sel, attr, val) => { const el = q(sel); if (el) el[attr] = val }
      set('meta[name="description"]', 'content', meta.desc)
      set('link[rel="canonical"]', 'href', url)
      set('meta[property="og:url"]', 'content', url)
      set('meta[property="og:title"]', 'content', meta.title)
      set('meta[property="og:description"]', 'content', meta.desc)

      // JSON-LD dynamic injection
      const oldScript = document.getElementById('json-ld')
      if (oldScript) oldScript.remove()

      let jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: meta.title,
        description: meta.desc,
        url: url,
      }

      if (location.pathname === '/') {
        jsonLd = {
          ...jsonLd,
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
        jsonLd['@type'] = 'ProfilePage'
        jsonLd['mainEntity'] = {
          '@type': 'Person',
          name: meta.title.split(' | ')[0],
          jobTitle: '教授',
          affiliation: {
            '@type': 'CollegeOrUniversity',
            name: '十文字学園女子大学 食物栄養学科'
          }
        }
      } else if (location.pathname.includes('column') || location.pathname.includes('report')) {
        jsonLd['@type'] = 'Article'
        jsonLd['author'] = {
          '@type': 'Organization',
          name: '十文字学園女子大学 食物栄養学科 学生・教員有志'
        }
      }

      const script = document.createElement('script')
      script.id = 'json-ld'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

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

  return (
    <>
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
          <Route path="/lab-okamoto" element={<LabOkamoto />} />
          <Route path="/koudai-project" element={<KoudaiProject />} />
          <Route path="/kokushi-report" element={<KokushiReport />} />
          <Route path="/student-column-1" element={<StudentColumn1 />} />
          <Route path="/event-0531" element={<EventSpecial0525 />} />
          <Route path="/student-column-3" element={<StudentColumn3 />} />
          <Route path="/lab-kamiyama-report" element={<LabKamiyamaReport />} />
          <Route path="/news" element={<NewsArchive />} />
          <Route path="/features" element={<Features />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/support" element={<NationalExamSupport />} />
          <Route path="/career" element={<Career />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/voices" element={<StudentVoices />} />
          <Route path="/" element={
            <>
              <Hero />
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
