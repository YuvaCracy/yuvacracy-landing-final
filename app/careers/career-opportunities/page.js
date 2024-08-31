"use client";
import React from "react";
import CareerLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import CustomTitle from "@/components/common/CustomTitile";
import { GroupStudyImg } from "@/public/assetManager";
import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
import PrimaryButton from "@/components/common/Button/PrimaryButton";
import { GoArrowUpRight } from "react-icons/go";

const text =
  "YuvaCracy welcomes diverse voices and fresh perspectives. By writing for us, you can share your insights on youth leadership, civic participation, and social justice, helping to shape conversations that matter.";

const page = () => {
  return (
    <CareerLayout>
      <div className="px-[8rem] pb-[16rem] flex flex-col">
        {/* Page Title */}
        <div className="">
        <SubHead
          title={"Join the YuvaCracy Team"}
          subtitle={
            "Be part of a dynamic organization that's actively shaping the future of youth leadership and civic engagement. By joining us, you'll contribute to empowering young people to become the leaders and changemakers of tomorrow, helping to build a more engaged and socially responsible society. Together, we can inspire and support the next generation as they take on critical roles in their communities and beyond."
          }
        />
        </div>

        {/* Title */}
        <div className="mt-20">

        <CustomTitle
          title={"Why Work at YuvaCracy?"}
          subtitle={"Advancing Justice Through Law"}
        />
        </div>

        {/* Comp 1 */}
        <div className="w-full flex flex-col justify-end">
            <TextComponent1
              heading={"A Mission-Driven Workplace"}
              text={text}
              imageSrc={GroupStudyImg}
              data={{ title: "Fill Out This Form" }}
              icon={<GoArrowUpRight />}
            />
        </div>
        <div className="pt-20">
        <CustomTitle title={" Current Openings"} subtitle={"In YuvaCracy"} />
        </div>
      </div>

      {/* Subtitle */}
    </CareerLayout>
  );
};

export default page;
