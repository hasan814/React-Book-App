import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { books } from "../services/data";

import PropTypes from "prop-types";

const BookProvider = ({ children }) => {
  // ============= State ============
  const [booksList, setBooksList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ============= Effect ============
  useEffect(() => {
    const bookWithLikes = books.map((book) => ({ ...book, like: false }));
    setBooksList(bookWithLikes);
  }, []);

  // ============= Like Handler ============
  const toggleLike = (title) => {
    setBooksList((prevBooksList) =>
      prevBooksList.map((book) =>
        book.title === title ? { ...book, like: !book.like } : book
      )
    );
  };
  // ============= Filter Books ============
  const filteredBooks = booksList.filter((book) =>
    book.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );

  // ============= Like Books ============
  const likedBooks = booksList.filter((book) => book.like);

  // ============= Rendering ============
  return (
    <BookContext.Provider
      value={{
        booksList,
        toggleLike,
        likedBooks,
        searchQuery,
        filteredBooks,
        setSearchQuery,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BookProvider;
