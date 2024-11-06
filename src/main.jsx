import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { WishProvider } from "./contexts/WishContext.jsx";
import { MoneyProvider } from "./contexts/MoneyContext.jsx";

createRoot(document.getElementById("root")).render(
  <WishProvider>
    <CartProvider>
      <MoneyProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </MoneyProvider>
    </CartProvider>
  </WishProvider>
);
