import Image from "next/image";
import React from "react";
import CustomTitle from "../CustomTitile";

const ImageTextCustomTitle = ({
  title,
  subtitle,
  desc,
  imgSrc,
  mirror = false,
}) => {
  return (
    <div className="flex items-center py-14">
      {mirror ? (
        <>
          <div className="flex flex-col w-[55%]">
            <CustomTitle title={title} subtitle={subtitle} />
            <div className="mr-14 font-openSans">{desc}</div>
          </div>
          <div className="w-[45%] flex justify-left">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[30rem]"
              src={imgSrc}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-[45%] flex justify-left">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[30rem]"
              src={imgSrc}
            />
          </div>
          <div className="flex flex-col w-[55%]">
            <CustomTitle title={title} subtitle={subtitle} />
            <div className="mr-14 font-openSans">{desc}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageTextCustomTitle;
