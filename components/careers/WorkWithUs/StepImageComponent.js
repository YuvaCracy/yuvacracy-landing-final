import React from "react";
import Image from "next/image";

const StepImageComponent = ({ image, steps, buttonText }) => {
  return (
    <div className="flex flex-col justify-center mt-16 bg-white md:flex-row sm_phone:px-4 md:px-0">
      <div className="flex flex-col md:w-2/5 sm_phone:w-full">
        <Image
          src={image}
          alt="Yuvacracy is a foundation powered by youth"
          className="pointer-events-none select-none sm_phone:w-full"
        />
      </div>
      <div className="flex flex-col mt-8 md:pl-24 sm_phone:pl-0 md:mt-0">
        <div className="flex flex-col justify-between h-full md:w-[34rem] sm_phone:w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-4">
              <div className="bg-[#ebf2fd] text-blue-600 text-2xl rounded-full h-12 w-12 flex items-center justify-center mr-4">
                {index + 1}
              </div>
              <div>
                <strong className="text-lg text-gray-800 font-montserrat">
                  {step.heading}:
                </strong>
                <p className="text-gray-600 font-openSans text-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          <button className="bg-[#003366] rounded-lg text-white font-openSans h-12 mt-6  ">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepImageComponent;
