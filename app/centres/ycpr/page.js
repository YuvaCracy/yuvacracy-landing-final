"use client";
import React from "react";
import CentreLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg, PeopleGroup1, PeopleGroup2 } from "@/public/assetManager";
import ImageTextCustomTitle from "@/components/common/TextComponents/ImageTextCustomTitle";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const DevelopmentData = [
  {
    title: "Dedicated Legislative Assistants: ",
    desc: "We assign trained professionals to support MPs, working from their Delhi offices or constituencies as needed.",
  },
  {
    title: "Parliamentary Work Support: ",
    desc: "From drafting questions to preparing speeches, we assist with all aspects of parliamentary proceedings.",
  },
  {
    title: "Stakeholder Networking: ",
    desc: "Facilitating connections with key stakeholders through consultancy and outreach initiatives.",
  },
  {
    title: "Sansad Website Training: ",
    desc: "Enabling MPs and their teams to maximize the use of the official parliamentary portal.",
  },
];

const DevelopmentData2 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Budgetary Reviews
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Analysis of State
        Schemes and Bills
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Constitutional Debates
        and Dispute Resolution
      </div>
    ),
  },
];

const DevelopmentData3 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div> Tenure and
        Accountability
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Federalism and
        Comparative Insights
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Gender Implications
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Socio-Economic
        Benefits
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Electoral Impact
        (e.g., is it a vote-bank scheme?)
      </div>
    ),
  },
];

const DevelopmentData4 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>The constitutional
        adherence of judgments.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>The interplay between
        the judiciary's role and the people's mandate.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Gaps and loopholes in
        the legal and parliamentary framework.
      </div>
    ),
  },
];

const DevelopmentData5 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Holistic Research:</span>Analysis of
        legislative and executive orders.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Accountability and Transparency:</span>
        Ensuring every step is aligned with democratic principles.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Expertise Across Domains:</span>
        Bringing together skilled professionals passionate about policy and
        governance.
      </span>
    ),
  },
];

const Ycpr = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div className="xl:px-[8rem] md:px-[6rem] px-[1rem] flex flex-col">
        <SubHead
          title={"YuvaCracy Centre for Policy Research (YCPR)"}
          subtitle={
            <div className="w-full">
              <span className="">
                Aiding Legislators and Policymakers with Innovative Research and
                Assistance.
              </span>{" "}
              <br />
              <br />
              <span>
                At YuvaCracy Centre for Policy Research (YCPR), we are committed
                to enhance the effectiveness of India's democratic institutions
                by providing high-quality legislative and policy assistance.
                Through collaboration, research, and tailored support, we bridge
                the gap between policymakers and the people they serve.
              </span>
            </div>
          }
        />

        <ImageTextComp1
          title={"Our Key Initiatives"}
          subtitle={"Yuvacracy"}
          imgSrc={MeetingImg}
          desc={
            <div>
              Legislative Assistance to Members of Parliament (MPs)
              <br />
              <br />
              We equip MPs and their teams with the tools and resources they
              need to make informed decisions and drive impactful parliamentary
              contributions. Our services include:
            </div>
          }
          data={DevelopmentData}
        />

        <ImageTextComp1
          title={"Policy Research for Think Tanks"}
          subtitle={"Building Informed and Engaged Citizens"}
          mirror={true}
          desc={
            <span>
              We provide specialized research services to think tanks, ensuring
              a nuanced and comprehensive analysis of policies
              <br />
              <br />
              <span className="pr-2 font-bold">Collaborative Research:</span>
              Partnering with other think tanks for diverse perspectives.
              <br />
              <span className="pr-2 font-bold">
                Policy Analysis Parameters:
              </span>
            </span>
          }
          imgSrc={PeopleGroup1}
          data={DevelopmentData3}
        />

        <ImageTextComp1
          title={"State-Level Legislative Insights"}
          subtitle={"Ensuring Youth Voices are Heard"}
          desc={
            "Our expertise extends beyond the national level to state legislatures, focusing on:"
          }
          imgSrc={PeopleGroup2}
          data={DevelopmentData2}
        />

        <ImageTextComp1
          title={"Supreme Court Judgement Analysis"}
          subtitle={"Building Informed and Engaged Citizens"}
          mirror={true}
          desc={
            <span>
              We bridge the understanding between judicial decisions and
              legislative policymaking by examining:
            </span>
          }
          imgSrc={PeopleGroup1}
          data={DevelopmentData4}
        />

        <ImageTextComp1
          title={"Why YCPR Matters"}
          subtitle={"Building Informed and Engaged Citizens"}
          desc={"Our approach is rooted in:"}
          imgSrc={PeopleGroup2}
          data={DevelopmentData5}
        />
      </div>
    </CentreLayout>
  );
};

export default Ycpr;
