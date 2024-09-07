"use client";
import React from "react";
import CareerLayout from "../Layout";
import Internships from "@/components/careers/internships/Internships";
import Process from "@/components/careers/internships/process/process";


const InternshipPage = () => {
  return (
    <CareerLayout className="w-[100%] h-full xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem]">

      {/* Main Area */}
      <Internships />
      <Process />
    </CareerLayout>
  );
};

export default InternshipPage;
