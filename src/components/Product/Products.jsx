import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css'

function Products() {

  const params = useParams();
  const [productToShow, setProductToShow] = useState({});


  useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.productId)
      .then((response) => response.json())
      .then((data) => setProductToShow(data))
      .catch((error) => console.log(error));
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
    <div className='product-block'>
      <p>{productToShow.images}</p>
      <p>{productToShow.title}</p>
      <p>{productToShow.category}</p>
      <p>{productToShow.description}</p>
      <p>{productToShow.discountPercentage}</p>
      <p>{productToShow.price}</p>
      <p>{productToShow.rating}</p>
      <p>{productToShow.stock}</p>
      <p>{productToShow.brand}</p>
    </div>
  )
}

export default Products