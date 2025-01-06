import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ReviewDetails = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const uid = review._id;
  const watcherData = {
    name,
    email,
    uid,
  };
  const handleAddToWatchlist = () => {
    fetch("https://assignment-10-smoky.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watcherData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("successfully added to the watchList");
      });
  };
  return (
    <div className="container dark:text-black mx-auto dark:border-8 border-4 mb-10 rounded-lg bg-slate-50 dark:bg-slate-500 flex flex-col md:flex-row p-5 justify-center items-center gap-10 mt-28">
      <div className="p-5 bg-slate-200 dark:bg-opacity-5 dark:backdrop-blur-lg shadow-sm rounded-lg flex flex-col justify-center items-center">
        <img
          className="w-40 h-40 object-cover rounded-full rotate-260 animate-spinSlow linear infinite"
          src={review.coverImage}
          alt={review.gameTitle}
        />
        <h1 className="text-blue-900 font-bold uppercase my-2 border-y-2 text-center">
          {review.gameTitle}
        </h1>
        <p className="badge bg-orange-500 text-white font-semibold">
          {review.genre}
        </p>
      </div>
      <div className="dark:text-white">
        <p className="flex justify-between item-center my-3">
          <strong className="text-orange-500">
            Rating: {review.rating}/10
          </strong>
          <Rating
            style={{ maxWidth: 180 }}
            value={review.rating}
            readOnly
            items={10}
          />
        </p>
        <p>
          <strong>Reviewer Name:</strong> {review.userName}
        </p>
        <p>
          <strong>Reviewer Email:</strong> {review.userEmail}
        </p>
        <p className="max-w-72 text-left">
          <strong>Description:</strong> {review.reviewDescription}
        </p>
        <p>
          <strong>Publishing year:</strong> {review.publishingYear}
        </p>
        <button
          disabled={!user}
          className="btn bg-blue-500 text-white mt-3"
          onClick={handleAddToWatchlist}
        >
          Add to Watchlist
        </button>
        <div className="text-xs text-red-500 py-2">
          {user ? "" : "please login to add game in your watch List"}
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
