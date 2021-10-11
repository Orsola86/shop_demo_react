import { useReducer } from "react";
import Basket from "./Basket";
import Books from "./Books";
import { CLOSE_BAKET } from "./actions";
import Navigation from "./Navigation";

const INITIAL_STATE = { opened: false };
console.log(INITIAL_STATE);

function reducer(state, action) {
  switch (action.type) {
    case CLOSE_BAKET:
      return { opened: !state.opened };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div className="App">
      <Navigation dispatch={dispatch} />
      <Books />
      <Basket state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
