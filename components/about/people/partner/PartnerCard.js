import Image from 'next/image'
import React from 'react'

const PartnerCard = ({ data }) => {
  return (
    <div className=' p-[1rem] overflow-clip border-[1px]  rounded-xl hover:scale-[1.01] duration-300 cursor-pointer flex flex-col gap-[.5rem] font-openSans w-[9rem] h-[7rem] justify-center ' >
      <div className='flex flex-col gap-[.5rem] items-center ' >
        <Image
          src={data.images[0].src}
          alt={data.name}
          className=' w-[8rem] '
        />
        {/* <h3 className=' text-[.75rem] font-[600] text-center w-fit ' >{data.name}</h3> */}
      </div>

      {/* <h2 className=' text-[1rem] font-bold text-center line-clamp-1 ' >{data.field}</h2> */}
      {/* <p className=' text-opacity-[.8] text-[.85rem] text-center line-clamp-3  ' >{data.desc}</p> */}
    </div>
  )
}

export default PartnerCard
