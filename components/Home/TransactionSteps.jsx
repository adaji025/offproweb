import React from "react";

const TransactionSteps = () => {
  return (
    <div className="bg-green pt-[46px] lg:pt-[140px] pb-40 lg:pb-[228px] -translate-y-[90px] md:-translate-y-[140px] px-4 overflow-hidden">
      <div className=" max-w-[1220px] mx-auto px-4 lg:px-4" data-aos="fade-up">
        <p className="text-center text-2xl font-bold sm:text-[40px] text-white">
          Transact in 3 Steps
        </p>
        <p className="max-w-[300px] sm:max-w-[730px] text-center text-[16px] sm:text-[28px] mx-auto text-white mt-5">
          Experience a seamless and hassle-free payment process with Tappr.
          Follow these three simple steps to complete your transactions swiftly
          and securely.
        </p>
        <div className="lg:flex gap-8 mt-[60px] lg:mt-[112px]">
          <div
            className="rounded-lg bg-white shadow-sm mb-16 lg:mb-0 pl-3 pt-3 sm:w-[383px] mx-auto min-h-[300px] relative"
            data-aos="fade-right"
          >
            <div className="mt-4">
              <h3 className="text-[22px] lg:text-2xl lg:w-[90%]   font-bold ">
                Initiate and
                <span className="text-green"> Confirm:</span>
              </h3>
              <p>
                {" "}
                Input the payment details and authorize the transaction with a
                secure <span className="text-green"> PIN.</span>{" "}
              </p>
            </div>
            <img src="/images/step1.png" alt="" className="pb-4" />
          </div>
          <div
            className="rounded-lg shadow-sm bg-white mb-16 lg:mb-0 pl-3 pt-3 sm:w-[383px] mx-auto  min-h-[350px]"
            data-aos="fade-down"
          >
            <div className="mt-4">
              <h3 className="text-[22px] lg:text-2xl lg:w-[90%]   font-bold ">
                Tap:
              </h3>
              <p> Simply tap your Tappr device or smartphone to transact.</p>
            </div>
            <img src="/images/step2.png" alt="" />
          </div>
          <div
            className="rounded-lg shadow-sm pl-3 pt-3 bg-white sm:w-[383px] mx-auto min-h-[350px]"
            data-aos="fade-left"
          >
            <div className="mt-4">
              <h3 className="text-[22px] lg:text-2xl font-bold ">
                Go:
              </h3>
              <p>
                Enjoy the speed and convenience of a cashless transaction as you
                swiftly complete your purchase or transfer funds.
              </p>
            </div>
            <img src="/images/step3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSteps;
