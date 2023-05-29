import { useRouter } from "next/router";
import React from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const router = useRouter();

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen && <MobileMenu {...{ isMobileMenuOpen }} />}
      <div className="mx-auto mt-3 font-Grotesk shadow sm:shadow-lg w-full bg-white">
        <nav className="flex items-center justify-between bg-white-200 text-black px-6 py-2 max-w-[1220px] mx-auto h-[100px]">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <img src="/svgs/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex items-center flex-1 justify-center gap-[32px] px-4 font-medium text-xl text-dark">
            <span
              className="hover:text-green cursor-pointer transition-all duration-300 text-dark"
              onClick={() => router.push("/about")}
            >
              About
            </span>
            <span
              className="hover:text-green cursor-pointer transition-all duration-300"
              onClick={() => router.push("/")}
            >
              Device
            </span>
            <span
              className="hover:text-green cursor-pointer transition-all duration-300"
              onClick={() => router.push("/faq")}
            >
              FAQ
            </span>
          </div>
          <div className="ml-auto mr-2 flex items-center">
            <button className="hidden font-bold text-base md:block bg-green text-white rounded-full px-4 py-2 hover:bg-green/90 hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
            <div
              className="md:hidden text-xl font-bold text-gray-800 ml-4"
              onClick={handleMobileMenuClick}
            >
              <FaBars size={24} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;