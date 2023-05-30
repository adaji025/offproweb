import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Download() {
  return (
    <div className="bg-green h-min">
      <div className="max-w-[1220px] mx-auto font-Grotesk pt-[95px] px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex lg:flex-row ">
          <div className="flex justify-center lg:justify-start lg:pl-20 basis-1/2 mt-20 lg:mt-0">
            <img src="/images/app.png" alt="" />
          </div>
          <div className="basis-1/2">
            <p className="text-2xl w-[80%] mx-auto lg:mx-0 lg:text-5xl lg:w-11/12 text-white font-Cabinet_Grotesk">
              This is a product designed to allow offline transaction
            </p>
            <p className="w-full text-center lg:text-left lg:w-10/12 text-base lg:text-xl text-white/70 mt-4">
              This will be a unique product designed to allow offline
              transactions using an offline-ledger blockchain approach.
            </p>
            <div className="flex gap-4 mt-8 lg:mt-14 justify-center lg:justify-start">
            <div className="cursor-pointer w-[150px] sm:w-[218px] bg-[#1A1A1A] rounded-[40px] h-[62px] flex justify-center items-center gap-2 sm:gap-5">
              <IoLogoGooglePlaystore size={24} color="white" />
              <div className="text-white grid">
                <span className="text-[10px] text-xs">Download on the</span>
                <span className="text-sm sm:text-lg">Google Play</span>
              </div>
            </div>
            <div className="cursor-pointer w-[150px] sm:w-[218px] bg-[#1A1A1A] rounded-[40px] h-[62px] flex justify-center items-center gap-2 sm:gap-5">
              <AiFillApple size={24} color="white" />
              <div className="text-white grid">
                <span className="text-[10px] text-xs">Download on the</span>
                <span className="text-sm sm:text-lg">Google Play</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
