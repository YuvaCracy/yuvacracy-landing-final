import React from 'react'
import whatWeDoData from './whatWeDoData'
import CustomTitle from '@/components/common/CustomTitile'
import Image from 'next/image'

const HomeWhatWeDo = () => {
  return (
    <div className=' xl:px-[8rem] px-[6rem] mt-[8rem] w-[100%] flex justify-between gap-[2rem]  ' >


      <div className=' w-[50%] flex  ' >
        <Image
          src={whatWeDoData.images && whatWeDoData.images[0].src}
          alt={whatWeDoData.title}
          className=' w-[95%] pointer-events-none select-none '
        />
      </div>

      <div className=' w-[50%] ' >
        <CustomTitle title={whatWeDoData.title} />
        <div>
          <p className='text-subheading font-openSans text-[.95rem] ' >{whatWeDoData.desc}</p>
        </div>

        <div className=' mt-[2rem] flex flex-wrap gap-[1.9rem] text-primary font-openSans text-[1.2rem] font-[600]  ' >
          {whatWeDoData && whatWeDoData.list && whatWeDoData.list.map((data, index) => {
            return (
              <div key={index} className=' flex items-center gap-[1rem] max-w-[18rem] h-[4rem] ' >
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
