"use client";
import React from "react";
import SupportLayout from "../Layout";
import CustomTitle from "@/components/common/CustomTitile";
import { MdAutoGraph } from "react-icons/md";
import HomeStoriesOfImpact from "@/components/home/stories-of-impact";
import GetInTouchCard from "@/components/support/GetInTouchCard";

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
      <div id="collab-div" className="flex flex-col xl:px-[8rem] px-[6rem] pt-20">
        <CustomTitle
          title={"Types Of Collaboration"}
          subtitle={"In YuvaCracy"}
        />
        <div className="flex justify-between w-full">
          {data.map((item, ind) => (
            <div key={ind} className="flex flex-col gap-4 p-4 mx-4">
              <div className="w-14 h-14 bg-[#eef4ff] rounded-full flex items-center justify-center ">
                <MdAutoGraph className="w-8 h-8" />
              </div>
              <span className="text-xl font-semibold font-montserrat">
                {item.name}
              </span>
              <span>
                {item.desc}
              </span>
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
