import React, { useContext } from "react";

const Loading = () => {
  return (
    <div className="border  rounded-3xl h-screen flex justify-center items-center bg-gray-300 ">
      <div className="" data-aos="zoom-out-up">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default Loading;
