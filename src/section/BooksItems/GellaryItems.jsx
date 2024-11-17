/* eslint-disable react/prop-types */


import { useState } from "react";
import AddCartModal from "./AddCartModal";
import AddButton from "./AddButton";
import { IoMdStar } from "react-icons/io";
import { getImage } from "../../helper/getImage";

function GellaryItems({ gallery, onAdd, onFavorite }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="rounded-lg shadow-lg border p-2 w-full">
        <img
          src={gallery.image}
          alt="Image"
          className="w-full object-cover cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <p className="text-lg">{gallery.name}</p>
        <span className="text-sm text-gray-500">{gallery.author}</span>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <IoMdStar
              key={index}
              className={index < gallery.rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <AddButton gallery={gallery} onAdd={onAdd} onFavorite={onFavorite} />
      </div>
      {showModal && <AddCartModal
      onClose={() => setShowModal(false)} 
       gallery={gallery} 
       onAdd={onAdd}
       onFavorite={onFavorite} 
       />}
    </>
  );
}

export default GellaryItems;






