'use client'

import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from "../../common/slider/ArrowButton.js"
import Autoplay from "embla-carousel-autoplay";
import { IoClose } from "react-icons/io5";
import { MdPlayCircle } from 'react-icons/md';
import PromoVideoPlayer from '@/components/common/Modals/PromoVideoPlayer.js';
import promotionalData from './promotionalData.js';
import { usePathname, useRouter } from 'next/navigation.js';
import { Suspense } from 'react';


const option = { axis: 'y', loop: true };

const PromotionalContent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(option);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const [showPromo, setShowPromo] = useState(true);
  const [promoVisible, setPromoVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname()

  // useEffect(() => {
  //   const promoStatus = localStorage.getItem("showPromo");

  //   if (promoStatus === null) {
  //     localStorage.setItem("showPromo", true);
  //   } else if (promoStatus === "false") {
  //     setShowPromo(false);
  //   }
  // }, []);

  const handleClose = () => {
    // localStorage.setItem("showPromo", "false");
    setShowPromo(false);
  }

  return (
    <Suspense
      fallback={
        <div className={` ${showPromo ? " mt-0 relative " : " mt-[-4rem] "} duration-700 relative flex items-center justify-center w-full h-16 px-32 bg-primary`} />
      }>
      <div className={` ${showPromo ? " mt-0 relative " : " mt-[-4rem] "} duration-700 relative flex items-center justify-center w-full h-16 md_desktop:px-32 px-20 bg-primary`}>
        {/* Slider code */}
        <div className='flex w-full'>
          <div className="flex justify-between gap-[1rem] w-full promo-embla">
            <div className="w-full promo-embla__viewport" ref={emblaRef}>
              <div className="w-full promo-embla__container">
                {promotionalData.map((data, index) => (
                  <div className='w-[100%] flex  ' key={index}>

                    <div className="flex w-[100%] items-center gap-[1rem] justify-between promo-embla__slide" >
                      {/* Coundown timer code */}
                      {/* <div className='flex items-center justify-center gap-[1rem]  font-[600] ' >

                      <div className='flex flex-col text-[.58rem] font-[500] items-center gap-[.2rem] text-white ' >
                        <div className=' bg-white text-[.75rem]  fo text-primary py-[.2rem] px-[.5rem] rounded-[.2rem] ' >
                          {data.hour}
                        </div>
                        HR
                      </div>

                      <div className='flex flex-col text-[.58rem] font-[500] items-center gap-[.2rem] text-white ' >
                        <div className=' bg-white text-[.75rem]   text-primary py-[.2rem] px-[.5rem] rounded-[.2rem] ' >
                          {data.minutes}
                        </div>
                        MIN
                      </div>

                      <div className='flex flex-col text-[.58rem] font-[500] items-center gap-[.2rem] text-white ' >
                        <div className=' bg-white text-[.75rem]   text-primary py-[.2rem] px-[.5rem] rounded-[.2rem] ' >
                          {data.seconds}
                        </div>
                        SEC
                      </div>

                    </div> */}
                      <div className='text-white flex items-center gap-[1.5rem] font-montserrat font-[500] mx-auto  ' >
                        <h2 className=' line-clamp-1' >{data.title}</h2>
                        <button onClick={() => {
                          setShowPromo(true);
                          router.push(`${pathname}?promoId=${data.youtubeId}`)
                        }} className=' text-nowrap active:scale-[.95] duration-300 flex text-[.8rem] border-[1px] border-white rounded-full px-[.8rem] py-[.2rem] justify-center items-center gap-[.3rem] ' >
                          <p>Play video</p>
                          <MdPlayCircle />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex gap-4">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleClose} className=" absolute right-[1rem] text-[1.2rem] top-[1rem] text-white">
          <IoClose />
        </button>
        <PromoVideoPlayer
          visible={true}
          onClose={() => setPromoVisible(false)}
          callback={() => { }}
          focusMode={true}
        />
      </div>
    </Suspense>
  )
}

export default PromotionalContent
