"use client";
import React from "react";
import SupportLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
import { MdAutoGraph } from "react-icons/md";
import HomeStoriesOfImpact from "@/components/home/stories-of-impact";
import GetInTouchCard from "@/components/support/GetInTouchCard";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import SubHead from "@/components/common/SubHeadings/SubHead";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg, PeopleGroup1, PeopleGroup2 } from "@/public/assetManager";

// const data = [
//   {
//     name: "Education Partnership",
//     desc: "Educational Partnerships – Collaborate with us on workshops, training sessions, and educational initiatives.",
//   },
//   {
//     name: "Community Projects",
//     desc: "Educational Partnerships – Collaborate with us on workshops, training sessions, and educational initiatives.",
//   },
//   {
//     name: "Community Projects",
//     desc: "Innovation and Research – Partner with us on research and innovation initiatives that benefit youth leadership and civic engagement.",
//   },
// ];

const DevelopmentData1 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Research Initiatives:</span>
        Joint studies on governance, law, policy, and India-centric
        socio-political and economic themes.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Student Engagement Programs:</span>
        Hosting workshops, seminars, and hands-on training for students in legal
        research, advocacy, and policy analysis.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Internship Programs:</span>
        Facilitating structured internships for students to gain practical
        experience with YCLA and YCPR.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Curriculum Support:</span>
        Co-developing academic modules or elective courses in law, governance,
        and policy research.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Thought Leadership Events:</span>
        Partnering to organize debates, moot courts, and policy competitions to
        inspire critical thinking.
      </span>
    ),
  },
];

const DevelopmentData2 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Policy Advocacy:</span>
        Collaborating on policy research and white papers to influence systemic
        change.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Community Development Programs:</span>
        Conducting legal literacy drives and capacity-building workshops for
        underprivileged communities.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Joint Events:</span>
        Co-hosting conferences and public forums on pressing social, legal, and
        governance issues.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Knowledge Sharing:</span>
        Exchanging insights and resources for stronger advocacy and outreach
        campaigns.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Volunteer Engagement:</span>
        Mobilizing volunteers for research and fieldwork to address social
        justice and governance issues.
      </span>
    ),
  },
];

const DevelopmentData3 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Research Partnerships:</span>
        Co-developing research reports and thought leadership papers on
        industry-relevant policy and legal topics.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">
          Corporate Social Responsibility (CSR):
        </span>
        Engaging in CSR-funded legal awareness and policy research programs.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Capacity Building:</span>
        Offering specialized workshops for corporate professionals on regulatory
        frameworks and governance best practices.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Innovation Labs:</span>
        Collaborating on technological solutions for governance and legal
        challenges.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Policy Dialogue Platforms:</span>
        Co-creating forums for public-private dialogue on legal and policy
        reforms.
      </span>
    ),
  },
];

const DevelopmentData4 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Policy Consulting:</span>
        Providing research insights to assist in drafting laws and public
        policies.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Training Programs:</span>
        Conducting workshops for government officials on governance best
        practices and legal literacy.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Pilot Projects:</span>
        Partnering on experimental governance or legal initiatives to address
        specific challenges.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Public Awareness Campaigns:</span>
        Collaborating on initiatives to educate citizens about governance and
        legal rights.
      </span>
    ),
  },
];

const DevelopmentData5 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Content Collaboration:</span>
        Co-developing editorials, podcasts, or documentaries on governance and legal issues.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Public Engagement Campaigns:</span>
        Partnering to run awareness drives on legal rights and policy matters.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Thought Leadership Columns:</span>
        Sharing expertise through op-eds and interviews.
      </span>
    ),
  },
];


const Collaboration = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="collab-div"
        className="flex flex-col xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-6"
      >
        <SubHead
          title={"Collaboration"}
          subtitle={
            <>
            YuvaCracy Foundation, through its focus on promoting India-centric thoughts and its two specialized centers—YuvaCracy Centre for Policy Research (YCPR) and YuvaCracy Centre for Legal Affairs (YCLA)—offers diverse collaboration opportunities with educational institutions, NGOs, and other organizations.
            <span className="font-semibold"> YuvaCracy provides various collaboration opportunities such as:</span>
            </>
          }
        />

        {/* Cool 3 card component */}
        {/* <div>
        <CustomTitle
          title={"Types Of Collaboration"}
          subtitle={"In YuvaCracy"}
        />
        </div> */}
        {/* <div className="flex flex-col justify-between w-full md:flex-row">
          {data.map((item, ind) => (
            <div key={ind} className="flex flex-row gap-4 p-4 m x-4 md:flex-col">
              <div className="w-14 h-14 bg-[#eef4ff] rounded-full flex items-center justify-center ">
                <MdAutoGraph className="w-8 h-8" />
              </div>
              <div className=" md:flex-col">
              <div className="text-xl font-semibold font-montserrat">
                {item.name}
              </div>
              <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div> */}

        {/* <HomeStoriesOfImpact /> */}
        <ImageTextComp1
          title={"With Educational Institutions"}
          subtitle={"Building Informed and Engaged Students"}
          desc={
            <span>
              <span className="mr-2 font-bold">Purpose:</span>
              To nurture young minds and bridge the gap between academia and
              real-world impact.
            </span>
          }
          imgSrc={PeopleGroup1}
          data={DevelopmentData1}
        />

        <ImageTextComp1
          title={"With NGOs"}
          subtitle={""}
          mirror={true}
          desc={
            <span>
              <span className="mr-2 font-bold">Purpose:</span>
              To align efforts in addressing social, legal, and policy
              challenges at the grassroots level.
            </span>
          }
          imgSrc={PeopleGroup2}
          data={DevelopmentData2}
        />

        <ImageTextComp1
          title={"With Government and Public Institutions"}
          subtitle={""}
          desc={
            <span>
              <span className="mr-2 font-bold">Purpose:</span>
              To foster evidence-based policymaking and improve legal
              frameworks.
            </span>
          }
          imgSrc={PeopleGroup1}
          data={DevelopmentData3}
        />

        <ImageTextComp1
          title={"With Corporations and Think Tanks"}
          subtitle={""}
          mirror={true}
          desc={
            <span>
              <span className="mr-2 font-bold">Purpose:</span>
              To leverage expertise and resources for impactful research and
              capacity-building initiatives.
            </span>
          }
          imgSrc={PeopleGroup2}
          data={DevelopmentData4}
        />

        <ImageTextComp1
          title={"With Media Organizations"}
          subtitle={""}
          desc={
            <span>
              <span className="mr-2 font-bold">Purpose:</span>
              To amplify awareness and disseminate India-centric ideas.
            </span>
          }
          imgSrc={PeopleGroup1}
          data={DevelopmentData5}
        />

        {/* <GetInTouchCard /> */}

        <span className="text-lg font-openSans text-textSecond">
          YuvaCracy Foundation seeks to work with like-minded institutions to
          create a meaningful impact through education, research, and advocacy.
          Whether it’s empowering students, influencing policy, or driving
          grassroots change, collaboration remains at the heart of our mission.
        </span>
      </div>
    </SupportLayout>
  );
};

export default Collaboration;
