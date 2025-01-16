"use client"
import React from 'react'
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import { ProjectUnderConstruction } from '@/public/assetManager';
import dynamic from 'next/dynamic';


const ProjectsConstructionAnimation = ({ width }) => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-[-3rem] bg-white ' >
      <div className=' w-[28rem]   z-10 z-index-10 ' >
        <DynamicLottie
          animationData={ProjectUnderConstruction}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />
      </div>
      {/* <h2 className=' text-gray-500 mt-[-.7rem]  ' >Projects Under Construction</h2> */}

    </div>
  )
}

export default ProjectsConstructionAnimation
