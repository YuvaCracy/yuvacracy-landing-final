import React from "react";
import CareerHeroSection from "@/components/careers/common/Hero/Hero";
import SubNav from "@/components/common/Navbar/SubNav";
import MainNav from "@/components/common/Navbar/MainNav";
import PromotionalContent from "@/components/home/promotional";
const CareerLayout = ({ children }) => {
  const navItems = [
    {
      name: "INTERNSHIPS",
      link: "internships",
    },
    {
      name: "WORK WITH US",
      link: "work-with-us",
    },
    {
      name: "WRITE FOR US",
      link: "write-for-us",
    },
    {
      name: "CAREER OPPORTUNITES",
      link: "career-opportunities",
    },
  ];
  return (
    <div>
      <PromotionalContent />
      <MainNav />
      <CareerHeroSection />
      <SubNav navItems={navItems}/>
      {children}
      {/* Footer */}
    </div>
  );
};

export default CareerLayout;
