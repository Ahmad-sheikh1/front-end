import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SideBar } from "../assets/SideBar";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import SetupDropdown from "./SetDrop";
import NavbarDropDown from "./NavbarDropDown";
import SupportDropdown from "./SupportDropdown";
import NotificationDrop from "./NotificationDrop";

const Navbar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("");
  const [dropdownIndex, setDropdownIndex] = useState(null); 

  const navigate = useNavigate(); 

  const handleDropdownToggle = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index); 
  };

  const handleSubarrayClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="flex items-center justify-between shadow-xl	px-10 gap-6">
        <div className="flex ">
          <div className={`flex p-4 ${isOpen ? "" : "justify-center"}`}>
            <button onClick={toggleSidebar} className="text-3xl">
              {isOpen ? <AiOutlineMenu /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className="text-5xl w-full h-full">
            <img
              src="/logo-drpos.png"
              alt=""
              className=" pl-5 ml-5 border-l-2 py-3	"
            />
          </div>
        </div>
        <div className="flex  items-center">
          <div className="border-r-2 flex items-center gap-2 lg:px-5 md:px-2">
            <SupportDropdown />
          </div>
          <div className="flex items-center gap-2 border-r-2 lg:px-5 md:px-2relative">
            <SetupDropdown />
          </div>
          <div className="border-r-2 lg:px-5 md:px-2 pt-2">
            <NotificationDrop />
          </div>
          <div className=" lg:px-3 md:px-2 pt-2">
            <NavbarDropDown />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div
          className={`absolute top-0 left-0 shadow-xl text-black z-10${
            isOpen ? " w-72" : " w-20"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-6">
            {SideBar.map((item, ind) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.li;
              const hasSubarray = item.subarray && item.subarray.length > 0;
              const isDropdownOpen = dropdownIndex === ind;

              return (
                <div key={ind}>
                  {/* Conditional Link: Only navigate if there's no subarray */}
                  {!hasSubarray ? (
                    <Link
                      to={`/${item.li.toLowerCase().replace(/ /g, "-")}`} // Dynamic route for main items without subarray
                      onClick={() => setActiveItem(item.li)}
                    >
                      <div
                        className={`  hover:bg-green-500 hover:text-white flex gap-4 items-center py-3 px-3 ${
                          isOpen ? "justify-start" : "justify-center"
                        } ${
                          isActive ? "bg-green-500 text-white" : "text-black"
                        }`}
                      >
                        <li
                          className={`text-3xl ${isActive ? "text-whie" : ""}`}
                        >
                          <IconComponent
                            className={` ${
                              isActive ? "contrast-1" : "contrast-1"
                            }`}
                          />
                        </li>
                        {isOpen && (
                          <li
                            className={`text-xl ${
                              isActive ? "text-white" : ""
                            }`}
                          >
                            {item.li}
                          </li>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={` cursor-pointer hover:bg-green-500 hover:text-white flex gap-4 items-center py-3 px-3 ${
                        isOpen ? "justify-start" : "justify-center"
                      } ${isActive ? "bg-green-500 text-white" : "text-black"}`}
                      onClick={() => handleDropdownToggle(ind)}
                    >
                      <li className={`text-3xl ${isActive ? "text-whie" : ""}`}>
                        <IconComponent
                          className={` ${
                            isActive ? "contrast-0" : "contrast-1"
                          }`}
                        />
                      </li>
                      {isOpen && (
                        <li
                          className={`text-xl ${isActive ? "text-white" : ""}`}
                        >
                          {item.li}
                        </li>
                      )}
                      {/* Dropdown toggle button for items with subarrays */}
                      {hasSubarray && isOpen && (
                        <button className="ml-auto text-sm">
                          {isDropdownOpen ? (
                            <IoIosArrowDown className="text-2xl" />
                          ) : (
                            <IoIosArrowBack className="text-2xl" />
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Subarray Dropdown */}
                  {isDropdownOpen && hasSubarray && isOpen && (
                    <ul className="ml-6 space-y-6 text-xl pt-8">
                      {item.subarray.map((subItem, subInd) => {
                        // Generate dynamic link from subitem name
                        const subLink = `/${item.li
                          .toLowerCase()
                          .replace(/ /g, "-")}/${Object.values(subItem)[0]
                          .toLowerCase()
                          .replace(/ /g, "-")}`;

                        return (
                          <li
                            key={subInd}
                            className={`text-gray-500 cursor-pointer ${
                              isActive ? "text-white" : ""
                            }`}
                            onClick={() => handleSubarrayClick(subLink)}
                          >
                            {Object.values(subItem)[0]}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
