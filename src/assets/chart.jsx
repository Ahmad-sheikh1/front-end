import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import '../Components/Simple.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const chartData = {
  daily: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Online",
        data: [5, 6, 7, 8, 9, 10, 5],
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#8884d8",
      },
      {
        label: "Store",
        data: [7, 8, 5, 6, 4, 9, 8],
        borderColor: "#ffaf47",
        backgroundColor: "rgba(255, 198, 88, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffaf47",
      },
    ],
  },
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Online",
        data: [20, 30, 25, 35],
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#8884d8",
      },
      {
        label: "Store",
        data: [15, 20, 18, 22],
        borderColor: "#ffaf47",
        backgroundColor: "rgba(255, 198, 88, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffaf47",
      },
    ],
  },
  monthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Online",
        data: [10, 12, 15, 5, 25],
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#8884d8",
      },
      {
        label: "Store",
        data: [5, 8, 10, 12, 15],
        borderColor: "#ffaf47",
        backgroundColor: "rgba(255, 198, 88, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffaf47",
      },
    ],
  },
  yearly: {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Online",
        data: [200, 220, 250, 300, 320],
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#8884d8",
      },
      {
        label: "Store",
        data: [150, 180, 200, 240, 260],
        borderColor: "#ffaf47",
        backgroundColor: "rgba(255, 198, 88, 0.5)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffaf47",
      },
    ],
  },
};

const options = {
    responsive: true,
    maintainAspectRatio:false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        font: {
          size: 26, 
        },
      },
    },
    y: {
      title: {
        display: true,
      },
      beginAtZero: true,
    },
  },
};

const CustomChart = ({ isOpen }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  const chartRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 useEffect(() => {
   if (chartRef.current) {
     chartRef.current.resize();
   }
 }, [isOpen]);

  return (
    <div className={`"  ${isOpen ? "w-[98%]" : "w-[100%]"}`}>
      <div className=" line-chart-ha flex justify-between items-center mb-4 px-12  ">
        <div className=" linechart-years flex space-x-4">
          {["Daily", "Weekly", "Monthly", "Yearly"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab.toLowerCase())}
              className={` text-xl px-3 py-0 border-b-2 ${
                activeTab === tab.toLowerCase()
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-300"
              } hover:text-blue-500`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Legend */}
        <div className="flex space-x-4 z-10	">
          <div className="flex text-lg items-center">
            <span
              className="inline-block w-4 h-4 mr-2"
              style={{ backgroundColor: "#8884d8" }}
            ></span>
            <span>Online</span>
          </div>
          <div className="flex text-lg items-center">
            <span
              className="inline-block w-4 h-4 mr-2"
              style={{ backgroundColor: "#ffaf47" }}
            ></span>
            <span>Store</span>
          </div>
        </div>
      </div>
      <div className="char-height-small relative h-96	">
        <Line ref={chartRef} data={chartData[activeTab]} options={options} />
      </div>
    </div>
  );
};

export default CustomChart;
