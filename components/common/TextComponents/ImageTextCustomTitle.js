import Image from "next/image";
import React from "react";
import CustomTitle from "@/components/docs/CustomTitle";

const ImageTextCustomTitle = ({
  title,
  subtitle,
  desc,
  imgSrc,
  mirror = false,
}) => {
  return (
    <div className="flex flex-col items-center pt-4 md:py-8 md:flex-row">
      {mirror ? (
        <>
          <div className="flex flex-col md:w-[55%] w-full order-1 md:order-none pb-12">
            <CustomTitle title={title} subtitle={subtitle} />
            <div className="mr-14 font-openSans ">{desc}</div>
          </div>
          <div className="w-[45%] flex justify-left order-2 md:order-none">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[30rem] md:ml-4 sm_desktop:ml-4"
              src={imgSrc}
            />
          </div>
        </>
      ) : (
        <>
          <div className="md:w-[45%] w-full flex md:justify-start justify-center order-2 md:order-none">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[30rem] md:mr-4 sm_desktop:mr-4"
              src={imgSrc}
            />
          </div>
          <div className="flex flex-col md:w-[55%] w-full pt-12 order-1 md:order-none pb-12">
            <CustomTitle title={title} subtitle={subtitle} />
            <div className="md:mr-14 font-openSans">{desc}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageTextCustomTitle;
