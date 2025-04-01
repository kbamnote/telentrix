import React from 'react'
import HeroSection from './HeroSection'
import InnovativeSolution from './InnovativeSolution'
import WorkForceSolution from './WorkForceSolution'
import CardSection from './CardSection'
import ManageService from './ManageService'
import OurApproach from './OurApproach'
import PreferredChoice from './PreferredChoice'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const OurSolutionPage = () => {
  return (
    <>
    <Header/>
      <HeroSection/>
      <InnovativeSolution/>
      <WorkForceSolution/>
      <CardSection/>
      <ManageService/>
      <OurApproach/>
      <PreferredChoice/>
      <Footer/>
    </>
  )
}

export default OurSolutionPage