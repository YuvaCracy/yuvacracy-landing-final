'use client'

import React from 'react'
import PromotionalContent from '@/components/home/promotional'
import MainNav from '@/components/common/Navbar/MainNav'
import HomeEventsComponent from '@/components/events/HomeEventsComponent'
import OurMission from '@/components/home/mission'
import HomeWhatWeDo from '@/components/home/what-we-do'
import HomeRecentContribution from '@/components/home/recent-contribution'
import HomeStoriesOfImpact from '@/components/home/stories-of-impact'
import HomeGetInvolved from '@/components/home/get-involved'
import Faq from '@/components/common/faq'
import HomeSubsribeNewsLetter from '@/components/home/subsribe-newsletter'
import Footer from '@/components/common/Footer'
import HomeHero from '@/components/home/Hero.js'


const AppPage = () => {
  return (
    <div className=' w-[100%]  bg-white'>
      <PromotionalContent /> 
      <MainNav />
      <div className=' h-[calc(100vh-3.5rem)] w-[100%] ' >
        <HomeHero />
      </div>
      <div className=' lg:mt-[8rem] mt-[4rem] ' >

        <HomeEventsComponent />
      </div>
      <OurMission />
      <HomeWhatWeDo />
      <div className='xl:px-[8rem] md_desktop:px-[6rem]  lg:px-[5rem] md:px-[3rem] px-[2rem]  '>
        <HomeRecentContribution />
      </div>
      <HomeStoriesOfImpact />
      <HomeGetInvolved />
      <Faq />
      <HomeSubsribeNewsLetter />
      <Footer />
      {/* <div className=' h-[100rem] ' >

      </div> */}


    </div>
  )
}

export default AppPage
