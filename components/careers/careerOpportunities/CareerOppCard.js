import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

const CareerOppCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-[1rem] w-[23rem] p-[1rem] rounded-md border-[1px]  shadow-sm">
      <div className="relative w-full h-[10rem] overflow-hidden rounded-md">
        <Image
          src={data.images[0].src}
          alt={data.title}
          className="object-cover w-full h-full pointer-events-none select-none"
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-[#333333] font-bold text-[1.12rem] font-montserrat">
          {data.title}
        </h1>
        <p className="text-[#333333] text-[0.9rem] mt-[0.5rem] line-clamp-3 font-openSans">
          {data.desc}
        </p>
      </div>
      <Link href={`/careers/career-opportunities/${data.slug}/apply`}>
        <div className="flex active:scale-[0.95] mt-[1rem] hover:text-white duration-300 justify-center items-center gap-[0.5rem] w-full h-[2.5rem] rounded-lg bg-primary text-white cursor-pointer">
          Apply <MdOutlineArrowOutward />
        </div>
      </Link>
    </div>
  );
};

export default CareerOppCard;
