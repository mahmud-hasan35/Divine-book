/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import BookHeader from "./bookHeader/BookHeader";
import LeftSidebar from "./slideBar/LeftSidebar";
import BookGallery from "./BooksItems/BookGallery";
import RightSidebar from "./slideBar/RightSidebar";

function BookLibrary({ data, onAdd, cartItems, setCartItems }) {
  const [filter, setFilter] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const filteredData = filter === "favorites"
      ? favorites
      : filter
      ? data.filter((item) => item.status?.toLowerCase() === filter.toLowerCase())
      : data;
    setSortedData(filteredData);
  }, [filter, data, favorites]);

  const handleSortByPrice = () => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

  const handleSortByRating = () => {
    const sorted = [...sortedData].sort((a, b) => b.rating - a.rating);
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
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleFavoriteToggle = (item, isFavorite) => {
    setFavorites((prev) =>
      isFavorite
        ? [...prev, item] 
        : prev.filter((fav) => fav.id !== item.id) 
    );
  };

  return (
    <>
      <section className="w-full h-screen overflow-hidden overflow-y-scroll no-scrollbar border-b">
        <div className="sticky top-0 z-10 bg-white">
          <BookHeader 
            data={data} 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            cartItems={cartItems} 
            setCartItems={setCartItems}
          />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="w-1/8">
              <LeftSidebar setFilter={setFilter} data={data} />
            </div>
            <div className="flex-grow">
              <BookGallery
                data={sortedData}
                onAdd={onAdd}
                onFavorite={handleFavoriteToggle}
              />
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
        <span className="text-lg dark:text-white">Copyright 2024 | Mahmud Hasan</span>
      </div>
    </>
  );
}

export default BookLibrary;





