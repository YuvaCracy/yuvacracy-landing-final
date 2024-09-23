'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import { boardOfDirectorData, teamHeadData, techTeamData, yclaTeamData, ycprTeamData } from '@/components/about/people/team/teamData'
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
            para: "YuvaCracy Foundation is supported by a vibrant team of professionals and volunteers from various fields, including media, law, public policy, tech, and other academia. Our collective commitment to collaboration allows us to harness the strengths of each individual, building a movement that inspires and empowers the next generation of democratic leaders. Together, we are building a movement that empowers the youth to become the voice of tomorrow."
          }}
          styles=' text-[1rem] '
        />
      </div>

      {/* <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Meet the People Behind YuvaCracy'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy is driven by a passionate and dedicated team committed to empowering the next generation of leaders. Our team members come from diverse backgrounds and bring a wide range of skills and experiences to the table. Together, we work tirelessly to create programs and opportunities that inspire, educate, and mobilize young people around the world."
          }}
        />

      </div> */}

      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'Board of Directors'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            boardOfDirectorData.map((data, index) => {
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


      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'Team Head (s)'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            teamHeadData.map((data, index) => {
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


      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'Tech Team'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            techTeamData.map((data, index) => {
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


      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'YCPR'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            ycprTeamData.map((data, index) => {
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



      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'YCLA'}
          small={true}
        />

        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            yclaTeamData.map((data, index) => {
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

      <Para
        data={{
          para: "All team members, including those in leadership roles, serve as voluntary contributors to advancing the organization's mission.*"
        }}
        styles=' mt-[2rem] text-[1.2rem] '
      />

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