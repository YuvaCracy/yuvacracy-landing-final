import React, { useState, useEffect } from 'react'
import CustomTitle from '@/components/docs/CustomTitle'
import recentContributionData from './recentContributionData'
import RecentContributionCard from './RecentContributionCard'

const HomeRecentContribution = () => {
  const [visibleCards, setVisibleCards] = useState(3); // default to 3 cards

  useEffect(() => {
    const updateVisibleCards = () => {
      const containerWidth = window.innerWidth - 16 * 2 * 8;
      const cardWidth = 368;
      const gapBetweenCards = 24;

      const totalCardWidth = cardWidth + gapBetweenCards;
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
    <div className='w-[100%] mt-[8rem]'>
      <CustomTitle title={recentContributionData.title} subtitle={recentContributionData.subheading} />

      <div className='flex flex-nowrap gap-[1.5rem] mt-[2rem]'>
        {recentContributionData.list && recentContributionData.list.slice(0, 3).map((data, index) => {
          return (
            <RecentContributionCard key={index} data={data} />
          )
        })}
      </div>
    </div>
  )
}

export default HomeRecentContribution;
