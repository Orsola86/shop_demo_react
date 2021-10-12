import { useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import books from "./mocks/books";
import { TOGGLE_BASKET } from "./actions";
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
    books,
    categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_BASKET:
      return {
        ...state,
        basket: { ...state.basket, opened: !state.basket.opened },
      };

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
