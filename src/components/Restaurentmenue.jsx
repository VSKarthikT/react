import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentmenu";
// Use params is utility fucntion
const Restaurentmenue = () => {
  const { resId } = useParams();
  const resMenue = useRestaurentmenu(resId);
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
