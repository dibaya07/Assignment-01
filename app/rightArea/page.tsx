import React from "react";
import Info from "../info/page";
import Gallery from "../gallery/page";

export default function RightArea() {
  return (
    <div className="md:w-[49%] xl:w-[48%] h-[98%] xl:px-4 md:px-2 flex flex-col justify-between">
      <Info />
      <hr className="w-[87%] h-1 bg-[#363C43] shadow-[1px_3px_3px_1px_#1a1b1c] rounded-full xl:mx-8 md:mx-4 border-none" />
      <Gallery />
    </div>
  );
}
