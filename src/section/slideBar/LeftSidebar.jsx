/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiFire } from "react-icons/hi";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { MdOutlineUpcoming } from "react-icons/md";
import { FaRegHeart, FaBars } from "react-icons/fa";
import SearchItem from "./SearchItem";

function LeftSidebar({ data, setFilter }) {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setFilter(filter); 
    };

    return (
        <>
            <div className="md:hidden p-2">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-lg">
                    <FaBars />
                </button>
            </div>

            <div
                className={`border-r h-[90vh] pr-4 md:pr-5 sticky top-[66px] bg-white 
                    ${isSidebarOpen ? "block" : "hidden"} 
                    sm:w-48 md:w-46 ml-2 lg:w-46 xl:w-46 md:block`} 
            >
                <SearchItem data={data} />

                <div>
                    <ul className="mt-4 space-y-2">
                        <li
                            onClick={() => handleFilterClick(null)}
                            className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
                                selectedFilter === null ? 'bg-green-600 text-white' : ''
                            }`}
                        >
                            <HiFire />
                            <span className="ml-2">Trending</span>
                        </li>
                        <li
                            onClick={() => handleFilterClick('new_releases')}
                            className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
                                selectedFilter === 'new_releases' ? 'bg-green-600 text-white' : ''
                            }`}
                        >
                            <VscFileSymlinkDirectory />
                            <span className="ml-2">New Releases</span>
                        </li>
                        <li
                            onClick={() => handleFilterClick('coming_soon')}
                            className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
                                selectedFilter === 'coming_soon' ? 'bg-green-600 text-white' : ''
                            }`}
                        >
                            <MdOutlineUpcoming />
                            <span className="ml-2">Coming Soon</span>
                        </li>
                        <li
                            onClick={() => handleFilterClick('favorites')}
                            className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
                                selectedFilter === 'favorites' ? 'bg-green-600 text-white' : ''
                            }`}
                        >
                            <FaRegHeart />
                            <span className="ml-2">Favorites</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LeftSidebar;





























// import { useState } from "react";
// import { HiFire } from "react-icons/hi";
// import { VscFileSymlinkDirectory } from "react-icons/vsc";
// import { MdOutlineUpcoming } from "react-icons/md";
// import { FaRegHeart, FaBars } from "react-icons/fa";
// import SearchItem from "./SearchItem";

// function LeftSidebar({ data, setFilter }) {
//     const [selectedFilter, setSelectedFilter] = useState(null);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleFilterClick = (filter) => {
//         setSelectedFilter(filter);
//         setFilter(filter); 
//     };

//     return (
//         <>
//             {/* Toggle button for small screens */}
//             <div className="md:hidden p-2">
//                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-lg">
//                     <FaBars />
//                 </button>
//             </div>

//             {/* Sidebar - wider for larger screens, narrower for smaller screens */}
//             <div
//                 className={`border-r h-[91vh] pr-4 md:pr-5 sticky top-[65px] bg-white ${
//                     isSidebarOpen ? "block" : "hidden"
//                 } sm:w-48 md:w-60`}
//             >
//                 <SearchItem data={data} />

//                 <div>
//                     <ul className="mt-4 space-y-2">
//                         <li
//                             onClick={() => handleFilterClick(null)}
//                             className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
//                                 selectedFilter === null ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <HiFire />
//                             <span className="ml-2">Trending</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('new_releases')}
//                             className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
//                                 selectedFilter === 'new_releases' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <VscFileSymlinkDirectory />
//                             <span className="ml-2">New Releases</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('coming_soon')}
//                             className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
//                                 selectedFilter === 'coming_soon' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <MdOutlineUpcoming />
//                             <span className="ml-2">Coming Soon</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('favorites')}
//                             className={`cursor-pointer flex items-center ml-2 md:ml-3 p-2 rounded-md ${
//                                 selectedFilter === 'favorites' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <FaRegHeart />
//                             <span className="ml-2">Favorites</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default LeftSidebar;




















// import { useState } from "react";
// import { HiFire } from "react-icons/hi";
// import { VscFileSymlinkDirectory } from "react-icons/vsc";
// import { MdOutlineUpcoming } from "react-icons/md";
// import { FaRegHeart, FaBars } from "react-icons/fa";
// import SearchItem from "./SearchItem";

