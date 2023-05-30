import React from "react";

const TransactionSteps = () => {
  return (
    <div className="bg-green pt-[46px] lg:pt-[140px] pb-40 lg:pb-[228px] -translate-y-[90px] md:-translate-y-[150px] px-4">
      <div className=" max-w-[1220px] mx-auto px-4 lg:px-0">
        <p className="text-center text-2xl font-bold sm:text-[40px] text-white">
          Transact in 3 Steps
        </p>
        <p className="max-w-[300px] sm:max-w-[630px] text-center text-[16px] sm:text-[28px] mx-auto text-white mt-5">
          Since transactions are offline, both devices involved in the handshake
        </p>
        <div className="lg:flex gap-8 mt-[60px] lg:mt-[112px]">
          <div className="rounded-lg bg-white shadow-sm mb-16 lg:mb-0 pl-3 pt-3 sm:w-[383px] mx-auto lg:w-[unset] min-h-[386px] relative">
            <p className="text-[22px] lg:text-2xl lg:w-[90%] mb-10  font-bold mt-4 -mr-4 ">
              Press the button on the left to{" "}
              <span className="text-green">turn on the OPD</span>
            </p>
            <img src="/images/opd-1.png" alt="" className="absolute right-0 bottom-0" />
          </div>
          <div className="rounded-lg shadow-sm bg-white mb-16 lg:mb-0 pl-3 pt-3 sm:w-[383px] mx-auto lg:w-[unset] min-h-[386px]">
            <p className="text-[22px] lg:text-2xl lg:w-[90%] mb-10 font-bold h-[100px] translate-y-6">
              Press the up arrow button on the right{" "}
              <span className="text-green">to send e-naira</span>
            </p>
            <img src="/images/opd-2.png" alt="" />
          </div>
          <div className="rounded-lg shadow-sm pl-3 pt-3 bg-white sm:w-[383px] mx-auto lg:w-[unset] min-h-[386px]">
            <p className="text-x[22px] sm:text-2xl lg:w-[90%] mb-10 font-bold h-[100px] translate-y-6">
              Press the button on the right to{" "}
              <span className="text-green">turn on the OPD</span>
            </p>
            <img src="/images/opd-3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSteps;
