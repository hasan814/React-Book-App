import { books } from "../../services/data";
import { v4 } from "uuid";

import BookCard from "../elements/BookCard";

const Books = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 flex-wrap">
        {books.map((book) => (
          <div
            key={v4()}
            className="flex-shrink-0 transform transition-transform hover:scale-105"
          >
            <BookCard {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
