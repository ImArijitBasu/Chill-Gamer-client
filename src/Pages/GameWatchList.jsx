import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/watchlistWithGames?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
      });
  }, [user.email]);
  const clearWatchList = () => {
    fetch(`http://localhost:5000/clearWatchlist?email=${user.email}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      setWatchList([])
    })
  };
  return (
    <div className="container mx-auto">
      <p className="text-center text-3xl font-bold"> MY WATCH LIST</p>
      <p>Total items⇒ {watchList.length}</p>
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
