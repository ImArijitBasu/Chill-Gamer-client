import React from "react";

import CarouselPage from "../Components/Carousel";
import HighestRated from "../Components/HighestRated";
import TypewriterEx from "../Components/TypeWriter";
import ExtraOne from "../Components/ExtraOne";
import ExtraTwo from "../Components/ExtraTwo";
import Blog from "../Components/Blog";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div className="mt-28">
      <div className="">
        <CarouselPage></CarouselPage>
      </div>
      <div className="container mx-auto text-center font-bold text-xl md:text-4xl bg-gradient-to-t from-blue-100 to-transparent dark:from-slate-800 text-blue-600 dark:text-white py-5 border-b-4 border-blue-500 uppercase">
        <TypewriterEx></TypewriterEx>
      </div>
      
      <div className="container mx-auto ">
        <HighestRated></HighestRated>
      </div>
      <div className="container mx-auto ">
        <ExtraOne></ExtraOne>
      </div>
      <div className="mt-10 container mx-auto ">
        <h1 className="text-center font-bold text-3xl py-5 uppercase">Games Popularity based on publication date</h1>
        <ExtraTwo></ExtraTwo>
      </div>
      {/* <div className="container mx-auto ">
        <Blog></Blog>
      </div> */}
      <div className="container mx-auto ">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
