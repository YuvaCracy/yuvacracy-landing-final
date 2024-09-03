import Image from 'next/image';
import React from 'react';

const SectionCountComponent = ({ imageSrc, title, sections }) => {
  return (
    <div className="flex flex-row items-center pt-20 rounded-lg ">
      <div className="w-[29rem]">
        <Image src={imageSrc} alt="Yuvacracy is foundation for youth" className='pointer-events-none select-none' />
      </div>
      <div className="w-2/3 pl-[12rem] mt-6 ">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 font-montserrat">{title}</h2>
        <ul className=" text-lg pl-6 font-openSans space-y-4 w-[33rem]">
          {sections.map((partnership, index) => (
            <li key={index}>
              <strong className="text-gray-800">{partnership.heading}:</strong>
              <p className="text-gray-600">{partnership.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionCountComponent;
