import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import SearchInput from '../SearchInput/SearchInput';
import { LinearProgress, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

function ProductPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      {categories.length === 0 ? (
        <LinearProgress />
      ) : (
        <>
          <div className="filter-container">
            <div>
              <TuneIcon />
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Categorias
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={age}
                    // onChange={handleChange}
                    // label="Categorias"
                  >
                    <MenuItem value="">
                      <em style={{fontWeight: 600}}>Ninguna</em>
                    </MenuItem>
                    {categories.map((category, index) =>(
                        <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              {/* <select name="categories" id="categories">
                <option>Nada</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage