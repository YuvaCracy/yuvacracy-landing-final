import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';


const StoriesImpactCard = ({ data }) => {
  return (
    <div className=' w-[96%]  border-2 p-[2.2rem]  rounded-xl shadow-xl flex  ' >
      <div className=' w-[50%] flex flex-col justify-between ' >
        <div className='flex items-center gap-[.8rem]' >
          <FaQuoteLeft className='text-[1.7rem] text-[#CBD5E1] ' />
          <h2 className='text-black  font-montserrat font-[600] text-[2rem] ' >{data.headline}</h2>
        </div>
        <p className=' font-openSans text-subheading text-[.98rem] ' >{data.desc}</p>

        <Link href={`/stories/${data.userName}/${data.slug}`} className='flex hover:underline underline-offset-2 duration-200 items-center gap-[.3rem] text-primary font-openSans font-[600]   ' >Read Success Story <MdOutlineArrowOutward /> </Link>

      </div>

      <div className=' w-[50%] flex justify-end ' >
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
