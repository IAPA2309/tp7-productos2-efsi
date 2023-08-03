import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css'
import { Rating } from '@mui/material';

function Products() {

  const params = useParams();
  const [productToShow, setProductToShow] = useState({});
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.productId)
      .then((response) => response.json())
      .then((data) => setProductToShow(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [params.productId]);

  return (
    <>
      {!isLoading ? (
        <div className="product-block">
          <div className="product-block-img">
            {Array.isArray(productToShow.images) &&
            productToShow.images.length > 0 ? (
              <img
                className="product-img"
                src={productToShow.images[0]}
                alt="imagenes"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className='product-info'>
            <p className="product-title">{productToShow.title}</p>
            <p className='product-category'>{productToShow.category}</p>
            <p>{productToShow.brand}</p>
            <div className='product-rating'>
              <Rating
                name="half-rating-read"
                value={productToShow.rating ?? 0}
                precision={0.1}
                sx={{
                  color: '#3483fa',
                }}
                readOnly
              />
              <p className="product-rating">({productToShow.rating})</p>
            </div>
            <div className='product-price'>
              <p className='product-price-pricing'>${productToShow.price}</p>
              <p className='product-price-discount'>{productToShow.discountPercentage}% OFF</p>
            </div>
            <p>{productToShow.description}</p>
            <p className='product-stock'>{productToShow.stock} disponibles</p>
            <button className="btn-buy">Comprar</button>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
}

export default Products