import React from 'react'
import HeroSec from './HeroSec'
import OurBenefits from './OurBenifits'
import Certification from './Certification'
import OurTalent from './OurTalent'
import TeamGallery from './TeamGallery'
import Pace from './Pace'
import OurValues from './OurValues'
import OurCulture from './OurCulture'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const CareerPage = () => {
  return (
    <>
    <Header/>
        <HeroSec/>
        <Certification/>
        <OurTalent/>
        <TeamGallery/>
        <OurCulture/>
        <OurValues/>
        <OurBenefits/>
        <Pace/>
        <Footer/>
    </>
  )
}

export default CareerPage ;