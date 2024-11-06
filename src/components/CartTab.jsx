import { FaSortAmountDown } from "react-icons/fa";
import DashboardCards from "../utils/DashboardCards";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useMoney } from "../contexts/MoneyContext";

export default function CartTab({ data = [], deledCardHandler }) {
  const { cost, setCost } = useMoney();
  const [allData, setAlldData] = useState([]);
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    setAlldData(data);
  }, [data]);

  useEffect(() => {
    setCost(0);
    if (data.length > 0) {
      data.forEach((curr) => {
        const itemPrice = parseFloat(curr?.price);
        setCost((prev) => prev + itemPrice);
      }, 0);
      setIsDisable(false);
    }
  }, [data, setCost]);

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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="flex gap-5 sm:items-center">
          <h2 className="md:text-xl sm:text-lg text-sm  md:font-bold font-semibold">
            Total Cost: ${cost.toFixed(2)}{" "}
          </h2>
          <div className="sm:flex sm:space-y-0  space-y-2 gap-4 items-center">
            <button
              disabled={isDisable}
              className={`customBtn border border-primary text-primary ${
                !isDisable && "hover:bg-primary/10"
              }  flex items-center gap-2`}
              onClick={sortByPriceHandler}
            >
              <p>Sort by Price </p>
              <FaSortAmountDown />
            </button>
            <button
              disabled={isDisable}
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className={`customBtn sm:w-auto w-full bg-gradient-to-t to-primary via-primary from-[#DD66E7] 
                ${
                  !isDisable ? "hover:to-primary/75" : "bg-gray-200"
                }  text-white`}
            >
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
              return (
                <DashboardCards
                  data={item}
                  key={i}
                  deledCardHandler={deledCardHandler}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

CartTab.propTypes = {
  data: PropTypes.array,
  deledCardHandler: PropTypes.func,
};
