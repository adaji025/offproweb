import React from "react";

function AboutHero() {
  return (
    <div className="max-w-[1220px] mx-auto flex items-center mt-[150px] lg:mt-[100px] px-4">
      <div className="min-h-screen items-center lg:flex lg:gap-5" data-aos="zoom-in">
        <div className="basis-1/2">
          <p className="hidden lg:block text-2xl font-bold text-[#808080] #808080">
            About Us
          </p>
          <p className="text-center lg:text-left font-bold text-[#1A1A1A] mt-4 text-[40px] lg:text-[58px] xl:text-[72] leading-[44.2px] lg:leading-[77px]">
            Leveraging the <br /> <span className="text-green">e-naira’s </span>
            blockchain based platform
          </p>
          <p className="w-[90%] mx-auto lg:mx-0 lg:w-[90%] text-center lg:text-left mt-8 text-base leading-[24px] lg:text-xl lg:leading-[32px] text-[#6B7280]">
            OffPro is a technology that makes petty cash exchange easier and
            better by serving as an intermediary for the transfer of Nigeria’s
            e-naira between two parties.
          </p>
        </div>
        <div className="basis-1/2">
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-[90%]"
              src="/images/about-img.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
