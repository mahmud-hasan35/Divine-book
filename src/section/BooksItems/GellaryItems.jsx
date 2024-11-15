// /* eslint-disable react/prop-types */



import { IoMdStar } from "react-icons/io";
import { getImage } from "../../helper/getImage";
import AddButton from "./AddButton";
import { useState } from "react";
import AddCartModal from "./AddCartModal";

function GellaryItems({ gallery }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="rounded-lg shadow-lg border p-2 w-full">
                <img 
                    src={getImage(`../assets/image/${gallery.image}`)} 
                    alt="Image" 
                    className="w-full object-cover cursor-pointer" 
                    onClick={() => setShowModal(true)} 
                />
                <p className="text-lg">{gallery.name}</p>
                <span className="text-sm text-gray-500">{gallery.author}</span>

                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            <IoMdStar className={index < gallery.rating ? "text-yellow-500" : "text-gray-300"} />
                        </span>
                    ))}
                </div>

                <AddButton gallery={gallery} />
            </div>

            {showModal && <AddCartModal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default GellaryItems;























// import { IoMdStar } from "react-icons/io";
// import { getImage } from "../../helper/getImage";
// import AddButton from "./AddButton";
// import AddCartModal from "./AddCartModal";
// import { useState } from "react";

// function GellaryItems({ gallery }) {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <>
//             <div className="rounded-lg shadow-lg border p-2">
//                 <img 
//                     src={getImage(`../assets/image/${gallery.image}`)} 
//                     alt="Image" 
//                     className="w-64 object-cover cursor-pointer" 
//                     onClick={() => setShowModal(true)} 
//                 />
//                 <p className="text-lg">{gallery.name}</p>
//                 <span className="text-sm text-gray-500">{gallery.author}</span>

//                 <div className="flex">
//                     {[...Array(5)].map((_, index) => (
//                         <span key={index}>
//                             <IoMdStar className={index < gallery.rating ? "text-yellow-500" : "text-gray-300"} />
//                         </span>
//                     ))}
//                 </div>

//                 <AddButton gallery={gallery} />
//             </div>

//             {showModal && <AddCartModal onClose={() => setShowModal(false)} />}
//         </>
//     );
// }

// export default GellaryItems;
