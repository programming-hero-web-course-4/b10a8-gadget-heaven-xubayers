import PropTypes from "prop-types";
import DashboardCards from "../utils/DashboardCards";

export default function WishTab({ data = [] }) {
  console.log("render wish");
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Wishlist</h2>
      </div>
      <div className=" my-[50px]">
        {data.length === 0 ? (
          <div className="flex justify-center items-center min-h-40 text-2xl">
            <h2>Empty Wishlist</h2>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {data.map((item) => (
              <DashboardCards data={item} wish key={item.product_id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

WishTab.propTypes = {
  data: PropTypes.array,
};

// {
//     "product_id": "107",
//     "product_title": "Samsung Galaxy Watch 4",
//     "product_image": "https://i.ibb.co.com/2KLTQcm/Black-Silver-Time-Display-Round-Adult-Used-Smart-Watch-For-Samsung-Galaxy-Watch-4-Classic-Sm-R890.jpg",
//     "category": "Smart Watches",
//     "price": "$249.99",
//     "description": "Samsung Galaxy Watch 4 offers advanced health tracking features and a sleek design.",
//     "specification": [
//       "1.4-inch AMOLED display",
//       "BioActive sensor",
//       "GPS and heart rate monitoring",
//       "Sleep tracking"
//     ],
//     "availability": false,
//     "rating": 4.5
//   },
