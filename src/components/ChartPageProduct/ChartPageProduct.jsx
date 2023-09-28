import React from 'react'
import './ChartPageProduct.css'

function ChartPageProduct({ data: { title, brand, category, price, thumbnail } }) {

  return (
    <div>
      <div className="flex-cart-product">
        <div className="cart-product-img">
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div className='cart-product-name'>
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">{brand}</p>
          <p className="cart-product-brand">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default ChartPageProduct