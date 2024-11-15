/* eslint-disable react/prop-types */
import { IoSearchOutline } from "react-icons/io5";

import { useState } from "react";
import SearchCart from "../../conponents/SearchCart";

export default function SearchItem({ data }) {
    const [showModal, setShowModal] = useState(false); 

    return (
        <div className="relative py-5">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <IoSearchOutline />
            </span>
            <input
                type="text"
                placeholder="Quick search..."
                className="w-44 pl-10 border border-gray-300 p-2 text-gray-700 rounded-md"
                onClick={() => setShowModal(true)}
            />
            {showModal && (
                <SearchCart 
                    onClose={() => setShowModal(false)} 
                    data={data} 
                />
            )}
        </div>
    );
}
