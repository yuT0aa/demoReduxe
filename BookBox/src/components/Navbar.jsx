import React, { useContext } from "react";
import { BookContext } from "../features/Store";
import { ImBooks } from "react-icons/im";
import { FcLike } from "react-icons/fc";
import { CiViewList } from "react-icons/ci";

const Navbar=()=>{
    const{state,dispatch}=useContext(BookContext);

    const handleFilter=(filterType)=>{
        dispatch({type:"FILTER",payload:filterType});
    };

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <ImBooks />BookBox
        </a>
        <div className="navbar-nav d-flex flex-row gap-2">
          <button
            onClick={() => handleFilter("ALL")}
            className={`btn ${state.categoryFilter === "ALL" ? "btn-light" : "btn-outline-light"}`}
          >
            Tous les livres
          </button>
          <button
            onClick={() => handleFilter("LIKED")}
            className={`btn ${state.categoryFilter === "LIKED" ? "btn-light" : "btn-outline-light"}`}
          >
            <FcLike />Favoris 
          </button>
          <button
            onClick={() => handleFilter("READING_LIST")}
            className={`btn ${state.categoryFilter === "READING_LIST" ? "btn-light" : "btn-outline-light"}`}
          >
            <CiViewList />Ma liste de lecture
          </button>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;