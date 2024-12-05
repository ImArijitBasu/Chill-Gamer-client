import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-smoky.vercel.app/watchlistWithGames?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
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
    <div className="container mx-auto">
      <p className="text-center text-3xl font-bold"> MY WATCH LIST</p>
      <p className="font-thin text-xl">Total items⇒ {watchList.length}</p>
      <div className="my-5">
        {watchList.length === 0 ? (
          <p>No games available in your watchlist</p>
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
      <div onClick={clearWatchList} className="btn">
        clear all
      </div>
    </div>
  );
};

export default GameWatchList;
