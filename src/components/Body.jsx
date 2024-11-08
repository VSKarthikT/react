import Restaurents from "./Restaurents";
import restaurantData from "../utils/restaurantData";
import { useState } from "react";
// let filtered_rest = restaurantData;
const Body = () => {
  const [filteredRest, setFilteredRest] = useState(restaurantData);
  const [changeButton, setchangeButton] = useState(false);
  //JS functions for toggling content
  const filter = () => {
    const topRatedRest = restaurantData.filter((data) => data.Stars >= 4.6);
    setFilteredRest(topRatedRest);
    console.log(topRatedRest);
  };
  const togggle_content = () => {
    setchangeButton(!changeButton);
    changeButton ? setFilteredRest(restaurantData) : filter();
  };
  return (
    <div className="Body flex flex-col gap-10 px-3 py-5 justify-center items-center">
      <div className="search_container">
        <form className="flex flex-col justify-center items-center">
          <label className="text-xl">Search for Restaurents</label>
          <input
            type="text"
            className="border-2 border-solid border-gray-700 w-[70%]"
          />
        </form>
      </div>
      <div className="Filter">
        <button
          type="button"
          onClick={() => {
            togggle_content();
          }}
          className=" filter-button text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {changeButton ? "Remove Filter" : "filter"} for Top Restaurents
        </button>
      </div>
      <div className="Restaurent-container flex gap-5 flex-wrap justify-center items-centers ">
        {filteredRest.map((Restaurent) => (
          <Restaurents key={Restaurent.id} resdata={Restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
