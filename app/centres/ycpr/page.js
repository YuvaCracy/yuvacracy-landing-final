"use client";
import React from "react";
import CentreLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg } from "@/public/assetManager";

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

const Ycpr = () => {
  return (
    <CentreLayout>
      <div className="xl:px-[8rem] px-[6rem] flex flex-col">
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
        />
      </div>
    </CentreLayout>
  );
};

export default Ycpr;
