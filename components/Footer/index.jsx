import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineDribbble,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div class="max-w-[1220px] mx-auto mt-20 font-Grotesk px-6">
      <footer class="bg-white-200 text-black py-4">
        <div class="mb-4">
          <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-6 justify-between lg:items-center mb-8">
            <div className="cursor-pointer" onClick={() => router.push("/")}>
              <img src="/svgs/logo.svg" alt="Logo" />
              <div className="bg-[#E5E7EB] h-[1px] w-full mt-5 lg:hidden" />
            </div>
            <div class="flex justify-start sm:justify-center gap-4 text-base text-[#6B7280]">
              <span class="cursor-pointer font-inter">
                About
              </span>
              <span class="cursor-pointer font-inter">
                Terms & Condition
              </span>
              <div class="cursor-pointer font-inter">
                Contact Us
              </div>
              <div class="cursor-pointer font-inter">
                Device
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between gap-5 lg:border-t-[1px] border-[#E5E7EB] pt-8">
            <div class="py-2 text-black-100">
              &copy; 2023 OffPro, Inc. All Rights Reserved.
            </div>
            <div class="flex items-center gap-4">
              <AiFillGithub color="#9CA3AF" size={30} />
              <AiOutlineTwitter color="#9CA3AF" size={30} />
              <AiOutlineDribbble color="#9CA3AF" size={30} />
              <FaFacebookF color="#9CA3AF" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
