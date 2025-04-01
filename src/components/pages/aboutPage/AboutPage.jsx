import React from 'react'
import HeroSec from './HeroSec'
import Advantage from './Advantage'
import GreatCertification from './GreatCertification'
import OurCards from './OurCards'
import Empowering from './Empowering'
import OurLeadership from './OurLeadership'
import Winning from './Winning'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const AboutUs = () => {
  return (
    <>
      <Header/>
        <HeroSec/>
        <Advantage/>
        <GreatCertification/>
        <OurCards/>
        <Empowering/>
        <OurLeadership/>
        <Winning/>
        <Footer/>
        </>
  )
}

export default AboutUs