import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const ReviewDetails = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const email  = user.email
  const name = user.displayName;
  const uid = review._id
  const watcherData = {
    name , email , uid
  }
  const handleAddToWatchlist = () => {


    fetch('http://localhost:5000/watchlist',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(watcherData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        toast.success("successfully added to the watchList")
    })

  };
  return (
    <div className="container dark:text-black mx-auto border mb-10 rounded-lg bg-slate-50 flex flex-col md:flex-row p-5 justify-center items-center gap-10">
      <div className="p-5 bg-slate-100 ">
      <img className="w-40" src={review.coverImage} alt={review.gameTitle} />
      <h1>{review.gameTitle}</h1>
      <p>
        <strong>Genre:</strong> {review.genre}
      </p>
      </div>
      <div className="">
      <p className="max-w-72 text-justify">
        <strong>Description:</strong> {review.reviewDescription}
      </p>
      <p>
        <strong>Rating:</strong> {review.rating}/10
      </p>

      <p>
        <strong>Reviewer Name:</strong> {review.userName}
      </p>
      <p>
        <strong>Reviewer Email:</strong> {review.userEmail}
      </p>
      <button className="btn bg-slate-500 text-white mt-3" onClick={handleAddToWatchlist}>Add to Watchlist</button>
      </div>
     

    </div>
  );
};

export default ReviewDetails;
