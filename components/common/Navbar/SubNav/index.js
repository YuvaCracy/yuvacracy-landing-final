"use client";
import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";

const SubNav = ({navItems, children}) => {
    const router = useRouter();
    const path = usePathname();
  
    const handleClick = (link) => {
      router.push(link);
    };
  
    return (
      <div className="w-[100%] flex flex-col sticky top-[4rem] z-[899]">
        {/* Sub Navigation Bar */}
        <div className="font-montserrat font-[500] bg-primary text-subheading_Blue_BG h-[4rem] w-full">
          <div className="pl-[8rem] flex gap-10 items-center h-full">
            {navItems.map(({ name, link }, index) => (
              <div
                className={`text-xl cursor-pointer ${
                  path.includes(link) ? "text-[#ff9b3f] font-[500]" : ""
                }`}
                key={index}
                onClick={() => handleClick(link)}
              >
                <div className="px-2 py-1">
                  <div className="uppercase tracking-wide font-bold text-[0.94rem]">
                    {name}
                  </div>
                </div>
                {path.includes(link) && (
                  <div className="h-[0.25rem] w-full rounded-full bg-[#ff9b3f]" />
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Main content */}
        <main className="flex-grow">{children}</main>
      </div>
  )
}

export default SubNav
