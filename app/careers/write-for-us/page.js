"use client";
import React from "react";
import CareerLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import CustomTitle from "@/components/docs/CustomTitle";
// import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
// import { ImpactImg, Study } from "@/public/assetManager";
// import SectionCountComponent from "@/components/careers/WorkWithUs/SectionCountComponent";
import Link from "next/link";
import PrimaryButton from "@/components/common/Button/PrimaryButton";
import { GoArrowUpRight } from "react-icons/go";
import HomeRecentContribution from "@/components/home/recent-contribution";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

// const text =
//   "YuvaCracy welcomes diverse voices and fresh perspectives. By writing for us, you can share your insights on youth leadership, civic participation, and social justice, helping to shape conversations that matter.";

// const title = "Content We're Looking For";

// const steps = [
//   {
//     heading: "Program Support",
//     description: "Contribute resources or expertise to our youth initiatives.",
//   },
//   {
//     heading: "Event Collaboration",
//     description: "Co-host or sponsor events that align with our mission.",
//   },
//   {
//     heading: "Research & Innovation",
//     description:
//       "Work together on projects that drive new insights and solutions.",
//   },
// ];

const href = "testLink";

const WriteForUs = () => {
  return (
    <CareerLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="write-div"
        className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] flex flex-col"
      >
        {/* Page Title */}
        <SubHead
          title={"Write for Us"}
          subtitle={
            "Thank you very much for your interest in joining our team of Contributors. Before submitting your form, please consider the following:"
          }
        />

        {/* Title */}
        {/* <div className="mt-16">
          <CustomTitle
            title={"Creating a Safe and Inclusive Space"}
            subtitle={"Advancing Justice Through Law"}
          />
        </div> */}

        {/* Comp1 */}
        {/* <div className="flex justify-end w-full">
          <div className="md:px-12">
            <TextComponent1
              heading={"Make an Impact with Your Ideas"}
              text={text}
              imageSrc={ImpactImg}
            />
          </div>
        </div> */}

        {/* Comp 2 */}
        {/* <SectionCountComponent
          imageSrc={Study}
          title={title}
          sections={steps}
        /> */}
        

        {/* Write For US new Component */}
        <div className="flex flex-col text-lg pt-8 space-y-3">
          <div>
            <span className="font-semibold">Editorial Rights:</span> YuvaCracy Foundation reserves the right to publish or unpublish your contribution at any time. We may edit and refine your content to align with our editorial standards.
          </div>
          <div>
            <span className="font-semibold">Publication Platforms:</span> Your contribution may be published in our magazine, on our website, and across our social media channels.
          </div>
          <div>
            <span className="font-semibold">Accuracy and Integrity:</span> We may unpublish your contribution if it contains incorrect data or sources.
          </div>
          <div>
            <span className="font-semibold">Voluntary Contribution:</span> By submitting, you acknowledge that this does not create an employment or partnership relationship with YuvaCracy Foundation. Contributions are made on a voluntary basis and are not financially compensated. 
          </div>
        </div>


        {/* Submission Guidelines */}
        <div className="pt-20">
          <CustomTitle
            title={"Submission Guidelines"}
            subtitle={"How to Contribute \xa0 \xa0"}
          />
        </div>
        <span className="-mt-6 text-lg text-textSecond font-openSans">
          Before submitting, please take a moment to review our Editorial
          Guidelines to understand the types of content we publish and our
          editorial standards.
        </span>

        <Link className="flex items-center py-8" href={href}>
          <span className="flex text-lg font-bold text-primary font-montserrat">
            YuvaCracy Editorial Guidlines{" "}
            <GoArrowUpRight className="font-bold mt-[0.1rem] h-7 w-7" />
          </span>
        </Link>
        <div className="w-24">
          <PrimaryButton
            data={{ title: "Submit" }}
            icon={<GoArrowUpRight className="w-6 h-6" />}
          />
        </div>

        {/* 3 Cards */}
        <HomeRecentContribution />
      </div>
    </CareerLayout>
  );
};

export default WriteForUs;
