import { createStore } from "redux";
import "./App.scss";
import reducer from "./Components/Reducer";
import Router from "./Router";

export const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
