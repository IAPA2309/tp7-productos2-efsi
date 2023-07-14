import React from 'react'
import { Link } from "react-router-dom";
import './ProductCard.css'

function ProductCard({title, brand, price, thumbnail, discountPercentage}) {
  return (
    <div className="flex-container">
      <Link to="/products/:productId">
        <div className="card-product flex-item">
          <div className="img-container">
            <img src={thumbnail} alt="imagen Portada"></img>
          </div>
          <h1 className="card-price">${price}</h1>
          <h1 className="card-discountPercentage">{discountPercentage}% OFF</h1>
          <p className="truncate">{title}</p>
          <p>{brand}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard