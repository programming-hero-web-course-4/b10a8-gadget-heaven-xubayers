import { MdOutlineDeleteForever } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import PropTypes from "prop-types";
import { useCart } from "../contexts/CartContext";
import toast from "react-hot-toast";

export default function DashboardCards({ data, wish = false }) {
  const { cartItems, setCartItems } = useCart();
  const { product_title, product_image, price, description } = data || {};

  const handleCart = (cartedProd) => {
    const isTrue = cartItems.some(
      (prod) => prod.product_id === cartedProd.product_id
    );

    if (!isTrue) {
      setCartItems([...cartItems, cartedProd]);
      toast("✅ Product added in cart");
    } else {
      toast("❌ Product already exists!");
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-6 border rounded-xl shadow-sm">
      <div className="sm:flex gap-3  items-center">
        <div className="h-32 aspect-video mx-auto sm:w-auto w-full border p-4 rounded-md">
          <img src={product_image} className="h-full w-full object-contain" />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h2 className="text-lg font-semibold">{product_title}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="font-bold my-2">Price: ${price} </p>
          {wish && (
            <button
              className=" sm:px-4  px-2 bg-primary text-white sm:py-2 py-1 sm:w-3/6 md:w-3/6 w-auto rounded-full hover:bg-primary/80 flex justify-center items-center space-x-2 "
              onClick={() => handleCart(data)}
            >
              <span>Add To Cart</span>
              <span>
                <BsCart4 />
              </span>
            </button>
          )}
        </div>
      </div>
      <button className="text-red-500 text-3xl hover:text-red-700">
        <MdOutlineDeleteForever />
      </button>
    </div>
  );
}
DashboardCards.propTypes = {
  data: PropTypes.object,
  wish: PropTypes.bool,
};