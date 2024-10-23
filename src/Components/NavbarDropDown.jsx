import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";

function NavbarDropDown() {
  const [isdrop, setIsDrop] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDrop(!isdrop);
  };

  const handleItemClick = (path) => {
    setIsDrop(false); // Close the dropdown after an item is clicked
    navigate(path); // Navigate to the specified page
  };

  return (
    <div className=" z-10 relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 w-full px-4 py-2  text-2xl  text-black cursor-pointer   "
      >
        <FcHome className="lg:text-6xl md:text-3xl sm:text-xl" />
        <h1 className="lg:text-3xl md:text-xl">Users</h1>
        <IoMdArrowDropdown />
      </button>

      {/* Dropdown Menu */}
      {isdrop && (
        <div className="absolute  border-green-500 border-2 -right-8  mt-11 w-64 rounded-md shadow-lg bg-white ring-1 ring-black cursor-pointer ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => handleItemClick("/createform")}
              className=" mt-4 m-auto rounded-md	text-white  justify-center font-bold flex items-center px-4 py-2 bg-green-400 text-lg hover:bg-green-500 hover:text-white "
            >
              + ADD COMPANY
            </button>
            <li
              onClick={() => handleItemClick("/company-settings")}
              className="text-black cursor-pointer mt-2 flex items-center px-4 py-2 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              Company Settings
            </li>
            <li
              onClick={() => handleItemClick("/subscriptions")}
              className="text-black cursor-pointer  flex items-center px-4 py-2 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              Subscriptions
            </li>
            <li
              onClick={() => handleItemClick("/whatsnew")}
              className="text-black cursor-pointer border-t-2  flex items-center px-4 py-1 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              What's new
            </li>
            <li
              onClick={() => handleItemClick("/support")}
              className="text-black cursor-pointer border-t-2  flex items-center px-4 py-1 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              Support
            </li>
            <li
              onClick={() => handleItemClick("/user-profile")}
              className="text-black cursor-pointer border-t-2 flex items-center px-4 py-1 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              User Profile
            </li>
            <li
              onClick={() => handleItemClick("/change-password")}
              className="text-black cursor-pointer  border-t-2 flex items-center px-4 py-1 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              Change Password
            </li>
            {/* Add more items as needed */}
            <li
              onClick={() => handleItemClick("/logout")}
              className="text-black cursor-pointer  border-t-2 flex items-center px-4 py-1 text-lg hover:bg-green-500 hover:text-white w-full text-left"
            >
              Logout
            </li>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarDropDown;
