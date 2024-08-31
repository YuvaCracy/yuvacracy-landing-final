import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const MultiLinks = ({ data }) => {
  return (
    <div className='text-heading relative font-montserrat font-[500] group'>
      <h3 className='flex items-center cursor-pointer hover:text-primary '>
        {data.title}
        <IoIosArrowDown className='duration-500 group-hover:rotate-180 ' />
      </h3>

      {/* Dropdown container */}
      {data.type === "row" && (
        <div className='absolute left-[-2rem] top-full mt-[1rem] border-2 p-[1.5rem] rounded-md flex gap-[4rem] w-[28rem] bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform transition-all duration-300 z-[500]'>
          {data.row && data.row.map((rowItem, rowIndex) => (
            <div className='flex flex-col gap-[1rem] ' key={rowIndex}>
              <h2 className=' font-montserrat font-[600] text - [.9rem] ' >{rowItem.title}</h2>
              <div className=' flex flex-col gap-[.5rem]  ' >
                {
                  rowItem.sublinks && rowItem.sublinks.map((linkData, linkIndex) => (
                    <div key={linkIndex} className=' text-[.85rem] w-fit flex items-center gap-[.3rem]  ' >
                      {/* <MdKeyboardDoubleArrowRight /> */}
                      <Link href={linkData.href} className='  hover:translate-x-[.2rem] duration-300 hover:underline underline-offset-[3px] '>
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
          <div className='absolute left-[-2rem] top-full mt-[1rem] border-2 p-[1.5rem] rounded-md flex flex-col w-fit gap-[.5rem]  bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform transition-all duration-300 z-[500]'>
            {data.col && data.col.map((colItem, colIndex) => (
              <div key={colIndex} className=' text-[.9rem] w-fit flex items-center gap-[.3rem]  ' >
                {/* <MdKeyboardDoubleArrowRight /> */}
                <Link href={colItem.href} className=' text-nowrap hover:translate-x-[.2rem] duration-300 hover:underline underline-offset-[3px] '>
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
