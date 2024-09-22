'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import Link from 'next/link'



const CodeOfConduct = () => {
  return (
    <div className=' mt-[2rem] ' >
      <div className=' my-[1.5rem]  ' >
        <BreadCrumbs />
      </div>

      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "Code of Conduct"
          }}
          styles=' uppercase '
        />

        <Para
          data={
            {
              para: "At YuvaCracy, we are deeply committed to fostering an inclusive, respectful, and safe environment for everyone who engages with our community—whether online or in person. This Code of Conduct outlines our expectations for behaviour and the steps we will take to address any violations. We believe that by adhering to these guidelines, we can create a supportive and collaborative space where everyone feels valued and empowered."
            }
          }
          styles={` text-[1rem]  `}

        />

      </div>

      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Inclusivity and Respect'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy is a platform that celebrates diversity and inclusion. We welcome participants from all backgrounds and walks of life, and we expect everyone to:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Treat Others with Respect:",
                  desc: "Engage with others in a considerate and respectful manner. This includes being mindful of your language, tone, and the impact of your words."
                },
                {
                  head: "Value Diversity:",
                  desc: "Embrace and respect differences in gender, gender identity, sexual orientation, nationality, ethnicity, religion, age, ability, and perspectives. "
                }
              ]
            }
            styles='  '

          />
        </div>
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Anti-Harassment Policy'}
          small={true}
        />
        <Para
          data={{
            para: "Harassment of any kind is strictly prohibited at YuvaCracy. This includes, but is not limited to:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Discriminatory Behavior:",
                  desc: "Any form of discrimination or offensive comments related to gender, sexual orientation, nationality, ethnicity, religion, disability, or any other personal characteristic."
                },
                {
                  head: "Sexual Harassment:",
                  desc: "This includes unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature. "
                },
                {
                  head: "Unwanted Physical Contact:",
                  desc: "Any non-consensual physical interaction."
                },
                {
                  head: "Violence and Threats:",
                  desc: "Any form of intimidation, threats, or acts of violence."
                },
                {
                  head: "Inappropriate Content:",
                  desc: "Sharing or displaying offensive images, videos, or other media.You are also expected to follow the guidelines mentioned under the  <https://www.yuvacracy.org/org/yuvacracy-a-safe-place>"
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
          title={'Participation and Conduct'}
          small={true}
        />
        <Para
          data={{
            para: "We expect all members of the **YuvaCracy community** to conduct themselves with professionalism and integrity. This includes:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Engagement:",
                  desc: "Actively participate in events and discussions, respecting the format and rules set by organizers."
                },
                {
                  head: "Dress Code:",
                  desc: "Dress appropriately for the setting, whether it's a formal event or a casual meeting. "
                },
                {
                  head: "Substance Use:",
                  desc: "Follow all local laws regarding alcohol and drug use. Illegal substances are not permitted, and alcohol should be consumed responsibly."
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
          title={'Reporting Violations'}
          small={true}
        />
        <Para
          data={{
            para: "If you experience or witness any behavior that violates this Code of Conduct, we encourage you to report it immediately. Here’s how:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Contact an Organizer:",
                  desc: "Speak to a **YuvaCracy Member** or event organizer in person or via email."
                },
                {
                  head: "Anonymous Reporting:",
                  desc: "If you prefer, you can submit an anonymous report via our online form or through a written complaint."
                },
              ]
            }
            styles='  '
            ordered={false}
          />

          <div className=' mt-[.5rem] ' >
            <Para
              data={
                {
                  para: "All reports will be taken seriously and handled with confidentiality. We are committed to addressing all concerns promptly and fairly."
                }
              }
            />
          </div>
        </div>
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Consequences of Violations'}
          small={true}
        />
        <Para
          data={{
            para: "Violations of this Code of Conduct may result in:"
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {
                  head: "Warnings:",
                  desc: "A verbal or written warning from an organizer."
                },
                {
                  head: "Expulsion:",
                  desc: "Immediate removal from an event or the YuvaCracy community, if found guilty."
                },
                {
                  head: "Reporting to Authorities:",
                  desc: "In severe cases, violations may be reported to law enforcement or other relevant authorities."
                },
                {
                  head: "Disqualification:",
                  desc: "If you are found in violation of our code of conduct or sexual harassment policies, you will be permanently barred from any future association with our organization and will not be allowed to rejoin under any circumstances."
                }
              ]
            }
            styles='  '
            ordered={false}
          />
        </div>
      </div>


      <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Commitment to Safety'}
          small={true}
        />
        <Para
          data={{
            para: "Your safety is our priority. We encourage everyone to look out for each other and to notify us if they see anything concerning. Weapons, violence, or organized disruptions are not permitted at any **YuvaCracy event.**"
          }}
        />
      </div>

      <div className=' w-full flex flex-col gap-[.8rem] mt-[4rem] ' >

        <h3 className='  font-openSans font-[700] text-[1.4rem] ' >Read Also</h3>
        <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/social-media-advisory'}>
          YuvaCracy Social Media Advisory{" "}
        </Link>
        <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/yuvacracy-a-safe-place'}>
          YuvaCracy – A Safe Space{" "}
        </Link>


      </div>


      {/* <div className=' mt-[2rem] ' >
        <CustomTitle
          title={'Our Responsibility'}
          small={true}
        />
        <Para
          data={{
            para: "YuvaCracy is committed to continuously improving our Code of Conduct to ensure it reflects our values and meets the needs of our community. We will provide updates and guidance as needed, and we welcome feedback from all participants."
          }}
        />
      </div> */}





    </div>
  )
}

export default CodeOfConduct
