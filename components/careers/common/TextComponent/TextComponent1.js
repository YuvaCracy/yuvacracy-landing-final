import PrimaryButton from "@/components/common/Button/PrimaryButton";
import Image from "next/image";
import React from "react";

const TextComponent1 = ({ imageSrc, heading, text, data, icon }) => {
  return (
    <div className="flex items-center h-[24rem]">
      <div className="flex flex-col w-[50%]">
        {/* Red line and text */}
        <div className="flex items-center mb-4">
          <div className="w-2 rounded-full bg-[#c83201] h-[10rem]" />
          <div className="px-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">{heading}</h2>
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
      <div className="w-[50%]  mt-6 flex justify-center">
        <Image src={imageSrc} alt="Yuvacracy is a youth led organization" className="pointer-events-none select-none" />
      </div>
    </div>
  );
};

export default TextComponent1;
