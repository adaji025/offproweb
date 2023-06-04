import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const cards = [
  {
    id: 1,
    Img: "/images/card1.png",
    title: "Build as one team",
    content:
      "Work seamlessly across your organization on a platform designed for collaboration.",
  },
  {
    id: 2,
    Img: "/images/card1.png",
    title: "Transform your culture",
    content:
      "Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.",
  },
  {
    id: 3,
    Img: "/images/card1.png",
    title: "Learn as you build",
    content:
      "Get insight into how your team builds today with community-backed KPIs.",
  },
];

function Innovation() {
  return (
    <div className="bg-[#F9FBFE] mt-10 font-Grotesk" data-aos="fade-up">
      <p className="text-center mx-auto font-bold pt-[96px] text-2xl w-[90%] lg:text-[36px] text-green">
        Turn collaboration into innovation
      </p>
      <p className="hidden text-center w-[68%] mt-4 lg:flex items-center justify-center font-Grotesk text-lg mx-auto">
        <span>Learn more about inner source </span>
        <HiOutlineArrowNarrowRight />
      </p>
      <div className="max-w-screen-lg px-4 lg:px-8 mx-auto justify-center grid lg:grid-cols-3 mt-12 gap-6 pb-40">
        {cards.map((card) => (
          <div>
            <img className="w-[100%]" src={card.Img} alt={card.title} />
            <p className="py-2 font-Cabinet_Grotesk text-xl">{card.title}</p>
            <p className="mr-4 pr-2 text-[#6B7280]">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Innovation;
