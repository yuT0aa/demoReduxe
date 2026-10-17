import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../features/Store";
import { AiFillLike } from "react-icons/ai";

const LikedBooks = () => {
  const { state } = useContext(BookContext);
  const likedBooks = state.books.filter((book) => book.liked);

  return (
    <div>
      <h2 className="mb-4"><AiFillLike />Livres favoris</h2>
      {likedBooks.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Aucun livre favori pour le moment.
        </div>
      ) : (
        <div className="row">
          {likedBooks.map((book) => (
            <div key={book.id} className="col-md-6">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedBooks;