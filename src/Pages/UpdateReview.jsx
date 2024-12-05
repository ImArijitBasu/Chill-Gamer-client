import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateReview = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`https://assignment-10-smoky.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
    console.log(review);
  }, [id]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
        coverImage: e.target.coverImage.value,
        gameTitle: e.target.gameTitle.value,
        reviewDescription: e.target.reviewDescription.value,
        rating: Number(e.target.rating.value),
        publishingYear: e.target.publishingYear.value,
        genre: e.target.genre.value,
      };

    fetch(`https://assignment-10-smoky.vercel.app/reviews/${id}`,{
        method : "PATCH",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };
  return (
    <div className="container mx-auto my-8 text-black">
      <h2 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white capitalize">
        Update your review
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="bg-slate-200 p-6 shadow-md rounded max-w-xl mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="coverImage"
            className="block text-sm font-medium mb-1"
          >
            Game Cover Image (URL):
          </label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            defaultValue={review.coverImage}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gameTitle" className="block text-sm font-medium mb-1">
            Game Title:
          </label>
          <input
            type="text"
            id="gameTitle"
            name="gameTitle"
            defaultValue={review.gameTitle}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="reviewDescription"
            className="block text-sm font-medium mb-1"
          >
            Review Description:
          </label>
          <textarea
            id="reviewDescription"
            name="reviewDescription"
            defaultValue={review.reviewDescription}
            className="w-full border rounded px-3 py-2"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium mb-1">
            Rating (1-10):
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            defaultValue={review.rating}
            className="w-full border rounded px-3 py-2"
            min="1"
            max="10"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="publishingYear"
            className="block text-sm font-medium mb-1"
          >
            Publishing Year:
          </label>
          <input
            type="number"
            id="publishingYear"
            name="publishingYear"
            defaultValue={review.publishingYear}
            className="w-full border rounded px-3 py-2"
            min="1980"
            max={new Date().getFullYear()}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium mb-1">
            Genre:
          </label>
          <select
            id="genre"
            name="genre"
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="Action" selected={review.genre === "Action"}>
              Action
            </option>
            <option value="RPG" selected={review.genre === "RPG"}>
              RPG
            </option>
            <option value="Adventure" selected={review.genre === "Adventure"}>
              Adventure
            </option>
            <option value="Strategy" selected={review.genre === "Strategy"}>
              Strategy
            </option>
            <option value="Puzzle" selected={review.genre === "Puzzle"}>
              Puzzle
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-sm font-medium mb-1">
            User Email:
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={user.email}
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium mb-1">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.displayName}
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>
        <div>
          <button type="submit" className="btn btn-accent text-white w-full">
            UPDATE REVIEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
