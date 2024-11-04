import { NavLink, useLoaderData } from "react-router-dom";

const Sidebar = () => {
  const { data: categoryItems } = useLoaderData();
  return (
    <div className="flex flex-wrap md:flex-col  md:gap-3 gap-1  bg-white p-5 shadow-sm rounded-xl ">
      {categoryItems?.map((category) => (
        <NavLink
          to={`/productCategory/${category.categoryName}`}
          key={category.uniqueId}
          className={({ isActive }) =>
            `${isActive ? "bg-primary text-white" : ""} categoryBtn`
          }
        >
          {category.categoryName}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
