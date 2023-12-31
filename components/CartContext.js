import { createContext, useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
    ls.clear();
  }

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          addProduct,
          removeProduct,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </StyleSheetManager>
  );
};

export default CartContextProvider;
