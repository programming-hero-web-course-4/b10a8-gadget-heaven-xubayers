/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
CartProvider.propTypes = {
  children: PropTypes.any,
};

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
