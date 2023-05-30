import { useRouter } from "next/router";
import React from "react";

const MobileMenu = ({ isMobileMenuOpen }) => {
  const router = useRouter()
  return (
    <div
      className={`${
        isMobileMenuOpen ? "left-0" : "left-[-100%]"
      } absolute top-[100px] left-0 w-full bg-green shadow z-20 transition-all duration-300 md:hidden`}
      id="mobile-menu"
    >
      <div className="px-4 py-5 h-min flex flex-col justify-center items-center text-white">
        <div
         onClick={() => router.push("/about")}
          className="block text-gray-800 font-semibold py-2 hover:text-black/90 transition-all duration-300 cursor-pointer"
        >
          About
        </div>
        <div
          onClick={() => router.push("/")}
          className="block text-gray-800 font-semibold py-2 hover:text-black/90 transition-all duration-300 cursor-pointer"
        >
          Device
        </div>
        <div
          onClick={() => router.push("/faq")}
          className="block text-gray-800 font-semibold py-2 hover:text-black/90 transition-all duration-300 cursor-pointer"
        >
          FAQ
        </div>
        <div
          onClick={() => router.push("/")}
          className="block text-gray-800 font-semibold py-2 hover:text-black/90 transition-all duration-300 cursor-pointer"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
