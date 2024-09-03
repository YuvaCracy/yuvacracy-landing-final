'use client'

import Footer from '@/components/common/Footer'
import MainNav from '@/components/common/Navbar/MainNav'
import PromotionalContent from '@/components/home/promotional'
import React from 'react'

const PeopleLayout = ({ children }) => {
  return (
    <div>
      <PromotionalContent />
      <MainNav />
      <div className=' xl:px-[8rem] px-[6rem] ' >
        {children}

      </div>
      <Footer />

    </div>
  )
}

export default PeopleLayout
