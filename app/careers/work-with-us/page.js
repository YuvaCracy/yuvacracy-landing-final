"use client";
import React from "react";
import CareerLayout from "../Layout";
// import CustomTitle from "@/components/docs/CustomTitle";
// import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
// import { PartnerWithUsImg } from "@/public/assetManager";
// import SectionCountComponent from "@/components/careers/WorkWithUs/SectionCountComponent";
// import { PartnershipTypesImg } from "@/public/assetManager";
// import { GetInvolved } from "@/public/assetManager";
import SubHead from "@/components/common/SubHeadings/SubHead";
// import StepImageComponent from "@/components/careers/WorkWithUs/StepImageComponent";
// import { p1, p2, p3, p4, p5, p6 } from "@/public/assetManager";
// import PartnersMarquee from "@/components/careers/common/Marquee";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
// import CareerSliderComponent from "@/components/careers/common/Slider/CareerSliderComponent";

// const images = [p1, p2, p3, p4, p5, p6];

// const heading = "Why Partner with Us?";
// const text =
//   "At YuvaCracy, we believe in collective action for social good. Partnering with us means contributing to impactful projects that foster youth leadership and civic engagement. We invite organizations, educational institutions, and community groups to collaborate with us to create lasting change.";
// const partnerships = [
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

// const steps = [
//   {
//     heading: "Initial Contact",
//     description:
//       "Reach out via our partnership inquiry form to discuss your interest.",
//   },
//   {
//     heading: "Strategic Alignment",
//     description: "We'll have a discussion to ensure our goals align.",
//   },
//   {
//     heading: "Collaboration Agreement",
//     description: "Formalize the partnership with clear objectives and roles.",
//   },
// ];

const WorkWithUs = () => {
  return (
    <CareerLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div id="work-div" className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pb-[6rem]">
        <SubHead
          title={"Work With Us"}
          subtitle={
            "There's a space for everyone in this movement. We believe in our youth's potential to be leaders and take initiative and accountability for their work, which will be at the heart of our engagement with you."
          }
        />

        <SubHead
          noSpace={false}
          customSpace="pt-14"
          title={"How to get involved ?"}
          subtitle={<>
            {"Exciting times are ahead! We will soon be rolling out the application form for those eager to join us."}
            <br />
            <br />
            <span className="font-bold">
            {"Stay tuned and check back regularly for updates!"}
            </span>
          </>
          }
        />


        {/* Vision for collab */}
        {/* <div className="mt-20">
          <CustomTitle
            title={"Our Vision for Collaboration"}
            subtitle={"Advancing Justice Through Law \xa0 \xa0"}
          />
        </div> */}

        {/* <TextComponent1
          heading={heading}
          text={text}
          imageSrc={PartnerWithUsImg}
        /> */}

        {/* Types of Partners */}
        {/* <SectionCountComponent
          title={"Types of Partnerships"}
          imageSrc={PartnershipTypesImg}
          sections={partnerships}
        /> */}

        {/* Our Partners */}
        {/* <div className="pt-20">
          <CustomTitle
            title={"Our Partners in Action"}
            subtitle={"YuvaCracy \xa0 \xa0 \xa0"}
          />
        </div> */}
        {/* <div className="flex items-center justify-between gap-4 py-10">
          <PartnersMarquee images={images} />
        </div> */}

        {/* Slider Component */}
          {/* <CareerSliderComponent /> */}
        {/* Get Involved */}
        {/* <div className="flex flex-col w-full py-2">
          <div className="flex flex-col py-8 space-y-2">
            <span className="text-3xl font-bold text-center font-montserrat">
              How to get Involved
            </span>
            <span className="text-lg text-center font-openSans text-[#2F2F2F]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </span>
          </div>

          <StepImageComponent
            image={GetInvolved}
            steps={steps}
            buttonText={"Partner With Us"}
          />
        </div> */}
      </div>
    </CareerLayout>
  );
};

export default WorkWithUs;
