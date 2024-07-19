import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
