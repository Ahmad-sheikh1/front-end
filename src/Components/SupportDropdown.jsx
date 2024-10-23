import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const SupportDropdown = () => {
      const [isdrop, setIsDrop] = useState(false);
      const navigate = useNavigate();

      const toggleDropdown = () => {
        setIsDrop(!isdrop);
      };

      const handleItemClick = (path) => {
        setIsDrop(false); 
        navigate(path);
      };
  return (
    <div className=" z-10	 relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 w-full px-4 py-2  text-2xl  text-black cursor-pointer   "
      >
        <FaWhatsapp className="lg:text-6xl md:text-4xl sm:text-xl contrast-0  " />
        <p className="text-xl text-gray-500">Support</p>
      </button>

      {/* Dropdown Menu */}
      {isdrop && (
        <div className="absolute  border-green-500 border-2 -right-6 mt-11 w-72 rounded-md shadow-lg bg-white ring-1 ring-black cursor-pointer ring-opacity-5">
          <div className="">
            <li
              //   onClick={() => handleItemClick("/")}
              className="text-black justify-center  gap-4 cursor-pointer border-b-2  flex items-center px-4 py-2 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              <FaPhoneAlt />
              +92 346 0861150
            </li>
            <li
              //   onClick={() => handleItemClick("/")}
              className="text-black gap-4 justify-center cursor-pointer border-b-2  flex items-center px-4 py-2 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              <FaPhoneAlt />
              +92 335 127 9228
            </li>
            <button
              onClick={() => handleItemClick("/contact-us")}
              className=" my-4 m-auto rounded-md text-white  justify-center font-bold flex items-center px-4 py-2 bg-green-400 text-lg hover:bg-green-500 hover:text-white "
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupportDropdown
