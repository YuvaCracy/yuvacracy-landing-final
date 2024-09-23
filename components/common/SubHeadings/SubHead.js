import React from "react";

const SubHead = ({title, subtitle, noSpace = true}) => {
  return (
    <div className={`flex flex-col w-full ${noSpace? "pt-20" : ""}`}>
      <span className="text-3xl font-bold font-montserrat">
        {title}
      </span>
      <span className="md:text-lg pt-4 font-openSans text-[#2F2F2F] text-md ">
        {subtitle}
      </span>
    </div>
  );
};

export default SubHead;
