import React from 'react'
import Articles from './Articles'
import ManageServiceCards from './ManageServiceCards'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const Resources = () => {
  return (
    <>
      <Header/>
        <Articles/>
        <ManageServiceCards/>
        <Footer/>
        </>
  )
}

export default Resources