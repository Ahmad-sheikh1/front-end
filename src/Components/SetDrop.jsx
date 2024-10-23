import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaRegRectangleList } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const SetupDropdown = () => {
  const [dropDown, setDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // Track active item

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdown(!dropDown);
  };

  const handleItemClick = (item) => {
     setDropdown(false);
    setActiveItem(item);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 p-2"
      >
        <IoMdSettings className="lg:text-6xl md:text-4xl sm:text-xl contrast-0" />
        <p className="text-xl text-gray-500">Setup</p>
      </button>

      {/* Dropdown Menu */}
      {dropDown && (
        <div className="bg-gray-100 mt-10 border-2 border-green-500 absolute top-[100%] right-[35%]  lg:w-[44vw] md:w-[36vw] sm:w-[45vw] bg-white shadow-lg border rounded-md p-10 z-50">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* Lists Column */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaRegRectangleList className="text-xl" />
                <h3 className="font-bold text-gray-700 text-xl">Lists</h3>
              </div>
              <ul className="space-y-2">
                <li
                  className={`cursor-pointer ${
                    activeItem === "customers" ? "text-green-500" : "text-black"
                  }`}
                  onClick={() => handleItemClick("customers")}
                >
                  <Link to="/List-customers">Customers</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "vendors" ? "text-green-500" : "text-black"
                  }`}
                  onClick={() => handleItemClick("vendors")}
                >
                  <Link to="/List-vendors">Vendors</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "products" ? "text-green-500" : "text-black"
                  }`}
                  onClick={() => handleItemClick("products")}
                >
                  <Link to="/List-products">Products</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "users" ? "text-green-500" : "text-black"
                  }`}
                  onClick={() => handleItemClick("users")}
                >
                  <Link to="/List-users">Users</Link>
                </li>
              </ul>
            </div>

            {/* Categories Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaRegRectangleList className="text-xl" />
                <h3 className="font-bold text-gray-700 text-xl">Categories</h3>
              </div>
              <ul className="space-y-2">
                <li
                  className={`cursor-pointer ${
                    activeItem === "customer-categories"
                      ? "text-green-500"
                      : "text-black"
                  }`}
                  onClick={() => handleItemClick("customer-categories")}
                >
                  <Link to="/customer-categories">Customer Categories</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "product-categories"
                      ? "text-green-500"
                      : "text-black"
                  }`}
                  onClick={() => handleItemClick("product-categories")}
                >
                  <Link to="/product-categories">Product Categories</Link>
                </li>
              </ul>
            </div>

            {/* General Column */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaRegRectangleList className="text-xl" />
                <h3 className="font-bold text-gray-700 text-xl">General</h3>
              </div>
              <ul className="space-y-2">
                <li
                  className={`cursor-pointer ${
                    activeItem === "taxes" ? "text-green-500" : "text-black"
                  }`}
                  onClick={() => handleItemClick("taxes")}
                >
                  <Link to="/General-taxes">Taxes</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "warehouses"
                      ? "text-green-500"
                      : "text-black"
                  }`}
                  onClick={() => handleItemClick("warehouses")}
                >
                  <Link to="/General-warehouses">Warehouses</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    activeItem === "custom-fields"
                      ? "text-green-500"
                      : "text-black"
                  }`}
                  onClick={() => handleItemClick("custom-fields")}
                >
                  <Link to="/General-custom-fields">Custom Fields</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupDropdown;
