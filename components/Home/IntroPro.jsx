import React from "react";

export function Card({ Img, title, content, idx }) {
  return (
    <div
      className="rounded-lg shadow-md px-6 py-2 basis-1/2"
      data-aos={
        idx === 0
          ? "fade-right"
          : idx === 1
          ? "fade-left"
          : idx === 2
          ? "fade-up"
          : "fade-down"
      }
    >
      <img src={Img} alt="phone-screen" />
      <p className="text-lg font-Cabinet_Grotesk mt-2">{title}</p>
      <p className="text-[#6B7280] mt-2 text-sm">{content}</p>
    </div>
  );
}

const items = [
  {
    id: 1,
    Img: "/svgs/click.svg",
    title: "Pretty Cash Flow",
    content:
      "Experience a new level of financial control with Tappr. Say goodbye to the burden of handling petty cash and embrace a streamlined cashless solution that simplifies expense tracking and improves cash flow management",
  },
  {
    id: 2,
    Img: "/svgs/tag.svg",
    title: "Financial inclusion",
    content:
      "Tappr is committed to promoting financial inclusion for all. By providing accessible and user-friendly digital payment options, we empower individuals and businesses, regardless of their financial background, to participate in the cashless economy.",
  },
  {
    id: 3,
    Img: "/svgs/click.svg",
    title: "E-naira Adoption",
    content:
      "Tappr seamlessly integrates with e-naira, Nigeria's digital currency, facilitating its widespread adoption and utilization. Embrace the future of digital transactions by embracing Tappr as your gateway to the e-naira ecosystem.",
  },
  {
    id: 4,
    Img: "/svgs/tag.svg",
    title: "Safer Transactions with Blockchain",
    content: "Trust and security are at the core of Tappr's payment platform. Leveraging the power of blockchain technology, Tappr ensures secure and tamper-proof transactions, safeguarding your financial data and protecting against fraudulent activities.",
  },
];

function IntroPro() {
  return (
    <div
      className="mt-[99px] max-w-[1220px] mx-auto px-4 lg:px-8 overflow-hidden"
      data-aos="fade-up"
    >
      <p className="text-center text-green font-bold text-[24px]  lg:text-[36px] leading-[44px] lg:leading-[44px]">
        Introducing Tappr
      </p>
      <p className="text-center text-[#6B7280] mt-4 text-base lg:text-xl px-4 lg:w-[55%] lg:px-20 mx-auto">
        Redefining transactions with seamless cashless payments. Embrace
        convenience, security, and a future without the hassle of cash.
      </p>
      <div className="flex flex-col-reverse lg:flex lg:flex-row gap-0 mt-20">
        <div className="basis-1/2 flex justify-center lg:justify-start mt-16">
          <img
            className="px-10 lg:px-0"
            src="/images/phone-screen.png"
            alt="phone-screen"
          />
        </div>
        <div className="basis-1/2 grid lg:grid-cols-2 gap-6 h-min pb-10">
          {items.map((item, idx) => (
            <Card
              key={item.id}
              Img={item.Img}
              title={item.title}
              content={item.content}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroPro;
