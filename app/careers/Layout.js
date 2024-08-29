import React from "react";
import CareerHeroSection from "@/components/careers/common/Hero/Hero";
import SubNavLayout from "@/components/careers/common/subNav";

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
      {/* Navbar */}
      <CareerHeroSection />
      <SubNavLayout navItems={navItems}/>
      {children}
      {/* Footer */}
    </div>
  );
};

export default CareerLayout;
