import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";

const RecentContributionCard = ({ data }) => {
  return (
    <div className='flex flex-col gap-[.5rem] w-[23rem] p-[1rem] rounded-md border-[1px]  border-border ' >
      <h1 className='text-heading  italic font-montserrat font-[600] text-[1.12rem] ' >{data.title}</h1>
      <p className=' text-[#333333] text-[.95rem] line-clamp-6 ' >{data.desc}</p>
      <p className='flex justify-end text-heading ' >By {data.user}</p>
      <Link href={`/contribution/${data.userName}/${data.slug}`} className='flex hover:bg-primary  mt-[2rem] hover:text-white hover:border-0 duration-300 justify-center items-center gap-[.5rem] w-[100%] h-[2.5rem] rounded-md border-2  border-border'  >
        Read more <MdOutlineArrowOutward />
      </Link>

    </div>
  )
}

export default RecentContributionCard
