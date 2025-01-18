import { IoSearchSharp } from "react-icons/io5";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

const SearchBox = () => {
  // ============= Context ================
  const { searchQuery, setSearchQuery } = useContext(BookContext);

  // ============= Rendering ================
  return (
    <div className="flex items-center gap-2 mb-4 p-2 border rounded-lg shadow-sm">
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search title"
        className="flex-1 p-2 border-none outline-none"
      />
      <button className="p-2 bg-blue-500 text-white rounded-lg">
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBox;
