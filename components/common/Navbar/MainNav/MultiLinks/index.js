import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const MultiLinks = ({ data, id = -1, active, setActive = () => { }, showNav, setShowNav = () => { } }) => {
  let isDropdownOpen = active == id;
  return (
    <div className='lg:text-heading text-white relative font-montserrat font-[500] lg:mb-0 mb-[1rem] group'>
      <h3 onClick={() => setActive(active == id ? -1 : id)} className='flex items-center justify-between border-b-[1px]  border-white cursor-pointer border-opacity-[.3] lg:py-0 pb-[1rem] lg:justify-normal lg:hover:text-primary lg:border-b-0 '>
        {data.title}
        <IoIosArrowDown className={`duration-300 lg:group-hover:rotate-180 ${isDropdownOpen ? "rotate-180 lg:rotate-0" : ""} `} />
      </h3>

      {/* Dropdown container */}
      {data.type === "row" && (
        <div onClick={() => setShowNav(!showNav)} className={`lg:absolute lg:left-[-2rem] top-full mt-[1rem] lg:rounded-md flex lg:gap-[4rem] md_phone:gap-[8rem] gap-[2rem] lg:w-[28rem] w-full lg:text-primary text-white lg:bg-white lg:shadow-xl lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transform transition-all duration-300 z-[500] ${isDropdownOpen ? 'opacity-100 visible max-h-full py-[1rem] ' : '  max-h-0 opacity-0 py-0 invisible'} lg:px-[1.5rem]  lg:border-2  border-gray-200 flex md_phone:flex-row flex-col  lg:py-[1.5rem] lg:max-h-fit  `}
          style={{ maxHeight: isDropdownOpen ? '400px' : '', overflow: 'hidden' }} // Smooth reveal
        >
          {data.row && data.row.map((rowItem, rowIndex) => (
            <div className='flex flex-col gap-[1rem] ' key={rowIndex}>
              <h2 className=' font-montserrat font-[600] text-[1rem] lg:opacity-100 opacity-[.7] ' >{rowItem.title}</h2>
              <div className=' flex flex-col gap-[.5rem]  ' >
                {
                  rowItem.sublinks && rowItem.sublinks.map((linkData, linkIndex) => (
                    <div key={linkIndex} className=' text-[.85rem] w-fit flex items-center gap-[.3rem]  ' >
                      {/* <MdKeyboardDoubleArrowRight /> */}
                      <Link href={linkData.href} className='  hover:translate-x-[.2rem] duration-300 hover:underline underline-offset-[3px] lg:opacity-100 opacity-[.5] '>
                        {linkData.title}
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      )
      }

      {
        data.type === "col" && (
          <div onClick={() => setShowNav(!showNav)} className={`lg:absolute lg:left-[-2rem] top-full mt-[1rem] lg:rounded-md flex flex-col gap-[.5rem] lg:w-fit w-full lg:text-primary text-white lg:bg-white lg:shadow-xl lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transform transition-all duration-300 z-[500] ${isDropdownOpen ? 'opacity-100 visible max-h-full py-[1rem] ' : '  max-h-0 opacity-0 py-0 invisible'} lg:px-[1.5rem]  lg:border-2  border-gray-200    lg:py-[1.5rem] lg:max-h-fit  `}
            style={{ maxHeight: isDropdownOpen ? '400px' : '', overflow: 'hidden' }}>
            {data.col && data.col.map((colItem, colIndex) => (
              <div key={colIndex} className=' text-[.9rem] w-fit flex items-center gap-[.3rem]  ' >
                {/* <MdKeyboardDoubleArrowRight /> */}
                <Link href={colItem.href} className=' text-nowrap hover:translate-x-[.2rem] duration-300 hover:underline underline-offset-[3px] lg:opacity-100 opacity-[.5] '>
                  {colItem.title}
                </Link>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default MultiLinks
