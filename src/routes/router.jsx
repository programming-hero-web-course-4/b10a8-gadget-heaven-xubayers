import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetGrid from "../components/GadgetGrid";
import axios from "axios";
import DetailsGadgate from "../utils/DetailsGadgate";
import ErrorPage from "../err/ErrorPage";
import CustomerServices from "../pages/CustomerServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => axios.get("../category.json"),
        children: [
          {
            path: "/productCategory/:catagoryName",
            element: <GadgetGrid />,
            loader: () => axios.get("/gadgets.json"),
          },
          {
            path: "/",
            element: <GadgetGrid />,
            loader: () => axios.get("/gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => axios.get("/gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/customer-services",
        element: <CustomerServices />,
      },
      {
        path: "/productDetails/:gadgetId",
        element: <DetailsGadgate />,
        loader: () => axios.get("/gadgets.json"),
      },
      {
        path: "/productCategory/:catagoryName/details/:gadgetId",
        element: <DetailsGadgate />,
        loader: () => axios.get("/gadgets.json"),
      },
    ],
  },
]);
export default router;
