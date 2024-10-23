import React from "react";
import { stats } from "../assets/IconData";
import './Simple.css'
const StatsCards = () => {
  return (
    <div className=" icon-hasham grid grid-cols-1 sm:grid-cols-1  md:grid-cols-4 gap-6 bg-white shadow-lg rounded-lg p-6 mt-3">
      {stats.map((icon, ind) => {
        const IconComponent = icon.icon;
        return (
          <div
            key={ind}
            className="flex items-center p-4 "
          >
            {/* Icon */}
            <div className={`p-4 rounded-full ${icon.bgColor}`}>
              <IconComponent className="text-2xl text-white" />
            </div>

            {/* Text */}
            <div className="ml-4">
              <p className="text-gray-600 text-lg">{icon.label}</p>
              <h3 className="text-black text-2xl font-bold">{icon.amount}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
