import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

import PropTypes from "prop-types";

const BookCard = ({ title, author, image, language, pages }) => {
  // ============== State ================
  const [like, setLike] = useState(false);

  // ============== Like Handler ================
  const likeHandlder = () => {
    setLike((like) => !like);
  };

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
        onClick={likeHandlder}
        className="flex items-center justify-center p-2 bg-gray-600 transition duration-200"
      >
        <AiFillHeart
          size={24}
          color={like ? "red" : "#e0e0e0"}
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
  pages: PropTypes.string.isRequired,
};

export default BookCard;
