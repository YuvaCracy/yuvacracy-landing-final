import React, { useState, useEffect } from 'react'
import CustomTitle from '@/components/common/CustomTitile'
import eventData from '../data/EventData'
import EventCard from '../common/EventCard'

const HomeEventsComponent = () => {
  const [visibleCards, setVisibleCards] = useState(2); // default to 3 cards

  useEffect(() => {
    const updateVisibleCards = () => {
      const containerWidth = window.innerWidth - 16 * 2 * 8; // considering padding (8rem on each side)
      const cardWidth = 352; // Card width (22rem ~ 352px)
      const gapBetweenCards = 56; // Gap between cards (3.5rem ~ 56px)

      const totalCardWidth = cardWidth + gapBetweenCards; // Total width needed per card
      const numberOfCards = Math.floor(containerWidth / totalCardWidth);
      setVisibleCards(Math.max(1, numberOfCards));
    };

    updateVisibleCards(); // Initial check

    window.addEventListener('resize', updateVisibleCards);

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  return (
    <div className='w-[100%] xl:px-[8rem] px-[6rem]'>
      <CustomTitle title='Upcoming Events' />
      <p className='text-subheading font-openSans'>
        Explore our upcoming events designed to immerse you in a world of learning and connection. Engage with renowned thought leaders who are shaping the future across various industries, and gain valuable insights that will inspire your personal and professional growth.
      </p>

      {/* Event cards */}
      <div className='flex flex-nowrap gap-[1.5rem]  mt-[2rem]'>
        {eventData && eventData.slice(0, 3).map((data, index) => {
          return (
            <EventCard key={index} data={data} />
          );
        })}
      </div>
    </div>
  );
};

export default HomeEventsComponent;
