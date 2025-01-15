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
      <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20 flex flex-col">
        <ImageTextComp2
          title={"Support YuvaCracy: Empower the Next Generation"}
          subtitle={"Support Us"}
          desc={
            "Your contribution helps us build a stronger, more engaged youth community."
          }
          imgSrc={DonateUs}
        />

        <div className="flex flex-col md:flex-row items-center md:h-[38rem] mt-[6rem] md:mt-[12rem]">
          {/* Image Section */}
          <Image
            alt="YuvaCracy is a foundation for youth"
            className="w-full md:w-[50%] h-[20rem] md:h-[38rem] object-cover"
            src={DonateImg2}
          />

          {/* Donation Info Section */}
          <div className="bg-primary h-full flex flex-col justify-around text-white py-8 px-4 md:px-12 rounded-none md:rounded-r-lg w-full md:w-[50%]">
            <div>
              <span className="text-2xl font-bold sm:text-3xl font-montserrat">
                How your donation helps
              </span>
              <div className="flex items-center py-2">
                <div className="h-[0.3rem] max-w-[50%] bg-white flex-grow mt-1 mr-2" />
                <span className="italic text-nowrap text-white text-[1.1rem]">
                  YuvaCracy
                </span>
              </div>
            </div>

            {/* Donation Details */}
            <div className="flex flex-col p-2 mt-3 space-y-4 md:p-4">
              {data.map((item, ind) => (
                <div
                  key={ind}
                  className="flex font-montserrat items-center text-md text-[#E0E0E0]"
                >
                  <BsBarChartLine className="w-6 h-6 m-2 mr-4" /> {item.desc}
                </div>
              ))}
            </div>

            {/* Amount Buttons */}
            <div className="flex flex-wrap justify-around gap-4 px-4 mt-4 md:px-10 sm_desktop:w-full">
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 100
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 500
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1000
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1500
              </button>
            </div>

            {/* Donate Button */}
            <button className="w-full py-2 mt-6 font-bold text-blue-900 bg-white rounded md:mt-8">
              DONATE
            </button>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
};

export default Donate;
