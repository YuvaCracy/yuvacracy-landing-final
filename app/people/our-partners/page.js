'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import partnerData from '@/components/about/people/partner/partnerData'
import PartnerCard from '@/components/about/people/partner/PartnerCard'



const Partner = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "our Partners"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "YuvaCracy thrives through the strong, collaborative relationships we have built with our partners. These organizations and individuals share our vision for a more connected, empowered, and inclusive community. Our partners bring diverse perspectives, resources, and expertise that enhance our ability to make a meaningful impact. Together, we work hand-in-hand to develop innovative initiatives, expand our reach, and create opportunities that benefit everyone in our community. We are grateful for their ongoing support and are committed to growing these partnerships as we continue to pursue our shared goals."
          }}
          styles=' text-[1rem] '
        />
      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Building a Stronger Future Together'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy’s impact is magnified by the incredible partnerships we’ve forged with organizations across the globe. Our partners include non-profits, educational institutions, corporate sponsors, and government agencies, all of whom share our commitment to empowering youth and fostering positive change. Together, we are building a network of support that amplifies our efforts and extends our reach."
          }}
        />
        <div className=' mt-[2.5rem] flex flex-wrap  gap-[2rem] ' >
          {
            partnerData.map((data, index) => {
              return (
                <PartnerCard
                  key={index}
                  data={data}
                />
              )
            })
          }
        </div>
      </div>





      <div className=' mt-[4rem] ' >
        <CustomTitle
          title={'Why Partner with YuvaCracy?'}
          small={true}
        />
        <Para
          data={{
            para: "Partnering with YuvaCracy offers a unique opportunity to contribute to a global movement of youth empowerment. Our partners benefit from:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Shared Impact:",
                  desc: "Collaborate on projects that create lasting change in communities worldwide."
                },
                {
                  head: "Brand Alignment:",
                  desc: "Align your organization with a cause that resonates with your values and mission."
                },
                {
                  head: "Access to Youth Networks: ",
                  desc: "Engage directly with young leaders who are passionate about creating positive change."
                },
              ]
            }
            styles='  '
            ordered={false}

          />
        </div>

        <div className=' mt-[.5rem] ' >
          <Para
            data={{
              para: "We are always looking for new partners who share our vision. If your organization is interested in partnering with YuvaCracy, we’d love to hear from you."
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Partner