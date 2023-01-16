import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
