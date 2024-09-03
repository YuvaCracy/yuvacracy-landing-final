import React from 'react'
import Lottie from 'lottie-react';
import { Celebrate } from '@/public/assetManager';

const CelebrateAnimation = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-opacity-50'>
      <div className='w-[20rem] h-[20rem] z-10'>
        <Lottie
          animationData={Celebrate}
          autoplay={true}
          loop={false}
          className="z-10"
        />
      </div>
    </div>
  );
}

export default CelebrateAnimation;
