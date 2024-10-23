import React from 'react'
import { FaRegEdit } from "react-icons/fa";

const PurchaseSaleComp = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="h-5 w-5" />
        <p className="text-lg text-gray-500">Do you purchase this product?</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 items-center mt-7">
        <div>
          <label className="block mb-2">
            Purchase Price (PKR)
            <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            placeholder="P-202020"
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Expense Account</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="border p-3.5 rounded w-full"
            required
          >
            <option value="">Cost of Goods Sold</option>
            <option value="Electronics">Electronics</option>
            <option value="Apparel">Apparel</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Purchase Discount Account</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="border p-3.5 rounded w-full"
            required
          >
            <option value="">Discounts Received</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
          </select>
        </div>
        <div className="text-center">
          <label className="block mb-2 text-xl">Purchase Taxes</label>
          <div className="flex items-center gap-2 text-green-500 cursor-pointer justify-center">
            <FaRegEdit />

            <p className="">Manage Taxes</p>
          </div>
        </div>
      </div>
      {/* ReRender  */}

      <div className="flex items-center gap-2 mt-8">
        <input type="checkbox" className="h-5 w-5" />
        <p className="text-lg text-gray-500">Do you sale this product?</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 items-center mt-7">
        <div>
          <label className="block mb-2">
            Sale Price (PKR)
            <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            placeholder="Sale Price"
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Sales Account</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="border p-3.5 rounded w-full"
            required
          >
            <option value="">Sales </option>
            <option value="Electronics">Sales Account</option>
            <option value="Apparel">Sales Account2</option>
            <option value="Home">Sales Account3</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Sales Discount Account</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="border p-3.5 rounded w-full"
            required
          >
            <option value=""> Discount Given </option>
            <option value="Brand A">Discount Given A</option>
            <option value="Brand B">Discount Given B</option>
          </select>
        </div>
        <div className="text-center">
          <label className="block mb-2 text-xl">Sale Taxes</label>
          <div className="flex items-center gap-2 text-green-500 cursor-pointer justify-center">
            <FaRegEdit />

            <p className="">Manage Taxes</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 items-center mt-9">
        <div>
          <label className="block mb-2">
            Maximum Retail Price (PKR)
            <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            placeholder="Retail Price"
            className="border p-3 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Sales Return Account</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="border p-3.5 rounded w-full"
            required
          >
            <option value="">Sales Return </option>
            <option value="Electronics">Sales Account</option>
            <option value="Apparel">Sales Account2</option>
            <option value="Home">Sales Account3</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" className="h-5 w-5" />
            <p className="text-lg text-black">
              Is retail price exclusive of tax?
            </p>
          </div>
          <p className="text-blue-500 pt-2 leading-6 text-sm">
            (A maximum retail price (MRP) is a manufacturer calculated price
            that is the highest price that can be charged for a product sold,
            used for calculating tax if configured. Sale price is used for
            trading.)
          </p>
        </div>
      </div>
      <div className="mt-6">
        <p className="border-t-2 pt-10 text-lg text-gray-800">
          To <span className='font-bold'>add product openings</span> , please create a Stock
          Adjustment and select adjustment type 'Openings'.
        </p>
      </div>
    </div>
  );
};

export default PurchaseSaleComp
