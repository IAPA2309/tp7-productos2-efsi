import React, { useState } from "react";
import "./SearchInput.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchInput() {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();

     if (searchValue.trim() !== "") {
       navigate(`/products?search=${searchValue}`);
     }
   };

  return (
    <form onSubmit={handleSubmit} className="form-search">
      <input
        placeholder="Buscar productos..."
        className="input-search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="btn-search">
        <SearchIcon sx={{ fontSize: 21, margin: 0.3 }} />
        Buscar
      </button>
    </form>
  );
}

export default SearchInput;
