import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';


const StoriesImpactCard = ({ data }) => {
  return (
    <div className=' w-[96%] border-2 lg:p-[2.2rem] md:p-[1.4rem] md_phone:p-[1.8rem] p-[1.2rem]  rounded-xl shadow-xl flex md:gap-0 gap-[1rem] md:flex-row flex-col h-fit  ' >
      <div className=' md:w-[50%] w-[100%] flex flex-col md:gap-[.5rem] gap-[1rem] justify-between ' >
        <div className='flex items-center gap-[.8rem]' >
          <FaQuoteLeft className='text-[1.7rem] text-[#CBD5E1] ' />
          <h2 className='text-black  font-montserrat font-[600] lg:text-[2rem] md_phone:text-[1.5rem] text-[1.2rem] ' >{data.headline}</h2>
        </div>
        <p className=' font-openSans text-subheading lg:text-[.98rem] text-[.85rem] md_phone:line-clamp-0 line-clamp-5 ' >{data.desc}</p>

        <Link href={`/stories/${data.userName}/${data.slug}`} className='flex hover:underline underline-offset-2 duration-200 items-center gap-[.3rem] text-primary font-openSans font-[600]   ' >Read Success Story <MdOutlineArrowOutward /> </Link>

      </div>

      <div className=' md:w-[50%] w-[100%] flex md:justify-end justify-center ' >
        <Image
          src={data.images && data.images[0].src}
          alt={data.headline}
          className=' w-[29rem] pointer-events-none select-none '
        />

      </div>
    </div>
  )
}

export default StoriesImpactCard
