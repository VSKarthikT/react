import Restaurents from "./Restaurents";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State variables
  const [allRestaurants, setAllRestaurants] = useState([]); // Store all data
  const [restaurenList, setRestaurenList] = useState([]); // Store filtered data
  const [changeButton, setChangeButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://06yo4.wiremockapi.cloud/rest_list");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json); // Save full data to allRestaurants
    setRestaurenList(json); // Set list to display
    setLoading(false);
  };

  // Filter top-rated restaurants
  const filter = () => {
    const topRatedRest = restaurenList.filter((data) => data.Stars >= 4.6);
    setRestaurenList(topRatedRest);
    console.log(topRatedRest);
  };

  // Toggle content between full list and filtered list
  const toggleContent = () => {
    setChangeButton(!changeButton);
    changeButton ? setRestaurenList(allRestaurants) : filter();
  };

  // Handle search functionality
  const handleSearch = () => {
    const filteredList = allRestaurants.filter((rest) =>
      rest.ResName.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredList);
    setRestaurenList(filteredList);
  };

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
