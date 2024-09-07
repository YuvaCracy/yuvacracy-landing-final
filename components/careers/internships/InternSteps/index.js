import React from 'react';

const InternSteps = ({ stepNumber, title, description, Icon }) => {
  return (
    <div className="rounded-lg p-4 w-full md:w-[20rem]  border-2 pt-6 font-openSans">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center">
          {Icon}
        </div>
        <span className="text-7xl font-bold -mt-[1rem] -mr-[0.3rem] text-gray-300">
          {stepNumber}
        </span>
      </div>
      <h2 className="md:text-[1.3rem] font-montserrat font-bold mb-2">{title}</h2>
      <p className="text-gray-600 break-words">{description}</p>
    </div>
  );
};

export default InternSteps;
