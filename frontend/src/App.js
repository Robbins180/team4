import "./styles/CSS/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import MobileBar from "./components/MobileBar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Products />}></Route>
        <Route path="/Wishlist" element={<Wishlist />}></Route>
      </Routes>
      <MobileBar />
      <Footer />
    </div>
  );
}

export default App;
