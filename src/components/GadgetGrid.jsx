import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../utils/GadgetCard";
import NotAvilible from "./NotAvilible";

function GadgetGrid() {
  const { catagoryName } = useParams();
  const { data: allGadgets } = useLoaderData();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (catagoryName) {
      const filterGadget = allGadgets.filter(
        (gadget) => gadget.category === catagoryName
      );
      setGadgets(filterGadget);
    } else {
      const allProd = allGadgets.slice(0, 7);
      setGadgets(allProd);
    }
  }, [allGadgets, catagoryName]);

  if (!gadgets.length) {
    return <NotAvilible />;
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-6 gap-2">
      {gadgets.map((gadget) => {
        return <GadgetCard key={gadget.product_id} gadget={gadget} />;
      })}
    </div>
  );
}

export default GadgetGrid;
