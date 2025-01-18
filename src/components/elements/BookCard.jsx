import { AiFillHeart } from "react-icons/ai";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

import PropTypes from "prop-types";

const BookCard = ({ title, author, image, language, pages }) => {
  // ============== Context ================
  const { booksList, toggleLike } = useContext(BookContext);
  const book = booksList.find((b) => b.title === title);

  // ============== Rendering ================
  return (
    <div className="bg-gray-500 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-100 flex flex-col w-[300px] h-[300px]">
      <img
        src={image}
        alt={title}
        className="w-full h-1/2 object-cover"
        style={{ flexShrink: 0 }}
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-800">{author}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button
        onClick={() => toggleLike(title)}
        className="flex items-center justify-center p-2 bg-gray-600 transition duration-200"
      >
        <AiFillHeart
          size={24}
          color={book.like ? "red" : "#e0e0e0"}
          className="transition duration-200"
        />
      </button>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
};

export default BookCard;
