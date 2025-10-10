import React from "react";
import banner from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center mt-5 w-11/12 mx-auto">
        <img src={banner} alt="" />
      </div>
      <div className="bg-gradent ">
        <div className="w-11/12 mx-auto text-white p-4">
          <h1 className="text-3xl text-center p-4 font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
                <h4 className="text-[10px] text-white/70">Total Download</h4>
                <h1 className="text-4xl font-bold">20.6B+</h1>
                <h4 className="text-[10px] text-white/70">46% more than last month</h4>
            </div>
            <div className="text-center">
                <h4 className="text-[10px] text-white/70">Total Reviews</h4>
                <h1 className="text-4xl font-bold">906K</h1>
                <h4 className="text-[10px] text-white/70">21% More Than Last Month</h4>
            </div>
            <div className="text-center">
                <h4 className="text-[10px] text-white/70">Active Apps</h4>
                <h1 className="text-4xl font-bold">132+</h1>
                <h4 className="text-[10px] text-white/70">31 more will Launch</h4>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
