export const initialState={
    books: [
    {
      id: 1,
      title: "L'Étranger",
      author: "Albert Camus",
      year: 1942,
      genre: "Roman",
      cover: "/images/covers/letranger.jpg",
      liked: false,
      inReadingList: false,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Science-Fiction",
      cover: "/images/covers/1984.jpg",
      liked: true,
      inReadingList: true,
    },
    {
      id: 3,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      year: 1943,
      genre: "Conte",
      cover: "/images/covers/lepetitprince.jpg",
      liked: false,
      inReadingList: true,
    },
  ],
  categoryFilter:"ALL",
};

export const bookReducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE_LIKE":
            return{
                ...state,
                books:state.books.map((book)=>
                  book.id===action.payload
                    ?{...book,liked:!book.liked}
                    :book),
            };
        
        case "ADD_TO_READING_LIST":
            return{
                ...state,
                books:state.books.map((book)=>
                  book.id===action.payload
                    ?{...book,inReadingList:true}
                    :book),
            };

        case "REMOVE_FROM_READING_LIST":
            return{
                ...state,
                books:state.books.map((book)=>
                  book.id===action.payload
                    ?{...book,inReadingList:false}
                    :book),
            };

        case "REMOVE_BOOK":
            return{
                ...state,
                books:state.books.filter((book)=>book.id!==action.payload),
            };

        case "FILTER":
            return{
                ...state,
                categoryFilter:action.payload,
            };
    }
};