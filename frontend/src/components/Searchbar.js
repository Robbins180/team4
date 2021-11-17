import React, { useState } from "react";
import "../styles/CSS/Searchbar.css";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // search API/DB with search query
    console.log(`Searching for ${search}`);
    // reset search state to default text
    setSearch("Search");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <button className="searchButton" type="submit" value="Search">
        <BsSearch className="searchButton" />
      </button>
      {/* <label> */}
      <input
        className="searchBar"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      {/* </label> */}
    </form>
  );
};

export default Searchbar;
