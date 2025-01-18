import PropTypes from "prop-types";

const FavoriteBooks = ({ image, title }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <h5 className="text-lg font-medium text-gray-800">{title}</h5>
    </div>
  );
};

FavoriteBooks.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FavoriteBooks;
