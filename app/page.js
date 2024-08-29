'use client'

import React from 'react'
import PromotionalContent from '@/components/home/promotional'
import MainNav from '@/components/common/Navbar/MainNav'


const AppPage = () => {
  return (
    <div className=' w-[100%]  bg-white'>
      <PromotionalContent />
      <MainNav />
      <div className=' h-[100rem] ' >

      </div>
    </div>
  )
}

export default AppPage
