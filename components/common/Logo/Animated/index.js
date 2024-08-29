import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import Fade from 'embla-carousel-fade'

const slides = [
  {
    id: 1,
    title: 'Foundation',
  },
  {
    id: 2,
    title: "Policy Research",
  },
  {
    id: 3,
    title: 'Legal Affairs',
  },
  {
    id: 4,
    title: 'Dialogues',
  }
]

const option = { axis: 'y', loop: true };

const AnimatedLogo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay(true)]);
  return (
    <div className='flex flex-col gap-[.3rem] font-montserrat ' >
      <div className='relative ' >
        <h1 className=' text-primary text-[1.3rem] font-[700] ' >YUVACRACY</h1>
        <p className=' absolute right-[-1.2rem] top-[-.3rem] font-openSans font-[500] text-[.59rem]    ' >TM</p>
      </div>

      {/* Animation code  */}
      <div className='flex relative items-center justify-between w-[100%] ' >
        <div className=' h-[.25rem] w-[100%] max-w-[4rem] absolute   bg-primary ' />

        <div className="absolute right-[.2rem] flex w-fit h-fit animated-logo-embla">
          <div className="w-full animated-logo-embla__viewport" ref={emblaRef}>
            <div className="w-full animated-logo-embla__container">
              {slides.map((data, index) => (
                <div className='  w-[100%] ' key={index}>
                  <div className="flex items-center justify-end animated-logo-embla__slide" >
                    <div className=' bg-white   pl-[.5rem] font-montserrat font-[500]  ' >
                      <h2 className=' text-[.7rem] font-montserrat font-[600]' >{data.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AnimatedLogo
