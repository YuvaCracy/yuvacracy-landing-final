"use client";
import React from "react";
import CareerLayout from "../Layout";
import Internships from "@/components/careers/internships/Internships";
import Process from "@/components/careers/internships/process/process";


const InternshipPage = () => {
  return (
    <CareerLayout className="w-[100%] h-full">

      {/* Main Area */}
      <Internships />
      <Process />
    </CareerLayout>
  );
};

export default InternshipPage;
