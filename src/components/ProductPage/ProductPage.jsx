import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { LinearProgress } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import ProductSearchCard from '../../ProductSearchCard/ProductSearchCard';
import { useLocation } from "react-router-dom";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import CategorySelector from '../CategorySelector/CategorySelector';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");

  useEffect(() => {
    if (searchValue) {
      fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredProducts(data.products);
        });
    } else {
      fetch("https://dummyjson.com/products?limit=0&skip=0")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }
  }, [searchValue]);

  useEffect(() => {
    if (selectedCategory !== "") {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    } else {
      fetch("https://dummyjson.com/products?limit=0&skip=0")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }
  }, [selectedCategory]);

  return (
    <div>
      {products === undefined ? (
        <LinearProgress />
      ) : (
        <>
          <div className="filter-container">
            <div className="filter-filters">
              <TuneIcon sx={{ color: "#e82153" }} />
              <p className="filter-text">Selecctionar filtros</p>
            </div>
            <div className="">
              {/* <p className="">Categorias</p> */}
              <CategorySelector
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
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
                      <span style={{ fontWeight: 700 }}>{searchValue}</span>".
                      ¿Esta escrito correctamente?
                    </p>
                    <HelpTwoToneIcon sx={{ color: "#e82153", fontSize: 40 }} />
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
                      rating={product.rating}
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