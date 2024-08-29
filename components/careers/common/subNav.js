"use client";
import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";

// Define the SubNavLayout component which accepts children (content of the page)
const SubNavLayout = ({ navItems, children }) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = (link) => {
    router.push(link);
  };

  return (
    <div className="w-[100%] flex flex-col">
      {/* Sub Navigation Bar */}
      <div className="font-montserrat font-semibold bg-primary text-subheading_Blue_BG h-[10vh] w-full">
        <div className="pl-[8rem] flex gap-10 items-center h-full">
          {navItems.map(({ name, link }, index) => (
            <div
              className={`text-xl cursor-pointer ${
                path.endsWith(link) ? "text-[#ff9b3f]" : ""
              }`}
              key={index}
              onClick={() => handleClick(link)}
            >
              <div className="px-2 py-1">
                <div className="uppercase tracking-widest font-bold text-[18px] leading-normal">
                  {name}
                </div>
              </div>
              {path.endsWith(link) && (
                <div className="h-1 w-full rounded-full bg-[#ff9b3f]" />
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

export default SubNavLayout;
