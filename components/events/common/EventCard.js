import Image from 'next/image'
import React from 'react'
import { EventFallbackImage } from '@/public/assetManager'
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";

import Link from 'next/link';


const EventCard = ({ data }) => {
  return (
    <div className=' phone:w-[22rem] w-[100%]    rounded-md shadow-md flex flex-col group cursor-pointer hover:scale-[1.02] duration-300 justify-between ' >
      <div>
        <Image
          src={data.thumbnail ? data.thumbnail[0] : EventFallbackImage}
          alt={data.title}
          className=' w-[100%] h-[13rem] rounded-tr-md rounded-tl-md object-cover pointer-events-none select-none '
        />
      </div>
      <div className=' px-[1rem] py-[1rem] flex flex-col justify-center ' >

        <h2 className=' text-heading font-openSans text-[1.1rem] font-[600]  line-clamp-2 ' >{data.title}</h2>

        <div className='flex justify-between mt-[.5rem] ' >
          <div className=' flex flex-col gap-[.3rem]  text-subheading font-openSans  text-[.7rem] font-[600] ' >
            <div className=' flex items-center gap-[.3rem]   ' >
              <MdCalendarMonth className=' text-[1.8rem] ' />
              <div className='flex flex-col ' >
                <h2 className=' text-[.75rem]   ' >{data.start}</h2>
                <h2 className=' text-[.6rem]   ' >{data.startTime}</h2>
              </div>
              <p>---</p>
              {/* <MdCalendarMonth className=' text-[1.6rem] ' /> */}
              <div className='flex flex-col ' >
                <h2 className=' text-[.75rem]   '>{data.end}</h2>
                <h2 className=' text-[.6rem]  ' >{data.endTime}</h2>
              </div>
            </div>
            <div className=' flex items-center gap-[1rem] text-[.7rem] ml-[.4rem]  ' >
              <PiMapPinArea className=' text-[.8rem] font-[700]  ' />
              <div>

                {data.type}
              </div>
            </div>
          </div>
          <div className='flex items-end duration-500 ' >
            <Link href={`/events/${data.slug}`} className=' bg-primary text-white flex justify-center items-center rounded-full active:scale-[.9] duration-200 p-[.5rem] text-[1.12rem] ' >
              <MdOutlineArrowOutward />
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default EventCard
