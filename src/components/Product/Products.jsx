import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.css";
import { Rating, LinearProgress } from "@mui/material";

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

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  function calcularValorOriginal(valorDescontado, porcentajeDescuento) {
    const valorOriginal = valorDescontado / (1 - porcentajeDescuento / 100);
    return Math.round(valorOriginal);
  }

  if(!isLoading && productToShow.discountPercentage > 0){
    var valorOriginal = calcularValorOriginal(productToShow.price, productToShow.discountPercentage);
  }

  return (
    <>
      {!isLoading ? (
        <div>
          <div className="product-block">
            <button className="bnt-back" onClick={goBack}>
              Volver
            </button>
            <span style={{ fontSize: 18, marginRight: 5, alignSelf: "center" }}>
              &#62;{" "}
            </span>
            <span className="product-category">{productToShow.category}</span>
          </div>
          <div className="product-block" style={{ marginTop: 0 }}>
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
            <div className="product-info">
              <div className="sticky-follow">
                <span className="product-brand">{productToShow.brand}</span>
                <span className="product-title">{productToShow.title}</span>
                <div className="product-rating">
                  <Rating
                    name="half-rating-read"
                    value={productToShow.rating ?? 0}
                    precision={0.1}
                    sx={{
                      color: "#222222",
                      fontSize: "30px",
                    }}
                    readOnly
                  />
                  <span className="product-rating">
                    ({productToShow.rating})
                  </span>
                </div>
                <div className="product-price">
                  <p className="product-price-pricing-original">
                    ${valorOriginal}
                  </p>
                  <p className="product-price-pricing">
                    ${productToShow.price}
                  </p>
                  <p className="product-price-discount">
                    {productToShow.discountPercentage}% OFF
                  </p>
                </div>
                <p className="product-description">
                  {productToShow.description}
                </p>
                <p className="product-stock">
                  {productToShow.stock} disponibles
                </p>
                <button className="btn-buy">Comprar</button>
                <button className="btn-chart">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LinearProgress />
      )}
    </>
  );
}

export default Products;
