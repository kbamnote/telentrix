import React from 'react'
import Building from './Building'
import School from './School'
import Contribution from './Contribution'
import Initiatives from './Initiatives'
import Sustainability from './Sustainablity'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const Community = () => {
  return (
    <div className='mt-4'>
      <Header/>
        <Building/>
        <School/>
        <Contribution/>
        <Initiatives/>
        <Sustainability/>
        <Footer/>
    </div>
  )
}

export default Community