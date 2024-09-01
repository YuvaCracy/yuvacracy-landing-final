import React from 'react'
import CustomTitle from '@/components/common/CustomTitile'
import Image from 'next/image'
import { GetInvolvedImage } from '@/public/assetManager'
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';


const HomeGetInvolved = () => {
  return (
    <div className=' w-[100%] flex justify-center xl:px-[8rem] px-[6rem] mt-[8rem] h-[22rem]  ' >
      <div className='rounded-[.9rem] relative  bg-primary  w-[100%] flex justify-between  ' >

        <div className='flex flex-col  w-[50%] pl-[4.5rem] py-[2.5rem]  ' >
          <div>
            <div className="flex py-8 pt-2">
              <div>
                <span className="text-3xl font-bold text-[#E0E0E0] font-montserrat">{"Get Involved"}</span>
                <div className="flex items-center py-2">
                  <div className="h-[0.3rem] max-w-[50%]  bg-[#E0E0E0] flex-grow mt-1 mr-2" />
                </div>
              </div>
            </div>
          </div>
          <p className=' text-[#DDD] font-openSans  ' >Your support is vital to our mission. Whether you choose to donate, volunteer, or partner with us, your involvement helps us continue to empower young leaders.</p>
          <Link href={'/get-involved'} className='mt-[3rem] bg-white text-primary flex items-center gap-[.3rem] rounded-md font-montserrat font-[600]  px-[2.5rem] py-[.5rem] w-fit '>Learn More <MdOutlineArrowOutward /> </Link>
        </div>

        <div className='' >
          <Image
            src={GetInvolvedImage}
            alt='get Involved'
            className=' w-[20rem] '
          />

        </div>


      </div>

    </div>
  )
}

export default HomeGetInvolved
