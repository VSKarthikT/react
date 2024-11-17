import { useEffect, useState } from "react";

const useRestaurentmenu = (resId) => {
  // Fetch and return info
  const [resMenue, setResMenue] = useState(null);
  useEffect(() => {
    fetchmenue();
  }, []);
  const fetchmenue = async () => {
    const data = await fetch(
      "https://06yo4.wiremockapi.cloud/things/resid" + resId
    );
    const json = await data.json();
    setResMenue(json);
  };
  return resMenue;
};

export default useRestaurentmenu;
