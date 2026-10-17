import React, { createContext, useReducer } from "react";
import { bookReducer, initialState } from "./BookReducer";

export const BookContext=createContext();

export const BookProvider =({Children})=>{
    const [state,dispatch]=useReducer(bookReducer,initialState);

    return(
        <BookContext.Provider value={{state,dispatch}}>
            {Children}
        </BookContext.Provider>
    );
};