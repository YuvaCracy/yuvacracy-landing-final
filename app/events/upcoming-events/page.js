'use client'
import React from 'react'
import EventLayout from '../Layout'
import HomeEventsComponent from '@/components/events/HomeEventsComponent'
const UpcomingEvents = () => {
  return (
    <EventLayout>
      <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20 flex flex-col">
      <HomeEventsComponent />
      </div>
    </EventLayout>
  )
}

export default UpcomingEvents