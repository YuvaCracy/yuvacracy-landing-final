"use client";
import React, { useEffect } from "react";
import CareerLayout from "../Layout";
import CustomTitle from "@/components/common/CustomTitile";
import TextComponent1 from "@/components/careers/common/TextComponent/TextComponent1";
import { PartnerWithUsImg } from "@/public/assetManager";
import SectionCountComponent from "@/components/careers/WorkWithUs/SectionCountComponent";
import { PartnershipTypesImg } from "@/public/assetManager";
import { GetInvolved } from "@/public/assetManager";
import SubHead from "@/components/common/SubHeadings/SubHead";
import StepImageComponent from "@/components/careers/WorkWithUs/StepImageComponent";
import { p1, p2, p3, p4, p5, p6 } from "@/public/assetManager";
import PartnersMarquee from "@/components/careers/common/Marquee";
import CareerSliderComponent from "@/components/careers/common/Slider/CareerSliderComponent";

const images = [p1, p2, p3, p4, p5, p6];

const heading = "Why Partner with Us?";
const text =
  "At YuvaCracy, we believe in collective action for social good. Partnering with us means contributing to impactful projects that foster youth leadership and civic engagement. We invite organizations, educational institutions, and community groups to collaborate with us to create lasting change.";
const partnerships = [
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

const steps = [
  {
    heading: "Initial Contact",
    description:
      "Reach out via our partnership inquiry form to discuss your interest.",
  },
  {
    heading: "Strategic Alignment",
    description: "We'll have a discussion to ensure our goals align.",
  },
  {
    heading: "Collaboration Agreement",
    description: "Formalize the partnership with clear objectives and roles.",
  },
];

const WorkWithUs = () => {

  // useEffect(() => {
  //   const fullUrl = window.location.href;
  //   const queryString = window.location.search;
  //   const params = new URLSearchParams(queryString);
  //   for (const param of params) {
  //     console.log(param); 
  //   }
  //   const scroll = params.get("scroll");

  //   if(scroll){
  //     SmoothScroll(params.get("scroll"), router);
  //   }
    
  // }, []);

  
  return (
    <CareerLayout>
      <div id="work-div" className="xl:px-[8rem] px-[6rem]">
        <SubHead
          title={"Collaborate with YuvaCracy"}
          subtitle={
            "Join forces with us to empower the next generation of leaders and changemakers. By collaborating, we can provide the tools, resources, and support needed to inspire and equip young people to lead with purpose and drive meaningful change. Together, we can foster a future where emerging leaders are not only prepared to face the challenges ahead but are also empowered to create a lasting impact on their communities and the world. Let's unite our efforts to nurture and uplift the leaders of tomorrow."
          }
        />

        {/* Vision for collab */}
        <div className="mt-20">
          <CustomTitle
            title={"Our Vision for Collaboration"}
            subtitle={"Advancing Justice Through Law \xa0 \xa0"}
          />
        </div>

        <TextComponent1
          heading={heading}
          text={text}
          imageSrc={PartnerWithUsImg}
        />

        {/* Types of Partners */}
        <SectionCountComponent
          title={"Types of Partnerships"}
          imageSrc={PartnershipTypesImg}
          sections={partnerships}
        />

        {/* Our Partners */}
        <div className="pt-20">
          <CustomTitle
            title={"Our Partners in Action"}
            subtitle={"YuvaCracy \xa0 \xa0 \xa0"}
          />
        </div>
        <div className="flex items-center justify-between gap-4 py-10">
          <PartnersMarquee images={images} />
        </div>

        {/* Slider Component */}
        <div className="py-6">
          <CareerSliderComponent />
        </div>
        {/* Get Involved */}
        <div className="flex flex-col py-2">
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
        </div>
      </div>
    </CareerLayout>
  );
};

export default WorkWithUs;
