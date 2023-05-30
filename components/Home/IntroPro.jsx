import React from "react";

export function Card({ Img, title, content }) {
  return (
    <div className="rounded-lg shadow-md p-6 basis-1/2">
      <img src={Img} alt="phone-screen" />
      <p className="text-lg font-Cabinet_Grotesk mt-5">{title}</p>
      <p className="text-[#6B7280] mt-2">{content}</p>
    </div>
  );
}

const items = [
  {
    id: 1,
    Img: "/svgs/click.svg",
    title: "Pretty Cash Flow",
    content: "We keep Flowbite, secure, and free of spam and abuse so.",
  },
  {
    id: 2,
    Img: "/svgs/tag.svg",
    title: "Financial inclusion",
    content: "Our Flowbite Security Lab is a world-class security R&D team.",
  },
  {
    id: 3,
    Img: "/svgs/click.svg",
    title: "Pretty Cash Flow",
    content: "We keep Flowbite, secure, and free of spam and abuse so.",
  },
  {
    id: 4,
    Img: "/svgs/tag.svg",
    title: "Financial inclusion",
    content: "Our Flowbite Security Lab is a world-class security R&D team.",
  },
];

function IntroPro() {
  return (
    <div className="mt-[99px] max-w-screen-xl mx-auto px-4 lg:px-0">
      <p className="text-center text-green font-bold text-[24px]  lg:text-[36px] leading-[44px] lg:leading-[44px]">
        Introducing OffPro
      </p>
      <p className="text-center text-[#6B7280] mt-4 text-base lg:text-xl px-4 lg:w-[55%] lg:px-20 mx-auto">
        This will be a unique product designed to allow offline transactions
        using an offline-ledger blockchain approach.
      </p>
      <div className="flex flex-col-reverse lg:flex lg:flex-row gap-0 mt-20">
        <div className="basis-1/2 flex justify-center lg:justify-start mt-16">
          <img
            className="px-10 lg:px-0"
            src="/images/phone-screen.png"
            alt="phone-screen"
          />
        </div>
        <div className="basis-1/2 grid lg:grid-cols-2 gap-6 h-min ">
          {items.map((item) => (
            <Card
              key={item.id}
              Img={item.Img}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroPro;
