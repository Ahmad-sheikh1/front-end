import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCheck } from "react-icons/ai";
// import "tailwindcss/tailwind.css";
import { FaCheck } from "react-icons/fa6";

const ActiveLog = ({isOpen}) => {
  const [showLogs, setShowLogs] = useState(false); // Toggle logs, not the textarea
  const [description, setDescription] = useState("");
  const [logs, setLogs] = useState([]);

  // Toggle log visibility
  const toggleLogs = () => {
    setShowLogs(!showLogs);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddLog = () => {
    if (description) {
      const newLog = {
        date: new Date().toLocaleDateString(), 
        name: "John Doe", 
        description,
      };
      setLogs([...logs, newLog]);
      setDescription(""); 
    }
  };

    return (
      <div
        className={` relative flex mb-14  ${
          isOpen ? "fixed right-10" : "right-0"
        }`}
      >
        <div
          className={`transition-all mt-10  duration-300 bg-white p-6 shadow-2xl flex-grow 
          ${isOpen ? "ml-96" : "ml-28 mr-10 "} w-full`}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Activity Log</h1>
            <button
              onClick={toggleLogs}
              className=" flex gap-1 justify-center bg-blue-600 text-white py-3 font-bold text-xl items-center rounded-lg w-32 hover:bg-blue-400 transition"
            >
              {showLogs ? (
                <AiOutlineMinus className="font-bold text-white text-2xl" />
              ) : (
                <AiOutlinePlus className="font-bold text-white text-2xl" />
              )}
              SHOW
            </button>
          </div>

          <div className="mb-4 border-2 bg-gray-100 px-4  flex justify-between items-center">
            <textarea
              className="border-4 p-4 w-[85%] rounded-md"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description"
            />
            <div className="border-l-4 py-8 m-auto">
              <button
                onClick={handleAddLog}
                className="lg:ml-12 md:ml-5 sm:ml-2  text-gray-400   hover:text-green-400 transition"
              >
                <FaCheck className="lg:text-5xl md:text-5xl sm:text-4xl"/>

                
              </button>
            </div>
          </div>

          {/* Log Section (Columns: Date, Name, Description) */}
          {showLogs && (
            <div
              className="max-h-12 overflow-y-auto overflow-X-auto border-2 "
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              <table className="w-full">
                <thead className="border-r-2">
                  <tr className="bg-white-100 border-b-2">
                    <th className="text-left font-bold text-xl py-3 px-4 border-r-2 ">
                      Date
                    </th>
                    <th className="text-left font-bold text-xl border-r-2 px-3 ">
                      User Name
                    </th>
                    <th className="text-left font-bold text-xl border-r-2 px-3 ">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`} // Apply gray-100 for even rows, white for odd rows
                    >
                      <td className="py-3 px-3 border-r-2   ">{log.date}</td>
                      <td className="border-r-2 px-3 ">{log.name}</td>
                      <td className="border-r-2 px-3 ">{log.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
};

export default ActiveLog;
