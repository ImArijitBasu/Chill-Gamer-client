import React from "react";
import { useNavigate } from "react-router-dom";

const ExtraOne = () => {
    const navigate = useNavigate()
    const handler =() =>{
        navigate('/allReviews')
    }
  return (
    <div>
      <section className="bg-gray-100 dark:bg-slate-500 py-12 px-5 mt-20 rounded-lg bg-opacity-50 backdrop-blur-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 uppercase text-blue-900 dark:text-white">Explore top Game Categories</h2>
          <p className="text-lg text-gray-600 dark:text-blue-200 mb-8">
            Find your next favorite game by browsing through popular categories.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <button onClick={handler} className="category-card p-4 bg-white shadow-md rounded-lg hover:bg-blue-200 transition-all">
              <img
                src={'https://i.ibb.co.com/Vj5MwWK/cyber.jpg'}
                alt="RPG"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-black">RPG</h3>
            </button>
            <button onClick={handler} className="category-card p-4 bg-white shadow-md rounded-lg hover:bg-blue-200 transition-all">
              <img
                src={"https://i.ibb.co.com/N6g7r0B/hit.jpg"}
                alt="Action"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-black">Action</h3>
            </button>
            <button onClick={handler} className="category-card p-4 bg-white shadow-md rounded-lg hover:bg-blue-200 transition-all">
              <img
                src={"https://i.ibb.co.com/BLtV4fy/fall.jpg"}
                alt="Adventure"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-black">Adventure</h3>
            </button>
            <button onClick={handler} className="category-card p-4 bg-white shadow-md rounded-lg hover:bg-blue-200 transition-all">
              <img
                src={"https://i.ibb.co.com/TwWXw2B/puzzle.jpg"}
                alt="Puzzle"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-black">Puzzle</h3>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraOne;
