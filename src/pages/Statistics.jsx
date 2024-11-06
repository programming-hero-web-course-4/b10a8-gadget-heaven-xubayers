import { useEffect } from "react";
import Heading from "../utils/Heading";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLoaderData } from "react-router-dom";

export default function Statistics() {
  const { data } = useLoaderData();
  useEffect(() => {
    document.title = "Statistics || Gadget Heaven";
  }, []);

  return (
    <section>
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="  px-2 pb-4">
            <div className=" container md:px-8 mx-auto relative text-white px-2 w-full">
              <div className="container mx-auto pt-7">
                <Heading
                  title={"Statistics"}
                  desc={
                    "See our product analysis and Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 mx-auto px-4">
        <div>
          <h1 className="text-xl font-bold">Statistics</h1>
        </div>
        <div className="bg-white md:p-5 p-1 rounded-xl my-6">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <XAxis dataKey="product_title" className="text-[10px]" />
              <YAxis
                dataKey="price"
                tickFormatter={(value) => {
                  const parsedValue = parseInt(value, 10);
                  return isNaN(parsedValue) ? value : `$${parsedValue}`;
                }}
              />

              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="price" barSize={50} fill="#9538e2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
