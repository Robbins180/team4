import React from "react";
import "../styles/CSS/MobileBar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileBar = () => {
  return (
    <div className="mobile-bar">
      <Link to="/" className="nav-links">
        <AiFillHome className="widget" />
        <p className="text-labels">Home</p>
      </Link>
      <Link to="/Wishlist" className="nav-links">
        <BsFillSuitHeartFill className="widget" />
        <p className="text-labels">Wish List</p>
      </Link>
    </div>
  );
};

export default MobileBar;
