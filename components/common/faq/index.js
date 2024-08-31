import React from 'react'
import FaqlistComponent from './FaqlistComponent'
import CustomTitle from '../CustomTitile'

const faqs = [
  {
    question: "What is the Leadership program?",
    answer: "The Leadership program is a comprehensive training course designed to help individuals develop their leadership skills and abilities. It covers various aspects of leadership, including effective communication, team management, decision-making, and strategic thinking. The program is structured to provide both theoretical knowledge and practical experience, allowing participants to apply what they've learned in real-world scenarios. Through interactive workshops, case studies, and one-on-one coaching sessions, participants will gain the confidence and skills needed to lead teams and organizations successfully."
  },
  {
    question: "How can I enroll in the program?",
    answer: "Enrollment in the Leadership program is a straightforward process. To get started, visit our official website and navigate to the 'Programs' section. There, you will find detailed information about the program, including the curriculum, schedule, and fees. To enroll, simply click on the 'Enroll Now' button, which will take you to the registration form. Fill out the required information, including your name, contact details, and professional background. Once you've completed the form, you will be prompted to submit the application along with the payment of the program fee. After your application is processed, you will receive a confirmation email with further instructions on how to access the course materials and join the first session."
  },
  {
    question: "What is the duration of the program?",
    answer: "The Leadership program is designed to be completed over a period of 6 months. During this time, participants will engage in a series of modules that cover essential leadership topics. Each module consists of weekly sessions that include lectures, group discussions, and hands-on activities. The program is designed to be flexible, accommodating the busy schedules of professionals. Participants are expected to dedicate a few hours each week to attend live sessions, complete assignments, and participate in group activities. Additionally, there are periodic assessments to track progress and ensure that participants are mastering the concepts being taught. The program culminates in a final project where participants will demonstrate their leadership skills in a real-world scenario."
  },
  {
    question: "Is there a fee for the program?",
    answer: "Yes, there is a fee associated with the Leadership program. The fee covers all aspects of the program, including access to course materials, live sessions, one-on-one coaching, and support services. The total cost of the program is $2,500, which can be paid in full or through a flexible payment plan. We understand that investing in your professional development is a significant commitment, which is why we offer several payment options to make the program accessible to as many individuals as possible. Additionally, we offer a limited number of scholarships and discounts for early registrants and participants from non-profit organizations. Detailed pricing information, along with the terms and conditions, can be found on our pricing page."
  }
];


const Faq = () => {
  return (
    <div className=' flex flex-col mt-[9rem] px-[8rem] justify-center  ' >
      <CustomTitle title={"FAQs  (Frequently asked questions)"} />
      <p className=' font-openSans text-[1.05rem] text-subheading  ' >Everything you need to know about the product and billing.</p>
      <div className=" flex flex-col gap-[1rem] mt-[4rem]  ">
        {faqs.map((faq, index) => (
          <FaqlistComponent key={index} data={faq} index={index} />
        ))}
      </div>

    </div>
  )
}

export default Faq
