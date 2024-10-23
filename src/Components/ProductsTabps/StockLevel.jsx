import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const StockLevel = ({ activeTab }) => {
  const [warehouse, setWarehouse] = useState("");
  const [minStock, setMinStock] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAdd = () => {
    if (minStock !== "") {
      const newMinStock = isEditing
        ? Number(addedProduct.minStock) + Number(minStock) // Add new input to old value if editing
        : Number(minStock);

      setAddedProduct({ warehouse, minStock: newMinStock });
      setMinStock("");
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setMinStock(""); // Clear input so the user can type the new value
  };

  const handleDelete = () => {
    setAddedProduct(null);
    setMinStock("");
    setWarehouse("");
  };

  const handleMinStockChange = (e) => {
    if (/^\d*$/.test(e.target.value)) {
      setMinStock(e.target.value);
    }
  };

  const handleWarehouseChange = (e) => {
    setWarehouse(e.target.value);
  };

  return (
    <div>
      {activeTab === "Stock Level" && (
        <div className="w-full  mx-auto border-2  bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            {/* Warehouse Section */}
            <div className="col-span-12 lg:col-span-5  ">
              <div className="flex-1 font-bold text-xl border-b-2 border-r-2 px-5 py-3">
                Warehouse
              </div>
              <div className="flex-1 border-r-2">
                <select
                  value={warehouse}
                  onChange={handleWarehouseChange}
                  className="w-[95%] border p-2.5 rounded-md mt-5 mx-4"
                >
                  <option value="">Select Warehouse</option>
                  <option value="Warehouse A">Warehouse A</option>
                  <option value="Warehouse B">Warehouse B</option>
                </select>
              </div>
            </div>

            {/* Minimum Stock Section */}
            <div className="col-span-12 lg:col-span-5 ">
              <div className="flex-1 font-bold text-xl border-b-2 border-r-2 px-4 py-3 ">
                Minimum Stock Level
              </div>
              <div className="flex-1 mt-5">
                <input
                  type="text"
                  value={minStock}
                  onChange={handleMinStockChange}
                  placeholder="Enter stock level"
                  className="w-full border p-2 rounded-md mx-2 w-[94.9%]"
                  disabled={addedProduct && !isEditing}
                />
              </div>
            </div>

            {/* Buttons Section */}
            <div className="col-span-12 lg:col-span-2  ">
              <div>
                {" "}
                <h1 className="font-bold text-xl border-b-2 px-4 py-3">
                  Action
                </h1>
              </div>
              <div className="flex items-center gap-2 space-x-2 px-4">
                {isEditing || !addedProduct ? (
                  <button onClick={handleAdd} className="text-green-500">
                    <FaCheck />
                  </button>
                ) : (
                  <>
                    <button onClick={handleEdit} className="text-blue-500">
                      <FaEdit />
                    </button>
                    <button onClick={handleDelete} className="text-red-500">
                      <FaTrash />
                    </button>
                  </>
                )}
                {isEditing && (
                  <button
                    onClick={() => setIsEditing(false)}
                    className="text-gray-500"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
          </div>

          {addedProduct && (
            <div className="mt-4 p-2 border rounded bg-gray-50">
              <div>
                <strong>Warehouse:</strong> {addedProduct.warehouse}
              </div>
              <div>
                <strong>Minimum Stock Level:</strong> {addedProduct.minStock}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StockLevel;
