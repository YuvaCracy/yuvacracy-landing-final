import React from "react";
import AnimatedLogo from "../Logo/Animated";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer id="footer-div" className=" xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] py-[2rem] mt-[8rem] text-gray-700 bg-[#F8FCFF] border-t-[1px]  ">
      <div className=" mt-[3rem] mx-auto ">
        <div className=" w-fit mb-[3rem] " >
          <AnimatedLogo bg={"bg-[#F8FCFF]"} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* About Section */}
          <div className="flex-1 mb-[4rem] md:mb-0">
            <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">About</h2>
            <ul>
              <li>
                <Link href={'/org/about-yuvacracy'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  About YuvaCracy
                </Link>
              </li>
              <li>
                <Link href={'/org/code-of-conduct'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Code Of Conduct
                </Link>
              </li>
              <li>
                <Link href={'/org/social-media-advisory'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Social Media Advisory
                </Link>
              </li>
              <li>
                <Link href={'/org/yuvacracy-a-safe-space'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  YuvaCracy - A Safe Space
                </Link>
              </li>
            </ul>
            <h2 className="mt-6  font-montserrat font-[600] text-[1.15rem] text-primary ">The People</h2>
            <ul>
              <li>
                <Link href={'/'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Our Advisors
                </Link>
              </li>
              <li>
                <Link href={'/people/our-partners'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href={'/people/our-team'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Centres and Careers Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="mb-8">
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Centres</h2>
              <ul>
                <li>
                  <Link href={'/centres/ycpr'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YCPR
                  </Link>
                </li>
                <li>
                  <Link href={'/centres/ycla'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YCLA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Careers</h2>
              <ul>
                <li>
                  <Link href={'/careers/internships?scroll=internship-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Internships
                  </Link>
                </li>
                <li>
                  <Link href={'/careers/work-with-us?scroll=work-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href={'/careers/write-for-us?scroll=write-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Write For Us
                  </Link>
                </li>
                <li>
                  <Link href={'/careers/career-databases?scroll=career-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Career Databases
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Events and Support Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="mb-8">
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Events</h2>
              <ul>
                <li>
                  <Link href={'/events/upcoming-events?scroll=upcoming-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href={'/events/past-events?scroll=past-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href={'/events/yuvacracy-dialogues?scroll=yuvacracy-diag-div'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YuvaCracy Dialogues
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Support Us</h2>
              <ul>
                <li>
                  <Link href={'/support/donate'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href={'/support/collaboration'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link href={'/support/partner-with-us'} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="flex-1">
            <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Contact Us</h2>
            <ul>
              <li className="text-black  font-openSans text-[.9rem] text-opacity-[.8] " >Phone: +91 8987476709</li>
              <li>
                <a href="mailto:yuvacracyorg@gmail.com" className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Email: yuvacracyorg@gmail.com
                </a>
              </li>
            </ul>

            <h2 className=" mt-[1rem] font-montserrat font-[600] text-[1.15rem] text-primary ">Quick Links</h2>
            <ul className="flex flex-col " >
              <Link href={'https://drive.google.com/file/d/1HS3sDALwDA8NpxqCeClD-gycPMaARBHu'} target="_blank" className="text-black hover:underline font-openSans text-[.9rem] w-fit text-opacity-[.8] " >Brand Identity Guide</Link>

              <Link href={'/?scroll=faq-div'} className="text-black hover:underline font-openSans w-fit text-[.9rem] text-opacity-[.8] " >FAQs</Link>

            </ul>

            <h2 className=" mt-[1rem]  font-montserrat font-[600] text-[1.15rem] text-primary ">Follow Us</h2>
            <div className="flex mt-[1rem] space-x-4">
              <Link href={'https://www.facebook.com/YuvaCracyOrg'} target="_blank" aria-label="Facebook">
                <FaFacebookF />
                {/* <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /> */}
              </Link>
              <Link href={'https://www.instagram.com/YuvaCracyOrg'} target="_blank" aria-label="Instagram">
                <AiFillInstagram />
              </Link>
              <Link href={'https://www.twitter.com/YuvaCracyOrg'} target="_blank" aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link href={'https://www.youtube.com/@YuvaCracyOrg'} target="_blank" aria-label="YouTube">
                <FaYoutube />
              </Link>
              <Link href={'https://in.linkedin.com/company/YuvaCracyOrg'} target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
              <Link href={'https://medium.com/@YuvaCracyOrg/'} target="_blank" aria-label="Medium">
                <FaMedium />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md_desktop:flex-row md_desktop:gap-0 gap-[.5rem] flex-col md_desktop:items-center text-primary font-openSans font-[600] text-[.92rem] justify-between mt-[4rem] pt-[1rem] border-t-[1px]  ">
          <div className=" flex gap-[.5rem] flex-wrap text-nowrap " >
            <h2>Copyright © YuvaCracy Foundation |</h2>
            <h2>All Rights Reserved |</h2>
            <h2>Designed and Developed by</h2>
            <Link href={'/people/our-team?scroll=tech-team'} className=" hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
              YuvaCracy Tech
            </Link>
          </div>
          <div className="flex flex-wrap justify-start md_phone:space-x-4 md_phone:gap-0 gap-[1rem] md_phone:items-center md_phone:flex-nowrap md_desktop:justify-center ">
            <Link href={''} className=" hover:underline md_phone:text-wrap text-nowrap font-openSans text-[.9rem] text-opacity-[.8] ">
              Privacy Policy
            </Link>
            <Link href={''} className=" hover:underline  md_phone:text-wrap text-nowrap font-openSans text-[.9rem] text-opacity-[.8] ">
              Terms of Service
            </Link>
            <Link href={''} className=" hover:underline  md_phone:text-wrap text-nowrap font-openSans text-[.9rem] text-opacity-[.8] ">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
