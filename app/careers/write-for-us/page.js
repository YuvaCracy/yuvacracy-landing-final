"use client";
import React from "react";
import CareerLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import CustomTitle from "@/components/common/CustomTitile";
import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
import { ImpactImg, Study } from "@/public/assetManager";
import SectionCountComponent from "@/components/careers/WorkWithUs/SectionCountComponent";
import Link from "next/link";
import PrimaryButton from "@/components/common/Button/PrimaryButton";
import { GoArrowUpRight } from "react-icons/go";
import { useSearchParams } from "next/navigation";
import SmoothScroll from "@/utils/SmoothScroll";
import HomeRecentContribution from "@/components/home/recent-contribution";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const text =
  "YuvaCracy welcomes diverse voices and fresh perspectives. By writing for us, you can share your insights on youth leadership, civic participation, and social justice, helping to shape conversations that matter.";

const title = "Content We're Looking For";

const steps = [
  {
    heading: "Program Support",
    description: "Contribute resources or expertise to our youth initiatives.",
  },
  {
    heading: "Event Collaboration",
    description: "Co-host or sponsor events that align with our mission.",
  },
  {
    heading: "Research & Innovation",
    description:
      "Work together on projects that drive new insights and solutions.",
  },
];

const href = "testLink";

const WriteForUs = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scroll");
  if (scrollTo) {
    SmoothScroll(scrollTo);
  }

  return (
    <CareerLayout>
    {/* Suspense builder */}
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div id="write-div" className="xl:px-[8rem] px-[6rem] flex flex-col">
        {/* Page Title */}
        <SubHead
          title={"Write for Us"}
          subtitle={
            "Contribute your thoughts, research, and experiences to our growing community, where every voice adds value and drives collective progress. By sharing your unique insights and knowledge, you help to enrich discussions, inspire new ideas, and foster a culture of learning and collaboration. Whether you have groundbreaking research, personal experiences, or simply a fresh perspective, your contributions can spark innovation, challenge conventional thinking, and empower others to take action. Join us in creating a vibrant, dynamic space where diverse ideas converge, and together, we can build a stronger, more informed community that thrives on shared wisdom and collective growth."
          }
        />

        {/* Title */}
        <div className="mt-16">
          <CustomTitle
            title={"Creating a Safe and Inclusive Space"}
            subtitle={"Advancing Justice Through Law"}
          />
        </div>

        {/* Comp1 */}
        <div className="w-full flex justify-end">
          <div className="px-12">
            <TextComponent1
              heading={"Make an Impact with Your Ideas"}
              text={text}
              imageSrc={ImpactImg}
            />
          </div>
        </div>

        {/* Comp 2 */}
        <SectionCountComponent
          imageSrc={Study}
          title={title}
          sections={steps}
        />

        {/* 3 Cards */}
          <HomeRecentContribution />

        {/* Submission Guidelines */}
        
        <div className="pt-20">
        <CustomTitle
          title={"Submission Guidelines"}
          subtitle={"How to Contribute \xa0 \xa0"}
        />
        </div>
        <span className="-mt-6 text-lg  text-textSecond font-openSans">
          We encourage anyone passionate about youth leadership and civic
          engagement to submit their work. Follow these guidelines for a
          successful submission:
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
      </div>
    </CareerLayout>
  );
};

export default WriteForUs;
