import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true); 
  const email = user.email;

  useEffect(() => {
    fetch(`https://assignment-10-smoky.vercel.app/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      });
  }, [email]);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-smoky.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setReview((prevReviews) =>
                prevReviews.filter((review) => review._id !== id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto flex flex-col pt-24">
      <h1 className="text-center text-3xl font-bold my-4 uppercase">My Reviews</h1>
      {loading ? (
        <p className="text-center">
          <span className="loading loading-spinner text-info"></span>
        </p>
      ) : reviews.length === 0 ? (
        <p className="text-center">No data</p>
      ) : (
        <table className="table-auto w-auto md:w-full border overflow-x-hidden">
          <thead>
            <tr>
              <th className="border p-2">Game Title</th>
              <th className="border p-2">Genre</th>
              <th className="border p-2">Rating</th>
              <th className="border p-2 w-20">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {reviews.map((review) => (
              <tr key={review._id}>
                <td className="border p-2">{review?.gameTitle}</td>
                <td className="border p-2">{review.genre}</td>
                <td className="border p-2">{review.rating}/10</td>
                <td className="border-none flex justify-center flex-col md:flex-row">
                  <button
                    className="btn btn-sm bg-blue-500 text-white mr-2"
                    onClick={() => handleUpdate(review._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm bg-red-500 text-white"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReviews;
