import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch(`https://assignment-10-smoky.vercel.app/watchlistWithGames?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
        setLoading(false); 
      });
  }, [user.email]);

  const clearWatchList = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete All!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-smoky.vercel.app/clearWatchlist?email=${user.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setWatchList([]);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto mt-28">
      <p className="text-center text-3xl font-bold"> MY WATCH LIST</p>
      <p className="font-normal  text-sm">Total items : {watchList.length}</p>
      <div className="my-5">
        {loading ? (
          <p className="text-center">
            <span className="loading loading-spinner text-info"></span>
          </p>
        ) : watchList.length === 0 ? (
          <p className="text-center text-red-500">No data to show</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="border-4 border-blue-500">Title</th>
                <th className="border-4 border-blue-500">Genre</th>
                <th className="border-4 border-blue-500">Rating</th>
              </tr>
            </thead>
            <tbody className="text-center capitalize">
              {watchList?.map((item) => (
                <tr key={item._id}>
                  <td className="border border-gray-300 p-2">
                    {item.gameDetails?.[0]?.gameTitle || "Unknown Title"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.gameDetails?.[0]?.genre || "Unknown Genre"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {item.gameDetails?.[0]?.rating || "N/A"} / 10
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button disabled={watchList.length === 0} onClick={clearWatchList} className="btn btn-error text-white">
        clear all
      </button>
    </div>
  );
};

export default GameWatchList;
