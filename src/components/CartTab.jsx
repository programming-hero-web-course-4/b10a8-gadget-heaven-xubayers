import { FaSortAmountDown } from "react-icons/fa";
import DashboardCards from "../utils/DashboardCards";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CartTab({ data = [] }) {
  const [cost, setCost] = useState(0);
  const [allData, setAlldData] = useState(data);

  useEffect(() => {
    setCost(0);
    if (data.length > 0) {
      data.forEach((curr) => {
        const itemPrice = parseFloat(curr?.price);
        setCost((prev) => prev + itemPrice);
      }, 0);
    }
  }, [data]);

  const sortByPriceHandler = () => {
    const sortAllData = [...data].sort((a, b) => {
      const numAprice = parseInt(a.price);
      const numBprice = parseInt(b.price);

      return numBprice - numAprice;
    });
    setAlldData(sortAllData);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex gap-5 sm:items-center">
          <h2 className="md:text-xl sm:text-lg text-sm  md:font-bold font-semibold">
            Total Cost: ${cost.toFixed(2)}{" "}
          </h2>
          <div className="sm:flex am:space-y-0  space-y-2 gap-4 items-center">
            <button
              className="customBtn border border-primary text-primary hover:bg-primary/10  flex items-center gap-2"
              onClick={sortByPriceHandler}
            >
              <p>Sort by Price </p>
              <FaSortAmountDown />
            </button>
            <button className="customBtn sm:w-auto w-full bg-gradient-to-t to-primary via-primary from-[#DD66E7] hover:to-primary/75  text-white">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className=" my-10">
        {allData.length === 0 ? (
          <div className="flex justify-center items-center min-h-40 text-2xl">
            <h2>Empty Cart</h2>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {allData.map((item, i) => {
              return <DashboardCards data={item} key={i} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

CartTab.propTypes = {
  data: PropTypes.array,
};