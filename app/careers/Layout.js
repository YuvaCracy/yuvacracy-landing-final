import React from "react";
import SubNav from "@/components/common/Navbar/SubNav";
import MainNav from "@/components/common/Navbar/MainNav";
import PromotionalContent from "@/components/home/promotional";
import Footer from "@/components/common/Footer";
import { CareersHero1 } from "@/public/assetManager";
import SubHero from "@/components/common/SubHero";

const CareerLayout = ({ children }) => {
  const navItems = [
    {
      name: "INTERNSHIPS",
      link: "internships",
      id: "internship-div"
    },
    {
      name: "WORK WITH US",
      link: "work-with-us",
      id: "work-div"
    },
    {
      name: "WRITE FOR US",
      link: "write-for-us",
      id: "write-div"
    },
    {
      name: "CAREER OPPORTUNITES",
      link: "career-opportunities",
      id: "career-div"
    },
  ];
  return (
    <div>
      <PromotionalContent />
      <MainNav />
      <SubHero title={"YuvaCracy Careers"} subtitle={"Lorem ipsum dolor sit amet consectetur. Semper velit aliquam ametnisl lectus. Integer quis et in vitae nibh nisl. Massa morbi dolorturpis faucibus enim nam. Augue cras posuere sed diam."} img={CareersHero1} />
      <SubNav navItems={navItems}/>
      {children}
      <Footer />
    </div>
  );
};

export default CareerLayout;
