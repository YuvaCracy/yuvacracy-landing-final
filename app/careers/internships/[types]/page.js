"use client"
import React from "react";
import InternComponent from "@/components/careers/internships/internships-provided/InternComponent";
import nitiData from "@/components/careers/internships/internships-provided/(Internship-Data)/niti-data";
import vidhiData from "@/components/careers/internships/internships-provided/(Internship-Data)/vidhi-data";
import CareerLayout from "../../Layout";
import InternshipNav from "@/components/careers/internships/internships-provided/internshipNav";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import Process from "@/components/careers/internships/process/process";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const InternshipTypes = ({ params }) => {
  const router = useRouter();
  const path = usePathname();

  switch (params.types) {
    case "niti":
      return (
        <CareerLayout>
          <div id="niti" className="xl:px-[8rem] px-[6rem]">
            <SuspenseHandler>
              <ScrollHandler />
            </SuspenseHandler>
            <InternshipNav router={router} path={path} />
            <InternComponent {...nitiData} />
            <Process />
          </div>
        </CareerLayout>
      );
    case "vidhi":
      return (
        <CareerLayout>
          <div id="vidhi" className="xl:px-[8rem] px-[6rem]">
            <SuspenseHandler>
              <ScrollHandler />
            </SuspenseHandler>
            <InternshipNav router={router} path={path} />
            <InternComponent {...vidhiData} />
            <Process />
          </div>
        </CareerLayout>
      );
  }
};

export default InternshipTypes;
