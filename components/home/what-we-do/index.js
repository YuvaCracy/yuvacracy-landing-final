import React from 'react'
import whatWeDoData from './whatWeDoData'
import CustomTitle from '@/components/docs/CustomTitle'
import Image from 'next/image'

const HomeWhatWeDo = () => {
  return (
    <div className=' xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] md_phone:mt-[8rem] mt-[6rem] w-[100%] flex md_desktop:flex-row flex-col-reverse justify-between gap-[2rem]  ' >

      <div className=' md_desktop:w-[50%] flex  ' >
        <Image
          src={whatWeDoData.images && whatWeDoData.images[0].src}
          alt={whatWeDoData.title}
          className=' md_desktop:w-[95%] w-[50rem] pointer-events-none select-none '
        />
      </div>

      <div className=' md_desktop:w-[50%] ' >
        <CustomTitle title={whatWeDoData.title} />
        <div >
          <p className='text-subheading font-openSans text-[.95rem] ' >{whatWeDoData.desc}</p>
        </div>

        <div className=' mt-[2rem] flex flex-wrap gap-[1.9rem] text-primary font-openSans text-[1.2rem] font-[600]  ' >
          {whatWeDoData && whatWeDoData.list && whatWeDoData.list.map((data, index) => {
            return (
              <div key={index} className=' flex items-center gap-[1rem] md_desktop:w-[20rem] md:w-[40%] sm:w-[46%] h-[4rem] ' >
                <div className='flex flex-shrink-0 rounded-md size-[4rem] text-[1.5rem] items-center justify-center h-full text-white bg-primary' >
                  {data.icon}
                </div>

                <div className='flex flex-col w-[12rem]  ' >
                  <h2 className=' text-[.98rem] ' >{data.title}</h2>
                  <p className='text-[#4B5563] font-openSans text-[.75rem] ' >{data.desc}</p>

                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default HomeWhatWeDo
