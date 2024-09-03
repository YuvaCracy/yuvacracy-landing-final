import Footer from '@/components/common/Footer';
import SubHero from '@/components/common/Hero';
import MainNav from '@/components/common/Navbar/MainNav'
import SubNav from '@/components/common/Navbar/SubNav';
import PromotionalContent from '@/components/home/promotional'
import { CenterHero } from '@/public/assetManager';
import React from 'react'

const navItems = [
      {
        name: "YCPR",
        link: "/centres/ycpr",
        id: "ycpr-div"
      },
      {
        name: "YCLA",
        link: "/centres/ycla",
        id: "ycla-div"
      },
    ];

const CentreLayout = ({children}) => {
  return (
    <div>
        <PromotionalContent />
        <MainNav />
        <SubHero title={"YuvaCracy Centres"} subtitle={"YCPR initiative empowers youth to engage in civic life, ensuring their voices are heard and valued."} img={CenterHero} />
        <SubNav navItems={navItems} />
        {children}
        <Footer />
    </div>
  )
}

export default CentreLayout