'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";




const BreadCrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split('/').filter((segment) => segment);

  return (
    <div aria-label="breadcrumb">
      <div className="flex gap-[.2rem] text-gray-500 font-openSans font-[500] text-[.9rem] items-center ">
        <Link href="/" className="text-gray-500 hover:text-primary ">
          <IoHome />
        </Link>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = '/' + segments.slice(0, index + 1).join('/');

          return (
            <div key={index} className="flex items-center">
              <span className=""> <IoIosArrowForward /> </span>
              {isLast ? (
                <span className="text-gray-400 cursor-pointer ">{segment}</span>
              ) : (
                <Link href={href} className="capitalize hover:text-primary ">
                  {segment}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default BreadCrumbs
