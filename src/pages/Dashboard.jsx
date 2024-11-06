/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useReducer, useState } from "react";
import Heading from "../utils/Heading";
import { useCart } from "../contexts/CartContext";
import { useWish } from "../contexts/WishContext";
import CartTab from "../components/CartTab";
import WishTab from "../components/WishTab";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { WishCartProvider } from "../contexts/WishCartContext";
import toast from "react-hot-toast";

const MoneyContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "cart": {
      return {
        ...state,
        items: action.data,
        type: "cart",
      };
    }

    case "wish": {
      return {
        ...state,
        items: action.data,
        type: "wish",
      };
    }

    default:
      return state;
  }
}

export default function Dashboard() {
  const { cartItems, setCartItems } = useCart();
  const { wishItems, setWishItems } = useWish();
  const [data, dispatch] = useReducer(Reducer, { items: [] });
  const [cost, setCost] = useState(0);
  const navigate = useNavigate();

  const closeAndRfreshPage = () => {
    setCost(0);
    setCartItems([]);
    navigate("/");
  };

  const wishHandler = () => {
    dispatch({ type: "wish", data: wishItems });
  };
  const cartHandler = () => {
    dispatch({ type: "cart", data: cartItems });
  };

  useEffect(() => {
    document.title = "Dashboard || Gadget Heaven";
    cartHandler();
  }, []);

  const handleCart = (cartedProd) => {
    const isTrue = cartItems.some(
      (prod) => prod.product_id === cartedProd.product_id
    );

    if (!isTrue) {
      setCartItems([...cartItems, cartedProd]);
      toast("✅ Product added in cart");

      const filterWishContextItem = wishItems.filter(
        (item) => item !== cartedProd
      );
      setWishItems(filterWishContextItem);

      const filterWishItem = wishItems.filter((item) => item !== cartedProd);
      dispatch({ type: "wish", data: filterWishItem });
    } else {
      toast("❌ Product already exists!");
    }
  };

  return (
    <div>
      <div className=" bg-primary px-2">
        <div className=" container md:px-8 mx-auto relative text-white px-2 w-full">
          <div className="container mx-auto pt-7">
            <Heading
              title={"Dashboard"}
              desc={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            />
            <div className="flex justify-center gap-4 mt-5 pb-7">
              <button
                className={
                  data.type === "cart" ? "dashboardCartBtn" : "dashboardWishBtn"
                }
                onClick={cartHandler}
              >
                Cart
              </button>
              <button
                className={
                  data.type === "wish" ? "dashboardCartBtn" : "dashboardWishBtn"
                }
                onClick={wishHandler}
              >
                Wishlish
              </button>
            </div>
          </div>
        </div>
      </div>
      <MoneyContext.Provider value={{ cost, setCost }}>
        <div className="container  mx-auto md:px-9 px-2 my-8">
          {data.type === "cart" ? (
            <CartTab data={data.items} />
          ) : (
            <WishCartProvider value={{ handleCart }}>
              <WishTab data={data.items} />
            </WishCartProvider>
          )}
        </div>
        <Modal cost={cost} closeAndRfreshPage={closeAndRfreshPage} />
      </MoneyContext.Provider>
    </div>
  );
}

export { MoneyContext };
