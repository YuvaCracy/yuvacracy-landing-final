'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import teamData from '@/components/about/people/team/teamData'
import TeamCard from '@/components/about/people/team/TeamCard'
import { IoArrowForward } from 'react-icons/io5'
import Link from 'next/link'
import PrimaryButton from '@/components/common/Button/PrimaryButton'
const OurTeam = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "our Team"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "The heart of YuvaCracy lies in our dedicated and passionate team. Comprising individuals from diverse backgrounds, our team members are united by a common goal: to inspire and empower our community. Each member brings unique skills, perspectives, and energy, contributing to the innovative and inclusive culture that defines YuvaCracy. With a strong commitment to our mission, our team works tirelessly to create a positive impact and foster meaningful connections. We take pride in our collaborative spirit, and together, we are building a platform where every voice is heard, and every individual can thrive."
          }}
          styles=' text-[1rem] '
        />
      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Meet the People Behind YuvaCracy'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy is driven by a passionate and dedicated team committed to empowering the next generation of leaders. Our team members come from diverse backgrounds and bring a wide range of skills and experiences to the table. Together, we work tirelessly to create programs and opportunities that inspire, educate, and mobilize young people around the world."
          }}
        />

      </div>

      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'Our Dedicated Team Members'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            teamData.map((data, index) => {
              return (
                <TeamCard
                  key={index}
                  data={data}
                />
              )
            })
          }
        </div>
      </div>

      <div className=' mt-[3rem] flex flex-col gap-[1rem] font-montserrat text-primary ' >
        <h2 className=' font-[600] text-[1.6rem] ' >Interested to join our team ?</h2>
        <div>
          <PrimaryButton data={{ title: "Apply Now", execute: () => { } }} icon={<IoArrowForward />} />
        </div>
      </div>

    </div>
  )
}

export default OurTeam