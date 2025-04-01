import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/landingPage/HomePage'
import OurSolutionPage from './components/pages/oursolutionComponents/ourSolutionPage'
import CareerPage from './components/pages/careerComponents/CareerPage'
import ContactPage from './components/pages/contactUsPage/ContactPage'
import CommunityPage from './components/pages/communityPage/CommunityPage'
import ResourcesPage from './components/pages/resourcePage/ResourcePage'
import AboutPage from './components/pages/aboutPage/AboutPage'

function App() {
 
  return (
    <>
    <Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/our-solutions' element={<OurSolutionPage/>} />
<Route path='/career' element={<CareerPage/>} />
<Route path='/contact' element={<ContactPage/>} />
<Route path='/community' element={<CommunityPage/>}/>
<Route path='/resources' element={<ResourcesPage/>}/>
<Route path='/about' element={<AboutPage/>}/>
<Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App
