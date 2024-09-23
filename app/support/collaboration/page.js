"use client";
import React from "react";
import SupportLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
import { MdAutoGraph } from "react-icons/md";
import HomeStoriesOfImpact from "@/components/home/stories-of-impact";
import GetInTouchCard from "@/components/support/GetInTouchCard";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const data = [
  {
    name: "Education Partnership",
    desc: "Educational Partnerships – Collaborate with us on workshops, training sessions, and educational initiatives.",
  },
  {
    name: "Community Projects",
    desc: "Educational Partnerships – Collaborate with us on workshops, training sessions, and educational initiatives.",
  },
  {
    name: "Community Projects",
    desc: "Innovation and Research – Partner with us on research and innovation initiatives that benefit youth leadership and civic engagement.",
  },
];

const Collaboration = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="collab-div"
        className="flex flex-col xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20"
      >
        <div>
        <CustomTitle
          title={"Types Of Collaboration"}
          subtitle={"In YuvaCracy"}
        />
        </div>
        <div className="flex flex-col justify-between w-full md:flex-row">
          {data.map((item, ind) => (
            <div key={ind} className="flex flex-row gap-4 p-4 m x-4 md:flex-col">
              <div className="w-14 h-14 bg-[#eef4ff] rounded-full flex items-center justify-center ">
                <MdAutoGraph className="w-8 h-8" />
              </div>
              <div className=" md:flex-col">
              <div className="text-xl font-semibold font-montserrat">
                {item.name}
              </div>
              <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <HomeStoriesOfImpact />

        <GetInTouchCard />
      </div>
    </SupportLayout>
  );
};

export default Collaboration;
