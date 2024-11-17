import { useState, useEffect } from "react";
const useRestaurentdata = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurenList, setRestaurenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changeButton, setChangeButton] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const toggleContent = () => {
    setChangeButton(!changeButton);
    changeButton ? setRestaurenList(allRestaurants) : filter();
  };

  const filter = () => {
    const topRatedRest = allRestaurants.filter((data) => data.Stars >= 4.6);
    setRestaurenList(topRatedRest);
    console.log(topRatedRest);
  };

  const handleSearch = () => {
    const filteredList = allRestaurants.filter((rest) =>
      rest.ResName.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredList);
    setRestaurenList(filteredList);
  };

  return {
    restaurenList,
    loading,
    changeButton,
    searchText,
    setSearchText,
    toggleContent,
    filter,
    handleSearch,
  };
};
export default useRestaurentdata;
