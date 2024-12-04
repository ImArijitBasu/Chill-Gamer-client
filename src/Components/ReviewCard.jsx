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
      <div className="card bg-slate-100 shadow-lg dark:text-black">
        <figure>
          <img
          className="object-cover w-full px-5 h-52 rounded-b-2xl border-t-4 border-blue-500"
            src={coverImage}
            alt="games"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {gameTitle}
            <div className="badge badge-secondary">{rating}/10</div>
          </h2>
          <p>Genre: {genre}</p>
          <div className="card-actions justify-end">
            <Link to={`/allReview/${_id}`} className="btn w-full bg-slate-500 text-white">Explore Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
