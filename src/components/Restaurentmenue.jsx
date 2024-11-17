import React from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentmenu";

const Restaurentmenue = () => {
  const { resId } = useParams();
  const resMenue = useRestaurentmenu(resId);

  if (resMenue === null) {
    return <Shimmer />;
  }

  const { id, ResName, Menu } = resMenue;
  const keys = Object.keys(Menu);

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
        {ResName}
      </h1>
      <h2 className="text-center text-xl text-gray-500 mb-8">Menu</h2>
      {keys.map((cat) => (
        <div key={cat} className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">{cat}</h3>
          <ul className="space-y-4">
            {Menu[cat].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-none"
              >
                <div>
                  <strong className="text-lg font-medium text-gray-800">
                    {item.name}
                  </strong>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <span className="text-lg font-semibold text-green-600">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Restaurentmenue;
