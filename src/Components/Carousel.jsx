import React from "react";

const CarouselPage = () => {
  return (
    <div className="my-5">
      <div className="carousel w-full max-h-[690px]">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co.com/FXpLkN0/steam1.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/FXpLkN0/steam2.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/FXpLkN0/steam3.jpg"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/FXpLkN0/steam4.jpg"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-sm bg-blue-500 border-none text-white hover:bg-cyan-500">
          1
        </a>
        <a href="#item2" className="btn btn-sm bg-blue-500 border-none text-white hover:bg-cyan-500">
          2
        </a>
        <a href="#item3" className="btn btn-sm bg-blue-500 border-none text-white hover:bg-cyan-500">
          3
        </a>
        <a href="#item4" className="btn btn-sm bg-blue-500 border-none text-white hover:bg-cyan-500">
          4
        </a>
      </div>
    </div>
  );
};

export default CarouselPage;
