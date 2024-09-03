"use client";
import React from "react";
import SupportLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
import GetInTouchCard from "@/components/support/GetInTouchCard";
import { CollabImg } from "@/public/assetManager";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const points = [
  { desc: "Expertise and Guidance" },
  { desc: "Tailored Solutions" },
  { desc: "Driving Change" },
  { desc: "Safe & Inclusive" },
  { desc: "Community Impact" },
];

const PartnerWithUs = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="partner-div"
        className="flex flex-col xl:px-[8rem] px-[6rem] pt-20"
      >
        <CustomTitle
          title={"Partner with Us"}
          subtitle={"Partner with YuvaCracy"}
        />
        <span className="text-lg font-montserrat text-textSecond">
          YuvaCracy Dialogues is our flagship initiative that brings together
          thought leaders, policymakers, activists, and youth from diverse
          backgrounds to discuss critical issues affecting our society. Through
          these conversations, we aim to inspire action and foster a culture of
          informed civic engagement.
        </span>

        <div className="flex w-full py-24">
          <div className="w-[40%] flex justify-left">
            <Image alt="YuvaCracy is a foundation for youth" className="w-[25rem]" src={CollabImg} />
          </div>
          <div className="w-[60%] flex flex-col gap-4 px-4">
            <CustomTitle
              title={"Why Collaborate With Us"}
              subtitle={"YuvaCracy"}
            />
            <span className="text-xl text-textSecond font-openSans">
              At YuvaCracy, we believe in the power of collaboration. By
              partnering with like-minded organizations, businesses, and
              individuals, we can amplify our impact and reach more young people
              across India.{" "}
            </span>

            <div className="pt-4">
              {points.map((item, ind) => (
                <div key={ind} className="flex items-center py-4">
                  <FaCheckCircle className="w-8 h-8 mr-4 text-green-600" />
                  <span className="w-full text-lg font-openSans">
                    {" "}
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GetInTouchCard />
      </div>
    </SupportLayout>
  );
};

export default PartnerWithUs;
