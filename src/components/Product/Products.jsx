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
      .finally(setLoading(false));
  }, [params.productId]);

//   brand
// category
// description
// discountPercentage
// id
// images
// price
// rating
// stock
// thumbnail
// title

  return (
    <>
      {!isLoading ? (
         <div className='product-block'>  
         <div>
           <img src={productToShow.images} alt="imagenes"/>
         </div>
         <p className='product-title'>{productToShow.title}</p>
         <Rating name="half-rating-read" Value={productToShow.rating} precision={0.01} readOnly/>
         <Rating name="half-rating-read" defaultValue={4.54} precision={0.01} readOnly/>
         <p className='product-rating'>{productToShow.rating}</p>
         <p>{productToShow.category}</p>
         <p>{productToShow.description}</p>
         <p>{productToShow.discountPercentage}</p>
         <p>{productToShow.price}</p>
         <p>{productToShow.stock}</p>
         <p>{productToShow.brand}</p>
       </div>
      ) : 
        <h1>Cargando...</h1>
      } 
    </>
  )
}

export default Products