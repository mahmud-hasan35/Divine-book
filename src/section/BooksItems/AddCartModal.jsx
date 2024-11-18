/* eslint-disable react/prop-types */


import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";

function AddCartModal({ onClose, gallery, onFavorite, onAdd }) {

  const [isFavorite, setIsFavorite] = useState(false);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAdd(gallery);
  };

  const toggleFavorite = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    if (onFavorite) onFavorite(gallery, newStatus);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-7/12 h-2/4 flex shadow-lg rounded-lg overflow-hidden relative">
        <div className="flex justify-between">
          <div className="p-6 mt-5">
            <h2 className="text-3xl font-bold text-gray-600 mb-5">{gallery.name}</h2>
            <span>{gallery.author}</span>
            <p className="mt-5 w-full text-gray-600">
              When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist's journey, readers are reminded of the importance of reaching out and finding support in others.
            </p>
            <div className="flex items-center mt-10">
              <button className={`px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:scale-110${isAdded ? "bg-green-300" : "bg-green-500"
                } px-8 p-1 rounded`}
                onClick={handleAddToCart}
              >
                {gallery.price} | {isAdded ? "Added" : "Add to cart"}</button>
                <span
  onClick={toggleFavorite}
  className={`ml-5 p-2 border rounded cursor-pointer transition-all duration-300 ease-in-out ${
    isFavorite ? "bg-green-50 border-green-300" : "bg-gray-50 border-gray-300"
  } hover:shadow-lg`}
>
  {isFavorite ? (
    <FaHeart className="text-green-400 transition-transform duration-300 ease-in-out transform hover:scale-125" />
  ) : (
    <FaRegHeart className="text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-125" />
  )}
</span>
              <button onClick={onClose} className="bg-green-500 p-2 px-6 ml-5 rounded">Close</button>
            </div>
          </div>
          <div className="w-8/12 h-full">
            <img src={gallery.image}
              alt="Popup"
              className="max-w-screen h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCartModal;


