import React from "react";

const CustomTitle = ({ title, subtitle, small = false }) => {
  return (
    <div>
      <div className={`flex ${small ? " py-4 " : " py-8 "} pt-2`}>
        <div>
          <span className={`${small ? " text-[1.3rem] " : "text-3xl "}  font-bold font-montserrat`}>{title}</span>
          <div className={`flex items-center ${small ? " py-1 " : " py-2"}`}>
            <div className={` ${small ? " h-[0.2rem] mt-[0rem] mr-2 " : " h-[0.3rem] mt-1 mr-2 "}  max-w-[50%]  bg-primary flex-grow `} />
            <span className="italic text-nowrap text-subheading text-[1.1rem]">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTitle;
