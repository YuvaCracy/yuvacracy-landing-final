import Image from "next/image";
import React from "react";

const TextComponent1 = ({ imageSrc, heading, text }) => {
  return (
    <div className="flex items-center  h-[24rem]">
      <div className="w-1 rounded-full bg-[#c83201] h-[12rem]" />
      <div className="w-2/3 px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{heading}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
      <div className="w-1/3 mt-6">
        <Image
        src={imageSrc}
          alt="Yuvacracy is a youth led organization"
        />
      </div>
    </div>
  );
};

export default TextComponent1;
