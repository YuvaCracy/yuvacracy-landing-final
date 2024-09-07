import React, { useEffect, useState } from 'react'
import AnimatedLogo from '../../Logo/Animated'
import MultiLinks from './MultiLinks'
import SingleLink from './SingleLinks'
import PrimaryButton from '../../Button/PrimaryButton'
import { aboutLinksData, CareersData, centresData, eventsData, supportData } from "./linkData.js"
import { useRouter } from "nextjs-toploader/app"
import SuspenseHandler from '@/utils/SuspenseHandler'
import ScrollHandler from '@/utils/ScrollHandler'
import { usePathname } from 'next/navigation'
import SecondaryButton from '../../Button/SecondaryButton'
import { LuMenu } from "react-icons/lu";
import { MdClose } from 'react-icons/md'





const MainNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(1);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={` ${showNav ? "flex-col bg-primary fixed xsm_desktop:sticky gap-[0rem] xsm_desktop:min-h-[4rem] min-h-[100vh] h-auto justify-start  " : "sticky h-[4rem] bg-white  "} xsm_desktop:bg-white top-0 z-[600]  shadow-md w-[100%] xsm_desktop:min-h-[4rem] xsm_desktop:h-[4rem] flex xsm_desktop:flex-row  xsm_desktop:gap-0  xsm_desktop:justify-between xsm_desktop:items-center xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] xsm_desktop:py-0 duration-300  `} >

      {/* header code */}
      <div className={`flex ${showNav ? " mt-[2rem] mb-[2rem] " : " my-auto "}  w-[8.5rem] xsm_desktop:my-0`} >

        <AnimatedLogo color={`${showNav ? "text-white xsm_desktop:text-primary " : "text-primary"}   `} bg={`${showNav ? " bg-primary xsm_desktop:bg-white " : "bg-white "}  `} lineColor={` ${showNav ? "bg-white xsm_desktop:bg-primary " : "bg-primary"} `} />
      </div>

      {/* links code */}
      <div className={` ${showNav ? "flex" : " hidden "} xsm_desktop:flex xsm_desktop:flex-row  flex-col xsm_desktop:mt-0 mt-[2rem] xsm_desktop:items-center md_desktop:gap-[1.5rem] xsm_desktop:gap-[1rem]  `} >
        <MultiLinks data={aboutLinksData} id={1} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={centresData} id={2} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={CareersData} id={3} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={eventsData} id={4} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={supportData} id={5} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <SuspenseHandler>
          <ScrollHandler />
        </SuspenseHandler>
        <SingleLink data={{ title: "Contact", href: `${pathname}/?scroll=footer-div` }} showNav={showNav} setShowNav={setShowNav} />
        <div className='hidden xsm_desktop:flex ml-[2rem] mb-[2rem] xsm_desktop:mb-0 ' >
          <PrimaryButton data={{ title: "Join Us", execute: () => router.push('/careers/work-with-us?scroll=work-div') }} />
        </div>
        <div className=' flex justify-center mt-[2rem] xsm_desktop:hidden mb-[2rem]  ' >
          <SecondaryButton data={{ title: "Join Us", execute: () => router.push('/careers/work-with-us?scroll=work-div') }} style={` xsm_desktop:w-fit w-[15rem] `} />
        </div>

      </div>

      <div onClick={() => setShowNav(!showNav)} className={` cursor-pointer absolute xsm_desktop:hidden  flex text-[1.5rem]  right-[1.5rem]  ${showNav ? " bg-white text-primary size-[1.8rem] rounded-full flex justify-center items-center top-[1rem] " : " text-primary top-[1rem]"} `} >
        {
          showNav ? <MdClose /> : <LuMenu />
        }
      </div>


    </div>
  )
}

export default MainNav
