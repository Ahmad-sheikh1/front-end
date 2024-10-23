import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiBellOn } from "react-icons/ci";

const NotificationDrop = () => {
     const [isdrop, setIsDrop] = useState(false);
     const navigate = useNavigate();

     const toggleDropdown = () => {
       setIsDrop(!isdrop);
     };

    //  const handleItemClick = (path) => {
    //    setIsDrop(false);
    //    navigate(path);
    //  };
  return (
    <div className=" z-10	relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 w-full px-4 py-2  text-2xl  text-black cursor-pointer   "
      >
        <CiBellOn className="lg:text-6xl md:text-4xl sm:text-xl contrast-0" />
      </button>

      {isdrop && (
        <div className="absolute  border-green-500 border-2 -right-20 mt-8 w-60 rounded-md shadow-lg bg-white ring-1 ring-black cursor-pointer ring-opacity-5">
          <div className="">
            <li
              //   onClick={() => handleItemClick("/")}
              className="text-blue-800 justify-center  gap-4 cursor-pointer  flex items-center px-4 py-3 text-lg "
            >
              No Pending approval
            </li>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationDrop
