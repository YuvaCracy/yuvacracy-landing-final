"use client";
import React from "react";
import EventLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
import Image from "next/image";
import { YuvaDialoguesCrowd, YuvaDialoguesImg } from "@/public/assetManager";
import { PiChatCircleDots } from "react-icons/pi";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";

const dialogueEventData = [
  {
    name: "Event 1",
    date: "Aug 25, 2024",
    desc: '"Youth Leadership in the Digital Age" - August 25, 2024',
  },
  {
    name: "Event 2",
    date: "Sep 15, 2024",
    desc: '"The Role of Education in Civic Engagement" - September 15, 2024',
  },
  {
    name: "Event 3",
    date: "Oct 15, 2024",
    desc: '"Environmental Justice and Youth Activism" - October 5, 2024',
  },
];

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
        <div className="flex flex-col items-center pb-14 md:flex-row">
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
        </div>

        {/* Upcoming Dialogues */}
        <CustomTitle
          title={"Upcoming Dialogues"}
          subtitle={"Join the Conversation"}
        />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-[50%] w-full">
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
          </div>
          <div className="md:w-[50%] w-full mt-12 flex flex-col justify-center gap-4 md:px-10">
            {dialogueEventData.map((data, ind) => (
              <div key={ind} className="flex rounded-lg shadow-md bg-[#f8fafe]">
                {/* Icon container */}
                <div className="md:h-[6rem] h-auto w-[20%] flex items-center justify-center px-2">
                  <PiChatCircleDots className="w-10 h-10" />
                </div>

                {/* Text container */}
                <div className="flex flex-col justify-center flex-grow px-4">
                  <span className="text-lg font-semibold font-montserrat">
                    {data.name} ({data.date})
                  </span>
                  <span>{data.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default YuvaCracyDialgues;
