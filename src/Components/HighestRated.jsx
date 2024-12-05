import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const HighestRated = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-smoky.vercel.app/highestRatedGame")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  return (
    <div className="border-t-4 dark:border-blue-500">
      <h1 className="text-center font-bold text-3xl py-5 uppercase  text-blue-500 dark:text-white">
        Highest rated games
      </h1>
      {games ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((review) => (
            <ReviewCard review={review}></ReviewCard>
          ))}
        </div>
      ) : (
        <span className="loading loading-dots loading-xs"></span>
      )}
    </div>
  );
};

export default HighestRated;
