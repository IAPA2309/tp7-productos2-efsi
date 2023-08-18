import React from "react";
import "./SearchInput.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <form action="" className="form-search">
      <input placeholder="Buscar productos..." className="input-search" />
      <button type="submit" className="btn-search">
        <SearchIcon sx={{ fontSize: 21, margin: 0.3 }} />
        Buscar
      </button>
    </form>
  );
}

export default SearchInput;
