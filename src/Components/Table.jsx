import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import { MdOutlineSdCardAlert } from "react-icons/md";
import '../Components/Simple.css'
// Sample data for activities and orders
const activities = [
  {
    id: 1,
    time: "40 Mins Ago",
    activity: "Task Updated",
    user: "Nikil",
    color: "bg-pink-500",
  },
  {
    id: 2,
    time: "1 day ago",
    activity: "Deal Added",
    user: "Parish",
    color: "bg-purple-500",
  },
  {
    id: 3,
    time: "40 Mins Ago",
    activity: "Published Article",
    user: "Sarah",
    color: "bg-blue-500",
  },
  {
    id: 4,
    time: "1 day ago",
    activity: "Dock Updated",
    user: "Manish",
    color: "bg-yellow-500",
  },
  {
    id: 5,
    time: "1 day ago",
    activity: "Replied Comment",
    user: "Parish",
    color: "bg-green-500",
  },
];

const orderStatus = [
  {
    invoice: 12386,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Process",
    color: "bg-sky-500",
  },
  {
    invoice: 12386,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Process",
    color: "bg-red-500",
  },
  {
    invoice: 12386,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "in Open",
    color: "bg-green-500",
  },
  {
    invoice: 12387,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    color: "bg-purple-500",
    status: "Process",
  },
  {
    invoice: 12388,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "On Hold",
    color: "bg-orange-500",
  },
  {
    invoice: 39189,
    customer: "Hasham dues",
    from: "England",
    price: "$9152",
    status: "Process",
    color: "bg-green-500",
  },
  {
    invoice: 90390,
    customer: "Charity News",
    from: "Pakistan",
    price: "$5152",
    status: "Closed",
    color: "bg-sky-500",
  },
  {
    invoice: 10390,
    customer: "Charity dues",
    from: "Spain",
    price: "$2652",
    status: "Closed",
    color: "bg-orange-500",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "India",
    price: "$2652",
    status: "Closed",
    color: "bg-purple-500",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Closed",
    color: "bg-red-600",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Closed",
    color: "bg-red-500",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Closed",
    color: "bg-sky-500",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Closed",
    color: "bg-purple-500",
  },
  {
    invoice: 12390,
    customer: "Charity dues",
    from: "Russia",
    price: "$2652",
    status: "Closed",
    color: "bg-blue-600",
  },
  {
    invoice: 86790,
    customer: "Hasham dues",
    from: "England",
    price: "$7252",
    status: "Closed",
    color: "bg-pink-500",
  },
];

const pageSize = 5; // Limit of rows per page

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination logic
  const paginatedOrders = orderStatus.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(orderStatus.length / pageSize);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" table-has grid grid-cols-1 lg:grid-cols-4 gap-4 py-6 mt-6">
      {/* Left Section: Recent Activities */}
      <div className="col-span-1 bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center mb-3 pt-8">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${activity.color}`}
              >
                {activity.user[0]}
              </div>
              <div className="ml-4">
                <p className="text-gray-600 text-sm">{activity.time}</p>
                <p className="font-bold text-black">{activity.activity}</p>
                <p className="text-gray-500">{activity.user} Updated a Task</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Order Status */}
      <div className="col-span-3 bg-white shadow-lg rounded-lg p-6">
        <div className=" mb-4">
          <h2 className="text-xl font-bold">Order Status</h2>
          <p>Overview of Last Month</p>
        </div>

        {/* Search Bar and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex space-x-2 red-btn-table">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              <i className="fas fa-copy"></i>
              Add
            </button>
            <button className="bg-gray-300 text-white px-4 py-2 rounded-lg text-2xl">
              <MdDelete className="contrast-0" />
            </button>
            <button className="bg-gray-300 text-white px-4 py-2 rounded-lg text-2xl">
              <IoIosAlert className="contrast-0" />
            </button>
            <button className="bg-gray-300 text-white px-4 py-2 rounded-lg text-2xl">
              <MdOutlineSdCardAlert className="contrast-0" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full md:w-auto bg-gray-100 px-4 py-2 rounded-lg mb-2 md:mb-0"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 text-xl uppercase	">Invoice</th>
                <th className="px-4 py-2 text-xl uppercase	">Customers</th>
                <th className="px-4 py-2 text-xl uppercase	">From</th>
                <th className="px-4 py-2 text-xl uppercase	">Price</th>
                <th className="px-4 py-2 text-xl uppercase	">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order, index) => (
                <tr key={index} className="pt-10 ">
                  <td className="px-7 py-6">{order.invoice}</td>
                  <td className="px-7 py-6">{order.customer}</td>
                  <td className="px-6 py-6">{order.from}</td>
                  <td className="px-6 py-6">{order.price}</td>
                  <td className=" tab-btn-ha px-1 py-6">
                    <span
                      className={`text-white px-4 py-2 rounded-md ${order.color}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {Math.min(currentPage * pageSize, orderStatus.length)} of{" "}
            {orderStatus.length} entries
          </div>
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
