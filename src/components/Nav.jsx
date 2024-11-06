import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { useCart } from "../contexts/CartContext";
import { useWish } from "../contexts/WishContext";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRaf = useRef();
  const { cartItems } = useCart();
  const { wishItems } = useWish();

  const isRootPath =
    pathname === "/" ||
    (pathname.includes("/productCategory") &&
      !pathname.includes("/productCategory/Computers/details"));

  useEffect(() => {
    if (!isRootPath) {
      navRaf.current.classList.remove("bg-primary");
      navRaf.current.classList.add("bg-white", "text-black");
    } else {
      navRaf.current.classList.remove("bg-white");
      navRaf.current.classList.add("bg-primary");
    }
  }, [isRootPath]);

  const navigateToHomePage = () => {
    navigate("/");
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <header
      className={`${isRootPath ? "bg-gray-100" : "bg-white"} md:pt-5 pt-3 `}
    >
      <div
        ref={navRaf}
        className={`${
          isRootPath && "bg-gray-100"
        } md:mx-8 mx-3 px-2 rounded-tl-2xl rounded-tr-2xl`}
      >
        <nav className="flex justify-between items-center py-6 lg:px-5 container mx-auto z-10 ">
          <div className="flex items-center gap-3">
            <details className="relative md:hidden">
              <summary
                className={`list-none cursor-pointer text-xl ${
                  isRootPath && "text-white"
                } font-bold`}
              >
                <FaBars />
              </summary>
              <ul className="mobileBar">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "hover:bg-slate-900/20 "
                    } navlies ${isRootPath && "bg-slate-900"}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/statistics"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                    } navlies`
                  }
                >
                  Statistics
                </NavLink>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                    } navlies`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={"/customer-services"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                    } navlies`
                  }
                >
                  Customer Services
                </NavLink>
              </ul>
            </details>

            <h2
              onClick={navigateToHomePage}
              className={`${!isRootPath ? "text-black" : "text-white"} brand`}
            >
              Gadget Heaven
            </h2>
          </div>
          <ul
            className={`md:flex items-center ${
              isRootPath && "text-white"
            } text-sm hidden`}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "hover:bg-slate-900/20 "
                } navlies`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                } navlies`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                } navlies`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to={"/customer-services"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-900 text-white" : "hover:bg-black/20"
                } navlies`
              }
            >
              Customer Services
            </NavLink>
          </ul>
          <ul className="flex text-[18px] text-white gap-3 ">
            <li className="navCartAndHeartIcon border" onClick={goToDashboard}>
              <IoCartOutline />
              <span className="notification bg-orange-600">
                {cartItems.length}
              </span>
            </li>
            <li className="navCartAndHeartIcon border" onClick={goToDashboard}>
              <IoIosHeartEmpty />
              <span className="notification bg-green-600">
                {wishItems.length}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
