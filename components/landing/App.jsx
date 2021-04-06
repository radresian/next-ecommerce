import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Howitworks } from './components/howitworks'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Team } from './components/team'
import { Tokenomics } from './components/Tokenomics'
import { Contact } from './components/contact'
import JsonData from './data/data.json'


const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

  useEffect(() => {
    if(window){
      const SmoothScroll = require('smooth-scroll');
      new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      })
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Howitworks data={landingPageData.Features} />
      <Tokenomics data={landingPageData.Tokenomics} />
      <Team data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
