import Image from 'next/image';
import React from 'react';

const SectionCountComponent = ({ imageSrc, title, sections }) => {
  return (
    <div className="flex flex-col-reverse items-center mt-20 rounded-lg md:flex-row">
      <div className="md:w-[50%] mt-12 w-full">
        <Image
          src={imageSrc}
          alt="Yuvacracy is foundation for youth"
          className="pointer-events-none select-none"
        />
      </div>
      <div className="md:w-[50%] w-full mt-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 font-montserrat">{title}</h2>
        <ul className="pl-6 font-openSans space-y-4 md:w-[30rem] w-full">
          {sections.map((partnership, index) => (
            <li key={index} className='md:w-[30rem]'>
              <div className="text-lg text-gray-800 md:text-lg">
                {partnership.heading}:
              </div>
              <div className="text-gray-600 md:text-lg text-wrap">{partnership.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionCountComponent;
