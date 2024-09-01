"use client";
import React from "react";
import EventLayout from "../Layout";
import CustomTitle from "@/components/common/CustomTitile";
import Image from "next/image";
import { YuvaDialoguesCrowd, YuvaDialoguesImg } from "@/public/assetManager";
import { PiChatCircleDots } from "react-icons/pi";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

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
      <div id="yuvacracy-diag-div" className="xl:px-[8rem] px-[6rem] py-20 flex flex-col">
        <div className="flex items-center pb-14">
          <div className="flex flex-col w-[50%]">
            <CustomTitle
              title={"About YuvaCracy Dialogues"}
              subtitle={"What Are YuvaCracy Dialogues?"}
            />
            <span className=" text-lg text-textSecond">
              YuvaCracy Dialogues is our flagship initiative that brings
              together thought leaders, policymakers, activists, and youth from
              diverse backgrounds to discuss critical issues affecting our
              society. Through these conversations, we aim to inspire action and
              foster a culture of informed civic engagement.
            </span>
          </div>
          <div className="w-[50%] flex justify-center">
            <Image className="w-[24rem]" src={YuvaDialoguesImg} />
          </div>
        </div>

        {/* Upcoming Dialogues */}
        <CustomTitle
          title={"Upcoming Dialogues"}
          subtitle={"Join the Conversation"}
        />
        <div className="flex items-center">
          <div className="flex flex-col w-[50%]">
            <div>
              <span className=" text-lg text-textSecond">
                Stay informed and engaged with our upcoming dialogues. Be a part
                of the conversation that shapes the future.
              </span>
              <Image className="pt-14" src={YuvaDialoguesCrowd} />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center gap-4 px-10">
            {dialogueEventData.map((data, ind) => (
              <div
                key={ind}
                className=" flex rounded-lg shadow-md bg-[#f8fafe]"
              >
                <div className="h-[6rem] flex items-center px-2">
                  {" "}
                  <PiChatCircleDots className="w-10 h-10" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-lg font-montserrat font-semibold">
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
