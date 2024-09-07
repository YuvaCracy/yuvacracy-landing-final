import React from "react";
import Image from "next/image";

const ImageTextComp2 = ({ title, desc, imgSrc }) => {
  return (
    <div className="flex items-center pb-14 md:flex-row sm_phone:flex-col">
      <div className="flex flex-col md:w-[50%] sm_phone:w-full">
        <span className="pb-6 text-3xl font-bold font-montserrat">{title}</span>
        <span className=" text-lg text-textSecond w-[36rem] md:pr-12">{desc}</span>
      </div>
      <div className="md:w-[50%] sm_phone:w-full flex justify-center sm_phone:pt-12 md:pt-0">
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
