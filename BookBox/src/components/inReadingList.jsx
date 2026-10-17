import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../features/Store";
import { CiViewList } from "react-icons/ci";

const InReadingList = () => {
  const { state } = useContext(BookContext);
  const readingListBooks = state.books.filter((book) => book.inReadingList);

  return (
    <div>
      <h2 className="mb-4"><CiViewList />Ma liste de lecture</h2>
      {readingListBooks.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Aucun livre dans votre liste de lecture.
        </div>
      ) : (
        <div className="row">
          {readingListBooks.map((book) => (
            <div key={book.id} className="col-md-6">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InReadingList;