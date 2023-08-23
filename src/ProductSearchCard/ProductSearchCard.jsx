import React from 'react';
import './ProductSearchCard.css';
import { Link } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";

function ProductSearchCard({
  title,
  brand,
  category,
  price,
  thumbnail,
  discountPercentage,
  id,
  rating
}) {

  return (
    <div className="search-flex-container">
      <Link to={"/products/" + id}>
        <div className="search-card-product search-flex-item">
          <div className="search-img-container">
            <img src={thumbnail} alt="imagen Portada"></img>
          </div>
          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <p className="truncate search-card-title">{title}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <GradeIcon sx={{ color: "black", fontSize: 16 }} />{" "}
              <span style={{ color: "black", fontSize: 16 }}>{rating}</span>
            </div>
            <div
              className="search-card-discountPercentage"
              style={{ display: "flex", gap: 2, alignSelf: "center" }}
            >
              {/* <h1 style={{ fontWeight: 400 }}>{discountPercentage}%</h1> */}
            </div>
          </div>
          <p className="search-card-brand">{brand}</p>
          <p className="search-card-brand">{category}</p>
          <h1 className="search-card-price">${price} USD</h1>
        </div>
      </Link>
    </div>
  );
}

export default ProductSearchCard