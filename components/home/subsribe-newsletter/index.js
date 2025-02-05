'use client'

import React, { useState } from 'react'
import CelebrateAnimation from '@/components/animation/CelebrateAnimation';
import { BsBookmarkCheckFill } from "react-icons/bs";



const HomeSubsribeNewsLetter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Email: ${email}`);
    setIsSubscribed(true);
  };

  return (
    <div className='w-[100%] flex justify-center xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] mt-[8rem] lg:h-[23rem] h-[30rem] '>
      <div className="w-[100%] relative overflow-hidden lg:h-[23rem] h-[30rem] flex flex-col items-center justify-center p-[2rem] bg-primary rounded-xl">
        <div className='lg:size-[16rem] size-[12rem] absolute rounded-full bg-transparent border-[4px] border-white top-[-9rem] left-[-9rem] border-opacity-[.4]' />
        <div className='lg:size-[16rem] size-[12rem] absolute rounded-full bg-transparent border-[4px] border-white bottom-[-9rem] right-[-9rem]' />

        {!isSubscribed ? (
          <div className='flex flex-col md:block ' >
            <h2 className="text-[#E0E0E0] md:text-[2.5rem]  text-[2rem] font-montserrat font-[600] text-center">Subscribe to our Newsletter</h2>
            <p className="mt-[.5rem] md:text-[1.04rem] text-[.95rem]  font-openSans text-center text-[#B3B3B3]">Subscribe to our newsletter for the latest updates and events.</p>

            <form onSubmit={handleSubmit} className="flex md:flex-row flex-col items-center justify-center gap-[1rem] mt-[3rem]">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full px-[1rem] py-[.5rem] text-white border-white border-[1px] rounded-md outline-none bg-primary"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-[1rem] py-[.5rem] text-white border-white border-[1px] rounded-md outline-none bg-primary"
                required
              />
              <button
                type="submit"
                className="flex px-[1.5rem] py-[.5rem] font-montserrat font-[500] text-blue-900 bg-white rounded-md text-nowrap active:scale-[.9] duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <CelebrateAnimation />
            <div className="relative z-20 flex flex-col items-center">
              <div className=" text-green-500 flex justify-center items-center size-[5.5rem]     ">
                <BsBookmarkCheckFill className=' text-[4.5rem] w-full rounded-full z-[2] ' />
                <div className=' absolute z-[1] size-[2.2rem]  bg-white ' >

                </div>
              </div>
              <h2 className="text-[#E0E0E0] text-[2.5rem] font-montserrat font-[600] text-center">Congrats!</h2>
              <p className="mt-[.5rem] text-[1.04rem] font-openSans text-center text-[#B3B3B3]">You have successfully subscribed to our newsletter.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeSubsribeNewsLetter;
