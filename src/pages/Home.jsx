import { useEffect } from "react";
import Banner from "../components/Banner";
import ExploreAllGadget from "../components/ExploreAllGadget";

export default function Home() {
  useEffect(() => {
    document.title = "Home || Gadget Heaven";
  }, []);
  return (
    <div>
      <Banner />
      <ExploreAllGadget />
    </div>
  );
}
