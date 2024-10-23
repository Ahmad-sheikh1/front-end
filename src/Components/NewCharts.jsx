import React from "react";
import CustomChart from "../assets/chart";
import CircleChart from "../assets/CurcleChart";
import StatsCards from "./Icons";
const NewCharts = ({ isOpen }) => {
  return (
    <div className={`grid grid-cols-12 gap-2${isOpen ? "" : ""}`}>
      {/* part-1 */}
      <div className=" wid-iss-ha col-span-12 sm:col-span-12 xl:col-span-9">
        <div className="grid grid-cols-12 shadow-lg rounded-lg p-6 bg-white transition-all duration-300 gap-6">
          <div className="col-span-12 sm:col-span-12 lg:col-span-3 m-auto z-index-99  part-1">
            <h2 className="text-2xl text-black font-bold">Dashboard</h2>
            <p className="py-1 text-gray-700 font-medium">
              Overview of latest month
            </p>
            <h1 className="text-4xl text-black font-bold pt-10">$6468.96</h1>
            <p className="py-2 text-gray-700 font-medium">
              Current Month Earnings
            </p>
            <h1 className="text-4xl text-black font-bold pt-10">82</h1>
            <p className="py-1 text-gray-700 font-medium">Current Month Sale</p>
            <button className="text-lg mt-10 py-5 px-4 text-white bg-pink-700 rounded-full">
               Month Summary
            </button>
          </div>
          <div className=" line-chart-posi col-span-12 sm:col-span-12 lg:col-span-9 part-2">
            <CustomChart isOpen={isOpen} />
          </div>
        </div>
        <div className="">
          <StatsCards />
        </div>
      </div>
      {/* part-2 */}
      <div
        className={` wid-iss-ha col-span-12 sm:col-span-12 xl:col-span-3  flex justify-center shadow-lg rounded-lg py-20 bg-white transition-all duration-300`}
      >
        <div>
          <CircleChart isOpen={isOpen} />
          <div>
            <div className="flex justify-around mt-4 gap-2">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">33%</p>
                <p className="text-gray-500">Facebook</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">55%</p>
                <p className="text-gray-500">Youtube</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">12%</p>
                <p className="text-gray-500">Direct Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCharts;
