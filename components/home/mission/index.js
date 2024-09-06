import React from 'react'
import missionData from './missionData'
import CustomTitle from '@/components/docs/CustomTitle'
import Image from 'next/image'
import { HiMiniCheckCircle } from "react-icons/hi2";


const OurMission = () => {
  return (
    <div className=' xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] md:mt-[8rem] mt-[4rem] w-[100%] flex md:flex-row flex-col md:gap-0 gap-[2rem] justify-between  ' >
      <div className=' lg:w-[50%] md:w-[50%] ' >
        <CustomTitle title={missionData.title} />
        <div>
          <p className='text-subheading font-openSans lg:text-[.95rem] md:text-[.85rem] text-[.9rem] ' >{missionData.desc}</p>
        </div>

        <div className=' mt-[2rem] flex flex-col gap-[1rem] text-primary font-openSans text-[1.2rem] font-[600]  ' >
          {missionData && missionData.list && missionData.list.map((data, index) => {
            return (
              <div key={index} className=' flex items-center lg:gap-[1rem] gap-[.5rem]  ' >
                <HiMiniCheckCircle className=' lg:text-[1.9rem] text-[1.5rem] ' />
                <p className='  text-[#333] lg:text-[1rem] text-[.9rem] '>{data.title}</p>
              </div>
            )
          })}

        </div>
      </div>

      <div className=' lg:w-[50%] md:w-[45%] w-[100%] flex md:justify-center ' >
        <Image
          src={missionData.images && missionData.images[0].src}
          alt={missionData.title}
          className=' w-[28rem] pointer-events-none select-none '
        />
      </div>

    </div>
  )
}

export default OurMission
