import React from "react";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

const Card = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mt-10">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 px-6 py-6 col-span-12 sm:col-span-6 card-wid-iss xl:col-span-3 rounded-xl	">
        <p className="text-xl text-gray-300">Revinue Status</p>
        <div className="flex items-center justify-between pt-10	">
          <div>
            <FaPersonCircleCheck className="text-white text-5xl" />
          </div>
          <div>
            <h1 className="text-5xl text-white">$ 432</h1>
            <p className="text-lg text-gray-300">Jan 01 - Jan 10</p>
          </div>
        </div>
      </div>

      <div className=" rounded-xl bg-gradient-to-r from-purple-500 to-blue-600  px-6 py-8  col-span-12 sm:col-span-6 card-wid-iss xl:col-span-3">
        <p className="text-xl text-gray-300">Page View</p>
        <div>
          <h1 className="text-5xl text-white pt-4 ">$ 432</h1>
        </div>
      </div>

      <div className=" rounded-xl bg-gradient-to-r from-blue-400 to-blue-600  px-6 py-8 col-span-12 sm:col-span-6 card-wid-iss xl:col-span-3">
        <p className="text-xl text-gray-300">Bounce Rate</p>
        <div className="flex items-center justify-between pt-7	">
          <div>
            <h1 className="text-5xl text-white">$ 432</h1>
            <select className=" px-1  outline-none flex items-center border-2  rounded-md bg-white mt-4 ">
              <p className="text-black">Message</p>
              <option className="">Monthly</option>
              <option>Yearly</option>
              <option>Weekly</option>
              <option>By Day</option>
            </select>
          </div>
          <div>
            <FaAlignCenter className="text-white text-6xl" />
          </div>
        </div>
      </div>

      <div className=" rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-8 col-span-12 sm:col-span-6 card-wid-iss xl:col-span-3">
        <p className="text-xl text-gray-100">Revinue Status</p>
        <div className="flex items-center justify-between pt-10	">
          <div>
            <FaCarSide className="text-white text-6xl" />
          </div>
          <div>
            <h1 className="text-5xl text-white">$ 432</h1>
            <p className="text-lg text-gray-100">Jan 01 - Jan 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
