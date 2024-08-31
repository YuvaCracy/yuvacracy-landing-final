import React from "react";
import CareerHeroSection from "@/components/careers/common/Hero/Hero";
import SubNav from "@/components/common/Navbar/SubNav";
import MainNav from "@/components/common/Navbar/MainNav";
import PromotionalContent from "@/components/home/promotional";
import Footer from "@/components/common/Footer";
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
      <CareerHeroSection />
      <SubNav navItems={navItems}/>
      {children}
      <Footer />
    </div>
  );
};

export default CareerLayout;
