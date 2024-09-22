'use client'
import React from 'react'
import DevModeOn from '@/components/DevModeOn'
import Para from '@/components/docs/para'
import CustomTitle from '@/components/docs/CustomTitle'
import Heading from '@/components/docs/Heading'
import BreadCrumbs from '@/components/common/BreadCrumbs'
import List from '@/components/docs/list'
import Link from 'next/link'
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
            para: "At YuvaCracy Foundation, we recognize the immense power of social media as a tool for connection, empowerment, and positive change. However, with this power comes the responsibility to engage thoughtfully and respectfully in the digital space. Our Social Media Advisory is designed to guide our community in maintaining a constructive and safe online presence. By promoting respectful communication, thoughtful posting, and responsible sharing, we aim to foster an environment where everyone can express themselves freely while contributing to positive and meaningful conversations."
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
            para: "YuvaCracy Foundation encourages the responsible, fair, and secure use of social media by all its members. \n\nAs the social media plays a key role in promoting the organization’s events, publications, and initiatives, the organization would like to highlight few key principles and practices that each member should keep in mind to safeguard and enhance both the organization’s reputation and their own public image and career. "
          }}
        />
        <div className=' mt-[.5rem] ' >
          <List
            items={
              [
                {

                  desc: "Ensure that your social networking, which is primarily your personal space, does not negatively impact you or the organization. Even if you include disclaimers stating that your account is personal, your online actions and statements can directly and unavoidably affect the organization by association."
                },
                {

                  desc: "Your behaviour online should mirror the same standards of conduct expected offline. If a message would be inappropriate in face-to-face conversations, phone calls, or other such mediums, it is equally inappropriate on social media. Any form of abusive personal attacks, threats of violence, or harm will not be tolerated. You are also expected to follow the guidelines mentioned under the  YuvaCracy – A Safe Space."
                },
                {
                  desc: "Although your social media accounts are personal, they are not “private” spaces. Unlike text messages or WhatsApp chats shared with a limited audience, your posts are more public. Therefore, your online interactions should maintain a standard of basic civility. Personal insults and attacks aimed at individuals or organizations are unacceptable. Take a moment to think before posting, and avoid responding impulsively or spontaneously."
                },
                {
                  desc: "There is a distinction between light-hearted banter and harmful trolling. What you share on social media should be approached with the seriousness the platform requires. Tone and language on social media reflect and influences attitudes, behaviour and perceptions of users. Those associated with the **YuvaCracy Group** must avoid using language that could be considered hate speech or discriminatory, whether based on ethnicity, religion, ideology, gender, or sexual orientation."
                },
                {
                  desc: "Social media is a public platform, and careless posts can damage both your personal reputation and your standing as a valued member of the **YuvaCracy Team**. When used wisely, social media can be a powerful tool for expanding your network. Keep in mind that potential partners and collaborators are influenced not only by the quality of your work but also by your online behaviour."
                },
                {
                  desc: "Advisers and content contributors to the YuvaCracy Foundation and its platforms are expected to adhere to these norms regarding the use of social media. A review committee, consisting of senior fellows, will handle any complaints regarding these matters. The organization reserves the right to take disciplinary action in line with its policies, which may include disassociating from individuals who violate these guidelines and removing their work from circulation."
                },
              ]
            }
            styles=' my-[.5rem] '
            ordered={true}

          />
        </div>
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

      <div className=' w-full flex flex-col gap-[.8rem] mt-[4rem] ' >

        <h3 className='  font-openSans font-[700] text-[1.4rem] ' >Read Also</h3>
        <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/social-media-advisory'}>
          YuvaCracy Social Media Advisory{" "}
        </Link>
        <Link className="flex items-center font-[500] text-blue-800 font-openSans underline " href={'/org/code-of-conduct'}>
          YuvaCracy Code of Conduct{" "}
        </Link>


      </div>


      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "GENERAL INFORMATION"
          }}
          small={true}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "**Our Policy:** While we strive to ensure the accuracy of the information we share, the Foundation cannot guarantee the truthfulness, accuracy, or validity of any comments posted to its social media outlets (YouTube Channel, Blogs, Social Media Networks, Message Boards/Forums, etc.). \n\n**Warning:** People must not post any content that is obscene, defamatory, profane, libelous, threatening, harassing, abusive, hateful or embarrassing to any person or entity. The YuvaCracy Foundation reserves the right to delete or edit any comments that it considers inappropriate or unacceptable. \n\n**Note:** \"Yuvacracy\" and \"Yuvacracy Foundation\" are name(s) registered with the YuvaCracy Foundation. We reserve the exclusive right to their use, and any unauthorized usage may result in legal consequences."
          }}
          styles=' text-[1rem] mt-[2rem] '
        />
      </div>


      <div className='flex flex-col mt-[4rem] gap-[.5rem]  ' >
        <Heading
          data={{
            head: "OUR OFFICIAL SOCIAL MEDIA HANDLES"
          }}
          small={true}
          styles=' uppercase '
        />
        <Para
          data={{
            para: "**YuvaCracy Foundation's Website:** <https://www.yuvacracy.org> \n**Facebook:** <https://www.facebook.com/YuvaCracyOrg> \n**Instagram:** <https://www.instagram.com/YuvaCracyOrg> \n**Twitter:** <https://www.twitter.com/YuvaCracyOrg> \n**YouTube:** <https://www.youtube.com/@YuvaCracyOrg> \n**LinkedIN:** <https://in.linkedin.com/company/YuvaCracyOrg> \n**Medium:** <https://medium.com/@YuvaCracyOrg/> \n**LinkTree:** <https://www.linktr.ee/YuvaCracy>  "
          }}
          styles=' text-[.8rem] font-[500]  mt-[2rem] overflow-clip '
        />
      </div>

    </div>
  )
}

export default SocialMediaAdvisory