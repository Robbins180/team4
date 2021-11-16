import React from "react";
import "../styles/CSS/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p>Duende Coding Collective</p>
      <p>Copyright {new Date().getFullYear()}</p>
      {/* <ul className="team-list">
        <li>Aakaash Meduri</li>
        <li>Drew Robbins</li>
        <li>Gonzalo Meza-Cabrera</li>
        <li>Jeryl Emata</li>
        <li>Noah Brezel</li>
        <li>Rjay Juarez</li>
        <li>Trace White</li>
      </ul> */}
    </div>
  );
};

export default Footer;
