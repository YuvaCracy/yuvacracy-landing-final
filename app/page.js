'use client'

import React from 'react'
import PromotionalContent from '@/components/home/promotional'
import MainNav from '@/components/common/Navbar/MainNav'
import DevModeOn from '@/components/DevModeOn'
import HomeEventsComponent from '@/components/events/HomeEventsComponent'
import OurMission from '@/components/home/mission'
import HomeWhatWeDo from '@/components/home/what-we-do'
import HomeRecentContribution from '@/components/home/recent-contribution'
import HomeStoriesOfImpact from '@/components/home/stories-of-impact'
import HomeGetInvolved from '@/components/home/get-involved'
import Faq from '@/components/common/faq'
import HomeSubsribeNewsLetter from '@/components/home/subsribe-newsletter'
import Footer from '@/components/common/Footer'


const AppPage = () => {
  return (
    <div className=' w-[100%]  bg-white'>
      <PromotionalContent />
      <MainNav />
      <div className=' h-[calc(100vh-8rem)] w-[100%] ' >

      </div>
      <HomeEventsComponent />
      <OurMission />
      <HomeWhatWeDo />
      <HomeRecentContribution />
      <HomeStoriesOfImpact />
      <HomeGetInvolved />
      <Faq />
      <HomeSubsribeNewsLetter />
      <Footer />
      {/* <div className=' h-[100rem] ' >

      </div> */}
      {/* <DevModeOn /> */}

    </div>
  )
}

export default AppPage
