import PrimaryButton from "@/components/common/Button/PrimaryButton";
import SecondaryButton from "@/components/common/Button/SecondaryButton";
import { HeroImage } from "@/public/assetManager";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const GrowthSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
    >
      <g clipPath="url(#clip0_3383_5502)">
        <path
          d="M23.5625 5.89453L13.8125 15.6445L9.75 11.582L2.4375 18.8945"
          stroke="#13B900"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5625 12.3945V5.89453H17.0625"
          stroke="#13B900"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3383_5502">
          <rect
            width="26"
            height="26"
            fill="white"
            transform="translate(0 0.207031)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const socialIcons = [
  {
    icon: <FaFacebookF className="w-8 h-8" />,
    href: "https://www.facebook.com/YuvaCracyOrg",
    label: "Facebook",
  },
  {
    icon: <AiFillInstagram className="w-8 h-8" />,
    href: "https://www.instagram.com/YuvaCracyOrg",
    label: "Instagram",
  },
  {
    icon: <FaTwitter className="w-8 h-8" />,
    href: "https://www.twitter.com/YuvaCracyOrg",
    label: "Twitter",
  },
  {
    icon: <FaYoutube className="w-8 h-8" />,
    href: "https://www.youtube.com/@YuvaCracyOrg",
    label: "YouTube",
  },
  {
    icon: <FaLinkedinIn className="w-8 h-8" />,
    href: "https://in.linkedin.com/company/YuvaCracyOrg",
    label: "LinkedIn",
  },
  {
    icon: <FaMedium className="w-8 h-8" />,
    href: "https://medium.com/@YuvaCracyOrg/",
    label: "Medium",
  },
];

const HomeHero = () => {
  const router = useRouter();
  const [showSocial, setShowSocial] = useState(true);

  return (
    <div className="flex relative w-[100%] h-[100%]">
      <div className="flex gap-[.5rem] z-[20] w-[46rem] mt-[3rem] h-fit">
        <Suspense
          fallback={
            <div
              className={` ${
                showSocial ? "" : " ml-[-5rem] "
              }  flex group flex-col justify-center items-center gap-[1rem] text-white xl:w-[4rem] duration-300 w-[3rem] top-[calc(50%-14rem)] bg-primary text-[1.5rem] rounded-r-xl z-[30]`}
            />
          }
        >
          <div
            className={` ${
              showSocial ? "h-[22rem]" : " ml-[-5rem] "
            } flex group flex-col justify-center items-center gap-[1rem] text-primary xl:w-[5.4rem] duration-300 w-[3rem] h-[17rem] top-[calc(50%-14rem)] text-[1.5rem] z-[30]`}
          >
            <div
              onClick={() => setShowSocial(false)}
              className="absolute z-[1] invisible opacity-0 right-[-1rem] group-hover:visible group-hover:opacity-100 cursor-pointer duration-300 top-[-1rem] border-2 border-primary text-primary bg-white size-[2rem] rounded-full flex items-center justify-center"
            >
              <MdClose />
            </div>

            <div className="flex flex-col items-center text-primary/20 gap-[1.5rem] justify-center w-full h-full">
              {/* Map through the socialIcons array */}
              {socialIcons.map(({ icon, href, label }, index) => (
                <div key={index} className="flex w-full pl-4 hover:border-l-[0.44rem] border-t-transparent border-b-transparent border-r-transparent hover:border-l-primary transition-all duration-300 hover:text-primary
                hover:from-[#ebf3ff] hover:bg-gradient-to-r hover:via-[#ebf3ff] hover:to-transparent">
                  {/* This div will change background color only when hovered */}
                  <Link
                    
                    className="flex items-center"
                    href={href}
                    target="_blank"
                    aria-label={label}
                  >
                    <span className="">{icon}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Suspense>

        <div className="flex flex-col w-full">
          <h2 className="font-montserrat font-[800] text-[3rem] text-primary leading-[3.5rem]">
            Empowering the Young Generation
          </h2>
          <p className="font-openSans text-[#474B4F] text-[.9rem] mt-[.5rem]">
            Dive into legal education, policy research, and civic engagement,
            mentorship, and valuable networking opportunities.
          </p>
          <div className="flex gap-[2rem] mt-[1.5rem]">
            <PrimaryButton
              data={{
                title: "View Internships",
                execute: () =>
                  router.push("/careers/internships?scroll=internship-div"),
              }}
            />
            <SecondaryButton
              data={{
                title: "Upcoming events",
                execute: () =>
                  router.push("/events/upcoming-events?scroll=upcoming-div"),
              }}
            />
          </div>

          <div className="flex gap-[1rem] w-[25rem] mt-[1.5rem]">
            <div className="flex flex-col w-[50%] gap-[.5rem]">
              <div className="flex gap-[.4rem]">
                <h3 className="font-montserrat text-[1.3rem] font-[600]">
                  100+
                </h3>
                <GrowthSVG />
              </div>

              <p className="font-openSans text-[.8rem] text-primary font-[500]">
                Community projects initiated by youth leaders.
              </p>
            </div>

            <div className="flex flex-col w-[50%] gap-[.5rem]">
              <div className="flex gap-[.4rem]">
                <h3 className="font-montserrat text-[1.3rem] font-[600]">
                  5,000+
                </h3>
                <GrowthSVG />
              </div>

              <p className="font-openSans text-[.8rem] text-primary font-[500]">
                Young leaders trained through our programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-[10] bottom-0 flex justify-end w-[100%]">
        <Image
          src={HeroImage}
          alt="YuvaCracy"
          className="pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default HomeHero;
