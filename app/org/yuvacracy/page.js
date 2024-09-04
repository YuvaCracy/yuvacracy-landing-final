'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import Image from 'next/image'
import { YuvaCracyAboutImage1 } from '@/public/assetManager'
const YuvaCracyPage = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex justify-center mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "About Yuvacracy"
          }}
          styles=' uppercase '
        />
      </div>

      <div className='flex justify-center w-[100%]  mt-[3rem]  ' >
        <div className=' flex justify-end w-[calc(100%-26rem)]  ' >

          <Image
            src={YuvaCracyAboutImage1}
            alt='Yuvacracy'
            className=' max-w-[75%] min-w-[30rem] '
          />
        </div>
        <div className='flex flex-col  justify-center w-[33rem] font-openSans ' >
          <div className=' w-[33rem] p-[1.5rem] ml-[-7rem] rounded-md flex flex-col gap-[1rem] bg-primary  text-white ' >
            <h3 className=' opacity-[.6] text-[.95rem] ' >Our Story</h3>
            <h2 className=' font-[800] text-[2.3rem] ' >Who We Are</h2>
            <p className=' opacity-[.7] text-[.95rem] ' >YuvaCracy was founded with a vision to empower young people across India to become proactive, informed, and engaged citizens. We believe that the future of our country lies in the hands of our youth, and we are committed to providing them with the tools, resources, and opportunities they need to make a difference.</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default YuvaCracyPage