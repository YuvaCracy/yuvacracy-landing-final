import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const TeamCard = ({ data }) => {
  return (
    <div className='flex flex-col w-[14rem] border-[1px] rounded-md font-openSans  ' >
      <div className=' w-[100%] h-[16rem] ' >
        <Image
          src={data.images[0].src}
          alt={data.name}
          className='object-cover w-[100%] h-[100%] rounded-t-md  '
        />
      </div>

      <div className=' flex flex-col px-[1rem] py-[1rem] ' >
        <div className=' flex items-center gap-[.8rem] ' >
          <h2 className='font-[600] capitalize font-montserrat ' >{data.name}</h2>
          <Link target='_blank' href={data.socials && data.socials.linkedin ? data.socials.linkedin : ""} className='' >
            <FaLinkedin />
          </Link>
        </div>
        <p className=' line-clamp-1' >{data.position}</p>
      </div>

    </div>
  )
}

export default TeamCard
