import React from 'react'
import Header from '../../../common/Header'
import Banner from './Banner'
import EmpoweringCareer from './EmpoweringCareer'
import Footer from '../../../common/Footer'
import FlipGrid from './FlipGrid'
import ArctechSocial from './ArctechSocial'
import ArctechBenifits from './ArctechBenifits'

const ConsultantJobPage = () => {
  return (
    <>
    <div className='mt-8'>
    <Header/>
    <Banner/>
    <EmpoweringCareer/>
    <FlipGrid/>
    <ArctechSocial/>
    <ArctechBenifits/>
  
    <Footer/>
    </div>
    </>
  )
}

export default ConsultantJobPage