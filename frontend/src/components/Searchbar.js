import React, {useState} from "react";
import '../styles/CSS/Searchbar.css';


const Searchbar = () => {
  const [search,setSearch] = useState("");

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    // search API/DB with search query
    console.log(`Searching for ${search}`)
    // reset search state to default text
    setSearch("What are you looking for?")
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      {/* <label> */}
        <input
        className="searchBar"
        placeholder="What are you looking for?"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        required
        />
      {/* </label> */}
      <input className="searchButton" type="submit" value="Search"/>
    </form>
  );
};


export default Searchbar;
