'use client'
import React from 'react'
import EventLayout from '../Layout'
import CustomTitle from '@/components/common/CustomTitile'
import HomeEventsComponent from '@/components/events/HomeEventsComponent'
const PastEvents = () => {
  return (
    <EventLayout>
      <div className='xl:px-[8rem] px-[6rem] py-20 flex flex-col'>
        <CustomTitle title={"Past Events"} subtitle={"By YuvaCracy"} />
        <span className=' text-textSecond font-openSans text-md'>Explore our past events to engage with leading experts and gain fresh insights into critical issues. These events offer a unique opportunity to connect with thought leaders, exchange ideas, and deepen your understanding of important topics. Whether you're looking to learn something new, expand your network, or contribute to meaningful conversations, our past events provide a valuable platform for growth and impact. Join us in revisiting these moments to inspire your journey forward.</span>
      </div>
      <HomeEventsComponent pastEvents={true} />
    </EventLayout>
  )
}

export default PastEvents