"use client";
import React, { useState } from "react";
import CareerLayout from "../Layout";
import Internships from "@/components/careers/internships/Internships";

const Page = () => {
  return (
    <CareerLayout className="w-[100%] h-full">
        {/* Main Area */}
      <Internships />
    </CareerLayout>
  );
};

export default Page;
