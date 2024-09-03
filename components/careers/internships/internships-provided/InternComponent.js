import PrimaryButton from "@/components/common/Button/PrimaryButton";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Box = () => {
  return (
    <div className="bg-[#f1f3ff] rounded-lg p-4 absolute -bottom-[1rem] right-[12rem] z-10 shadow-md">
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
    <div id={id} className="relative flex mx-5 my-20 border-2 rounded-xl p-7">
      <div className="flex flex-col justify-between flex-1 font-openSans">
        {/* Title */}
        <div>
          <div className="flex pt-2">
            <div>
              <span className="text-3xl font-bold font-montserrat">
                {title}
              </span>
              <div className="flex items-center py-2">
                <div className="h-[0.3rem] bg-primary flex-grow mt-1 mr-2" />
                <span className="italic text-subheading text-[1.1rem]">
                  {subtitle}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 pb-3 mt-4 text-gray-700 text-md pr-14">
            {desc}
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
        <div className="mt-6">
          <PrimaryButton
            data={{ title: "Apply", execute: () => { } }}
            icon={<GoArrowUpRight className="h-7 w-7" />}
          />
        </div>
      </div>

      {/* Image and Box */}
      <div className="relative flex justify-end pl-8">
        <Image
          src={image}
          alt={title}
          className="rounded-xl object-cover w-[20rem] pointer-events-none select-none"
        />
        <Box />
      </div>
    </div>
  );
};

export default InternComponent;
