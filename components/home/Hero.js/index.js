import PrimaryButton from '@/components/common/Button/PrimaryButton'
import SecondaryButton from '@/components/common/Button/SecondaryButton'
import { HeroImage } from '@/public/assetManager'
import Image from 'next/image'
import React, { Suspense, useState } from 'react'
import { useRouter } from "nextjs-toploader/app"
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaMedium } from "react-icons/fa6";
import { AiFillInstagram } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const GrowthSVG = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
        <g clipPath="url(#clip0_3383_5502)">
          <path d="M23.5625 5.89453L13.8125 15.6445L9.75 11.582L2.4375 18.8945" stroke="#13B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.5625 12.3945V5.89453H17.0625" stroke="#13B900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3383_5502">
            <rect width="26" height="26" fill="white" transform="translate(0 0.207031)" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

const HomeHero = () => {
  const router = useRouter();
  const [showSocial, setShowSocial] = useState(true);

  return (
    <div className=' flex relative w-[100%]  h-[100%]  overflow-clip  ' >
      <div className=' xl:pl-[8rem] md_desktop:pl-[6rem] lg:pl-[5rem] md:pl-[3rem] md_phone:pl-[2rem] pl-[1rem] md:pr-0 md_phone:pr-[2rem] pr-[1rem] flex flex-col gap-[.5rem] z-[20] md:w-[46rem] w-full lg:mt-[3rem] phone:mt-[2rem] sm_phone:mt-[1rem] mt-[2rem] h-fit ' >
        <h2 className=' font-montserrat font-[800] md:text-[3rem] md_phone:text-[2.5rem] phone:text-[2.3rem] sm_phone:text-[2.2rem] text-[2rem] text-primary md_phone:leading-[3.5rem] leading-[2.7rem] ' >Empowering the Young Generation</h2>
        <p className=' font-openSans text-[#474B4F] text-[.9rem] mt-[.5rem]  ' >Dive into legal education, policy research, and civic engagement, mentorship, and valuable networking opportunities.</p>
        <div className='flex w-[100%] phone:px-0  phone:gap-[2rem] gap-[1rem] mt-[1.5rem] ' >
          <PrimaryButton data={{ title: "View Internships", execute: () => router.push('/careers/internships?scroll=internship-div') }} style={" phone:text-[1rem] text-[.9rem]  phone:w-fit w-[47%] phone:px-[1.5rem] px-[.45rem] text-nowrap "} />
          <SecondaryButton data={{ title: "Upcoming events", execute: () => router.push('/events/upcoming-events?scroll=upcoming-div') }} style={" phone:text-[1rem] text-[.9rem] phone:w-fit w-[47%] phone:px-[1.5rem] px-[.45rem] text-nowrap "} />
        </div>

        <div className='flex gap-[1rem] phone:w-[25rem] w-[100%] mt-[1.5rem] ' >

          <div className=' flex flex-col w-[50%] gap-[.5rem]  ' >
            <div className=' flex gap-[.4rem] ' >
              <h3 className=' font-montserrat phone:text-[1.3rem] text-[1.1rem] font-[600]  ' >100+</h3>
              <GrowthSVG />
            </div>

            <p className=' font-openSans phone:text-[.8rem] text-[.7rem] text-primary font-[500]  ' >Community projects initiated by youth leaders.</p>
          </div>


          <div className=' flex flex-col w-[50%] gap-[.5rem]  ' >
            <div className=' flex gap-[.4rem] ' >
              <h3 className=' font-montserrat phone:text-[1.3rem] text-[1.1rem] font-[600]  ' >5,000+</h3>
              <GrowthSVG />
            </div>

            <p className=' font-openSans phone:text-[.8rem] text-[.7rem] text-primary font-[500]  ' >Young leaders trained through our programs.</p>
          </div>
        </div>
      </div>

      <div className='absolute z-[10] bottom-0 right-[-5rem] lg:right-0 flex justify-end lg:w-[100%] md_phone:w-[180vw] sm_phone:w-[200vw] w-[230vw]  ' >
        <Image
          src={HeroImage}
          alt='YuvaCracy'
          className='pointer-events-none select-none '
        />
      </div>

      <Suspense fallback={
        <div className={` ${showSocial ? "my-auto" : " ml-[-5rem] "} absolute lg:flex hidden group flex-col justify-center items-center gap-[1rem] text-white xl:w-[4rem] duration-300 w-[3rem] h-[17rem]  top-[calc(50%-14rem)]  bg-primary text-[1.5rem] rounded-r-xl z-[30] `} />
      } >
        <div className={` ${showSocial ? "my-auto" : " ml-[-5rem] "} absolute lg:flex hidden group flex-col justify-center items-center gap-[1rem] text-white xl:w-[4rem] duration-300 w-[3rem] h-[17rem]  top-[calc(50%-14rem)]  bg-primary text-[1.5rem] rounded-r-xl z-[30] `} >
          <div onClick={() => setShowSocial(false)} className=' absolute z-[1]  invisible opacity-0 right-[-1rem] group-hover:visible  group-hover:opacity-100 cursor-pointer  duration-300 top-[-1rem] border-2 border-primary text-primary  bg-white size-[2rem] rounded-full flex items-center justify-center    ' >
            <MdClose />
          </div>
          <Link href={'https://www.facebook.com/YuvaCracyOrg'} target="_blank" aria-label="Facebook">
            <FaFacebookF />
            {/* <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /> */}
          </Link>
          <Link href={'https://www.instagram.com/YuvaCracyOrg'} target="_blank" aria-label="Instagram">
            <AiFillInstagram />
          </Link>
          <Link href={'https://www.twitter.com/YuvaCracyOrg'} target="_blank" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link href={'https://www.youtube.com/@YuvaCracyOrg'} target="_blank" aria-label="YouTube">
            <FaYoutube />
          </Link>
          <Link href={'https://in.linkedin.com/company/YuvaCracyOrg'} target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
          <Link href={'https://medium.com/@YuvaCracyOrg/'} target="_blank" aria-label="Medium">
            <FaMedium />
          </Link>
        </div>

      </Suspense>



    </div>
  )
}

export default HomeHero
