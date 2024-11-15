

import { FaRegHeart } from "react-icons/fa6";
import imageOne from '../../assets/image/5.jpg';
import { useState } from "react";

function AddCartModal({onClose}) {
  const [isFavorite,setIsFavorite] = useState(false)


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-7/12 h-2/4 flex shadow-lg rounded-lg overflow-hidden relative">
        <div className="flex justify-between">
          <div className="p-6 mt-5">
            <h2 className="text-3xl font-bold text-gray-600 mb-5">Prenlter Prestion Pssquik</h2>
            <span>Comedy/Drama</span>
            <p className="mt-5 w-full text-gray-600">
              When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist's journey, readers are reminded of the importance of reaching out and finding support in others.
            </p>
            <div className="flex items-center mt-10">
              <button className="bg-green-500 p-2 px-6 rounded">$140 | Add to cart</button>
              <span onClick={() => setIsFavorite(!isFavorite)} className="ml-5 p-2 border rounded cursor-pointer"><FaRegHeart className={isFavorite ? "bg-green-500": ''} /></span>
              <button onClick={onClose} className="bg-green-500 p-2 px-6 ml-5 rounded">Close</button>
            </div>
          </div>
          <div className="w-8/12 h-full">
            <img src={imageOne} 
              alt="Popup" 
              className="max-w-screen h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCartModal;


