"use client";
import React, { useState } from "react";
import CareerLayout from "../Layout";
import Internships from "@/components/careers/internships/Internships";
import Process from "@/components/careers/internships/process/process";

const Page = () => {
  return (
    <CareerLayout className="w-[100%] h-full">
      {/* Main Area */}
      <Internships />
      <Process />
    </CareerLayout>
  );
};

export default Page;
