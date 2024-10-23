import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCompanyForm = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [typeOfOrganization, setTypeOfOrganization] = useState("");
  const navigate = useNavigate();

  const handleFreeTrial = () => {
    if (companyName && typeOfOrganization) {
      navigate("/dashboard"); 
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%]">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Company
        </h2>
        <form>
          {/* Company Name */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Company Name <span className="text-red-500 ">*</span>{" "}
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              placeholder="Company name"
            />
            {!companyName && (
              <span className="text-red-500 text-sm">
                Company name is required.
              </span>
            )}
          </div>

          {/* Type of Organization */}
          <div className="mb-6  w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Type of Organization <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-2 mt-1 p-2 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typeOfOrganization}
              onChange={(e) => setTypeOfOrganization(e.target.value)}
              required
            >
              <option value="">-Choose-</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="Corporation">Corporation</option>
            </select>
            {!typeOfOrganization && (
              <span className="text-red-500 text-sm">
                Organization type is required.
              </span>
            )}
          </div>

          {/* Financial Year Start */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Financial Year Start <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 p-2 py-4 border border-gray-300 rounded-md">
              <option>January</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>July</option>
              <option>October</option>
            </select>
          </div>

          {/* Country */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 p-2 py-4 border border-gray-300 rounded-md">
              <option>Pakistan</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <span className="text-yellow-500 text-sm">
              (Cannot be changed once company created.)
            </span>
          </div>

          {/* Timezone */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Timezone <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>Pakistan (UTC +05:00)</option>
              <option>India (UTC +05:30)</option>
              <option>USA (UTC -05:00)</option>
            </select>
          </div>

          {/* City */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              City <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </select>
          </div>

          {/* Home Currency */}
          <div className="mb-6 w-[40%] m-auto">
            <label className="block text-gray-700 pb-1">
              Home Currency <span className="text-red-500">*</span>
            </label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>Pakistani Rupee (Rs)</option>
              <option>USD Dollar ($)</option>
            </select>
            <span className="text-yellow-500 text-sm">
              (Cannot be changed once company created.)
            </span>
          </div>

          {/* Terms and Conditions Link */}
          <div className="mb-6 w-[40%] m-auto">
            <input type="checkbox" required /> By clicking "Buy now/start free
            trial now"
            <span
              className="text-blue-600 cursor-pointer ml-1"
              onClick={() => setShowTerms(true)}
            ></span>
            , you agree to our
            <a
              href="/terms"
              className="text-blue-600"
              onClick={(e) => {
                e.preventDefault(); 
                setShowTerms(true); 
              }}
            >
              Terms and Conditions
            </a>
            .
          </div>

          {/* Buy Now and Free Trial Buttons */}
          <div className="flex justify-between mb-6 w-[40%] m-auto">
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed"
              disabled
            >
              BUY NOW
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleFreeTrial}
            >
              START FREE TRIAL NOW
            </button>
          </div>
        </form>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">Terms and Conditions</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => setShowTerms(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCompanyForm;
