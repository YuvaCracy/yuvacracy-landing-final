"use client";
import React from "react";
import EventLayout from "../Layout";
// import CustomTitle from "@/components/docs/CustomTitle";
// import Image from "next/image";
// import { YuvaDialoguesCrowd, YuvaDialoguesImg } from "@/public/assetManager";
// import { PiChatCircleDots } from "react-icons/pi";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
// import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import SubHead from "@/components/common/SubHeadings/SubHead";

// const dialogueEventData = [
//   {
//     name: "Event 1",
//     date: "Aug 25, 2024",
//     desc: '"Youth Leadership in the Digital Age" - August 25, 2024',
//   },
//   {
//     name: "Event 2",
//     date: "Sep 15, 2024",
//     desc: '"The Role of Education in Civic Engagement" - September 15, 2024',
//   },
//   {
//     name: "Event 3",
//     date: "Oct 15, 2024",
//     desc: '"Environmental Justice and Youth Activism" - October 5, 2024',
//   },
// ];

const YuvaCracyDialgues = () => {
  return (
    <EventLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="yuvacracy-diag-div"
        className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] py-20 flex flex-col"
      >
        <SubHead
          title={"YuvaCracy Dialogues"}
          noSpace={false}
          subtitle={
            <div className="py-4">
              {
                "The YuvaCracy Dialogue is set to become India’s premier conference on legal, political, and geopolitical issues from an Indian perspective. It is dedicated to address the most pressing challenges facing the nation today. Each year, leaders from politics, business, law, media, and civil society gather at a venue determined by the Foundation to discuss critical issues and explore avenues for collaboration on a range of contemporary topics."
              }
              <br />
              <br />
              {
                "This dialogue serves as a platform for evaluating government policies and programs, while also reflecting the aspirations and ambitions of India's youth for a new future. It is designed as a cross-sectoral forum, featuring participation from heads of state, cabinet ministers, local government officials, administrative and legal experts, as well as policymakers. These leaders are joined by thought leaders from the private sector, media, and academia, ensuring a diverse and comprehensive discussion."
              }
              <br />
              <br />
              {
                "In addition to these high-level exchanges, the YuvaCracy Dialogue includes debates and panel discussions that form an integral part of the event. Throughout the year, selected youth participants from these debates are given the opportunity to attend the conference, engaging directly with experts and contributing to meaningful dialogue."
              }
              <br />
              <br />
              <span className="font-semibold">
              {
                "The YuvaCracy Dialogue is proudly hosted by the YuvaCracy Foundation, with the support of various institutions, organizations, and individuals who share a commitment to the conference’s mission."
              }
              </span>
            </div>
          }
        />
        {/* <div className="flex flex-col items-center pb-14 md:flex-row">
          <div className="flex flex-col md:w-[50%] w-full">
            <CustomTitle
              title={"About YuvaCracy Dialogues"}
              subtitle={"What Are YuvaCracy Dialogues?"}
            />
            <span className="text-lg text-textSecond">
              YuvaCracy Dialogues is our flagship initiative that brings
              together thought leaders, policymakers, activists, and youth from
              diverse backgrounds to discuss critical issues affecting our
              society. Through these conversations, we aim to inspire action and
              foster a culture of informed civic engagement.
            </span>
          </div>
          <div className="md:w-[50%] mt-20 w-full flex justify-center">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[24rem] pointer-events-none select-none "
              src={YuvaDialoguesImg}
            />
          </div>
        </div> */}

        {/* Upcoming Dialogues */}
        {/* <CustomTitle
          title={"Upcoming Dialogues"}
          subtitle={"Join the Conversation"}
        /> */}
        <div className="flex flex-col md:flex-row">
          {/* <div className="flex flex-col md:w-[50%] w-full">
            <div className="flex flex-col">
              <span className="text-lg text-textSecond">
                Stay informed and engaged with our upcoming dialogues. Be a part
                of the conversation that shapes the future.
              </span>
              <Image
                alt="YuvaCracy is a foundation for Youth"
                className="pointer-events-none select-none pt-14 "
                src={YuvaDialoguesCrowd}
              />
            </div>
          </div> */}
          {/* <div className="md:w-[50%] w-full mt-12 flex flex-col justify-center gap-4 md:px-10">
            {dialogueEventData.map((data, ind) => (
              <div key={ind} className="flex rounded-lg shadow-md bg-[#f8fafe]">
                <div className="md:h-[6rem] h-auto w-[20%] flex items-center justify-center px-2">
                  <PiChatCircleDots className="w-10 h-10" />
                </div>

                <div className="flex flex-col justify-center flex-grow px-4">
                  <span className="text-lg font-semibold font-montserrat">
                    {data.name} ({data.date})
                  </span>
                  <span>{data.desc}</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </EventLayout>
  );
};

export default YuvaCracyDialgues;
