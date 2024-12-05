import React from "react";

import CarouselPage from "../Components/Carousel";
import HighestRated from "../Components/HighestRated";
import TypewriterEx from "../Components/TypeWriter";
import ExtraOne from "../Components/ExtraOne";
import ExtraTwo from "../Components/ExtraTwo";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className=" text-center font-error font-bold text-2xl bg-gradient-to-t from-blue-100 to-transparent dark:from-slate-800 text-slate-900 dark:text-white py-5 border-b-4 border-blue-500 uppercase">
        <TypewriterEx></TypewriterEx>
      </div>
      <div className="">
        <CarouselPage></CarouselPage>
      </div>
      <div className="">
        <HighestRated></HighestRated>
      </div>
      <div className="">
        <ExtraOne></ExtraOne>
      </div>
      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl py-5 uppercase">Games Popularity based on publication date</h1>
        <ExtraTwo></ExtraTwo>
      </div>
    </div>
  );
};

export default Home;
