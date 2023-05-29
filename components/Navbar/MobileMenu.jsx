import React from "react";

const MobileMenu = ({ isMobileMenuOpen }) => {
  return (
    <div
      className={`${
        isMobileMenuOpen ? "block" : "hidden"
      } absolute top-[100px] left-0 w-full bg-white shadow-lg z-20`}
      id="mobile-menu"
    >
      <div className="px-4 py-2">
        <a
          href="/about"
          className="block text-gray-800 font-semibold py-2 hover:bg-gray-200"
        >
          About
        </a>
        <a
          href="#"
          className="block text-gray-800 font-semibold py-2 hover:bg-gray-200"
        >
          Device
        </a>
        <a
          href="/faq"
          className="block text-gray-800 font-semibold py-2 hover:bg-gray-200"
        >
          FAQ
        </a>
        <a
          href="#"
          className="block text-gray-800 font-semibold py-2 hover:bg-gray-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
