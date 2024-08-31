'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const HomeSubsribeNewsLetter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Email: ${email}`);
  };

  return (

    <div className=' w-[100%] flex justify-center px-[8rem] mt-[8rem] h-[22rem]  ' >
      <div className="w-[100%] relative overflow-clip h-[23rem] flex flex-col items-center justify-center   bg-primary rounded-xl ">

        <div className=' size-[16rem] absolute rounded-full bg-transparent border-[4px] border-white top-[-9rem] left-[-9rem] border-opacity-[.4]   ' />
        <div className=' size-[16rem] absolute rounded-full bg-transparent border-[4px] border-white bottom-[-9rem] right-[-9rem]   ' />


        <h2 className=" text-[#E0E0E0] text-[2.5rem] font-montserrat font-[600] text-center">Subscribe to our Newsletter</h2>
        <p className="mt-[.5rem] text-[1.04rem] font-openSans text-center text-[#B3B3B3] ">Subscribe to our newsletter for the latest updates and events.</p>

        <form onSubmit={handleSubmit} className="flex   items-center justify-center gap-[1rem] mt-[3rem] ">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="w-full px-[1rem] py-[.5rem] text-white border-white border-[1px] rounded-md outline-none bg-primary "
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
            className="flex px-[1.5rem] py-[.5rem] font-montserrat font-[500]  text-blue-900 bg-white rounded-md text-nowrap active:scale-[.9] duration-300 "
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeSubsribeNewsLetter
