import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import InternComponent from "./internships-provided/InternComponent";
import nitiData from "./internships-provided/(Internship-Data)/niti-data";
import vidhiData from "./internships-provided/(Internship-Data)/vidhi-data";
import InternshipNav from "./internships-provided/internshipNav";

const Internships = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem]">
      <InternshipNav router={router} path={path} />
      <InternComponent {...nitiData} />
      <InternComponent {...vidhiData} />
    </div>
  );
};


export default Internships;
