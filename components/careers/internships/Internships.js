import React, { useState } from "react";
import Niti from "./internships-provided/Niti";
import Vidhi from "./internships-provided/Vidhi";

const Internships = () => {
  const [selectedState, setSelectedState] = useState("All");

  return (
    <div className="px-[8rem]">
      <Buttons
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />

      {/* Internships */}
      {selectedState === "All" && <div>
        <Niti />
        <Vidhi />
      </div>}
    </div>
  );
};

const Buttons = ({ selectedState, setSelectedState }) => {
  const toggleButton = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="pt-10">
      <div className="inline-flex p-1 font-openSans text-lg font-semibold gap-1 border-2 rounded-lg">
        <button
          className={`px-6 py-2 rounded-md ${
            selectedState === "All"
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => toggleButton("All")}
        >
          All
        </button>
        <button
          className={`px-6 py-2 rounded-md ${
            selectedState === "NITI"
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => toggleButton("NITI")}
        >
          NITI
        </button>
        <button
          className={`px-4 py-[0.5rem] rounded-md ${
            selectedState === "VIDHI"
              ? "bg-[#003366] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => toggleButton("VIDHI")}
        >
          VIDHI
        </button>
      </div>
    </div>
  );
};

export default Internships;
