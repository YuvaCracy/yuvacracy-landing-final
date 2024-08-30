import React from "react";

const CustomTitle = ({ title, subtitle }) => {
  return (
    <div>
      <div className="flex py-12 pt-2">
        <div>
          <span className="text-3xl font-bold font-montserrat">{title}</span>
          <div className="flex items-center py-2">
            <div className="h-[0.3rem] max-w-[50%]  bg-primary flex-grow mt-1 mr-2" />
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
