import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Howitworks } from './components/howitworks'
import { About } from './components/about'
import { Services } from './components/services'
import { Funds } from './components/funds'
import { Team } from './components/team'
import { Tokenomics } from './components/tokenomics'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import Roadmap from './components/roadmap'

const App = (props) => {
  const [language, setLanguage] = useState(props.language);
  const [landingPageData, setLandingPageData] = useState(JsonData[language]);

  useEffect(() => {
    setLandingPageData(JsonData[language])
  }, [language]);

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
      <Navigation data={landingPageData.Navigation} setLanguage={setLanguage} language={language} />
      <Header data={landingPageData.Header} language={language}/>
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Howitworks data={landingPageData.Howitworks} />
      {landingPageData.Tokenomics && <Tokenomics data={landingPageData.Tokenomics}  />}
      {landingPageData.Token && <Services data={landingPageData.Token} />}
      {landingPageData.Funds && <Funds data={landingPageData.Funds} />}
      {landingPageData.Roadmap && <Roadmap data={landingPageData.Roadmap} />}
      {landingPageData.Team && <Team data={landingPageData.Team} />}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
