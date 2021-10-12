import { useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import books from "./mocks/books";
import { SELECTED_FILTER, TOGGLE_BASKET, SEARCH_BOOK } from "./actions";
import Navigation from "./Navigation";

const INITIAL_STATE = {
  basket: {
    items: [],
    totalPrice: 0,
    quantity: 0,
    opened: false,
  },
  filters: {
    word: "",
    category: "All",
  },
  books: {
    categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
    filteredBooks: books,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_BASKET:
      return {
        ...state,
        basket: { ...state.basket, opened: !state.basket.opened },
      };
    case SELECTED_FILTER:
    case SEARCH_BOOK:
      console.log(action.payload);
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload.filter,
          word: action.payload.word,
        },
        books: {
          ...state.books,
          filteredBooks:
            action.payload.filter === "All"
              ? books.filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(action.payload.word.toLowerCase())
                )
              : books.filter(
                  (book) =>
                    book.category === action.payload.filter &&
                    book.title
                      .toLowerCase()
                      .includes(action.payload.word.toLowerCase())
                ),
        },
      };

    // case SEARCH_BOOK:
    //   return {
    //     ...state,
    //     filters: { ...state.filters, word: action.payload },
    //     books: {
    //       ...state.books,
    //       filteredBooks: books.filter((book) =>
    //         book.title.toUpperCase().includes(action.payload.toUpperCase())
    //       ),
    //     },
    //   };

    default:
      return state;
  }
}

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  //console.log(state);

  return (
    <div className="App">
      <AppContext.Provider value={[state, dispatch]}>
        <Navigation />
        <Books />
        <Basket />
      </AppContext.Provider>
    </div>
  );
}

export default App;
