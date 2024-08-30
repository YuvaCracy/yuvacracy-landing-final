import React from "react";

const CustomTitle = ({title, subtitle}) => {
  return (
    <div>
      <div className="flex pt-2 py-12">
        <div>
          <span className="text-3xl font-montserrat font-bold">{title}</span>
          <div className="flex py-2 items-center">
            <div className="h-[0.3rem] bg-primary flex-grow mt-1 mr-2" />
            <span className="italic text-subheading text-[1.1rem]">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTitle;
