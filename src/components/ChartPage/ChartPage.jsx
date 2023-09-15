import React from 'react'
import { useCart } from '../../Context/ChartContext';

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
      <div className="cart">
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <span>{product.title}</span>
                <span>${product.price}</span>
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default ChartPage