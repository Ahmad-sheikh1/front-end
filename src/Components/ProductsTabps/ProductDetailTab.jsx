import React from "react";

const ProductDetailTab = ({ formData, handleChange, activeTab }) => {
  return (
    <div className="p-6">
      {activeTab === "Detail" && (
        <div className="flex justify-between gap-10 flex-wrap	 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-4/5		">
            {/* Product Category */}
            <div>
              <label className="block mb-2">Product Category</label>
              <select
                name="productCategorydetail"
                value={formData.productCategorydetail}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              >
                <option value="">Type to search product category</option>
              </select>
            </div>

            {/* Principal */}
            <div>
              <label className="block mb-2">Principal</label>
              <select
                name="principal"
                value={formData.principal}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              >
                <option value="">Type to search principal</option>
              </select>
            </div>

            {/* Product Short Name */}
            <div>
              <label className="block mb-2">Product Short Name</label>
              <input
                type="text"
                name="productShortName"
                value={formData.productShortName}
                onChange={handleChange}
                placeholder="Product Short Name"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Choose Image */}

            {/* SKU */}
            <div>
              <label className="block mb-2">SKU</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="SKU"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Product Barcode */}
            <div>
              <label className="block mb-2">Product Barcode</label>
              <input
                type="text"
                name="productBarcode"
                value={formData.productBarcode}
                onChange={handleChange}
                placeholder="Product Barcode"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-2">Brand</label>
              <select
                name="brand"
                value={formData.branddetail}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              >
                <option value="">Type to search brand</option>
              </select>
            </div>

            {/* HS Code */}
            <div>
              <label className="block mb-2">HS Code</label>
              <select
                name="hsCode"
                value={formData.hsCode}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              >
                <option value="">Type to search HS Code</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="block mb-2">
                Weight{" "}
                <span className="text-orange-500">(Please provide in kg.)</span>
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Weight"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Height */}
            <div>
              <label className="block mb-2">
                Height{" "}
                <span className="text-orange-500">
                  (Please provide in inches.)
                </span>
              </label>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Height"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Length */}
            <div>
              <label className="block mb-2">
                Length{" "}
                <span className="text-orange-500">
                  (Please provide in inches.)
                </span>
              </label>
              <input
                type="text"
                name="length"
                value={formData.length}
                onChange={handleChange}
                placeholder="Length"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Width */}
            <div>
              <label className="block mb-2">
                Width{" "}
                <span className="text-orange-500">
                  (Please provide in inches.)
                </span>
              </label>
              <input
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="Width"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Model Number */}
            <div>
              <label className="block mb-2">Model Number</label>
              <input
                type="text"
                name="modelNumber"
                value={formData.modelNumber}
                onChange={handleChange}
                placeholder="Product Model Number"
                className="border p-3 rounded w-full"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block mb-2">Short Description</label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                placeholder="Short Description"
                className="border p-3 rounded w-full"
              ></textarea>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-3 rounded w-full"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <p className="block mb-10 h-36 w-36 pt-14 rounded-[50%] text-center border-4 mt">
                Choose Image
              </p>
              <input
                type="file"
                name="productImage"
                accept="image/*"
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className=" mt-4 border p-4 w-full text-center rounded cursor-pointer"
              >
                Choose image
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailTab;
