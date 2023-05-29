import localfont from "@next/font/local";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "@/styles/globals.css";

const Grotesk = localfont({
  src: "../public/fonts/CabinetGrotesk-Regular.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={Grotesk.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
