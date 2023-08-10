import React from 'react'
import { Link } from "react-router-dom";
import './ProductCard.css'


function ProductCard({title, brand, price, thumbnail, discountPercentage, id}) {

  return (
    <div className="flex-container">
      <Link to={"/products/" + id}>
        <div className="card-product flex-item">
          <div className="img-container">
            <img src={thumbnail} alt="imagen Portada"></img>
          </div>
          <h1 className="card-price">${price}</h1>
          <h1 className="card-discountPercentage">{discountPercentage}% OFF</h1>
          <p className="truncate card-title">{title}</p>
          <p className='card-brand'>{brand}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard