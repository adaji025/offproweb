import React from "react";

const values = [
  {
    id: 1,
    Img: "/svgs/timeline-1.svg",
    title: "Press the button on the right",
    content: "A pop prompt will appear on your mobile device",
  },
  {
    id: 2,
    Img: "/svgs/timeline-2.svg",
    title: "Press the connect button on your mobile device",
    content: "Wait for it to connect. This might that few seconds",
  },
  {
    id: 3,
    Img: "/svgs/timeline-3.svg",
    title: "Once done, a pop-up will notify you of the connection",
    content: "Direct integration with ALATPay on your website/app",
  },
  {
    id: 4,
    Img: "/svgs/timeline-4.svg",
    title: "Start LOADING & DUMPING your e-naira",
    content: "Start receving payments instantly",
  },
];

function Connect() {
  return (
    <div className="bg-[#F9FBFE]  -translate-y-[150px] pt-[73px] lg:pt-[150px] pb-[99px] px-4">
      <div className="max-w-[1220px] mx-auto ">
        <div>
          <p className="text-green text-center lg:text-left font-bold text-2xl lg:text-[36px]">
            How to connect to the OPD
          </p>
          <div className="grid lg:grid-cols-[50%_50%] gap-10">
            <div className="mt-[72px]">
              {values.map((value) => (
                <div key={value.id} className="flex gap-10 mb-6">
                  <div className="">
                    <img src={value.Img} alt="" />
                  </div>
                  <div>
                    <p className="font-Cabinet_Grotesk text-[#121212] text-xl lg:text-2xl">
                      {value.title}
                    </p>
                    <p className="pt-1">{value.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block pt-10">
              <img src="/svgs/dummy_money.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
