import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const Restaurentmenue = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resMenue, setResMenue] = useState(null);
  useEffect(() => {
    fetchmenue();
  }, []);
  const fetchmenue = async () => {
    const data = await fetch(
      "https://06yo4.wiremockapi.cloud/things/resid" + resId
    );
    const json = await data.json();
    console.log(json);
    setResMenue(json);
  };

  if (resMenue === null) {
    return <Shimmer />;
  }
  const { id, ResName, Menu } = resMenue;
  const keys = Object.keys(Menu);

  return (
    <div>
      <h1>{ResName}</h1>
      <h2>Menu</h2>
      {keys.map((cat) => (
        <div key={cat}>
          <h3 className="text-red-300">{cat}</h3>
          <ul className="text-lg">
            {Menu[cat].map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.description} ({item.price})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Restaurentmenue;
