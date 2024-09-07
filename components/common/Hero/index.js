import Image from "next/image";
import React from "react";
import "./hero.css";

const SubHero = ({ title, subtitle, img }) => {
  return (
    <div className="relative w-[100%] h-full sm_desktop:p-12 md:p-8 flex justify-center">
      {/* Hero Image */}
      <div className="relative flex md:w-[84vw] md:h-[55vh] w-full">
        {/* Text content */}
        <div className="absolute z-20 ml-16 flex flex-col font-montserrat mt-24 text-[#c6c6c6] sm_desktop:w-[50%] w-[80%]">
          <span className="text-3xl font-bold sm_desktop:text-5xl">
            {title}
          </span>
          <span className="md:text-xl text-lg font-sans mt-6 w-[80%]">{subtitle}</span>
        </div>

        {/* Background Image */}
        <div className="w-full h-full">
          <div className="absolute z-10 w-full h-full rounded-none gradient md:rounded-3xl sm:rounded-none" />
          <Image
            className="z-0 md:w-[84vw] w-full h-[55vh]  object-cover md:object-fill pointer-events-none md:rounded-3xl rounded-none"
            alt="Yuvacracy is a youth-led organization"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default SubHero;
