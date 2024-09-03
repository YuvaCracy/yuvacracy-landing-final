'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import advisorData from '@/components/about/people/advisor/advisorData'
import AdvisorCard from '@/components/about/people/advisor/AdvisorCard'
const Advisor = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "Our Advisors"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "At YuvaCracy, we are proud to be guided by a diverse team of advisors who bring a wealth of knowledge, experience, and insight to our community. Our advisors are leaders in their respective fields, dedicated to fostering growth, innovation, and positive change. They provide invaluable guidance and support, helping us to navigate challenges and seize opportunities. With their expertise and commitment, our advisors play a crucial role in shaping the direction of YuvaCracy, ensuring that we remain true to our mission of empowering individuals and creating a vibrant, inclusive community."
          }}
          styles=' text-[1rem] '
        />
      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Guiding Our Vision with Expertise'}
          small={true}
        />
        <Para
          data={{
            para: "At YuvaCracy, we are fortunate to have a panel of distinguished advisors who bring a wealth of knowledge, experience, and insight to our mission. These individuals have been instrumental in shaping our programs and ensuring that we remain aligned with our core values of empowerment, inclusivity, and innovation. Our advisors come from diverse fields, including education, social entrepreneurship, technology, and policy-making, and each one plays a crucial role in guiding our strategic direction."
          }}
        />
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Meet our Advisors'}
          small={true}
        />

        <div className=' mt-[1.5rem] flex flex-col gap-[2rem] ' >
          {
            advisorData.map((data, index) => {
              return (
                <AdvisorCard
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
          title={'Our Advisors Role in the YuvaCracy Foundation'}
          small={true}
        />
        <Para
          data={{
            para: "Our advisors are not just figureheads; they are active participants in YuvaCracy’s growth and development. They:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Provide Strategic Guidance:",
                  desc: "Ensuring our programs and initiatives are impactful and aligned with our mission."
                },
                {
                  head: "Offer Expertise:",
                  desc: "Bringing specialized knowledge in areas such as education, policy, social innovation, and technology."
                },
                {
                  head: "Mentor and Support: ",
                  desc: "Offering personal mentorship to our leadership team and young leaders involved in our programs."
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
              para: "We are deeply grateful for the continued support and guidance of our advisors, who help us create a brighter future for young leaders everywhere."
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Advisor