import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen">
      {/* Hero Image */}
      <div className="w-full px-28 py-14">
        <div className="bg-[#8a7d74] w-full h-96 rounded-3xl">
          <div className="relative w-full h-full p-2">
            <div className="absolute inset-0 bg-black/60 w-1/2 h-full rounded-3xl">
              Content Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
