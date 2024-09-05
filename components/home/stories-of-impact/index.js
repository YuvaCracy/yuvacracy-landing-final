'use client'
import React from 'react'
import CustomTitle from '@/components/docs/CustomTitle'
import storiesOfImpactData from './storiesOfImpactData'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '@/components/common/slider/DotButton'
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import StoriesImpactCard from './StoriesImpactCard'
import Autoplay from "embla-carousel-autoplay";

const option = { loop: true };

const HomeStoriesOfImpact = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className='xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] md:mt-[8rem] mt-[4rem] w-full flex flex-col'>
      <CustomTitle title={"Stories Of Impact"} subtitle={"Real Stories, Real Change"} />

      {/* slider code */}
      <div className="w-full embla">
        <div className="w-full embla__viewport" ref={emblaRef}>
          <div className="flex w-full embla__container">
            {storiesOfImpactData.map((data, index) => {
              return (
                <div key={index} className="flex justify-center w-[100%] embla__slide">
                  <StoriesImpactCard data={data} />
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

export default HomeStoriesOfImpact;
