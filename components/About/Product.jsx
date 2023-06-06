import React from "react";

function Product() {
  return (
    <div className="bg-green mt-10" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex lg:flex-row gap-16 px-4 lg:px-8 pt-6 pb-14 lg:py-24">
        <div className="basis-1/2">
          {" "}
          <img src="/svgs/dummy_money.svg" alt="" />
        </div>
        <div className="basis-1/2 mt-10">
          <p className="text-center lg:text-start text-2xl leading-[28.8px] lg:leading-[50px] lg:text-[44px] font-bold text-white w-10/12 mx-auto lg:mx-0 lg:w-11/12">
            Innovation like never before
          </p>
          <p className="text-center lg:text-left mt-4  lg:w-11/12 text-white text-xl">
            With a team of dedicated professionals and cutting-edge technology,
            we are committed to delivering a superior payment experience that
            revolutionizes the way you handle your finances. Whether you're
            making purchases at your favorite retail stores, dining at a
            restaurant, or transferring funds to friends and family, Tappr
            offers a simple, secure, and convenient solution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
