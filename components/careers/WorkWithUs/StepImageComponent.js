import React from "react";
import Image from "next/image";

const StepImageComponent = ({ image, steps, buttonText }) => {
  return (
    <div className="flex flex-row justify-center mt-16 bg-white ">
      <div className="flex flex-col md:w-2/5">
        <Image src={image} alt="Yuvacracy is a foundation powered by youth" className="pointer-events-none select-none" />
      </div>
      <div className="flex flex-col pl-24 ">
        <div className="flex flex-col justify-between h-full w-[34rem]">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
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
          <button className="bg-[#003366] rounded-lg text-white font-openSans h-12 mx-3">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepImageComponent;
