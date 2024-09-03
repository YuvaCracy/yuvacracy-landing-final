import Footer from '@/components/common/Footer'
import SubHero from '@/components/common/Hero'
import MainNav from '@/components/common/Navbar/MainNav'
import SubNav from '@/components/common/Navbar/SubNav'
import { SupportHeroImg } from '@/public/assetManager'
import React from 'react'

const navItems = [
    {
      name: "Donate",
      link: "donate",
      id: "donate-div"
    },
    {
      name: "collaboration",
      link: "collaboration",
      id: "collab-div"
    },
    {
      name: "partner with us",
      link: "partner-with-us",
      id: "partner-div"
    },
  ];


const SupportLayout = ({children}) => {
  return (
    <div>
        <MainNav />
        <SubHero title={"Support Our Mission"} subtitle={"Your support helps us empower the next generation of leaders. By contributing, you’re fueling youth-driven initiatives that inspire civic participation and community development. Together, we can make a lasting impact."} img={SupportHeroImg}/>
        <SubNav navItems={navItems} />
        {children}
        <Footer />
    </div>
  )
}

export default SupportLayout