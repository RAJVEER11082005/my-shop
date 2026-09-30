import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [cart, setCart] = useState(0);

  function addToCart() {
    setCart(cart + 1);
  }

  return (
    <BrowserRouter>

      <Navbar cart={cart} />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;