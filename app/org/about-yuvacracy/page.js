'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import Image from 'next/image'
import { YuvaCracyAboutImage1, YuvaCracyAboutImage2, YuvaCracyAboutImage21, YuvaCracyAboutImage3 } from '@/public/assetManager'
import aboutMissionData from '@/components/about/org/yuvacracy/aboutMissionData'


const YuvaCracyPage = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div>

        <div className='flex justify-center md_phone:mt-[4rem] mt-[2rem] gap-[.5rem]  ' >
          <Heading
            data={{
              head: "About Yuvacracy"
            }}
            styles=' uppercase '
          />
        </div>

        <div className='flex  xsm_desktop:flex-row flex-col-reverse justify-center w-[100%]  mt-[3rem]  ' >
          <div className=' z-[1]   flex xsm_desktop:justify-center justify-center xsm_desktop:w-[calc(100%-26rem)] w-[100%]  ' >

            <Image
              src={YuvaCracyAboutImage1}
              alt='Yuvacracy'
              className=' sm:max-w-[75%]  w-[150rem]  sm:min-w-[30rem] xsm_desktop:mt-0 mt-[-3rem] '
            />
          </div>
          <div className='flex  z-[3] flex-col  justify-center xsm_desktop:w-[33rem] w-[100%] font-openSans ' >
            <div className=' xsm_desktop:w-[38rem] w-[100%]  p-[1.5rem] xsm_desktop:ml-[-15rem] rounded-md flex flex-col gap-[1rem] bg-primary  text-white ' >
              <h3 className=' opacity-[.6] sm:text-[.95rem] text-[.85rem] ' >Our Story</h3>
              <h2 className=' font-[800] sm:text-[2.3rem] text-[1.9rem] ' >About the YuvaCracy Group</h2>
              <p className=' opacity-[.7] sm:text-[.95rem] text-[.85rem] ' >YuvaCracy is more than just an organization—it's a movement committed to shaping a democratic future where youth take the lead. As a parent organization, YuvaCracy Group is evolving to encompass a wide range of initiatives, including a non-profit arm also known as YuvaCracy Foundation, with focused efforts in Public Policy, Legal Affairs, Research, and Dialogues.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[1rem] mt-[3rem] ' >

        <CustomTitle
          title={'About the Foundation'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy Foundation is a non-profit organization registered under section 8 of The Companies Act, 2013, with approvals from the Ministry of Corporate Affairs, Ministry of Micro, Small & Medium Enterprises (MSME), and recognition on NGO Darpan (NITI Aayog, Government of India). Committed to excellence, we proudly hold ISO Certification 9001:2015.We are committed to drive meaningful change by empowering young minds to actively engage in the democratic process, fostering India-centric solutions to today’s most pressing challenges.We are continually expanding our reach, guided by the belief that the future of democracy depends on the active involvement and innovative thinking of the next generation."
          }}
        />
      </div>


      <div className='flex flex-col gap-[1rem] mt-[3rem] ' >

        <CustomTitle
          title={'Our Mission and Vision'}
          small={true}
        />
        <Para
          data={{
            para: "Our mission is to empower and position the youth at the nucleus of democracy, fostering their engagement in policy-making and legal spaces. With the guiding principle, \"Of the Youth, By the Youth, and For the Youth,\" we strive to create a lasting impact on the future by shaping informed and empowered leaders.Along with this, YuvaCracy Foundation also tends to cultivate a culture of civic responsibility among youth by equipping them with the knowledge, skills, and platforms to lead change in their communities. We envision a future where every youth of our country is an active participant in the democratic process, contributing to the nation's growth and prosperity. "
          }}
        />
      </div>


      {/* <div className=' flex xsm_desktop:flex-row flex-col w-[100%] gap-[1rem] items-center mt-[8rem]  ' >

        <div className=' flex flex-col justify-center xsm_desktop:w-[50%] w-full ' >
          <CustomTitle title={'Our Mission & Vision'} subtitle={'What We Stand For'} />
          <p className=' font-openSans text-[#4B5563] text-[.95rem] ' >
            Our mission is to cultivate a culture of civic responsibility among young people by equipping them with the knowledge, skills, and platforms to lead change in their communities. We envision a future where every young Indian is an active participant in the democratic process, contributing to the nation's growth and prosperity.
          </p>

          <div className=' flex md_phone:flex-row flex-col md_phone:gap-[1rem] gap-[1.5rem] mt-[2rem] ' >
            {
              aboutMissionData && aboutMissionData.map((data, index) => {
                return (
                  <div key={index} className=' flex flex-col gap-[.5rem] md_phone:w-[20rem] w-[100%] ' >
                    <div className=' size-[3rem] rounded-full flex justify-center items-center bg-[#1F2937] p-[.5rem]  ' >
                      {data.icon}
                    </div>
                    <h3 className=' font-montserrat text-[1.2rem] font-bold  '>{data.title}</h3>
                    <p className=' font-openSans text-[#4B5563] text-[.85rem] '>{data.desc}</p>
                  </div>
                )
              })
            }

          </div>

        </div>


        <div className=' flex xsm_desktop:w-[50%] w-full  ' >
          <Image
            src={YuvaCracyAboutImage2}
            alt='yuva-cracy-about'
            className='hidden xsm_desktop:block '
          />
          <Image
            src={YuvaCracyAboutImage21}
            alt='yuva-cracy-about'
            className='block xsm_desktop:hidden '
          />
        </div>

      </div> */}

      {/* <div className=' flex flex-col md_phone:mt-[8rem] mt-[5rem] gap-[1rem]  w-[100%]  ' >
        <div>
          <CustomTitle title={'Our Programs'} subtitle={'Designed for Change'} />
          <p className=' font-openSans text-[#4B5563] text-[.95rem] ' >YuvaCracy offers a range of programs aimed at fostering leadership and civic engagement among young people. From workshops and training sessions to hands-on community projects, our programs are designed to equip participants with the skills and knowledge they need to lead effectively.</p>
        </div>

        <div className='flex md:flex-row flex-col  gap-[2rem] ' >
          <div className=' md:w-[50%] w-[100%] flex  ' >
            <Image
              src={YuvaCracyAboutImage3}
              alt='yuva-cracy-about'
              className=' lg:w-[90%] md:w-[100%] w-[30rem]  '
            />
          </div>

          <div className='flex flex-col justify-center gap-[1.5rem] md:w-[50%] w-[100%] ' >
            <div className='flex flex-col gap-[.1rem] ' >
              <h2 className=' text-[1.8rem] font-openSans font-bold ' >5,000+</h2>
              <h3 className=' text-[1.3rem] font-openSans font-[600]  ' >Young Leaders Trained</h3>
              <p className=' font-openSans line-clamp-2 text-[#4B5563] text-[.85rem]   ' >Over 5,000 youth have been equipped with leadership skills, fostering their ability to create meaningful change in areas like social entrepreneurship and civic engagement.</p>
            </div>

            <div className='flex flex-col gap-[.1rem] ' >
              <h2 className=' text-[1.8rem] font-openSans font-bold ' >100+</h2>
              <h3 className=' text-[1.3rem] font-openSans font-[600]  ' >Community Projects Initiated</h3>
              <p className=' font-openSans line-clamp-2 text-[#4B5563] text-[.85rem]   ' >Our youth leaders have launched more than 100 impactful projects, addressing local needs in areas such as education, sustainability, and mental health.</p>
            </div>

            <div className='flex flex-col gap-[.1rem] ' >
              <h2 className=' text-[1.8rem] font-openSans font-bold ' >50+</h2>
              <h3 className=' text-[1.3rem] font-openSans font-[600]  ' >Partnerships with Institutions and NGOs</h3>
              <p className=' font-openSans line-clamp-2 text-[#4B5563] text-[.85rem]   ' >We've built 50+ partnerships with schools, NGOs, and nonprofits, expanding our reach and providing more opportunities for young leaders to thrive.</p>
            </div>
          </div>

        </div>
      </div> */}


    </div >
  )
}

export default YuvaCracyPage