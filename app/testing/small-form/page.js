'use client'
import React from 'react'
import GoogleForm from '@/components/common/google-forms'
import PromotionalContent from '@/components/home/promotional'
import MainNav from '@/components/common/Navbar/MainNav'
import Footer from '@/components/common/Footer'

const TestForm1 = () => {
  const formData = [
    {
      id: "1FAIpQLSc6mLirUNmSq9sb4X-TfB4VG4qAR5uqLgHt2p0GSK569gUYRg",
      customStyles: " w-[100%] h-[calc(100vh-4rem)]  overflow-y-scroll         "
    },
    {
      id: "1FAIpQLSe9dQyQaoKzLUoT9MUUuD5p2VymRr022SSzLuSeGZI_XR7ynA",
      customStyles: " w-[100%] h-[calc(100vh-4rem)]  overflow-y-scroll       "
    }
  ]
  return (
    <div className=' h-[100vh] overflow-hidden' >
      {/* <PromotionalContent /> */}
      <MainNav />
      <div className='flex justify-center ' >
        <GoogleForm id={formData[1].id} styles={formData[1].customStyles} />
      </div>
      {/* <Footer /> */}

    </div>
  )
}

export default TestForm1
