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
  // useEffect(() => {
  //   if (showNav) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [showNav]);


  console.log("current active", active)
  return (
    <div className={` ${showNav ? "flex-col bg-primary fixed lg:sticky gap-[0rem] lg:min-h-[4rem] min-h-[100vh] h-auto justify-start  " : "sticky h-[4rem] bg-white  "} lg:bg-white top-0 z-[600]  shadow-md w-[100%] lg:min-h-[4rem] lg:h-[4rem] flex lg:flex-row  lg:gap-0  lg:justify-between lg:items-center xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] lg:py-0 duration-300  `} >

      {/* header code */}
      <div className={`flex ${showNav ? " mt-[2rem] mb-[2rem] " : " my-auto "}  w-[8.5rem] lg:my-0`} >

        <AnimatedLogo color={`${showNav ? "text-white lg:text-primary " : "text-primary"}   `} bg={`${showNav ? " bg-primary lg:bg-white " : "bg-white "}  `} lineColor={` ${showNav ? "bg-white lg:bg-primary " : "bg-primary"} `} />
      </div>

      {/* links code */}
      <div className={` ${showNav ? "flex" : " hidden "} lg:flex lg:flex-row  flex-col lg:mt-0 mt-[2rem] lg:items-center md_desktop:gap-[1.5rem] lg:gap-[1rem]  `} >
        <MultiLinks data={aboutLinksData} id={1} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={centresData} id={2} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={CareersData} id={3} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={eventsData} id={4} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <MultiLinks data={supportData} id={5} active={active} setActive={setActive} showNav={showNav} setShowNav={setShowNav} />
        <SuspenseHandler>
          <ScrollHandler />
        </SuspenseHandler>
        <SingleLink data={{ title: "Contact", href: `${pathname}/?scroll=footer-div` }} showNav={showNav} setShowNav={setShowNav} />
        <div className='hidden lg:flex ml-[2rem] mb-[2rem] lg:mb-0 ' >
          <PrimaryButton data={{ title: "Join Us", execute: () => router.push('/careers/work-with-us?scroll=work-div') }} />
        </div>
        <div className=' flex justify-center mt-[2rem] lg:hidden mb-[2rem]  ' >
          <SecondaryButton data={{ title: "Join Us", execute: () => router.push('/careers/work-with-us?scroll=work-div') }} style={` lg:w-fit w-[15rem] `} />
        </div>

      </div>

      <div onClick={() => setShowNav(!showNav)} className={` cursor-pointer absolute lg:hidden  flex text-[1.5rem]  right-[1.5rem]  ${showNav ? " bg-white text-primary size-[1.8rem] rounded-full flex justify-center items-center top-[1rem] " : " text-primary top-[1rem]"} `} >
        {
          showNav ? <MdClose /> : <LuMenu />
        }
      </div>


    </div>
  )
}

export default MainNav
