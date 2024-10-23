import React, { useState } from 'react'
import PurchaseSaleComp from './PurchaseSaleComp';


const ProductGeneral = ({
  activeTab,
  setShowVariantTab,
  formData,
  handleChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    if (value === "productVariant") {
      setShowVariantTab(true);
    } else {
      setShowVariantTab(false);
    }
  };
  const handleOptionChangePrice = (e) => {
    const { value } = e.target;
    setSelectedOption2(value);
  };

    return (
        <div>
          {activeTab === "General" && (
            <div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="productType"
                    value="product"
                    checked={selectedOption === "product"}
                    onChange={handleOptionChange}
                    className="ml-2 h-5 w-5"
                  />
                  <label>Product</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="productType"
                    value="services"
                    checked={selectedOption === "services"}
                    onChange={handleOptionChange}
                    className="ml-2 h-5 w-5"
                  />
                  <label>Services</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="productType"
                    value="productVariant"
                    checked={selectedOption === "productVariant"}
                    onChange={handleOptionChange}
                    className="ml-2 h-5 w-5"
                  />
                  <label>Product Variant</label>
                </div>
              </div>
              <p className="text-orange-500 pt-2 pl-2 text-sm">
                (Cannot be changed once product created.)
              </p>
              <div className="space-y-6">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-5">
                  <div>
                    <label className="block mb-2">
                      Code <span className="text-red-500 text-xl">*</span>
                    </label>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleChange}
                      placeholder="P-202020"
                      className="border p-3 rounded w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">
                      Name <span className="text-red-500 text-xl">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Product Name"
                      className="border p-3 rounded w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">
                      Unit Of Measurement (Symbol){" "}
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <select
                      name="unitOfMeasurement"
                      value={formData.unitOfMeasurement}
                      onChange={handleChange}
                      className="border p-3 rounded w-full"
                      required
                    >
                      <option value="">Select Unit</option>
                      <option value="kg">KG</option>
                      <option value="liters">Liters</option>
                      <option value="pieces">Pieces</option>
                    </select>
                  </div>
                </div>
                {/* Checkboxs  */}
                <div>
                  <div className="flex items center gap-2 mt-9 ">
                    <input type="checkbox" className="h-5 w-5" />
                    <p className="text-lg">
                      Do you sell or purchase in fractional units?{" "}
                      <span className="text-blue-500 text-sm">
                        (e.g. 0.5 kg, 2.25 lt, etc.)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center ml-6 gap-2 mt-4">
                    <input
                      type="radio"
                      value="changePrice"
                      checked={selectedOption2 === "changePrice"}
                      onChange={handleOptionChangePrice}
                      className="h-5 w-5"
                    />
                    <p>
                      Change price on transaction documents when amount updated.
                    </p>
                  </div>
                  <div className="flex items-center ml-6 gap-2 mt-4">
                    <input
                      type="radio"
                      value="changeQuantity"
                      checked={selectedOption2 === "changeQuantity"}
                      onChange={handleOptionChangePrice}
                      className="h-5 w-5"
                    />
                    <p>
                      Change quantity on transaction documents when amount
                      updated.
                    </p>
                  </div>
                  <div className="flex items center gap-2 mt-5 pb-3">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>
                      Do you want to have a calculation field to calculate
                      product quantity?{" "}
                      <span className="text-blue-500 text-sm">
                        (e.g. 10 * 10 = 100 sq.ft, 10 * 10 * 10 = 1000 cb.ft,
                        etc.)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-t-2 pt-6 ">
                  <p>Inventory Account</p>
                  <select className="w-full max-w-80	mt-2 rounded-lg p-4 border-2">
                    <option value="">Inventory</option>
                    <option value="">Inventory1</option>
                    <option value="">Inventory2</option>
                  </select>
                </div>
                <PurchaseSaleComp
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
            </div>
          )}
          {/* Submit Button  */}
          
        </div>
    );
};

export default ProductGeneral
