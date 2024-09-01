import Image from 'next/image'
import React from 'react'
import { EventFallbackImage } from '@/public/assetManager'
import { MdCalendarMonth } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";

import Link from 'next/link';



const EventCard = ({ data }) => {
  return (
    <div className=' w-[22rem]    rounded-md shadow-md flex flex-col group cursor-pointer hover:scale-[1.02] duration-300 justify-between ' >
      <div>
        <Image
          src={data.thumbnail ? data.thumbnail[0] : EventFallbackImage}
          alt={data.title}
          className=' w-[100%] h-[13rem] rounded-tr-md rounded-tl-md object-cover '
        />
      </div>
      <div className=' px-[1rem] py-[1rem] flex flex-col justify-center ' >

        <h2 className=' text-heading font-openSans text-[1.1rem] font-[600]  line-clamp-2 ' >{data.title}</h2>

        <div className='flex justify-between mt-[.5rem] ' >
          <div className=' flex flex-col gap-[.3rem]  text-subheading font-openSans font-[400] text-[.86rem] ' >
            <div className=' flex items-center gap-[.3rem]   ' >
              <MdCalendarMonth />
              <h3 className='' >{data.start}</h3>
              <p>-</p>
              <h3>{data.end}</h3>
            </div>
            <div className=' flex items-center gap-[.3rem]   ' >
              <PiMapPinArea />
              {data.type}
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
