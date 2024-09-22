import PrimaryButton from "@/components/common/Button/PrimaryButton";
import Image from "next/image";
import React from "react";

const TextComponent1 = ({ imageSrc, heading, text, data, icon }) => {
  return (
    <div className="flex items-center md:h-[24rem] h-[36rem] md:flex-row flex-col">
      <div className="flex flex-col md:w-[50%] sm:w-full">
        {/* Red line and text */}
        <div className="flex items-center mb-4">
          <div className="md:w-3 w-8 rounded-full bg-[#c83201] md:h-[10rem] h-full" />
          <div className="px-6">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-2xl">{heading}</h2>
            <p className="text-gray-600">{text}</p>
          </div>
        </div>
        {/* Button under the red line and text */}
        {data && icon && (
          <div className="px-6">
            <PrimaryButton data={data} icon={icon} />
          </div>
        )}
      </div>
      {/* Image */}
      <div className="md:w-[50%] sm:w-full  mt-6 flex justify-center">
        <Image src={imageSrc} alt="Yuvacracy is a youth led organization" className="pointer-events-none select-none" />
      </div>
    </div>
  );
};

export default TextComponent1;
