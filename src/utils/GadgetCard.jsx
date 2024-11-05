import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function GadgetCard({ gadget }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 ">
      <div className={`md:h-40 h-28 rounded-md mb-4 shadow-sm border p-2`}>
        <img
          src={gadget.product_image}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div>
        <h3 className="md:text-lg text-sm font-semibold text-nowrap text-ellipsis overflow-hidden">
          {gadget.product_title}
        </h3>
        <p className="text-gray-600 sm:text-xs">Price: ${gadget.price}</p>
      </div>
      <Link to={`/productDetails/${gadget.product_id}`}>
        <button className="mt-2 px-4 py-2 sm:text-sm text-[10px]  text-primary font-semibold border-[1.5px] border-primary rounded-full hover:bg-purple-100 flex-grow">
          View Details
        </button>
      </Link>
    </div>
  );
}

GadgetCard.propTypes = {
  gadget: PropTypes.object,
};
