import { FaCrown } from "react-icons/fa";
import { TbListSearch } from "react-icons/tb";
import { PiUsersFour } from "react-icons/pi";
import { PiBookOpenText } from "react-icons/pi";
import { WhatWeDoImage } from "@/public/assetManager";

const whatWeDoData = {
  title: "What We Do",
  desc: "We empower through education, research, advocacy, and networking to drive meaningful change and growth.",
  list: [
    {
      icon: <FaCrown />,
      title: "Leadership Training",
      desc: "Empower your leadership skills for impactful change."
    },
    {
      icon: <TbListSearch />,
      title: "Policy Research",
      desc: "Uncover insights to shape effective policies."
    },
    {
      icon: <PiUsersFour />,
      title: "Community Advocacy",
      desc: "Champion causes and drive community progress."
    },
    {
      icon: <PiBookOpenText />,
      title: "Mentorship Programs",
      desc: "Gain guidance and grow through expert mentorship."
    }
  ],
  images: [
    {
      src: WhatWeDoImage
    },

  ]
}
export default whatWeDoData
