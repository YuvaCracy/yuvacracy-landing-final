"use client";
import React from "react";
import CentreLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg, PeopleGroup1, PeopleGroup2 } from "@/public/assetManager";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const DevelopmentData = [
  {
    title: "Core Modules: ",
    desc: "Topics include Ethical Leadership, Community Organizing, and Conflict Resolution.",
  },
  {
    title: "Specialized Tracks: ",
    desc: "Participants can choose to focus on areas such as Environmental Leadership, Social Entrepreneurship, or Public Health.",
  },
];

const DevelopmentData1 = [
  {
    title: "Project Examples: ",
    desc: "From organizing community clean-ups to leading health awareness campaigns, our participants tackle projects that address the most pressing needs of their communities.",
  },
  {
    title: "Before and After Photos: ",
    desc: "Show the impact of these projects with before-and-after images that tell a powerful story of transformation.",
  },
];

const DevelopmentData2 = [
  {
    title: "Mentorship Program: ",
    desc: "Each participant is paired with a mentor who guides them through their leadership journey, offering support and practical advice.",
  },
  {
    title: "Networking Events: ",
    desc: "We organize events where participants can connect with leaders from various sectors, expanding their professional network.",
  },
];

const Ycla = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div id="ycla-div" className="xl:px-[8rem] px-[6rem] flex flex-col">
        <SubHead
          title={"YuvaCracy Centre for Legal Affairs (YCLA)"}
          subtitle={
            "Equipping the next generation with the skills and knowledge to lead and advocate for their communities. Our programs encompass leadership training, advocacy campaigns, and mentorship opportunities."
          }
        />

        <ImageTextComp1
          title={"Comprehensive Leadership Curriculum"}
          subtitle={"Developing Core Competencies for Effective Leadership"}
          imgSrc={MeetingImg}
          desc={
            " Our leadership curriculum is designed to cover all aspects of community leadership, from ethical decision-making to strategic project management. We offer core modules that every participant completes, along with specialized tracks that allow them to focus on areas of interest."
          }
          data={DevelopmentData}
        />

        <ImageTextComp1
          mirror={true}
          title={"Hands-On Community Projects"}
          subtitle={"Turning Knowledge into Action"}
          desc={
            "At YCLA, we believe in learning by doing. Our participants apply what they learn in the classroom to real-world community projects. These hands-on experiences are crucial for developing the practical skills needed to lead effectively."
          }
          data={DevelopmentData1}
          imgSrc={PeopleGroup1}
        />

        <ImageTextComp1
          title={"Networking and Mentorship"}
          subtitle={"Building Strong Connections for Future Success"}
          desc={
            "Leadership is not just about individual skills; it's also about building a network of support and guidance. Through our mentorship program, YCLA participants are paired with experienced community leaders who provide valuable insights and advice."
          }
          data={DevelopmentData2}
          imgSrc={PeopleGroup2}
        />
      </div>
    </CentreLayout>
  );
};

export default Ycla;
