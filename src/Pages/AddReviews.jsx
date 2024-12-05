import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddReviews = () => {
    const {user} = useContext(AuthContext);

    const handleFormSubmit =(e) =>{
        e.preventDefault();

        const formData = {
            coverImage: e.target.coverImage.value,
            gameTitle: e.target.gameTitle.value,
            reviewDescription: e.target.reviewDescription.value,
            rating: Number(e.target.rating.value),
            publishingYear: e.target.publishingYear.value,
            genre: e.target.genre.value,
            userEmail: user?.email,
            userName: user?.displayName,
          };


          fetch('https://assignment-10-smoky.vercel.app/games' ,{
            method: "POST" , 
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then(res=>{
            if(res.ok){
                Swal.fire('Your review added successfully')
                e.target.reset();
            }
          })
          .catch(error => {
            toast.error('something went wrong')
          })
    }

  return (
    <div className="container mx-auto my-8 text-black">
      <p className="text-3xl font-bold uppercase text-center text-slate-900">add your experience here</p>
    <h2 className="text-3xl font-semibold text-center mb-6 text-white">Add a New Review</h2>
    <form onSubmit={handleFormSubmit} className="bg-slate-200 p-6 shadow-md rounded max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="coverImage" className="block text-sm font-medium mb-1">
          Game Cover Image (URL):
        </label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
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
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reviewDescription" className="block text-sm font-medium mb-1">
          Review Description:
        </label>
        <textarea
          id="reviewDescription"
          name="reviewDescription"
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
          className="w-full border rounded px-3 py-2"
          min="1"
          max="10"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="publishingYear" className="block text-sm font-medium mb-1">
          Publishing Year:
        </label>
        <input
          type="number"
          id="publishingYear"
          name="publishingYear"
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
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Strategy">Strategy</option>
          <option value="Puzzle">Puzzle</option>
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
          value={user?.email || ""}
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
          value={user?.displayName || ""}
          className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          readOnly
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary w-full">
          Submit Review
        </button>
      </div>
    </form>
  </div>
  );
};

export default AddReviews;
