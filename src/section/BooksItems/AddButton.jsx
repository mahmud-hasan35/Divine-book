// AddButton.js
import { FaRegHeart } from "react-icons/fa6";
import AddCartModal from "./AddCartModal";
import { useState, useEffect } from "react";

function AddButton({ gallery, onFavoriteToggle }) {
    const [showModal, setShowModal] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        onFavoriteToggle(gallery, !isFavorite);
    };

    return (
        <div className="flex items-center justify-between mt-2">
            <button 
                className="bg-green-500 px-6 p-1 rounded"
                onClick={() => setShowModal(true)} 
            >
                {gallery.price} | Add to cart
            </button>

            {showModal && <AddCartModal onClose={() => setShowModal(false)} />}

            <span 
                onClick={handleFavoriteClick} 
                className="p-2 rounded-md cursor-pointer border border-green-400"
            >
                <FaRegHeart className={isFavorite ? "text-green-600" : "text-gray-400"} />
            </span>
        </div>
    );
}

export default AddButton;












// import { FaRegHeart } from "react-icons/fa6";
// import AddCartModal from "./AddCartModal";
// import { useState } from "react";

// function AddButton({ gallery }) {
//     const [showModal, setShowModal] = useState(false);
//     const [isFavorite, setIsFavorite] = useState(false);

//     return (
//         <div className="flex items-center justify-between mt-2">
//             <button 
//                 className="bg-green-500 px-6 p-1 rounded"
//                 onClick={() => setShowModal(true)} 
//             >
//                 {gallery.price} | Add to cart
//             </button>

//             {showModal && <AddCartModal onClose={() => setShowModal(false)} />}

//             <span 
//                 onClick={() => setIsFavorite(!isFavorite)} 
//                 className="p-2 rounded-md cursor-pointer border border-green-400"
//             >
//                 <FaRegHeart className={isFavorite ? "bg-green-300" : ""} />
//             </span>
//         </div>
//     );
// }

// export default AddButton;
