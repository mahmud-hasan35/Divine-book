/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function RightSidebar({ onSortByPrice, onSortByRating, onSortByName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-lg"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`border-l h-[90vh] pl-4 pr-6 md:pl-5 sticky top-[66px] 
        ${isSidebarOpen ? "block" : "hidden"} 
        sm:w-48 md:w-46 ml-auto lg:w-46 xl:w-46 md:block`}
      >
        <span className="font-semibold block mb-4">Filter On Page</span>
        <ul className="space-y-2">
          <li
            onClick={onSortByName}
            className="cursor-pointer flex items-center p-2 rounded-md hover:bg-green-100 dark:hover:bg-lime-400"
          >
            <FaAngleRight />
            <span className="ml-2 truncate">By Name</span>
          </li>
          <li
            onClick={onSortByRating}
            className="cursor-pointer flex items-center p-2 rounded-md hover:bg-green-100 dark:hover:bg-lime-400 "
          >
            <FaAngleRight />
            <span className="ml-2 truncate">By Rating</span>
          </li>
          <li
            onClick={onSortByPrice}
            className="cursor-pointer flex items-center p-2 rounded-md hover:bg-green-100 dark:hover:bg-lime-400"
          >
            <FaAngleRight />
            <span className="ml-2 truncate">By Price</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RightSidebar;
