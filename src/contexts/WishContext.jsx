import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const WishContext = createContext();

function WishProvider({ children }) {
  const [wishItems, setWishItems] = useState([]);
  console.log(wishItems);

  return (
    <WishContext.Provider value={{ wishItems, setWishItems }}>
      {children}
    </WishContext.Provider>
  );
}
WishProvider.propTypes = {
  children: PropTypes.any,
};

function useWish() {
  return useContext(WishContext);
}

export { WishProvider, useWish };
