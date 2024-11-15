/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";

function RightSidebar({ data, onSortByPrice, onSortByRating, onSortByName }) {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <div className="md:hidden p-2">
                <button onClick={toggleSidebar} className="text-lg">
                    <FaListUl />
                </button>
            </div>

            {(isSidebarVisible || window.innerWidth >= 768) && (
                <div className="py-5 border-l pl-6 sm:pl-4 md:pl-12 h-[90vh] sticky top-[66px] sm:w-48 md:w-60">
                    <span className="font-semibold">Filter On Page</span>
                    <ul className="mt-4 space-y-2">
                        <li
                            onClick={onSortByName}
                            className="flex items-center rounded-md cursor-pointer"
                        >
                            <FaAngleRight />
                            <span className="ml-2">By Name</span>
                        </li>
                        <li
                            onClick={onSortByRating}
                            className="flex items-center rounded-md cursor-pointer"
                        >
                            <FaAngleRight />
                            <span className="ml-2">By Rating</span>
                        </li>
                        <li
                            onClick={onSortByPrice}
                            className="flex items-center rounded-md cursor-pointer"
                        >
                            <FaAngleRight />
                            <span className="ml-2">By Price</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default RightSidebar;


























// import { FaAngleRight } from "react-icons/fa";
// import { FaListUl } from "react-icons/fa6";

// function RightSidebar({ data, onSortByPrice,onSortByRating,onSortByName }) {
//     return (
//         <>
//         <div className="py-5 border-l pl-12 h-[91vh] sticky top-[65px] hidden md:block">
//             <span className="font-semibold">Filter On Page</span>
//             <ul>
//                 <li  onClick={onSortByName} className="flex items-center rounded-md mt-4 cursor-pointer">
//                     <span><FaAngleRight /></span>
//                     <span className="ml-2">By name</span>
//                 </li>
//                 <li onClick={onSortByRating} className="flex items-center rounded-md mt-4 cursor-pointer">
//                     <span><FaAngleRight /></span>
//                     <span onClick={onSortByRating} className="ml-2">By Rating</span>
//                 </li>
//                 <li onClick={onSortByPrice} className="flex items-center rounded-md mt-4 cursor-pointer">
//                     <span><FaAngleRight /></span>
//                     <span className="ml-2">By price</span>
//                 </li>
//             </ul>
//         </div>
//         <div className="p-4">
//             <span className="text-xl">
//             <FaListUl /></span>
//         </div>
//         </>
//     );
// }

// export default RightSidebar;






















// import { FaAngleRight } from "react-icons/fa";

// function RightSidebar({data}) {

//     console.log(data);
    

//     return (
//         <div className="py-5 border-l pl-12  h-[91vh] pr-5 sticky top-[65px]">

//             <span className="font-semibold">Filter On Page</span>
//             <ul>
//                 <li className="flex items-center rounded-md mt-4">
//                     <span><FaAngleRight /></span>
//                     <button className="ml-2">By name</button>
//                 </li>
//                 <li className="flex items-center  rounded-md mt-4">
//                     <span><FaAngleRight /></span>
//                     <button className="ml-2">By Rating</button>
//                 </li>
//                 <li className="flex items-center rounded-md mt-4">
//                     <span ><FaAngleRight /></span>
//                     {/* this is my by price button  */}
//                     <button className="ml-2">By price</button>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default RightSidebar