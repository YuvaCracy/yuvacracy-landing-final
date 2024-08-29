import React from "react";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import InternComponent from "./internships-provided/InternComponent";
import nitiData from "./internships-provided/(Internship-Data)/niti-data";
import vidhiData from "./internships-provided/(Internship-Data)/vidhi-data";
import InternshipNav from "./internships-provided/internshipNav";
import Process from "./process/process";

const Internships = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="px-[8rem]">
      <InternshipNav router={router} path={path} />
      <InternComponent {...nitiData} />
      <InternComponent {...vidhiData} />
    </div>
  );
};


export default Internships;
