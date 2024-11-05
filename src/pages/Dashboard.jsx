import { useEffect, useReducer } from "react";
import Heading from "../utils/Heading";
import { useCart } from "../contexts/CartContext";
import { useWish } from "../contexts/WishContext";
import CartTab from "../components/CartTab";
import WishTab from "../components/WishTab";

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
  const { cartItems } = useCart();
  const { wishItems } = useWish();
  const [data, dispatch] = useReducer(Reducer, { items: [] });

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

  console.log(data);

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
      <div className="container  mx-auto md:px-9 px-2 my-8">
        {data.type === "cart" ? (
          <CartTab data={data.items} />
        ) : (
          <WishTab data={data.items} />
        )}
      </div>
    </div>
  );
}
