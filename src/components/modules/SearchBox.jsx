import { IoSearchSharp } from "react-icons/io5";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

const SearchBox = () => {
  // ============= Context ================
  const { searchQuery, setSearchQuery } = useContext(BookContext);

  // ============= Space Handler ================
  const keyDownHandler = (event) => {
    if (event.key === " ") event.preventDefault();
  };

  // ============= Rendering ================
  return (
    <div className="flex items-center gap-2 mb-4 p-2 border rounded-lg shadow-sm">
      <input
        type="text"
        value={searchQuery}
        placeholder="Search title"
        onKeyDown={keyDownHandler}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="flex-1 p-2 border-none outline-none"
      />
      <button className="p-2 bg-blue-500 text-white rounded-lg">
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBox;
