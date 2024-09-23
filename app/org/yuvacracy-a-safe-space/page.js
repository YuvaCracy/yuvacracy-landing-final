'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'


const YuvaCracySafePlace = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "YuvaCracy – A SAFE SPACE"
          }}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "At YuvaCracy, we are committed to fostering a work environment where every employee is treated with dignity, respect, and fairness. Our goal is to create a professional atmosphere that encourages growth, equal opportunities, and ensures that no employee is subjected to any form of harassment. To uphold this, **YuvaCracy enforces a zero-tolerance policy against sexual harassment for all members of our community, as well as for any visitors to our premises.**"
          }}
          styles=' text-[1rem] '
        />
      </div>

      {/* <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Creating a Safe and Supportive Community'}
          small={true}
        />
        <Para
          data={{
            para: "Social media is an incredible tool for connection and change, but it comes with its own set of responsibilities. At YuvaCracy, we understand the power of online Safety is more than just a word at YuvaCracy—it’s a commitment we make to each and every member of our community. We are dedicated to ensuring that all our spaces, whether physical or virtual, are safe, welcoming, and inclusive for everyone.platforms and are committed to using them wisely. Our Social Media Advisory is here to guide our community in maintaining a respectful and positive online presence."
          }}
        />
      </div> */}


      <div className=' mt-[2rem] ' >
        {/* <CustomTitle
          title={'Our Safety Promise'}
          small={true}
        /> */}
        <Para
          data={{
            para: "Sexual harassment is conduct that may be reasonably perceived by the victim as sexually unwelcome, and includes any one or more of the following acts or behaviour (whether directly or by implication):"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Unwelcome sexual advances",
                },
                {
                  head: "Unwelcome acts of physical intimacy",
                },
                {
                  head: "Requests for sexual favours",
                },
                {
                  head: "Making sexually coloured remarks",
                },
                {
                  head: "Showing pornography",
                },
              ]
            }
            styles='  '
            ordered={false}
          />
        </div>
      </div>
      <div className=' mt-[1rem] ' >
        {/* <CustomTitle
          title={'Our Safety Promise'}
          small={true}
        /> */}
        <Para
          data={{
            para: "Any other unwelcome physical, verbal or non-verbal conduct of sexual nature, including:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Implied or overt promise of preferential treatment in employment; or",
                },
                {
                  head: "Implied or overt threat of detrimental treatment in employment; or",
                },
                {
                  head: "Implied or overt threat about present or future employment status; or",
                },
                {
                  head: "Conduct of any person which interferes with work; or",
                },
                {
                  head: "Creating an intimidating or offensive or hostile work environment; or",
                },
                {
                  head: "Humiliating conduct constituting health and safety problems.",
                },
              ]
            }
            styles='  '
            ordered={false}
          />
        </div>
      </div>


      <div className=' mt-[2rem] ' >
        {/* <CustomTitle
          title={'Building a Culture of Safety'}
          small={true}
        /> */}
        <Para
          data={{
            para: "Sexual harassment may be committed by any oral, written, or physical means, and through any physical or virtual media, including (but not limited to) the following: comments, remarks, jokes, letters, drawings, figures, numericals, doodles or cartoons, phone calls, emails, chats on any electronic medium, gestures, lurid stares, physical contact, stalking, sounds or display of a derogatory nature."
          }}
        />
        <Para
          data={{
            para: `" YuvaCracy recognises that sexual harassment may be experienced by any individual, irrespective of their gender identity or sexual orientation. "`
          }}
          styles=' mt-[1rem] font-[600]   p-[1rem] bg-gray-100/40 border-[1px] text-primary rounded-md '
        />
        <Para
          data={{
            para: `Inebriation is not a defence for engaging in any conduct that amounts to sexual harassment. YuvaCracy has a clear policy for dealing with any reported instances of sexual harassment, including internal disciplinary measures as well as initiating appropriate civil and criminal legal action. **YuvaCracy has constituted an Internal Complaints Committee**, also known as **YuvaCracy Grievance Cell** under **section 4 of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.**`
          }}
          styles='mt-[1rem]  '
        />
        <Para
          data={{
            para: `In case you feel that you are a victim of sexual harassment at YuvaCracy, please contact any member of the Internal Complaints Committee. Alternatively, you can email your complaint to <grievances-yuvacracy@googlegroups.com>. We will help you out and guide you through the necessary procedures including counselling, and will explain the informal and formal means available for resolving the matter. Remember that you are entitled to your dignity as an individual and sexual harassment is a violation of your dignity and bodily integrity. All proceedings are carried out with the strictest confidentiality and with a view to enabling you to feel safe and secure.\n\n**We hope you have a safe stay at YuvaCracy, and encourage you to respect other individuals’ space, privacy and dignity**.`
          }}
          styles='mt-[1rem]'
        />
        {/* <div className=' mt-[.5rem] ' >
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
        </div> */}

        {/* <div className=' mt-[.5rem] ' >
          <Para
            data={
              {
                para: "By fostering a culture of respect, inclusion, and care, we ensure that YuvaCracy remains a place where everyone can grow, connect, and thrive without fear."
              }
            }
          />
        </div> */}


        <div className=' w-full flex flex-col gap-[.8rem] mt-[4rem] ' >

          <h3 className='  font-openSans font-[700] text-[1.4rem] ' >Read Also</h3>
          <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/social-media-advisory'}>
            YuvaCracy Social Media Advisory{" "}
          </Link>
          <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/code-of-conduct'}>
            YuvaCracy Code of Conduct{" "}
          </Link>


        </div>


      </div>

    </div>
  )
}

export default YuvaCracySafePlace