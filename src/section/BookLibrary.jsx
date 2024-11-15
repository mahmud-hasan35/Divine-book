/* eslint-disable no-undef */
/* eslint-disable react/prop-types */


import { useState, useEffect } from "react";
import BookHeader from "./bookHeader/BookHeader";
import LeftSidebar from "./slideBar/LeftSidebar";
import BookGallery from "./BooksItems/BookGallery";
import RightSidebar from "./slideBar/RightSidebar";

function BookLibrary({ data }) {
  const [filter, setFilter] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const filteredData = filter
      ? data.filter(item => item.status?.toLowerCase() === filter.toLowerCase())
      : data;
    setSortedData(filteredData);
  }, [filter, data]);

  const handleSortByPrice = () => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

  const handleSortByRating = () => {
    const sorted = [...sortedData].sort((a, b) => a.rating - b.rating);
    setSortedData(sorted);
  };

  const handleSortByName = () => {
    const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <section className="w-full h-screen overflow-hidden overflow-y-scroll no-scrollbar border-b">
        <div className="sticky top-0 z-10 bg-white">
          <BookHeader data={data} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>

        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="w-1/8">
              <LeftSidebar setFilter={setFilter} data={data} />
            </div>

            <div className="flex-grow">
              <BookGallery data={sortedData} />
            </div>

            <div className="w-1/6">
              <RightSidebar 
                onSortByPrice={handleSortByPrice} 
                onSortByRating={handleSortByRating}
                onSortByName={handleSortByName}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="text-center py-3">
        <span className="text-lg dark:text-white">copyright 2024 | Mahmud hasan</span>
      </div>
    </>
  );
}

export default BookLibrary;




