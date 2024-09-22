"use client";
import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";

const SubNav = ({ navItems, children }) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = (link, id) => {
    router.push(`${link}?scroll=${id}`);
  };

  return (
    <div className="w-full flex flex-col sticky top-[4rem] z-[499]">
      {/* Sub Navigation Bar */}
      <div className="font-montserrat md:font-[500] font-[100] bg-primary text-subheading_Blue_BG sm_desktop:h-[4rem] h-[5rem] w-full overflow-x-auto scrollbar-hide">
        <div className="sm_desktop:pl-[8rem] md:pl-[4rem] flex gap-10 items-center h-full w-max">
          {navItems.map(({ name, link, id }, index) => (
            <div
              className={`sm_desktop:text-xl md:text-lg text-md cursor-pointer ${
                path.includes(link) ? "text-[#ff9b3f] font-[500]" : ""
              }`}
              key={index}
              onClick={() => handleClick(link, id)}
            >
              <div className="px-2 py-1">
                <div className="uppercase tracking-wide font-bold md:text-[0.94rem] text-[0.9rem] w-fit">
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
  );
};

export default SubNav;
