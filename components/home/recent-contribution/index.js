import React from 'react'
import CustomTitle from '@/components/common/CustomTitile'
import recentContributionData from './recentContributionData'
import RecentContributionCard from './RecentContributionCard'

const HomeRecentContribution = () => {
  return (
    <div className=' w-[100%] px-[8rem] mt-[8rem]  ' >

      <CustomTitle title={recentContributionData.title} subtitle={recentContributionData.subheading} />
      {/* <p className=' text-subheading font-openSans' >{recentContributionData.}</p> */}

      <div className='flex flex-wrap gap-[1.5rem]  mt-[2rem]  ' >

        {recentContributionData.list && recentContributionData.list.slice(0, 3).map((data, index) => {
          return (
            <RecentContributionCard key={index} data={data} />
          )
        })}
      </div>


    </div>
  )
}

export default HomeRecentContribution
