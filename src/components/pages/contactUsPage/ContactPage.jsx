import React from 'react'
import HeroSec from './HeroSec'
import GlobalSec from './GlobalSec'
import UsaBranches from './UsaBranches'
import CountriesBranches from './CountriesBranches'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const ContactUs = () => {
  return (
   <>
      <Header/>
        <HeroSec/>
        <GlobalSec/>
        <UsaBranches/>
        <CountriesBranches/>
        <Footer/>
        </>
  )
}

export default ContactUs