import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import TrendingApp from "../components/TrendingApp";
import { Link } from "react-router";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
      </div>

      <Banner></Banner>

      <TrendingApp></TrendingApp>
      <div className="text-center text-white mb-15">
        <Link to="/apps">
          <button className="bg-gradent py-3 px-10 rounded-md font-semibold cursor-pointer">
            Show All
          </button>
        </Link>
      </div>

      <Loader/>

     <button class="shine-btn relative overflow-hidden bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
  <span class="relative z-10">Shining Button</span>
  <span class="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
</button>

    </div>
  );
};

export default Home;
