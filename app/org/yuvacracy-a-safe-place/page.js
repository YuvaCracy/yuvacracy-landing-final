'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'


const YuvaCracySafePlace = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "Yuvacracy - A Safe Place"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "At YuvaCracy, we are dedicated to creating a welcoming and secure environment for everyone in our community. We believe that every individual deserves a space where they can express their thoughts, share their experiences, and connect with others without fear of judgment or harassment. YuvaCracy is more than just a platform—it's a safe place where respect, empathy, and inclusivity are at the forefront. We are committed to upholding these values and ensuring that our community remains a positive and supportive haven for all. Your voice matters here, and together, we can build a space where everyone feels valued and protected."
          }}
          styles=' text-[1rem] '
        />
      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Creating a Safe and Supportive Community'}
          small={true}
        />
        <Para
          data={{
            para: "Social media is an incredible tool for connection and change, but it comes with its own set of responsibilities. At YuvaCracy, we understand the power of online Safety is more than just a word at YuvaCracy—it’s a commitment we make to each and every member of our community. We are dedicated to ensuring that all our spaces, whether physical or virtual, are safe, welcoming, and inclusive for everyone.platforms and are committed to using them wisely. Our Social Media Advisory is here to guide our community in maintaining a respectful and positive online presence."
          }}
        />
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Our Safety Promise'}
          small={true}
        />
        <Para
          data={{
            para: "At YuvaCracy, your well-being is our top priority. We have established clear guidelines and protocols to ensure that every member of our community feels safe and supported. Our safety promise includes:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Zero Tolerance for Harassment:",
                  desc: "We take a firm stand against all forms of harassment and discrimination. Whether it’s in-person or online, we do not tolerate any behavior that undermines the safety and dignity of our members."
                },
                {
                  head: "Confidential Support:",
                  desc: " If you ever feel uncomfortable or unsafe, know that you can reach out to us confidentially. We are here to listen, support, and take appropriate action."
                },
                {
                  head: "Inclusive Environment:",
                  desc: "We celebrate diversity and strive to create an environment where everyone, regardless of their background, feels valued and respected."
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
          title={'Building a Culture of Safety'}
          small={true}
        />
        <Para
          data={{
            para: "Safety is a collective responsibility, and at YuvaCracy, we believe that everyone plays a role in creating a secure environment. Here’s how we work together to ensure safety:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Clear Guidelines:",
                  desc: "We provide clear and comprehensive guidelines on expected behavior, ensuring that everyone knows what is acceptable and what is not."
                },
                {
                  head: "Proactive Measures:",
                  desc: "We regularly update our safety protocols and conduct training to ensure that our team is well-equipped to handle any situation."
                },
                {
                  head: "Open Communication:",
                  desc: "We encourage open dialogue about safety concerns and are committed to addressing any issues promptly and effectively."
                },
              ]
            }
            styles='  '
            ordered={false}

          />
        </div>

        <div className=' mt-[.5rem] ' >
          <Para
            data={
              {
                para: "By fostering a culture of respect, inclusion, and care, we ensure that YuvaCracy remains a place where everyone can grow, connect, and thrive without fear."
              }
            }
          />
        </div>
      </div>

    </div>
  )
}

export default YuvaCracySafePlace