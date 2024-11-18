/* eslint-disable react/prop-types */


import { GrClose } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";




function SearchCart({ onClose, data }) {
    const [searchQuery, setSearchQuery] = useState(""); 
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 mt-1">
            <div className="bg-white dark:bg-slate-900 dark:text-gray-200 w-6/12 flex flex-col shadow-lg rounded-lg overflow-hidden relative py-2">
                <div className="w-full border-b-2 border-gray-300 flex justify-between">
                    <div className="relative py-5 w-full">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <IoSearchOutline className="text-2xl" />
                        </span>
                        <input
                            type="text"
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            className="ml-4 px-4 text-2xl w-full pl-10 outline-none p-2 text-gray-700 rounded-md dark:bg-slate-900"
                            placeholder="Type your favorite book name here..."
                        />
                    </div>
                    
                    <GrClose onClick={onClose} className="m-4 text-2xl cursor-pointer" />
                </div>

                {filteredData.length === 0 ? (
                    <span className="text-center p-16 text-2xl">No Item Found</span> 
                ) : (
                    <div className="space-y-5 mt-5 overflow-y-auto max-h-96"> 
                        {filteredData.map((item) => (
                            <div key={item.id} className="flex p-4 rounded">
                                <img
                                    className="w-20 h-20 hover:bg-lime-100 transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="ml-5">
                                    <span className="text-lg">{item.name}</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                    <span className="font-bold">BDT: {item.price} Tk</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchCart;


