import React from "react";
import CustomTitle from "@/components/docs/CustomTitle";
import Image from "next/image";

const ImageTextComp1 = ({
  title,
  subtitle,
  desc,
  imgSrc,
  data,
  mirror = false,
}) => {
  return (
    <div className="flex items-center pt-20">
      {mirror ? (
        <>
          <div className="w-[50%] flex justify-left">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[36rem]"
              src={imgSrc}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <CustomTitle title={title} subtitle={subtitle} />
            <span className="text-lg text-textSecond">{desc}</span>

            {data && (
              <div className="flex flex-col py-8">
                {data.map((item, ind) => (
                  <div key={ind} className="flex flex-col">
                    <span className="py-2 text-lg font-bold font-openSans">
                      {item.title}
                    </span>
                    <span className="py-2 text-lg">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-[50%]">
            <CustomTitle title={title} subtitle={subtitle} />
            <span className="text-lg text-textSecond">{desc}</span>

            {data && (
              <div className="flex flex-col py-8">
                {data.map((item, ind) => (
                  <div key={ind} className="flex flex-col">
                    <span className="py-2 text-lg font-semibold font-openSans">
                      {item.title}
                    </span>
                    <span className="py-2 text-lg">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-[50%] flex justify-end">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[28rem]"
              src={imgSrc}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageTextComp1;
