import localfont from "@next/font/local";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Grotesk = localfont({
  src: "../public/fonts/CabinetGrotesk-Regular.ttf",
});

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={Grotesk.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
