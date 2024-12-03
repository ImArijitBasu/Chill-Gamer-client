import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllReviews = () => {
  const data = useLoaderData();
  return (
    <div className="container mx-auto dark:bg-slate-800 px-5">
      all reviews
      {data.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
