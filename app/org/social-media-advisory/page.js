'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
const SocialMediaAdvisory = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "Yuvacracy Social Media Advisory"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "At YuvaCracy, we recognize the immense power of social media as a tool for connection, empowerment, and positive change. However, with this power comes the responsibility to engage thoughtfully and respectfully in the digital space. Our Social Media Advisory is designed to guide our community in maintaining a constructive and safe online presence. By promoting respectful communication, thoughtful posting, and responsible sharing, we aim to foster an environment where everyone can express themselves freely while contributing to positive and meaningful conversations."
          }}
          styles=' text-[1rem] '
        />
      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Navigating the Digital World with Responsibility'}
          small={true}
        />
        <Para
          data={{
            para: "Social media is an incredible tool for connection and change, but it comes with its own set of responsibilities. At YuvaCracy, we understand the power of online platforms and are committed to using them wisely. Our Social Media Advisory is here to guide our community in maintaining a respectful and positive online presence."
          }}
        />
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Guidelines for Positive Engagement'}
          small={true}
        />
        <Para
          data={{
            para: "We encourage everyone in the YuvaCracy community to follow these simple but important guidelines when engaging on social media:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Respectful Communication:",
                  desc: "Treat everyone with respect, regardless of differences in opinions or perspectives. Remember, our words have power—use them wisely."
                },
                {
                  head: "Thoughtful Posting:",
                  desc: "Before hitting the \"post\" button, consider the impact of your message. Is it helpful? Is it kind? Does it contribute to a positive conversation?"
                },
                {
                  head: "Responsible Sharing:",
                  desc: "Share information that is accurate and constructive. Avoid spreading misinformation or engaging in harmful debates."
                },
              ]
            }
            styles='  '
            ordered={false}

          />
        </div>
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Our Commitment to a Safe Online Space'}
          small={true}
        />
        <Para
          data={{
            para: "We are committed to ensuring that our social media channels are safe spaces where everyone can express themselves freely and without fear of harassment. If you experience or witness any inappropriate behavior online, please report it to us immediately. We are here to support you and will take swift action to address any concerns."
          }}
        />
      </div>

    </div>
  )
}

export default SocialMediaAdvisory