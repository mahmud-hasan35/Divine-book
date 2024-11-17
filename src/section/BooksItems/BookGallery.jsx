/* eslint-disable react/prop-types */

import GellaryItems from "./GellaryItems";

function BookGallery({ data, onAdd, onFavorite }) {
  return (
    <div className="py-2 flex justify-center">
      <div className="p-5 w-full max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <GellaryItems
              key={item.id}
              gallery={item}
              onAdd={onAdd}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookGallery;




