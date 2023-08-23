import React, { useEffect, useState } from 'react'
import './ProductPage.css'
// import SearchInput from '../SearchInput/SearchInput';
import { LinearProgress } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ProductSearchCard from '../../ProductSearchCard/ProductSearchCard';

function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=18&skip=0")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });;
  }, []);

  return (
    <div>
      {categories.length === 0 ? (
        <LinearProgress />
      ) : (
        <>
          <div className="filter-container">
            <div className="filter-filters">
              <TuneIcon sx={{ color: "#e82153" }} />
              <p className="filter-text">Selecctionar filtros</p>
              {/* <FormControl variant="standard" sx={{ minWidth: 120, marginLeft: 2}}>
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
                </FormControl> */}
            </div>
            <div></div>
          </div>
          <div className="products-search-container">
            {products && (
              <div className="products-search-flex-container">
                {products.map((product) => {
                  return (
                    <React.Fragment key={product.id}>
                      <ProductSearchCard
                        id={product.id}
                        title={product.title}
                        brand={product.brand}
                        category={product.category}
                        thumbnail={product.thumbnail}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage