import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ExploreAllGadget = () => {
  return (
    <div className="min-h-screen bg-gray-100 container mx-auto p-8 xl:mt-48 lg:mt-56 md:mt-56 mt-48">
      <h1 className="text-2xl font-bold text-center mb-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className=" md:grid grid-cols-4 md:space-y-0 space-y-4 gap-8">
        <aside className="col-start-1">
          <Sidebar />
        </aside>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ExploreAllGadget;
