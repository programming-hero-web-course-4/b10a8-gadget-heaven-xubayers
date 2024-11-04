import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { useCart } from "../contexts/CartContext";
import { useWish } from "../contexts/WishContext";
import toast from "react-hot-toast";
// const notify = () =>

export default function Details() {
  const { gadgetId } = useParams();
  const { data } = useLoaderData();
  const [product, setProduct] = useState({});
  const { cartItems, setCartItems } = useCart();
  const { wishItems, setWishItems } = useWish();

  const handleCart = (cartedProd) => {
    if (cartItems.findIndex((p) => p === cartedProd) === -1) {
      setCartItems([...cartItems, cartedProd]);
      toast("✅ Product added in cart");
    } else {
      toast("❌ Product already exist!");
      return;
    }
  };

  const handleWish = (wishesProd) => {
    console.log("clicked");
    if (wishItems.findIndex((p) => p === wishesProd) === -1) {
      setWishItems([...wishItems, wishesProd]);
      toast("✅ Product added in wishLish");
    } else {
      toast("❌ Product already exist!");
      return;
    }
  };

  useEffect(() => {
    const getCurrentProduct = data.find((prod) => prod.product_id === gadgetId);

    setProduct(getCurrentProduct);
  }, [data, gadgetId]);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div className="md:p-5 p-2 md:h-[500px] 2xl:h-[500px] rounded-2xl absolute w-full left-0 ">
      <div className="bg-white p-6 rounded-lg shadow-lg md:flex space-x-4 h-full">
        <div className="md:w-1/3 md:h-full  p-2 rounded-lg  border flex justify-center items-center">
          <img
            src={product_image}
            className="md:h-full  max-h-40 object-contain"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="md:text-2xl text-xl text-black font-semibold">
            {product_title}
          </h3>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Price: {price}
          </p>
          <span
            className={`border border-purple-400 inline-block ${
              availability ? "bg-green-100" : "bg-gray-500/40 text-red-500"
            } text-green-600 px-3 py-1 rounded-full text-sm mt-2`}
          >
            {availability ? "In Stock" : "Out Stock"}
          </span>
          <p className="text-gray-600 mt-4">{description}</p>
          <div className="mt-4">
            <p className="font-semibold text-black mb-1">Specification:</p>
            <ol className="text-gray-600 list-decimal list-inside space-y-1 text-sm">
              {specification?.map((spec) => {
                return <li key={spec}>{spec}</li>;
              })}
            </ol>
          </div>
          <p className="font-semibold  text-black mt-2">Rating 🌟</p>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <div className="flex text-yellow-400 text-sm gap-2">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>

                <span className="text-gray-300">
                  <FaRegStar className="text-black" />
                </span>
              </div>
              <span className="text-gray-500 ml-2"> {rating} </span>
            </div>
          </div>
          <div className="flex mt-4 gap-3 items-center">
            <button
              className=" px-5  bg-primary text-white py-2 rounded-full hover:bg-primary/80 flex justify-center items-center space-x-2 "
              onClick={() => handleCart(product)}
            >
              <span>Add To Cart</span>
              <span>
                <BsCart4 />
              </span>
            </button>
            <button
              className="text-black text-lg border-2 rounded-full p-2 h-10 aspect-square flex justify-center items-center"
              onClick={() => handleWish(product)}
            >
              <IoIosHeartEmpty />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
