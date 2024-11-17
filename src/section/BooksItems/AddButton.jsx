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
        className={`${
          isAdded ? "bg-green-300" : "bg-green-400"
        } px-8 p-1 rounded`}
        onClick={handleAddToCart}
      >
        {gallery.price} | {isAdded ? "Added" : "Add to cart"}
      </button>
      <span onClick={toggleFavorite} className="p-2 rounded-md cursor-pointer border">
        {isFavorite ? <FaHeart className="text-green-500" /> : <FaRegHeart />}
      </span>
    </div>
  );
}

export default AddButton;





