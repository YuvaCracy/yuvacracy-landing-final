import React from "react";
import InternSteps from "../InternSteps";
import stepsData from "../InternSteps/(steps-Data)/steps";

const Process = () => {
  return (
    <div className="flex flex-col items-center font-montserrat px-4 md:px-[10rem] pb-24">
      <div className="pb-[4rem] text-center">
        <div className="my-4 text-2xl font-bold md:text-4xl">
          Process of Selection
        </div>
        <div className="text-md max-w-[35rem] text-textSecond text-center mx-auto">
          Applying for the NITI and VIDHI internships is straightforward. Follow
          these steps to start your journey with YuvaCracy.
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-6 sm_phone::gap-8 md:gap-12">
        {stepsData.map((data, index) => (
          <InternSteps
            key={index}
            stepNumber={index + 1} 
            title={data.title}
            description={data.desc}
            Icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
