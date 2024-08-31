'use client'

import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from "../../common/slider/ArrowButton.js"
import Autoplay from "embla-carousel-autoplay";
import { IoClose } from "react-icons/io5";

const slides = [
  {
    id: 1,
    title: 'Join Us at the YuvaCracy Youth Summit 2024 – September 15th!',
    content: 'Slide 1 content',
    hour: "05",
    minutes: "30",
    seconds: "11",
  },
  {
    id: 2,
    title: "Indian budget Analysis",
    content: 'Slide 2 content',
    hour: "06",
    minutes: "15",
    seconds: "45",
  },
  {
    id: 3,
    title: 'Reservation Act should be removed',
    content: 'Slide 3 content',
    hour: "3",
    minutes: "29",
    seconds: "48",
  }
]

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
    <div className={` ${showPromo ? " mt-0 relative " : " mt-[-4rem] "} duration-700 relative flex items-center justify-center w-full h-16 px-32 bg-primary`}>
      {/* Slider code */}
      <div className='flex w-full'>
        <div className="flex justify-between w-full promo-embla">
          <div className="w-full promo-embla__viewport" ref={emblaRef}>
            <div className="w-full promo-embla__container">
              {slides.map((data, index) => (
                <div className='w-[100%]' key={index}>

                  <div className="flex w-[100%] items-center gap-[1rem] justify-between promo-embla__slide" >
                    {/* Coundown timer code */}
                    <div className='flex items-center justify-center gap-[1rem]  font-[600] ' >

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

                    </div>
                    <div className='text-white  font-montserrat font-[500] mx-auto  ' >
                      <h2 className=' line-clamp-1' >{data.title}</h2>
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
    </div>
  )
}

export default PromotionalContent
