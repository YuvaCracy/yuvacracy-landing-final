"use client"
import React from 'react'
import Lottie from 'lottie-react';
import { ProjectUnderConstruction } from '@/public/assetManager';


const ProjectsConstructionAnimation = ({ width }) => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-[-3rem] bg-white ' >
      <div className=' w-[28rem]   z-10 z-index-10 ' >
        <Lottie
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
