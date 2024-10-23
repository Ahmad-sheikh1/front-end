import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = ({ isOpen }) => {
  const data = {
    labels: ["Facebook", "Youtube", "Direct Search"],
    datasets: [
      {
        data: [33, 55, 12], // The percentages for each label
        backgroundColor: ["#8a4efb", "#ff3d33", "#00c49a"], // Colors for Facebook, Youtube, and Direct Search
        hoverBackgroundColor: ["#7a3cfb", "#e32c23", "#00a981"],
        borderWidth: 0, // Remove border
        cutout: "70%", // The size of the center hole
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      className={` curcle-ha relative  h-[300px] ${
        isOpen ? "w-[95%]" : "w-[95%]"
      }`}
    >
      <Doughnut data={data} options={options} />
      {/* Center icon */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 18.084a12.083 12.083 0 01-6.16-3.506L12 14z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
