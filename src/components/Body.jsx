import Restaurents from "./Restaurents";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import useRestaurentdata from "../utils/useRestaurentdata";
const Body = () => {
  const {
    restaurenList,
    loading,
    changeButton,
    searchText,
    setSearchText,
    toggleContent,
    handleSearch,
  } = useRestaurentdata();
  // Online status

  const online_status = useOnlinestatus();
  if (online_status === false) {
    return <h1>You are offline</h1>;
  }
  // Conditional rendering
  return loading ? (
    <Shimmer />
  ) : (
    <div className="Body flex flex-col gap-10 px-6 py-8 justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      {/* Search Section */}
      <div className="search_container bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Search for Restaurants
          </h2>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Type to search..."
            className="border-2 border-gray-400 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white rounded-lg px-5 py-2 hover:from-red-600 hover:via-orange-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-red-200 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="Filter bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <button
          type="button"
          onClick={toggleContent}
          className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white rounded-lg px-5 py-2 hover:from-green-500 hover:via-teal-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition duration-300"
        >
          {changeButton ? "Remove Filter" : "Filter"} for Top Restaurants
        </button>
      </div>

      {/* Restaurant List Section */}
      <div className="Restaurant-container flex gap-6 flex-wrap justify-center items-center">
        {restaurenList.map((restaurant) => (
          <Link
            to={`/res/${restaurant.id}`}
            key={restaurant.id}
            className="block w-64 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Restaurents key={restaurant.id} resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
