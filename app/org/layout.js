'use client'

import Footer from '@/components/common/Footer'
import MainNav from '@/components/common/Navbar/MainNav'
import PromotionalContent from '@/components/home/promotional'
import React from 'react'

const OrgLayout = ({ children }) => {
  return (
    <div>
      <PromotionalContent />
      <MainNav />
      <div className=' xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] ' >
        {children}

      </div>
      <Footer />

    </div>
  )
}

export default OrgLayout
