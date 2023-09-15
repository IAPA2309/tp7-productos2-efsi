import React from 'react'
import { useCart } from '../../Context/ChartContext';
import { Link } from "react-router-dom";
import './ChartPage.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

function ChartPage() {
    const { cart, dispatch } = useCart();

    // Función para eliminar un producto del carrito
    const removeFromCart = (product) => {
      const action = {
        type: 'REMOVE_FROM_CART',
        payload: { id: product.id }, // Puedes ajustar el payload según tu estructura de datos
      };
      dispatch(action);
    };
  
    return (
      <div className='cart-container'>
          <h2 className='cart-title'>Carrito de compras ({cart.length})</h2>
        <div className="cart">
          {cart.length === 0 ? (
            <div className="flex flex-center">
              <div>
                <Link to="/products" className="seeProducts-btn">
                  Ver productos
                </Link>
              </div>
              <div className="chart-help">
                <ShoppingCartTwoToneIcon
                  sx={{ color: "#e82153", fontSize: 40 }}
                />
                <p>
                  <span style={{ fontWeight: 700 }}>
                    Tu carrito se encuentra vacío.{" "}
                  </span>{" "}
                  Una vez que agregues productos al carrito, se veran reflejados
                  aqui.
                </p>
              </div>
            </div>
          ) : (
            <ul className="flex">
              {cart.map((product) => (
                <li key={product.id}>
                  <span>{product.title}</span>
                  <span>{product.brand}</span>
                  <span>${product.price}</span>
                  <button onClick={() => removeFromCart(product)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
}

export default ChartPage