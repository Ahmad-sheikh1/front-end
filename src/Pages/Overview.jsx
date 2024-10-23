import React from "react";
import Card from "../Components/Card";
import NewCharts from "../Components/NewCharts";
import Dashboard from "../Components/Table";
const Overview = ({ isOpen }) => {
  return (
    <div
      className={` container-ha transition-all duration-300 px-12  rounded-lg p-6 ${
        isOpen ? "ml-72 w-[85%]" : "ml-16 w-[95%]"
      }`}
    >
      <NewCharts isOpen={isOpen} />
      <Card isOpen={isOpen} />
      <Dashboard />
    </div>
  );
};

export default Overview;