// function LeftSidebar({ data, setFilter }) {
//     const [selectedFilter, setSelectedFilter] = useState(null);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

//     const handleFilterClick = (filter) => {
//         setSelectedFilter(filter);
//         setFilter(filter); 
//     };

//     return (
//         <>
            
//             <div className="md:hidden p-3">
//                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
//                     <FaBars />
//                 </button>
//             </div>

//             <div className={`border-r h-[91vh] pr-5 sticky top-[65px] md: ml-3 bg-white ${isSidebarOpen ? "block" : "hidden"} md:block`}>
//                 <SearchItem data={data} />

//                 <div>
//                     <ul className="mt-4">
//                         <li
//                             onClick={() => handleFilterClick(null)}
//                             className={`cursor-pointer flex items-center ml-3 p-1 w-40 rounded-md mt-4 ${
//                                 selectedFilter === null ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <HiFire />
//                             <span className="ml-3">Trending</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('new_releases')}
//                             className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                                 selectedFilter === 'new_releases' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <VscFileSymlinkDirectory />
//                             <span className="ml-3">New Releases</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('coming_soon')}
//                             className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                                 selectedFilter === 'coming_soon' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <MdOutlineUpcoming />
//                             <span className="ml-3">Coming Soon</span>
//                         </li>
//                         <li
//                             onClick={() => handleFilterClick('favorites')}
//                             className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                                 selectedFilter === 'favorites' ? 'bg-green-600 text-white' : ''
//                             }`}
//                         >
//                             <FaRegHeart />
//                             <span className="ml-3">Favorites</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default LeftSidebar;























// import { useState } from "react";
// import { HiFire } from "react-icons/hi";
// import { VscFileSymlinkDirectory } from "react-icons/vsc";
// import { MdOutlineUpcoming } from "react-icons/md";
// import { FaRegHeart,FaBars } from "react-icons/fa";
// import SearchItem from "./SearchItem";


// function LeftSidebar({ data, setFilter }) {
//     const [selectedFilter, setSelectedFilter] = useState(null);

//     const handleFilterClick = (filter) => {
//         setSelectedFilter(filter);
//         setFilter(filter); 
//     };

//     return (
//         <>
//         <div className="border-r h-[91vh] pr-5 sticky top-[65px] hidden md:show">
//             <SearchItem data={data} />

//             <div>
//                 <ul className="mt-4">
//                     <li
//                         onClick={() => handleFilterClick(null)} 
//                         className={`cursor-pointer flex items-center ml-3 p-1 w-40 rounded-md mt-4 ${
//                             selectedFilter === null ? 'bg-green-600 text-white' : ''
//                         }`}
//                     >
//                         <span><HiFire /></span>
//                         <span className="ml-3">Trending</span>
//                     </li>
//                     <li
//                         onClick={() => handleFilterClick('new_releases')}
//                         className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                             selectedFilter === 'new_releases' ? 'bg-green-600 text-white' : ''
//                         }`}
//                     >
//                         <span><VscFileSymlinkDirectory /></span>
//                         <span className="ml-3">New Releases</span>
//                     </li>
//                     <li
//                         onClick={() => handleFilterClick('coming_soon')}
//                         className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                             selectedFilter === 'coming_soon' ? 'bg-green-600 text-white' : ''
//                         }`}
//                     >
//                         <span><MdOutlineUpcoming /></span>
//                         <span className="ml-3">Coming Soon</span>
//                     </li>
//                     <li
//                         onClick={() => handleFilterClick('favorites')}
//                         className={`cursor-pointer flex items-center ml-3 mt-4 p-1 w-40 rounded-md ${
//                             selectedFilter === 'favorites' ? 'bg-green-600 text-white' : ''
//                         }`}
//                     >
//                         <span><FaRegHeart /></span>
//                         <span className="ml-3">Favorites</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         <div className=" hidden p-3 md: show">
//             <span className="text-xl"><FaBars /></span>
//             </div>
//         </>
        
//     );
// }

// export default LeftSidebar;





