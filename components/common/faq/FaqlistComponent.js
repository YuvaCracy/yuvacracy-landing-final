'use client'
import React, { useState, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FaqlistComponent = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleFaq} className="py-[1rem] cursor-pointer relative px-[2rem] rounded-xl border-[1px] border-gray-200">
      <button
        className="flex items-center justify-between w-full text-left focus:outline-none"

      >
        <div className="font-[600] flex w-fit gap-[.4rem] font-montserrat"><span>{index + 1 + "."}</span> {data.question}</div>
        <div className={`absolute top-[1rem] duration-300 flex justify-center items-center right-[1rem] text-[1.2rem] size-[1.8rem] rounded-full border-[1px] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <IoIosArrowDown />
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        <p className="mt-2 text-gray-600">
          {data.answer}
        </p>
      </div>
    </div>
  );
};

export default FaqlistComponent;
