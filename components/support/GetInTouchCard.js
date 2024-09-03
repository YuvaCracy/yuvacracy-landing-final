import React from "react";
import PrimaryButton from "../common/Button/PrimaryButton";
import { MdOutlineCallMade } from "react-icons/md";
import CustomTitle from "../docs/CustomTitle";

const data = {
  title: "Get in Touch",
  execute: () => { },
}

const GetInTouchCard = () => {
  return (
    <div className="pt-20">
      <CustomTitle title={"Get In Touch"} subtitle={"Contact Us"} />
      <span className="text-lg text-textSecond font-openSans">
        If you're interested in collaborating with Yuvacracy, we’d love to hear
        from you. Fill out the form below, and our team will get back to you to
        discuss how we can work together.
      </span>
      <div className="pt-8">
        <PrimaryButton data={data} icon={<MdOutlineCallMade />} />
      </div>
    </div>
  );
};

export default GetInTouchCard;
