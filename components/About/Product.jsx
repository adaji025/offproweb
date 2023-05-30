import React from "react";

function Product() {
  return (
    <div className="bg-green mt-10" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex lg:flex-row gap-16 px-4 pt-6 pb-14 lg:py-24">
        <div className="basis-1/2">
          {" "}
          <img src="/svgs/dummy_money.svg" alt="" />
        </div>
        <div className="basis-1/2 mt-10">
          <p className="text-2xl leading-[28.8px] lg:leading-[50px] lg:text-[44px] font-bold text-white w-10/12 mx-auto lg:mx-0 lg:w-11/12">
            This is a product designed to allow offline transaction
          </p>
          <p className="text-center lg:text-left mt-4  lg:w-11/12 text-white text-xl">
            This will be a unique product designed to allow offline transactions
            using an offline-ledger blockchain approach. This will be a unique
            product designed to allow offline transactions using an
            offline-ledger blockchain approach.This will be a unique product
            designed to allow offline transactions using a n offline-ledger
            blockchain approach.This will be a unique product designed to allow
            offline transactions using an offline-ledger blockchain
            approach.This will be a unique product designed to allow offline
            transactions using an offline-ledger blockchain approach.This will
            be a unique product designed to allow offline transactions using an
            offline-ledger blockchain approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
