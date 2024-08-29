import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div className="bg-[#f1f3ff] rounded-lg p-4 absolute -bottom-[1rem] right-[12rem] z-10 shadow-md">
      <div className="text-4xl text-[#003366] font-bold ">
        100<span className="text-4xl -mt-[0.5rem]">+</span>
      </div>
      <div className=" w-[16rem]">
        <div className="text-[#003366] text-xl mt-2">
          Students, Young People <br />
          Changed their career With Us
        </div>
      </div>
    </div>
  );
};

const InternComponent = ({ title, subtitle, desc, list, link, image }) => {
  return (
    <div className="flex border-2 rounded-xl p-7 my-20 relative">
      <div className="flex-1 font-openSans flex flex-col justify-between">
        {/* Title */}
        <div>
          <div className="flex pt-2">
            <div>
              <span className="text-3xl font-montserrat font-bold">
                {title}
              </span>
              <div className="flex py-2 items-center">
                <div className="h-[0.3rem] bg-primary flex-grow mt-1 mr-2" />
                <span className="italic text-subheading text-[1.1rem]">
                  {subtitle}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-lg pt-2 pb-3 pr-12 text-gray-700">
            {desc}
          </div>

          {/* List */}
          <ul className="mt-4 space-y-2">
            {list.map(({ head, detail }, index) => (
              <div key={index}>
                <div className="text-lg font-semibold">{head}</div>
                <div className="text-lg">{detail}</div>
              </div>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-6">
          <button className="font-montserrat py-3 px-6 bg-primary rounded-md text-white text-[1.4rem]">
            Apply
          </button>
        </div>
      </div>

      {/* Image and Box */}
      <div className="relative flex justify-end pl-8">
        <Image
          src={image}
          alt={title}
          className="rounded-xl object-cover w-[25rem]"
        />
        <Box />
      </div>
    </div>
  );
};

export default InternComponent;
