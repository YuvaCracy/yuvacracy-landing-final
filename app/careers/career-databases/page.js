"use client";
import React from "react";
import CareerLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
// import CustomTitle from "@/components/docs/CustomTitle";
// import { GroupStudyImg } from "@/public/assetManager";
// import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
// import { GoArrowUpRight } from "react-icons/go";
// import CareerOppCard from "@/components/careers/careerOpportunities/CareerOppCard";
// import CareerCardData from "@/components/careers/careerOpportunities/CareerCardData";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

// const text =
//   "YuvaCracy welcomes diverse voices and fresh perspectives. By writing for us, you can share your insights on youth leadership, civic participation, and social justice, helping to shape conversations that matter.";

const CareerDatabases = () => {
  return (
    <CareerLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="career-div"
        className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] flex flex-col"
      >
        {/* Page Title */}
        <div className="">
          <SubHead
            title={"Career Databases"}
            subtitle={
              <>
                {
                  "Explore exceptional opportunities to elevate your career to the next level."
                }
                <br />
                <br />
                {
                  "We aim to create a strong network that brings together aspiring policy and legal professionals, students, and experienced experts, fostering collaboration and closing the gap in knowledge and opportunities within the field."
                }
                <br />
                <br />
                <span className="font-semibold">
                {"Stay tuned for upcoming updates and new opportunities."}
                </span>
              </>
            }
          />
        </div>
        {/* Title */}
        {/* <div className="mt-20">
          <CustomTitle
            title={"Why Work at YuvaCracy?"}
            subtitle={"Advancing Justice Through Law"}
          />
        </div> */}
        {/* Comp 1 */}
        {/* <div className="flex flex-col justify-end w-full">
          <TextComponent1
            heading={"A Mission-Driven Workplace"}
            text={text}
            imageSrc={GroupStudyImg}
            data={{ title: "Fill Out This Form" }}
            icon={<GoArrowUpRight />}
          />
        </div> */}
        {/* <div className="pt-20">
          <CustomTitle title={" Current Openings"} subtitle={"In YuvaCracy"} />
        </div> */}

        {/* <div className="flex flex-col gap-4 md:justify-between md:flex-row ">
          {CareerCardData.list.slice(0, 3).map((item, ind) => {
            return <CareerOppCard key={ind} data={item} />;
          })}
          ;
        </div> */}
      </div>
    </CareerLayout>
  );
};

export default CareerDatabases;
