import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import TrendingApp from "../components/TrendingApp";
import { Link } from "react-router";

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
    </div>
  );
};

export default Home;
