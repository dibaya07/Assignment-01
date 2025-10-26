"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import img1 from "@/public/wallpaper.jpeg";
import Image from "next/image";

export default function Gallery() {
  const [image, setImage] = useState([img1, img1, img1]);

  const addImage = () => {
    setImage([...image, img1]);
  };

  return (
    <div className="bg-[#363C43] h-[47%] flex   rounded-2xl shadow-[8px_10px_5px_#1c1e22]">
      <div className="icons h-[58%] flex flex-col justify-end items-center md:ml-1 relative">
        <span className="w-8 h-8 rounded-full absolute top-4 z-0 bg-linear-to-r from-[#aab3bf] to-[#3f444d] flex justify-center items-center">
          <span className="w-7 h-7 rounded-full bg-[#32373E]">
            {" "}
            <p className="w-7 h-7 z-20 text-2xl flex justify-center items-center text-transparent bg-clip-text bg-linear-to-r from-[#aab3bf] to-[#3f444d] ">
              &#63;
            </p>
          </span>
        </span>
        <BiGridVertical className="  text-[#4c5056] " size={40} />
      </div>
      <div className="flex flex-col flex-1 xl:mr-6 md:mr-2 overflow-hidden">
        <div className="btns flex   md:my-0.5 xl:ml-3 md:ml-0 justify-between xl:mr-4 md:mr-2">
          <div className="left-side">
            <button className="bg-[#171717] xl:px-10 py-3 md:px-5 xl:my-3 md:my-2 rounded-xl font-medium text-white xl:text-md md:text-sm">
              Gallery
            </button>
          </div>
          <div className="right-side xl:w-[46%] md:w-[60%] flex  items-center justify-between">
            <button
              className="bg-[#40464E] xl:px-6 md:px-2.5 py-3 rounded-full xl:font-semibold md:font-medium text-white xl:text-xs md:text-[10px] shadow-[inset_1px_1px_3px_0_#646b75,5px_5px_10px_#1c1e22,-1px_-1px_20px__#646b75]"
              onClick={addImage}
            >
              &#43; ADD IMAGE
            </button>
            <div className="arrow flex xl:gap-5  md:gap-2">
              <button className="bg-[#2B2F33] rounded-full px-2 py-2 text-[#6E777D] shadow-[5px_5px_10px_#1c1e22,-1px_-1px_20px__#646b75] cursor-pointer">
                <FaArrowLeft />
              </button>
              <button className="bg-[#2B2F33] rounded-full px-2 py-2 text-[#6E777D] shadow-[5px_5px_10px_#1c1e22,-1px_-1px_20px__#646b75] cursor-pointer">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="imgs   flex flex-1 gap-5 overflow-x-scroll xl:px-4 md:px-1 items-center">
          {image.map((img, index) => (
            <Image
              key={index}
              src={img}
              className=" object-cover shrink-0 rounded-2xl h-38 w-42 grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300 hover:w-42 hover:h-40 hover:shadow-[5px_10px_20px_5px_rgba(0,0,0,0.5)] hover:rounded-2xl hover:-rotate-3"
              alt="images"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
