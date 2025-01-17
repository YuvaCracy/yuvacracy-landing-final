import React from "react";
import CustomTitle from "@/components/docs/CustomTitle";
import Image from "next/image";

const ImageTextComp1 = ({
  title,
  subtitle,
  desc,
  imgSrc,
  data,
  customTextStyle = "",
  customTextStylePoints = "",
  customSubTextStyle = "",
  mirror = false,
}) => {
  return (
    <div className="flex flex-col items-center pt-20 pb-4 md:pb-12 md:flex-row sm:my-3">
      {mirror ? (
        <div className="w-full md:flex">
          <div className="md:w-[50%] w-full flex md:justify-start order-2 md:order-none">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="w-[36rem] md:mr-4"
              src={imgSrc}
            />
          </div>
          <div className={`flex flex-col md:w-[50%] w-full order-1 md:order-none md:ml-4 ${customTextStyle} mt-6 md:mt-0`}>
            <CustomTitle title={title} subtitle={subtitle} />
            <span className="text-lg text-textSecond">{desc}</span>

            {data && (
              <div className={`flex flex-col ${customTextStylePoints}`}>
                {data.map((item, ind) => (
                  <div key={ind} className="flex flex-col">
                    <span className="py-2 text-lg font-bold font-openSans text-textSecond">
                      {item.title}
                    </span>
                    <span className="py-2 text-lg text-textSecond">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      ) : (
        <div className="w-full md:flex">
          <div className={`flex flex-col md:w-[50%] w-full order-1 md:order-none md:mr-4 ${customTextStyle}`}>
            <CustomTitle title={title} subtitle={subtitle} />
            <span className="text-lg text-textSecond">{desc}</span>

            {data && (
              <div className={`flex flex-col ${customTextStylePoints}`}>
                {data.map((item, ind) => (
                  <div key={ind} className="flex flex-col">
                    <span className="py-2 text-lg font-bold font-openSans text-textSecond">
                      {item.title}
                    </span>
                    <span className="py-2 text-lg text-textSecond">{item.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="md:w-[50%] w-full flex md:justify-end justify-center order-2 md:order-none">
            <Image
              alt="YuvaCracy is a foundation for Youth"
              className="md:w-[28rem] md:ml-4 object-contain"
              src={imgSrc}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageTextComp1;
