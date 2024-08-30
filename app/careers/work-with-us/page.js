"use client";
import React from "react";
import CareerLayout from "../Layout";
import CustomTitle from "@/components/common/CustomTitile";
import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
import { PartnerWithUsImg } from "@/public/assetManager";

const heading = "Why Partner with Us?"
const text = "At YuvaCracy, we believe in collective action for social good. Partnering with us means contributing to impactful projects that foster youth leadership and civic engagement. We invite organizations, educational institutions, and community groups to collaborate with us to create lasting change."

const WorkWithUs = () => {
  return (
    <CareerLayout>
      <div className="px-[10rem]">
        <div className="w-full pt-20 pb-24 flex flex-col">
          <span className="text-3xl font-montserrat font-bold">Collaborate with YuvaCracy</span>
          <span className="text-lg font-openSans text-[#2F2F2F]">Join forces with us to empower the next generation of leaders and changemakers.</span>
        </div>

        <CustomTitle title={"Our Vision for Collaboration"} subtitle={"Advancing Justice Through Law"}/>

        <TextComponent1 heading={heading} text={text} imageSrc={PartnerWithUsImg} />
      </div>
    </CareerLayout>
  );
};

export default WorkWithUs;
