import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";
const Search = () => {
  const navigate = useNavigate();
  //   console.log(navigate);
  const [searchText, setSearchText] = useState("");
  const handlerSearch = (e) => {
    setSearchText(e.target.value);
  };
  const handlerGoToSearch = (e) => {
    navigate(`/search/${searchText}`);
  };
  return (
    <div className={classes.search_container}>
      <input
        onChange={handlerSearch}
        type="text"
        placeholder="Enter name product..."
      />
      <button onClick={handlerGoToSearch} type="submit">
        &#10148;
      </button>
    </div>
  );
};

export default Search;
