import React from 'react'
import missionData from './missionData'
import CustomTitle from '@/components/common/CustomTitile'
import Image from 'next/image'
import { HiMiniCheckCircle } from "react-icons/hi2";


const OurMission = () => {
  return (
    <div className=' xl:px-[8rem] px-[6rem] mt-[8rem] w-[100%] flex justify-between  ' >
      <div className=' w-[50%] ' >
        <CustomTitle title={missionData.title} />
        <div>
          <p className='text-subheading font-openSans text-[.95rem] ' >{missionData.desc}</p>
        </div>

        <div className=' mt-[2rem] flex flex-col gap-[1rem] text-primary font-openSans text-[1.2rem] font-[600]  ' >
          {missionData && missionData.list && missionData.list.map((data, index) => {
            return (
              <div key={index} className=' flex items-center gap-[1rem]  ' >
                <HiMiniCheckCircle className=' text-[1.9rem] ' />
                <p className='  text-[#333] '>{data.title}</p>
              </div>
            )
          })}

        </div>
      </div>

      <div className=' w-[50%] flex justify-center ' >
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
