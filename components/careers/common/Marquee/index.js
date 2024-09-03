import React from 'react';
import Image from 'next/image';

const PartnersMarquee = ({ images }) => {
  return (
    <marquee loop={true} className="overflow-hidden" behavior="scroll" direction="left" scrollamount="5">
      <div className="flex gap-8 whitespace-nowrap">
        {images.map((img, index) => (
          <Image key={index} src={img} alt={`Partners of YuvaCracy Foundation`} className='pointer-events-none select-none ' />
        ))}
        {images.map((img, index) => (
          <Image key={`${index}-duplicate`} src={img} alt={`Partners of YuvaCracy Foundation`} className='pointer-events-none select-none' />
        ))}
      </div>
    </marquee>
  );
};

export default PartnersMarquee;
