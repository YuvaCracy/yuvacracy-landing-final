'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '@/components/common/slider/DotButton'
import Autoplay from "embla-carousel-autoplay";
import CareerSliderCard from './CareerSliderCard'
import CareerData from './CareerData';

const option = { loop: true };

const CareerSliderComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className='xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] w-full flex flex-col'>
      {/* slider code */}
      <div className="w-full embla">
        <div className="w-full embla__viewport" ref={emblaRef}>
          <div className="flex w-full embla__container">
            {CareerData.map((data, index) => {
              return (
                <div key={index} className="flex justify-center w-[100%] embla__slide">
                  <CareerSliderCard data={data} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-end mt-[3rem] ">
          <div className="flex gap-[.5rem]  ">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={` size-[1.1rem] rounded-full ${selectedIndex == index ? " bg-primary " : " bg-[#D9D9D9] "}  `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerSliderComponent;
