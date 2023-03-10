import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { NotFound } from "./components/NotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CheckOutSuccess from "./components/CheckOutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import CreateProduct from "./components/admin/CreateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout-success" element={<CheckOutSuccess />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="summary" element={<Summary />} />
            <Route path="products" element={<Products />}>
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
