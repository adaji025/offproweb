import React from "react";

const items = [
  {
    id: 1,
    name: "/svgs/feature-google.svg",
  },
  {
    id: 2,
    name: "/svgs/partners-microsoft.svg",
  },
  {
    id: 3,
    name: "/svgs/partners-spotify.svg",
  },
  {
    id: 4,
    name: "/svgs/partners-mailchimp.svg",
  },
  {
    id: 5,
    name: "/svgs/partners-amazon.svg",
  },
  {
    id: 6,
    name: "/svgs/partners-apple.svg",
  },
  {
    id: 7,
    name: "/svgs/partners-slack.svg",
  },
  {
    id: 8,
    name: "/svgs/partners-salesforce.svg",
  },
];

function Partners() {
  return (
    <div className="max-w-screen-lg mx-auto mt-[104px] mb-10 px-4" data-aos="fade-up">
      <p className="hidden lg:block text-center font-bold text-[36px] text-green">
        Our Trusted Partners
      </p>
      <p className="text-center font-Cabinet_Grotesk mb-2 text-2xl lg:hidden">
        Integrations for every workflow
      </p>
      <p className="text-center lg:w-[54%] font-Grotesk text-base lg:text-xl text-[#6B7280] mx-auto">
        This will be a unique product designed to allow offline transactions
        using an offline-ledger blockchain approach.
      </p>
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[70px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-md  flex justify-center bg-[#F3F4F6] px-[34px] py-[30px] "
            >
              <img src={item.name} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
