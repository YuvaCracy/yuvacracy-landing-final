import PrimaryButton from '@/components/common/Button/PrimaryButton'
import SecondaryButton from '@/components/common/Button/SecondaryButton'
import { HeroImage } from '@/public/assetManager'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "nextjs-toploader/app"

const HomeHero = () => {
  const router = useRouter();

  return (
    <div className=' flex relative w-[100%]  h-[100%]   ' >
      <div className=' pl-[8rem] flex flex-col gap-[.5rem] z-[20] w-[46rem] mt-[3rem] h-fit ' >
        <h2 className=' font-montserrat font-[800] text-[3rem] text-primary leading-[3.5rem] ' >Empowering the Young Generation</h2>
        <p className=' font-openSans text-[#474B4F] text-[.9rem] mt-[.5rem]  ' >Dive into legal education, policy research, and civic engagement, mentorship, and valuable networking opportunities.</p>
        <div className='flex gap-[2rem] mt-[1.5rem] ' >
          <PrimaryButton data={{ title: "View Internships", execute: () => router.push('/careers/internships?scroll=internship-div') }} />
          <SecondaryButton data={{ title: "Upcoming events", execute: () => router.push('/events/upcoming-events?scroll=upcoming-div') }} />
        </div>

        <div className='flex w-[100%] mt-[1.5rem] ' >

          <div className=' flex flex-col w-[50%] gap-[.5rem]  ' >
            <div className=' flex gap-[.4rem] ' >
              <h3 className=' font-montserrat text-[1.3rem] font-[600]  ' >100+</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g clip-path="url(#clip0_3383_5502)">
                  <path d="M23.5625 5.89453L13.8125 15.6445L9.75 11.582L2.4375 18.8945" stroke="#13B900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.5625 12.3945V5.89453H17.0625" stroke="#13B900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_3383_5502">
                    <rect width="26" height="26" fill="white" transform="translate(0 0.207031)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className=' font-openSans text-[.95rem] text-primary font-[500]  ' >Community projects initiated by youth leaders.</p>
          </div>


          <div className=' flex flex-col w-[50%] gap-[.5rem]  ' >
            <div className=' flex gap-[.4rem] ' >
              <h3 className=' font-montserrat text-[1.3rem] font-[600]  ' >5,000+</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g clip-path="url(#clip0_3383_5502)">
                  <path d="M23.5625 5.89453L13.8125 15.6445L9.75 11.582L2.4375 18.8945" stroke="#13B900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.5625 12.3945V5.89453H17.0625" stroke="#13B900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_3383_5502">
                    <rect width="26" height="26" fill="white" transform="translate(0 0.207031)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className=' font-openSans text-[.95rem] text-primary font-[500]  ' >Young leaders trained through our programs.</p>
          </div>

        </div>




      </div>

      <div className='absolute z-[10] bottom-0 flex justify-end w-[calc(100%)] ' >
        <Image
          src={HeroImage}
          alt='YuvaCracy'
          className=''
        />
      </div>

    </div>
  )
}

export default HomeHero
