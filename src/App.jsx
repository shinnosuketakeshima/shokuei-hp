import { useState, useEffect } from 'react'
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
import KoudaiProject from './components/KoudaiProject'
import KokushiReport from './components/KokushiReport'
import StudentColumn1 from './components/StudentColumn1'
import StudentColumn2 from './components/StudentColumn2'
import LabShibasaki from './components/LabShibasaki'
import './App.css'

function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    const subPages = ['#lab-takeshima', '#lab-kamoshita', '#lab-kunii', '#lab-iimura', '#lab-kamiyama', '#lab-ishii', '#lab-komeichi', '#lab-shibasaki', '#koudai-project', '#kokushi-report']
    if (subPages.includes(page)) return

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
  }, [page])

  const renderPage = () => {
    switch (page) {
      case '#lab-takeshima':
        return <LabTakeshima />
      case '#lab-kamoshita':
        return <LabKamoshita />
      case '#lab-kunii':
        return <LabKunii />
      case '#lab-iimura':
        return <LabIimura />
      case '#lab-kamiyama':
        return <LabKamiyama />
      case '#lab-ishii':
        return <LabIshii />
      case '#lab-komeichi':
        return <LabKomeichi />
      case '#lab-shibasaki':
        return <LabShibasaki />
      case '#koudai-project':
        return <KoudaiProject />
      case '#kokushi-report':
        return <KokushiReport />
      case '#student-column-1':
        return <StudentColumn1 />
      case '#student-column-2':
        return <StudentColumn2 />
      default:
        return (
          <>
            <Hero />
            <News />
            <StatsBar />
            <Features />
            <Labs />
            <Qualifications />
            <NationalExamSupport />
            <SNSSection />
            <Career />
            <StudentVoices />
            <CampusLife />
          </>
        )
    }
  }

  return (
    <>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  )
}

export default App
