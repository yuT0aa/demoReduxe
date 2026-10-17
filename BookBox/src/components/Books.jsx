import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../features/Store";

const Books = () => {
  const { state } = useContext(BookContext);
  const books = state.books;

  return (
    <div>
      <h2 className="mb-4">Tous les livres</h2>
      {books.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Aucun livre disponible.
        </div>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-md-6">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;