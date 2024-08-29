import React from "react";
import InternSteps from "../InternSteps";
import stepsData from "../InternSteps/(steps-Data)/steps";

const Process = () => {
  return (
    <div className="flex flex-col items-center font-montserrat px-[10rem] pb-24">
      <div className="pb-[4rem]">
        <div className="text-4xl my-4 text-center font-bold">
          Process of Selection
        </div>
        <div className="text-md w-[35rem] text-textSecond text-center">
          Applying for the NITI and VIDHI internships is straightforward. Follow
          these steps to start your journey with YuvaCracy.
        </div>
      </div>
      <div className="flex w-full justify-around">
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
