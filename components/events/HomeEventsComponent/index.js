import React, { useState, useEffect } from "react";
import CustomTitle from "@/components/common/CustomTitile";
import eventData from "../data/EventData";
import EventCard from "../common/EventCard";

function convertToDate(dateStr) {
  const [day, month, year] = dateStr.split("/").map(Number);

  const fullYear = year < 100 ? 2000 + year : year;

  return new Date(fullYear, month - 1, day);
}

const HomeEventsComponent = ({ pastEvents = false }) => {
  const [visibleCards, setVisibleCards] = useState(2); // default to 3 cards
  const currentDate = new Date();

  const filteredEvents = eventData.filter((event) => {
    const date = event.end.split(" ");
    const eventEndDate = new Date(convertToDate(date[0]));
    // console.log("Event End Date:", eventEndDate);
    return pastEvents
      ? eventEndDate < currentDate
      : eventEndDate >= currentDate;
  });

  console.log("Filtered Events: ", filteredEvents);

  useEffect(() => {
    const updateVisibleCards = () => {
      const containerWidth = window.innerWidth - 16 * 2 * 8; // considering padding (8rem on each side)
      const cardWidth = 352; // Card width (22rem ~ 352px)
      const gapBetweenCards = 56; // Gap between cards (3.5rem ~ 56px)

      const totalCardWidth = cardWidth + gapBetweenCards; // Total width needed per card
      const numberOfCards = Math.floor(containerWidth / totalCardWidth);
      setVisibleCards(Math.max(1, numberOfCards));
    };

    updateVisibleCards(); // Initial check

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <div className="w-[100%] xl:px-[8rem] px-[6rem]">
      
      {!pastEvents && <CustomTitle
        title={"Upcoming Events"}
      />}

      {!pastEvents &&
        <p className="text-subheading font-openSans">
          Explore our upcoming events designed to immerse you in a world of
          learning and connection. Engage with renowned thought leaders who are
          shaping the future across various industries, and gain valuable
          insights that will inspire your personal and professional growth.
        </p>}

      {/* Event cards */}
      <div className="flex flex-nowrap gap-[1.5rem]  mt-[2rem]">
        {filteredEvents &&
          filteredEvents.slice(0, 3).map((data, index) => {
            return <EventCard key={index} data={data} />;
          })}
      </div>
    </div>
  );
};

export default HomeEventsComponent;
