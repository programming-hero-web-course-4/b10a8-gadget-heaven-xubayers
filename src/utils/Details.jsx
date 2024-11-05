import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { useCart } from "../contexts/CartContext";
import { useWish } from "../contexts/WishContext";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";

export default function Details() {
  const { gadgetId } = useParams();
  const { data } = useLoaderData();
  const [product, setProduct] = useState({});
  const { cartItems, setCartItems } = useCart();
  const { wishItems, setWishItems } = useWish();

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

  const handleWish = (wishesProd) => {
    const isTrue1 = wishItems.some(
      (prod) => prod.product_id === wishesProd.product_id
    );

    if (!isTrue1) {
      setWishItems([...wishItems, wishesProd]);
      toast("✅ Product added in wishLish");
    } else {
      toast("❌ Product already exist!");
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
    <div className="md:p-5 p-3 rounded-2xl absolute w-full left-0 ">
      <div className="bg-white p-6 rounded-lg shadow-lg md:flex space-x-4 ">
        <div className="md:w-1/3  my-auto  p-2 rounded-lg   flex justify-center items-center">
          <img
            src={product_image}
            className="md:h-full  md:max-h-52 h-44 object-contain"
            alt=""
          />
        </div>
        <div className="flex-1 md:border-l md:border-t-0 border-t pt-3 md:pt-0 md:pl-3">
          <h3 className="md:text-2xl text-xl text-black font-semibold">
            {product_title}
          </h3>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Price: ${price}
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
                <ReactStars
                  count={5}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <span className="text-gray-500 ml-2"> {rating} </span>
            </div>
          </div>
          <div className="flex py-4  gap-3 items-center">
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
