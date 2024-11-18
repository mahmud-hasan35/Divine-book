/* eslint-disable react/prop-types */


import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";

function AddButton({ gallery, onAdd, onFavorite }) {
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
    <div className="flex items-center justify-between mt-2">
    <button
  className={`px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:scale-110 ${
    isAdded ? "bg-green-300 px-8 p-1 rounded" : "bg-green-400 px-8 p-1 rounded"
  }`}
  onClick={handleAddToCart}
>
  {gallery.price} | {isAdded ? "Added" : "Add to cart"}
</button>

<span
  onClick={toggleFavorite}
  className={`p-2 rounded-md cursor-pointer border transition-all duration-300 ease-in-out ${
    isFavorite ? "bg-green-100 border-green-300" : "bg-gray-100 border-gray-300"
  } hover:shadow-md`}
>
  {isFavorite ? (
    <FaHeart className="text-green-500 transition-transform duration-300 ease-in-out transform scale-110 hover:scale-125" />
  ) : (
    <FaRegHeart className="text-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-125" />
  )}
</span>
    </div>
  );
}

export default AddButton;





