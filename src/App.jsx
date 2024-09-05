
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApplicationProcess from './Components/Home/ApplicationProcess'
import WhyUsa from './Components/Home/WhyUsa'
import PopularUniversities from './Components/Home/PopularUniversities'
import StudentSay from './Components/Home/StudentSay'
import USAOverview from './Components/Home/USAOverview'
import CostOfEducation from './Components/Home/CostOfEducation'
import Navbar from './Components/Home/Navbar'
import Banner from './Components/Home/Banner'
import CareersIndustry from './Components/Home/CareersIndustry'
import Footer from './Components/Home/Footer'
import StudentsSpeak from './Components/Home/StudentsSpeak'
import FaqSection from './Components/Home/FaqSection'




function App() {

  

  return (
    <>
     <div className="homepage-container">
      <Navbar/>
      <Banner/>
    <ApplicationProcess/>
    <WhyUsa/>
    <CareersIndustry/>
    <PopularUniversities/>
    <CostOfEducation/>
    <USAOverview/>
    <StudentSay/>
    
   <StudentsSpeak/>
   <FaqSection/>
     <Footer/>
    </div>
    </>
  )
}

export default App
