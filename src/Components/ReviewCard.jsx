import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {
    _id,
    coverImage,
    gameTitle,
    reviewDescription,
    rating,
    publishingYear,
    genre,
    userEmail,
    userName,
  } = review;
  return (
    <div>
      <div className="card bg-slate-100 dark:bg-slate-500 dark:text-white shadow-lg rounded-b-2xl border-t-4 border-blue-500 dark:border-b-4 dark:border-t-transparent dark:border-red-500">
        <figure>
          <img
          className="object-cover w-full px-5 h-52 "
            src={coverImage}
            alt="games"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">
            {gameTitle}
            <div className="badge badge-secondary">{rating}/10</div>
          </h2>
          <p className="uppercase font-semibold">Genre: {genre}</p>
          <div className="card-actions justify-end">
            <Link to={`/allReview/${_id}`} className="btn hover:bg-blue-700 w-full bg-blue-500 border-none text-white">Explore Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
