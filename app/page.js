'use client'

import React from 'react'
import { useRouter } from 'nextjs-toploader/app'


const AppPage = () => {
  const router = useRouter()
  return (
    <div className=' w-[100%] h-[100vh] flex justify-center items-center bg-black '>
      <div className='' >
        <h1 className=' text-[2rem] font-montserrat text-primary w-fit h-fit' >Hi, I am Abhay</h1>
        <h1 className=' text-[2rem] font-openSans text-primary w-fit h-fit' >Hi, I am Abhay</h1>
        <button onClick={() => router.push('/about')} className='p-4 text-white rounded-md bg-primary' >About me </button>
      </div>

    </div>
  )
}

export default AppPage
