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
    title: "Leadership Training: ",
    desc: "Our training programs focus on essential skills such as public speaking, negotiation, and strategic planning.",
  },
  {
    title: "Mentorship & Networking: ",
    desc: "We connect young leaders with experienced mentors who guide them through their leadership journey, providing invaluable advice and support.",
  },
];

const DevelopmentData2 = [
  {
    title: "Youth Councils: ",
    desc: "Our youth councils provide a platform for young people to influence policies and decisions that impact their communities.",
  },
  {
    title: "Policy Advocacy: ",
    desc: "We train youth to advocate for policies that address their needs and concerns, ensuring their voices are not just heard, but acted upon.",
  },
];

const Ycpr = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div className="xl:px-[8rem] px-[6rem] sm_phone:px-[1rem] flex flex-col">
        <SubHead
          title={"YuvaCracy Centre for Policy Research (YCPR)"}
          subtitle={
            "At YuvaCracy, our YCPR initiative empowers youth to engage in civic life, ensuring their voices are heard and valued."
          }
        />

        <ImageTextComp1
          title={"Youth Leadership Development"}
          subtitle={"Fostering the Next Generation of Leaders"}
          imgSrc={MeetingImg}
          desc={
            " Our Youth Leadership Development program provides comprehensive training and mentorship to equip young leaders with the skills they need to succeed."
          }
          data={DevelopmentData}
        />

        <ImageTextCustomTitle
          title={"Civic Education and Awareness"}
          subtitle={"Building Informed and Engaged Citizens"}
          desc={
            "Civic education is the foundation of an informed and engaged society. We provide young people with the knowledge and tools they need to understand their rights and responsibilities as citizens. Through interactive workshops, engaging seminars, and dynamic campaigns, we help youth become active participants in the democratic process."
          }
          imgSrc={PeopleGroup1}
        />

        <ImageTextComp1
          title={"Representation in Decision-Making"}
          subtitle={"Ensuring Youth Voices are Heard"}
          desc={
            "Young people deserve a seat at the table where decisions that affect their lives are made. Through YCPR, we create opportunities for youth to participate in decision-making processes at the local, regional, and national levels."
          }
          imgSrc={PeopleGroup2}
          data={DevelopmentData2}
        />

        <ImageTextCustomTitle
          title={"Why YCPR Matters"}
          subtitle={"Impact of Youth"}
          desc={
            "Youth civic participation is not just about having a voice; it's about making a difference. When young people are actively involved in civic life, they bring fresh perspectives, innovative solutions, and a deep commitment to building better communities."
          }
          imgSrc={PeopleGroup1}
        />
      </div>
    </CentreLayout>
  );
};

export default Ycpr;
