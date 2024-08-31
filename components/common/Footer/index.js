import React from "react";
import AnimatedLogo from "../Logo/Animated";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className=" px-[8rem] py-[2rem] mt-[8rem] text-gray-700 bg-[#F8FCFF] border-t-[1px]  ">
      <div className=" mt-[4rem] mx-auto ">
        <div className=" w-fit mb-[3rem] " >
          <AnimatedLogo bg={"bg-[#F8FCFF]"} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* About Section */}
          <div className="flex-1 mb-[4rem] md:mb-0">
            <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">About</h2>
            <ul>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  About YuvaCracy
                </Link>
              </li>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Code Of Conduct
                </Link>
              </li>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Social Media Advisory
                </Link>
              </li>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  YuvaCracy - A Safe Place
                </Link>
              </li>
            </ul>
            <h2 className="mt-6  font-montserrat font-[600] text-[1.15rem] text-primary ">The People</h2>
            <ul>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Our Advisors
                </Link>
              </li>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
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
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YCPR
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YCLA
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Careers</h2>
              <ul>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Internships
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Write For Us
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Career Opportunities
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
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    YuvaCracy Dialogues
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className=" font-montserrat font-[600] text-[1.15rem] text-primary ">Support Us</h2>
              <ul>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link href={''} className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
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
              <li>Phone: +91-XXXXXXX</li>
              <li>
                <a href="mailto:info@yuvacracy.org" className="text-black hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
                  Email: info@yuvacracy.org
                </a>
              </li>
            </ul>
            <h2 className="mt-6  font-montserrat font-[600] text-[1.15rem] text-primary ">Follow Us</h2>
            <div className="flex mt-[1rem] space-x-4">
              <Link href={''} aria-label="Facebook">
                <FaFacebookF />
                {/* <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /> */}
              </Link>
              <Link href={''} aria-label="Instagram">
                <AiFillInstagram />
              </Link>
              <Link href={''} aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link href={''} aria-label="YouTube">
                <FaYoutube />
              </Link>
              <Link href={''} aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
              <Link href={''} aria-label="Medium">
                <FaMedium />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center text-primary font-openSans font-[600] text-[.92rem] justify-between mt-[2rem] pt-[1rem] border-t-[1px]  ">
          <p>
            Copyright © YuvaCracy Foundation | All Rights Reserved | Designed and Developed by{" "}
            <Link href={''} className=" hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
              YuvaCracy Tech
            </Link>.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href={''} className=" hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
              Privacy Policy
            </Link>
            <Link href={''} className=" hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
              Terms of Service
            </Link>
            <Link href={''} className=" hover:underline font-openSans text-[.9rem] text-opacity-[.8] ">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
