import { createStore } from "redux";

import "./App.scss";
import reducer from "./Components/Reducer.js";
import Router from "./Router";

export const store = createStore(reducer);
// const persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
