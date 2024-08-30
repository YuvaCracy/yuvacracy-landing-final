import React from 'react'
import CustomTitle from '@/components/common/CustomTitile'
import eventData from '../data/EventData'
import EventCard from '../common/EventCard'

const HomeEventsComponent = () => {
  return (
    <div className=' w-[100%] px-[8rem]  ' >

      <CustomTitle title='Upcoming Events' />
      <p className=' text-subheading font-openSans' >Explore our upcoming events designed to immerse you in a world of learning and connection. Engage with renowned thought leaders who are shaping the future across various industries, and gain valuable insights that will inspire your personal and professional growth.</p>
      {/* Event cards */}

      <div className='flex flex-wrap gap-[3.5rem]  mt-[2rem]  ' >

        {eventData && eventData.slice(0, 3).map((data, index) => {
          return (
            <EventCard key={index} data={data} />
          )
        })}
      </div>


    </div>
  )
}

export default HomeEventsComponent
