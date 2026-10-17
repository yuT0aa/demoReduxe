import React, { useContext } from "react";
import { BookContext } from "../features/Store";
import { AiFillLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";

const BookCard =({book})=>{
    const{dispatch}=useContext(BookContext)

    return(
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img
                        src={book.cover}
                        className="img-fluid rounded-start w-100"
                        alt={book.title}
                        style={{ maxHeight: "220px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text mb-1">
                        <strong>Auteur :</strong> {book.author}
                        </p>
                        <p className="card-text mb-1">
                        <strong>Année :</strong> {book.year} | <strong>Genre :</strong> {book.genre}
                        </p>
                        
                        <div className="mt-3 d-flex flex-wrap gap-2">
                            <button
                                onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: book.id })}
                                className={`btn btn-sm ${book.liked ? "btn-danger" : "btn-outline-danger"}`}
                            >
                                {book.liked ? <AiFillLike /> : <AiTwotoneLike />}
                            </button>
                            {book.inReadingList ? (
                                <button
                                onClick={() => dispatch({ type: "REMOVE_FROM_READING_LIST", payload: book.id })}
                                className="btn btn-sm btn-warning"
                                >
                                Retirer de la liste
                                </button>
                            ) : (
                                <button
                                onClick={() => dispatch({ type: "ADD_TO_READING_LIST", payload: book.id })}
                                className="btn btn-sm btn-outline-primary"
                                >
                                Ajouter à la liste
                                </button>
                            )}
                            <button
                                onClick={() => dispatch({ type: "REMOVE_BOOK", payload: book.id })}
                                className="btn btn-sm btn-outline-dark"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;