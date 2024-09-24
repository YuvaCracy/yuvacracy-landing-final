import PrimaryButton from "@/components/common/Button/PrimaryButton";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Box = () => {
  return (
    <div className="bg-[#f1f3ff] rounded-lg p-4 absolute bottom-[1rem] md:-bottom-[1rem] sm_desktop:right-[12rem] md:right-[2rem] z-10 shadow-md">
      <div className="text-3xl text-[#003366] font-bold ">
        100<span className="text-3xl -mt-[0.5rem]">+</span>
      </div>
      <div className=" w-[13rem]">
        <div className="text-[#003366] text-lg mt-2">
          Students, Young People <br />
          Changed their career With Us
        </div>
      </div>
    </div>
  );
};

const InternComponent = ({ title, subtitle, desc, list, link, image, id }) => {
  return (
    <div
      id={id}
      className="relative flex flex-col-reverse w-full my-8 border-t-2 sm_desktop:border-b-2 md:border-2 md:flex-row md:my-6 sm_desktop:my-20 md:rounded-xl md:p-7"
    >
      <div className="flex flex-col justify-between flex-1 px-4 font-openSans">
        {/* Title */}
        <div>
          <div className="flex pt-8 md:pt-2">
            <div>
              <span className="font-bold text-[1.6rem] md:text-3xl font-montserrat">
                {title}
              </span>
              <div className="flex items-center py-2">
                <div className="h-[0.3rem] bg-primary flex-grow mt-1 mr-2" />
                <span className="italic text-subheading text-[0.9rem] md:text-[1.1rem]">
                  {subtitle}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full pt-2 pb-3 pr-0 mt-4 text-justify text-gray-700 md:justify-start text-md md:pr-14">
            <div className="w-full text-wrap md:text-left">
              {desc}
            </div>
          </div>

          {/* List */}
          <ul className="mt-4 space-y-2">
            {list.map(({ head, detail }, index) => (
              <div key={index}>
                <div className="text-lg font-semibold">{head}</div>
                <div className="text-md">{detail}</div>
              </div>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="w-full py-4 my-6">
          <PrimaryButton
            style={"w-full md:w-[12rem]"}
            data={{ title: "Apply", execute: () => {} }}
            icon={<GoArrowUpRight className="h-7 w-7" />}
          />
        </div>
      </div>

      {/* Image and Box */}
      <div className="relative flex justify-center bg-black md:bg-transparent md:pl-8 md:justify-end">
        <Image
          src={image}
          alt={title}
          className="rounded-xl object-cover md:w-[20rem] w-full pointer-events-none select-none"
        />
        {/* <Box /> */}
      </div>
    </div>
  );
};

export default InternComponent;
