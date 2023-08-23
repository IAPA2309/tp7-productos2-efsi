import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { LinearProgress } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ProductSearchCard from '../../ProductSearchCard/ProductSearchCard';
import { useLocation } from "react-router-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";

function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);


  useEffect(() => {
    if (searchValue) {
      fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data.products);
        });
    } else {
      fetch("https://dummyjson.com/products?limit=18&skip=0")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }
  }, [searchValue]);

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
            </div>
            <div></div>
          </div>
          <div className="products-search-container">
            {products && (
              <div className="products-search-flex-container">
                {searchValue && filteredProducts.length === 0 ? (
                  <div className="form-help">
                    <p style={{ width: 350 }}>
                      No se encontraron artículos para "
                      <span style={{ fontWeight: 700 }}>{searchValue}</span>". ¿Esta escrito correctamente?
                    </p>
                    <HelpTwoToneIcon
                      sx={{ color: "#e82153", fontSize: 40 }}
                    />
                  </div>
                ) : (
                  (searchValue ? filteredProducts : products).map((product) => (
                    <ProductSearchCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      brand={product.brand}
                      category={product.category}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      discountPercentage={product.discountPercentage}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage