import Footer from '@/components/common/Footer'
import MainNav from '@/components/common/Navbar/MainNav'
import SubNav from '@/components/common/Navbar/SubNav';
import SubHero from '@/components/common/Hero';
import { HeroImg } from '@/public/assetManager';
import React from 'react'

const navItems = [
    {
      name: "Upcoming Events",
      link: "upcoming-events",
      id: "upcoming-div"
    },
    {
      name: "Past Events",
      link: "past-events",
      id: "past-div"
    },
    {
      name: "YuvaCracy dialogues",
      link: "yuvacracy-dialogues",
      id: "yuvacracy-diag-div"
    },
  ];

const EventLayout = ({children}) => {
  return (
    <div>
        <MainNav />
        <SubHero title={"Empowering the next generation YuvaCracy Events"} subtitle={"Inspiring youth leadership and innovation through engaging activities"} img={HeroImg}/>
        <SubNav navItems={navItems}/>
        {children}
        <Footer />
    </div>
  )
}

export default EventLayout