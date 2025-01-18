import { BookContext } from "../../context/BookContext";
import { useContext } from "react";
import { v4 } from "uuid";

import FavoriteBooks from "./FavoriteBooks";
import SearchBox from "./SearchBox";
import BookCard from "../elements/BookCard";

const Books = () => {
  // =============== Context =============
  const { filteredBooks, likedBooks } = useContext(BookContext);

  // =============== Rendering =============
  return (
    <>
      <SearchBox />
      <div className="flex gap-8 p-4">
        {/* Book List Section */}
        <div className="min-h-[100vh] flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={v4()}
              className="flex-shrink-0 transform transition-transform hover:scale-105"
            >
              <BookCard {...book} />
            </div>
          ))}
        </div>

        {/* Favorites Section */}
        {!!likedBooks.length && (
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Favorites</h4>
            {likedBooks.map((like) => (
              <div key={v4()} className="mb-4">
                <FavoriteBooks {...like} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
