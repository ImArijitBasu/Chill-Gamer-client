import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [reviews, setReview] = useState([]);
  console.log(user.email);
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, []);
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  const handleDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${id}`,{
          method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
          if(data.deletedCount){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setReview((prevReviews) => prevReviews.filter((review) => review._id !== id));
          }
        })

        
      }
    });
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold my-4">My Reviews</h1>
      {reviews.length === 0 ? (
        <p className="text-center">No reviews found</p>
      ) : (
        <table className="table-auto w-full border">
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
                <td className="border p-2">{review.gameTitle}</td>
                <td className="border p-2">{review.genre}</td>
                <td className="border p-2">{review.rating}/10</td>
                <td className="border-none flex justify-center">
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
