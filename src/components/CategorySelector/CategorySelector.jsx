import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './CategorySelector.css'

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigate("/products");
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
