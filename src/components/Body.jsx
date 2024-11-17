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
    <div className="Body flex flex-col gap-10 px-3 py-5 justify-center items-center">
      <div className="search_container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl">Search for Restaurants</h2>
          <input
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            className="border-2 border-solid border-gray-700 w-[70%]"
          />
          <button
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleSearch} // Trigger search on click
          >
            Search
          </button>
        </div>
      </div>
      <div className="Filter">
        <button
          type="button"
          onClick={toggleContent}
          className="filter-button text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {changeButton ? "Remove Filter" : "Filter"} for Top Restaurants
        </button>
      </div>
      <div className="Restaurant-container flex gap-5 flex-wrap justify-center items-center">
        {restaurenList.map((restaurant) => (
          <Link to={"/res/" + restaurant.id} key={restaurant.id}>
            <Restaurents key={restaurant.id} resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
