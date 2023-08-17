import React from "react";
import "./SearchInput.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <div >
      <form action="" className="form-search">
        <input placeholder="Buscar..." className="input-search" />
        <button type="submit" className="btn-search">
          <SearchIcon sx={{ fontSize: 21 }} />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
