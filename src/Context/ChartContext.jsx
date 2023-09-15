import React, { createContext, useReducer, useContext } from 'react';

// Definir acciones para el carrito
const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

// Reducer para gestionar el estado del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      // Agregar un producto al carrito
      return [...state, action.payload];
    case cartActions.REMOVE_FROM_CART:
      // Eliminar un producto del carrito
      return state.filter(item => item.id !== action.payload.id);
    case cartActions.CLEAR_CART:
      // Vaciar todo el carrito
      return [];
    default:
      return state;
  }
};

// Crear el contexto
const CartContext = createContext();

// Componente proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Función de conveniencia para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};
