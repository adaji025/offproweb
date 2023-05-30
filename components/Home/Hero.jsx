import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-[1220px] mx-auto mt-[102px]">
      <div className="lg:flex">
        <div className="basis-1/2 px-2">
          <div className="text-sm sm:text-base mx-auto lg:mx-[unset] flex items-center gap-2 max-w-[385px] rounded-3xl bg-[#F0F0FF]">
            <span className="font-[500] bg-green mr-2 text-white rounded-[45px] py-1 px-3 text-sm ml-1 my-1 ">
              New
            </span>
            <span className="font-[500]">
              Learn how to setup your e-naira wallet
            </span>
            <HiOutlineArrowNarrowRight />
          </div>
          <p className="text-center lg:text-left font-bold  font-Cabinet_Grotesk text-[#1A1A1A] mt-4 text-5xl xl:text-[72px] leading-[52.8px] lg:leading-[77px]">
            A technology that makes petty{" "}
            <span className="text-green">cash exchange easier</span>
          </p>
          <p className="mt-8 px-4 lg:px-0 text-center lg:text-left text-base leading-[24px] lg:w-[90%] lg:text-xl lg:leading-[32px] text-[#6B7280]">
            OffPro is a technology that makes petty cash exchange easier and
            better by serving as an intermediary for the transfer of Nigeria’s
            e-naira between two parties.
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
        <div className="basis-2/3 lg:basis-1/2 ">
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <img className="" src="/images/hero-image.png" alt="hero__image" />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-between mt-[135px] w-11/12 mx-auto">
        <img src="/svgs/feature-airnb.svg" alt="airbnb" />
        <img src="/svgs/feature-google.svg" alt="google" />
        <img src="/svgs/feature-nike.svg" alt="nike" />
        <img src="/svgs/feature-uber.svg" alt="uber" />
        <img src="/svgs/feature-stripe.svg" alt="stripe" />
        <img src="/svgs/feature-mashable.svg" alt="mashable" />
      </div>
    </div>
  );
};

export default Hero;
