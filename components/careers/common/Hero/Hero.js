"use client"
import React from 'react'
import Image from "next/image";
import { CareersHero1 } from "@/public/assetManager";
import "./hero.css"

const CareerHeroSection = () => {
  return (
    <div className="w-[100%] h-full">
    {/* Hero Image */}
    <div className="relative flex w-full justify-center">
      <div className="text-white gradient base-z-index mt-16 w-[84vw] h-[55vh] rounded-3xl">
        <div className="flex flex-col base-z-index font-montserrat ml-16 mt-24 text-[#c6c6c6] w-[35vw]">
          <span className="text-5xl font-bold">YuvaCracy Careers</span>
          <span className="text-xl font-sans mt-6 ">
            Lorem ipsum dolor sit amet consectetur. Semper velit aliquam amet
            nisl lectus. Integer quis et in vitae nibh nisl. Massa morbi dolor
            turpis faucibus enim nam. Augue cras posuere sed diam.
          </span>
        </div>
      </div>
      <Image
        className="w-[84vw] h-[55vh] my-16 select-none"
        alt="Yuvacracy is a youth led organization"
        src={CareersHero1}
      />
    </div>
    </div>
  )
}

export default CareerHeroSection