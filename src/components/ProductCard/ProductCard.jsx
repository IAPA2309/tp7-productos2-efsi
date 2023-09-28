import React from 'react'
import { Link } from "react-router-dom";
import './ProductCard.css'
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useCart } from "../../Context/ChartContext";

function ProductCard({title, brand, price, thumbnail, discountPercentage, id}) {

  const { cart } = useCart();

  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div className="flex-container">
      <Link to={"/products/" + id}>
        <div className="card-product flex-item">
          <div className="img-container">
            <img src={thumbnail} alt="imagen Portada"></img>
          </div>
          <div style={{ display: "flex" }}>
            <h1 className="card-price">${price}</h1>
            <div
              className="card-discountPercentage"
              style={{ display: "flex", gap: 2, alignSelf: "center" }}
            >
              <h1 style={{ fontWeight: 400 }}>{discountPercentage}%</h1>
              <LocalOfferTwoToneIcon sx={{ fontSize: 21 }} />
            </div>
              {isProductInCart(id) ? (
                <div className="isInCart">
                  <ShoppingCartTwoToneIcon sx={{ fontSize: 21 }} />
                </div>
              ) : (
                <></>
              )}
          </div>
          <p className="truncate card-title">{title}</p>
          <p className="card-brand">{brand}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard