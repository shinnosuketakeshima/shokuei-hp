import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroFeatures from './components/HeroFeatures'
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
import KoudaiProject from './components/KoudaiProject'
import KokushiReport from './components/KokushiReport'
import StudentColumn1 from './components/StudentColumn1'
import './App.css'

function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (page) {
      case '#lab-takeshima':
        return <LabTakeshima />
      case '#lab-kamoshita':
        return <LabKamoshita />
      case '#lab-kunii':
        return <LabKunii />
      case '#koudai-project':
        return <KoudaiProject />
      case '#kokushi-report':
        return <KokushiReport />
      case '#student-column-1':
        return <StudentColumn1 />
      default:
        return (
          <>
            <Hero />
            <HeroFeatures />
            <StatsBar />
            <Features />
            <Labs />
            <Qualifications />
            <NationalExamSupport />
            <News />
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
