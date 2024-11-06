import PropTypes from "prop-types";
import DashboardCards from "../utils/DashboardCards";

export default function WishTab({ data = [], deledCardHandler }) {
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
              <DashboardCards
                data={item}
                wish
                key={item.product_id}
                deledCardHandler={deledCardHandler}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

WishTab.propTypes = {
  data: PropTypes.array,
  deledCardHandler: PropTypes.func,
};
