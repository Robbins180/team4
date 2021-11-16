import React from "react";
import "../styles/CSS/MobileBar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileBar = () => {
  return (
    <div className="mobile-bar">
      <Link to="/">
        <AiFillHome className="widget" />
      </Link>
      <Link to="/wishlist">
        <BsFillSuitHeartFill className="widget" />
      </Link>
    </div>
  );
};

export default MobileBar;
