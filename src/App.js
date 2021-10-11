import { useState, useEffect } from "react";
import Basket from "./Basket";
import Books from "./Books";

import Navigation from "./Navigation";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Books />
      <Basket />
    </div>
  );
}

export default App;
