import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllReviews = () => {
  const data = useLoaderData();
  return (
    <div className="container mx-auto dark:bg-slate-800 px-5 py-10 dark:shadow-2xl rounded-2xl dark:shadow-slate-600">
      <p className="text-lg font-bold pb-5 border-b-4 mb-5">
        Total reviews: {data.length}
      </p>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      ) : (
        <p className="uppercase text-5xl font-bold text-red-500">no review data to show</p>
      )}
    </div>
  );
};

export default AllReviews;
