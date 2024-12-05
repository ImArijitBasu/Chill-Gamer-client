import React from "react";

import CarouselPage from "../Components/Carousel";
import HighestRated from "../Components/HighestRated";
import TypewriterEx from "../Components/TypeWriter";

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
    </div>
  );
};

export default Home;
