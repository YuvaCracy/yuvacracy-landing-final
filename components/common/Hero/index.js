import Image from 'next/image'
import React from 'react'
import "./hero.css"

const SubHero = ({ title, subtitle, img }) => {
  return (
    <div className="w-[100%] h-full">
      {/* Hero Image */}
      <div className="relative flex justify-center w-full">
        <div className="text-white gradient base-z-index mt-16 w-[84vw] h-[55vh] rounded-3xl">
          <div className="flex flex-col base-z-index font-montserrat ml-16 mt-24 text-[#c6c6c6] w-[50%]">
            <span className="text-5xl font-bold">{title}</span>
            <span className="text-xl font-sans mt-6 w-[80%]">
              {subtitle}
            </span>
          </div>
        </div>
        <Image
          className="w-[84vw] h-[55vh] my-16 select-none pointer-events-none select-none"
          alt="Yuvacracy is a youth led organization"
          src={img}
        />
      </div>
    </div>
  )
}

export default SubHero