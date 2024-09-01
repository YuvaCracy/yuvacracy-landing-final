'use client'
import React from 'react'
import EventLayout from '../Layout'
import HomeEventsComponent from '@/components/events/HomeEventsComponent'
const UpcomingEvents = () => {
  return (
    <EventLayout>
      <div className=" pt-20 flex flex-col">
      <HomeEventsComponent />
      </div>
    </EventLayout>
  )
}

export default UpcomingEvents