import { BookContext } from "../../context/BookContext";
import { useContext } from "react";
import { v4 } from "uuid";

import FavoriteBooks from "./FavoriteBooks";
import BookCard from "../elements/BookCard";

const Books = () => {
  // =============== Context ============
  const { booksList, likedBooks } = useContext(BookContext);

  // =============== Rendering ============
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 flex-wrap">
        {booksList.map((book) => (
          <div
            key={v4()}
            className="flex-shrink-0 transform transition-transform hover:scale-105"
          >
            <BookCard {...book} />
          </div>
        ))}
      </div>
      {!!likedBooks.length && (
        <div>
          <FavoriteBooks />
        </div>
      )}
    </div>
  );
};

export default Books;
