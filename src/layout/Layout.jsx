/**
 * LeyOut page
 *
 * declare a leyout function and export it in default format
 * add all the components which will never change whenever user navigate the app
 * put a dynamic data option with the help of "Outlet" componnet
 *
 */

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* navbar */}
      <Nav />
      {/* dynamic data */}
      <Outlet />
      {/* footer  */}
      <Footer />
    </div>
  );
}
