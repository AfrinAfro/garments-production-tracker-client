import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import BuyerRoute from "./BuyerRoute";

import Analytics from "../pages/Dashboard/Admin/Analytics";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

import AddProduct from "../pages/Dashboard/Manager/AddProduct";
import ManageProducts from "../pages/Dashboard/Manager/ManageProducts";

import MyOrders from "../pages/Dashboard/Buyer/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "analytics",
        element: (
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },

      {
        path: "add-product",
        element: (
          <ManagerRoute>
            <AddProduct />
          </ManagerRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <ManagerRoute>
            <ManageProducts />
          </ManagerRoute>
        ),
      },

      {
        path: "my-orders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
    ],
  },
]);

export default router;