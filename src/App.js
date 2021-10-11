import { useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import { TOGGLE_BASKET } from "./actions";
import Navigation from "./Navigation";

const INITIAL_STATE = { opened: false };

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_BASKET:
      return { opened: !state.opened };

    default:
      return state;
  }
}

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
