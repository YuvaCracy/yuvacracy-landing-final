import React from 'react'
import AnimatedLogo from '../../Logo/Animated'
import MultiLinks from './MultiLinks'
import SingleLink from './SingleLinks'
import PrimaryButton from '../../Button/PrimaryButton'
import { aboutLinksData, CareersData, centresData, eventsData, supportData } from "./linkData.js"
import { useRouter } from "nextjs-toploader/app"
import SuspenseHandler from '@/utils/SuspenseHandler'
import ScrollHandler from '@/utils/ScrollHandler'
import { usePathname } from 'next/navigation'




const MainNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='bg-white z-[600] sticky top-0 shadow-md w-[100%] h-[4rem] flex justify-between  items-center xl:px-[8rem] px-[6rem]  ' >

      {/* header code */}
      <AnimatedLogo />

      {/* links code */}
      <div className=' flex items-center gap-[1.5rem]  ' >
        <MultiLinks data={aboutLinksData} />
        <MultiLinks data={centresData} />
        <MultiLinks data={CareersData} />
        <MultiLinks data={eventsData} />
        <MultiLinks data={supportData} />
        <SuspenseHandler>
          <ScrollHandler />
        </SuspenseHandler>
        <SingleLink data={{ title: "Contact", href: `${pathname}/?scroll=footer-div` }} />
        <div className=' ml-[1rem] ' >
          <PrimaryButton data={{ title: "Join Us", execute: () => router.push('/careers/work-with-us?scroll=work-div') }} />
        </div>

      </div>


    </div>
  )
}

export default MainNav
