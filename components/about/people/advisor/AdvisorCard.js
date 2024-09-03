import Image from 'next/image'
import React from 'react'

const AdvisorCard = ({ data }) => {
  return (
    <div className=' w-[100%] flex gap-[1rem] font-openSans text-[.95rem] ' >

      <div className='flex   gap-[.8rem] flex-col w-[14rem] ' >
        <Image
          src={data.images[0].src}
          alt={data.name}
          className=' w-[100%] '
        />

        <div className=' mx-auto max-w-[13rem] text-nowrap text-center w-fit px-[.9rem] py-[.3rem] rounded-full border-[1px]  ' >
          {data.name}
        </div>

      </div>

      <div className=' flex flex-col gap-[1rem] w-[calc(100%-14rem)] ' >
        <div className='' >
          <span className='font-bold ' >Background:</span>
          <span className=' ml-[.3rem] text-opacity-[8]  ' >{data.bio}</span>
        </div>
        <div className='' >
          <span className='font-bold ' >Contribution to YuvaCracy</span>
          <span className=' ml-[.3rem] text-opacity-[8]  ' >{data.contribution}</span>
        </div>

      </div>

    </div>
  )
}

export default AdvisorCard
