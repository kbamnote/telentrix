import React from 'react'
import Herosec from './HeroSec'
import AwardsSection from './AwardsSection'
import Awardcomp from './Awardcomp'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'

export default function Awards() {
  return (
    <div>
        <Header/>
      <Herosec/>
      <AwardsSection/>
      <Awardcomp/>
      <Footer/>
   </div>
  )
}