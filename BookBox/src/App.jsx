import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import LikedBooks from "./components/Liked Books";
import InReadingList from "./components/inReadingList";
import { BookContext } from "./features/Store";

function App() {
  const { state } = useContext(BookContext);
  const { categoryFilter } = state;

  return (
    <div>
      <Navbar />
      <div className="container">
        {categoryFilter === "ALL" && <Books />}
        {categoryFilter === "LIKED" && <LikedBooks />}
        {categoryFilter === "READING_LIST" && <InReadingList />}
      </div>
    </div>
  );
}

export default App;