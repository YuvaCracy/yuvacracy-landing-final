import React from 'react'
import AnimatedLogo from '../../Logo/Animated'
import MultiLinks from './MultiLinks'
import SingleLink from './SingleLinks'
import PrimaryButton from '../../Button/PrimaryButton'
import { aboutLinksData, CareersData, centresData, eventsData, supportData } from "./linkData.js"



const MainNav = () => {
  return (
    <div className='bg-white sticky top-0 shadow-md w-[100%] h-[4rem] flex justify-between  items-center px-[8rem]  ' >

      {/* header code */}
      <AnimatedLogo />

      {/* links code */}
      <div className=' flex items-center gap-[1.5rem]  ' >
        <MultiLinks data={aboutLinksData} />
        <MultiLinks data={centresData} />
        <MultiLinks data={CareersData} />
        <MultiLinks data={eventsData} />
        <MultiLinks data={supportData} />
        <SingleLink data={{ title: "Contact", href: "/contact" }} />
        <div className=' ml-[1rem] ' >
          <PrimaryButton data={{ title: "Join Us", execute: () => { } }} />
        </div>

      </div>


    </div>
  )
}

export default MainNav
