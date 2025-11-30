import React, { useState } from "react";
import Select from "react-select";
import { deals, extraDeals } from "../assets/menuData";
import { otherMenuItems } from "../assets/menuData";

const Order = () => {
  // Prepare options for react-select
  const allItems = [
    ...deals,
    ...extraDeals,
    ...otherMenuItems.flatMap((seg) => seg.items),
  ].map((item) => ({ value: item, label: `${item.title} - RS: ${item.price}` }));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update selected items from react-select
  const handleSelectChange = (items) => {
    // Default quantity = 1 for each newly selected item
    const newSelection = items.map((i) => {
      const existing = selectedItems.find((s) => s.title === i.value.title);
      return existing ? existing : { ...i.value, quantity: 1 };
    });
    setSelectedItems(newSelection);
  };

  const updateQuantity = (item, qty) => {
    if (qty < 1) return;
    setSelectedItems(
      selectedItems.map((i) =>
        i.title === item.title ? { ...i, quantity: qty } : i
      )
    );
  };

  const calculateTotal = () =>
    selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const confirmOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all form fields!");
      return;
    }
    if (selectedItems.length === 0) {
      alert("Please select at least one item!");
      return;
    }

    const itemsList = selectedItems.map(
      (item) => `${item.title} x${item.quantity} - RS: ${item.price * item.quantity}/-`
    );

    const message = `Hello! I want to place the following order in Bahawalnagar:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nPayment Method: ${formData.payment}\n\nOrder Details:\n${itemsList.join(
      "\n"
    )}\n\nTotal: RS: ${calculateTotal()}/-`;

    const url = `https://wa.me/923333110002?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-900 min-h-screen py-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-black via-neutral-900 to-black py-12 text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-400">Order Now</h1>
        <p className="text-white mt-2">
          Select your favorite meals and place an order quickly!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Customer Form */}
        <div className="bg-neutral-800 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Customer Details
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-300"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-300"
          />
          <input
            type="text"
            name="address"
            placeholder="Complete Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-300"
          />
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white"
          >
            <option>Cash on Delivery</option>
            <option>Online Payment</option>
          </select>
        </div>

        {/* Item Selection */}
        <div className="bg-neutral-800 p-6 rounded-xl shadow-lg space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Select Items / Deals
          </h2>
          <Select
            options={allItems}
            isMulti
            onChange={handleSelectChange}
            placeholder="Search and select items..."
            className="text-black"
          />

          {/* Quantity Selector */}
          {selectedItems.length > 0 && (
            <div className="mt-4 space-y-2">
              {selectedItems.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between items-center bg-neutral-700 p-2 rounded"
                >
                  <span className="text-white">{item.title}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">
                      RS: {item.price * item.quantity}/-
                    </span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item, parseInt(e.target.value))
                      }
                      className="w-16 p-1 rounded bg-gray-600 text-white text-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-neutral-800 p-6 rounded-xl shadow-lg flex justify-between items-center">
          <span className="text-xl font-bold text-yellow-400">
            Total: RS: {calculateTotal()}/-
          </span>
          <button
            onClick={confirmOrder}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-bold text-white"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;
