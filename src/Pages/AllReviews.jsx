import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllReviews = () => {
  const data = useLoaderData();
  const [mainData , setMainData] = useState(data)

  const handleSort = (type) =>{
    const sortedData = [...mainData]
    if(type === "ratAsc"){
      sortedData.sort((a,b)=>a.rating - b.rating)
    }
    if(type === "ratDsc"){
      sortedData.sort((a,b)=>b.rating - a.rating)
    }
    if(type === "yearAsc"){
      sortedData.sort((a,b)=>a.publishingYear - b.publishingYear)
    }
    if(type === "yearDsc"){
      sortedData.sort((a,b)=>b.publishingYear - a.publishingYear)
    }
    setMainData(sortedData)
  }


    const handleFilter = (genre) => {
      if(genre === "all"){
        setMainData(data)
      }else{
        setMainData(data.filter((review)=>review.genre === genre));
      }
    }
  return (
    <div className="container mx-auto dark:bg-slate-800 px-5 py-10 dark:shadow-2xl rounded-2xl dark:shadow-slate-600">
      <div className="text-lg font-bold pb-5 border-b-4 mb-5 flex justify-between items-center">
        <p>Total reviews: {data.length}</p>
        <div className="">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={()=>handleSort('ratAsc')}>
                <a className="dark:bg-slate-700">Rating ↓</a>
              </li>
              <li onClick={()=>handleSort('ratDsc')}>
                <a className="dark:bg-slate-700">Rating ↑</a>
              </li>
              <li onClick={()=>handleSort('yearAsc')}>
                <a className="dark:bg-slate-700">Year ↓</a>
              </li>
              <li onClick={()=>handleSort('yearDsc')}>
                <a className="dark:bg-slate-700">Year ↑</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={()=>handleFilter("all")}>
                <a className="dark:bg-slate-700">All data</a>
              </li>
              <li onClick={()=>handleFilter("Action")}>
                <a className="dark:bg-slate-700">Action</a>
              </li>
              <li onClick={()=>handleFilter("RPG")}>
                <a className="dark:bg-slate-700">RPG</a>
              </li>
              <li onClick={()=>handleFilter("Adventure")}>
                <a className="dark:bg-slate-700">Adventure</a>
              </li>
              <li onClick={()=>handleFilter("Strategy")}>
                <a className="dark:bg-slate-700">Strategy</a>
              </li>
              <li onClick={()=>handleFilter("Puzzle")}>
                <a className="dark:bg-slate-700">Puzzle</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {mainData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mainData.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      ) : (
        <p className="uppercase text-5xl font-bold text-center text-red-500">
          no review data to show
        </p>
      )}
    </div>
  );
};

export default AllReviews;
