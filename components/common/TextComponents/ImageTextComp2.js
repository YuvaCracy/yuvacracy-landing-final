import React from "react";
import Image from "next/image";

const ImageTextComp2 = ({ title, desc, imgSrc }) => {
  return (
    <div className="flex items-center pb-14">
      <div className="flex flex-col w-[50%]">
        <span className="text-3xl font-bold pb-6 font-montserrat">{title}</span>
        <span className=" text-lg text-textSecond w-[36rem]">{desc}</span>
      </div>
      <div className="w-[50%] flex justify-center">
        <Image
          alt="YuvaCracy is a foundation for Youth"
          className="w-[30rem]"
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default ImageTextComp2;
