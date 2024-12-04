import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllReviews = () => {
  const data = useLoaderData();
  return (
    <div className="container mx-auto dark:bg-slate-800 px-5 py-10 shadow-2xl rounded-2xl shadow-slate-600">
      <p className="text-lg font-bold pb-5 border-b-4 mb-5">Total reviews: {data.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
