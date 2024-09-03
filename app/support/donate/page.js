"use client";
import React from "react";
import SupportLayout from "../Layout";
import { DonateImg2, DonateUs } from "@/public/assetManager";
import ImageTextComp2 from "@/components/common/TextComponents/ImageTextComp2";
import { BsBarChartLine } from "react-icons/bs";
import Image from "next/image";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const data = [
  {
    desc: "Funds educational workshops and leadership training for young people.",
  },
  { desc: "Supports community projects led by youth leaders." },
  {
    desc: "Amplifies youth voices through dialogues and public speaking events.",
  },
];

const Donate = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        className="xl:px-[8rem] px-[6rem] pt-20 flex flex-col"
      >
        <ImageTextComp2
          title={"Support YuvaCracy: Empower the Next Generation"}
          subtitle={"Support Us"}
          desc={
            "Your contribution helps us build a stronger, more engaged youth community."
          }
          imgSrc={DonateUs}
        />

        <div className="flex items-center h-[38rem] mt-[12rem]">
          <Image alt="YuvaCracy is a foundation for youth" className="w-[50%] h-[38rem]" src={DonateImg2} />
          <div className="bg-primary h-full flex flex-col justify-around text-white py-8 px-12 rounded-r-lg w-[50%]">
            <div>
              <span className="text-3xl font-bold font-montserrat">
                How your donation helps
              </span>
              <div className="flex items-center py-2">
                <div className="h-[0.3rem] max-w-[50%]  bg-white flex-grow mt-1 mr-2" />
                <span className="italic text-nowrap text-white text-[1.1rem]">
                  YuvaCracy
                </span>
              </div>
            </div>

            <div className="flex flex-col p-4 mt-3 space-y-4">
              {data.map((item, ind) => (
                <div
                  key={ind}
                  className="flex font-montserrat items-center text-md text-[#E0E0E0]"
                >
                  <BsBarChartLine className="w-6 h-6 m-2 mr-4 " /> {item.desc}
                </div>
              ))}
            </div>

            <div className="flex justify-around px-10 mt-4">
              <button className=" border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 100
              </button>
              <button className=" border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 500
              </button>
              <button className=" border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1000
              </button>
              <button className=" border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1500
              </button>
            </div>

            <button className="w-full py-2 mt-8 font-bold text-blue-900 bg-white rounded">
              DONATE
            </button>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
};

export default Donate;
