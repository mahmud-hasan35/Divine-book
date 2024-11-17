/* eslint-disable react/prop-types */

import { GoBell } from "react-icons/go";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
import CartTableItem from "../../conponents/CartTableItem";

function BookHeader({ data, isDarkMode, toggleDarkMode, cartItems,setCartItems }) {
  const [showModal, setShowModal] = useState(false);
  
  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id)); };

    const handleUpdateQuantity = (id, type) => {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === id) {
            if (type === "increment") {
              return { ...item, quantity: item.quantity + 1 };
            } else if (type === "decrement" && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        })
      );
    };

  

  return (
    <div className="border-b pb-4">
      <header className="max-w-screen-xl mx-auto pt-3 px-4 sm:px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-500">DivineBook</h1>
          <ul className="flex items-center">
            <li className="ml-5 border p-2 rounded text-xl">
              <GoBell />
            </li>
            <li
              onClick={toggleDarkMode}
              className="ml-5 border p-2 rounded cursor-pointer text-xl"
            >
              {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
            </li>
            <li
              onClick={() => setShowModal(true)}
              className="ml-5 border p-2 rounded cursor-pointer relative text-xl"
            >
              <FaCartPlus />
              <span className="bg-red-600 text-white absolute text-xs rounded-full w-5 h-5 bottom-5 ml-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            </li>
          </ul>
        </div>
      </header>

      {showModal && (
        <CartTableItem
          data={data}
          onClose={() => setShowModal(false)}
          onDelete={handleDeleteItem}
          cartItems={cartItems}
          onIncrement={handleUpdateQuantity}
        />
      )}
    </div>
  );
}

export default BookHeader;




















