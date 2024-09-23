"use client";
import React from "react";
import EventLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
// import HomeEventsComponent from '@/components/events/HomeEventsComponent'
const UpcomingEvents = () => {
  return (
    <EventLayout>
      <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20 flex flex-col">
        <CustomTitle title={"Upcoming Events"} subtitle={"By YuvaCracy"} />
        <span className=" text-textSecond font-openSans text-lg">
        Stay tuned for updates on our upcoming events and the exciting activities we have in store!
        </span>
        {/* <HomeEventsComponent /> */}
      </div>
    </EventLayout>
  );
};

export default UpcomingEvents;
