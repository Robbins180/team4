
import "./styles/CSS/App.css";
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/Wishlist" element={<Wishlist/>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
