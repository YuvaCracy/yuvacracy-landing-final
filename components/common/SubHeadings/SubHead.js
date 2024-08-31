import React from "react";

const SubHead = ({title, subtitle}) => {
  return (
    <div className="w-full pt-20 flex flex-col">
      <span className="text-3xl font-montserrat font-bold">
        {title}
      </span>
      <span className="text-lg pt-4 font-openSans text-[#2F2F2F]">
        {subtitle}
      </span>
    </div>
  );
};

export default SubHead;
