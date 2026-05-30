import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardLayout from "../layouts/DashboardLayout";

// ROUTES

import PrivateRoute from "./PrivateRoute";

import AdminRoute from "./AdminRoute";

import ManagerRoute from "./ManagerRoute";

import BuyerRoute from "./BuyerRoute";

// PUBLIC PAGES

import Home from "../pages/Home/Home";

import About from "../pages/About/About";

import Contact from "../pages/Contact/Contact";

import Login from "../pages/Auth/Login";

import Register from "../pages/Auth/Register";

import Error404 from "../pages/Error/Error404";

// PRODUCTS

import AllProducts from "../pages/Products/AllProducts";

import ProductDetails from "../pages/Products/ProductDetails";

import BookingPage from "../pages/Products/BookingPage";

// SHARED DASHBOARD

import DashboardHome from "../pages/Dashboard/Shared/DashboardHome";

import Profile from "../pages/Dashboard/Shared/Profile";

// ADMIN

import Analytics from "../pages/Dashboard/Admin/Analytics";

import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

import AdminAllProducts from "../pages/Dashboard/Admin/AllProducts";

import AllOrders from "../pages/Dashboard/Admin/AllOrders";

// MANAGER

import AddProduct from "../pages/Dashboard/Manager/AddProduct";

import ManageProducts from "../pages/Dashboard/Manager/ManageProducts";

import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct";

import PendingOrders from "../pages/Dashboard/Manager/PendingOrders";

import ApprovedOrders from "../pages/Dashboard/Manager/ApprovedOrders";

import ManagerProfile from "../pages/Dashboard/Manager/ManagerProfile";

// BUYER

import MyOrders from "../pages/Dashboard/Buyer/MyOrders";

import TrackOrder from "../pages/Dashboard/Buyer/TrackOrder";

import BuyerProfile from "../pages/Dashboard/Buyer/BuyerProfile";

const router =
  createBrowserRouter([
    {
      path: "/",

      element: <MainLayout />,

      errorElement: <Error404 />,

      children: [
        {
          index: true,

          element: <Home />,
        },

        {
          path: "about",

          element: <About />,
        },

        {
          path: "contact",

          element: <Contact />,
        },

        {
          path: "login",

          element: <Login />,
        },

        {
          path: "register",

          element: <Register />,
        },

        {
          path: "products",

          element: <AllProducts />,
        },

        {
          path: "products/:id",

          element: (
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          ),
        },

        {
          path: "booking/:id",

          element: (
            <BuyerRoute>
              <BookingPage />
            </BuyerRoute>
          ),
        },
      ],
    },

    // DASHBOARD

    {
      path: "/dashboard",

      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),

      children: [
        // SHARED

        {
          index: true,

          element: <DashboardHome />,
        },

        {
          path: "profile",

          element: <Profile />,
        },

        // ADMIN

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
          path: "all-products",

          element: (
            <AdminRoute>
              <AdminAllProducts />
            </AdminRoute>
          ),
        },

        {
          path: "all-orders",

          element: (
            <AdminRoute>
              <AllOrders />
            </AdminRoute>
          ),
        },

        // MANAGER

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
          path: "update-product/:id",

          element: (
            <ManagerRoute>
              <UpdateProduct />
            </ManagerRoute>
          ),
        },

        {
          path: "pending-orders",

          element: (
            <ManagerRoute>
              <PendingOrders />
            </ManagerRoute>
          ),
        },

        {
          path: "approved-orders",

          element: (
            <ManagerRoute>
              <ApprovedOrders />
            </ManagerRoute>
          ),
        },

        {
          path: "manager-profile",

          element: (
            <ManagerRoute>
              <ManagerProfile />
            </ManagerRoute>
          ),
        },

        // BUYER

        {
          path: "my-orders",

          element: (
            <BuyerRoute>
              <MyOrders />
            </BuyerRoute>
          ),
        },

        {
          path: "track-order/:id",

          element: (
            <BuyerRoute>
              <TrackOrder />
            </BuyerRoute>
          ),
        },

        {
          path: "buyer-profile",

          element: (
            <BuyerRoute>
              <BuyerProfile />
            </BuyerRoute>
          ),
        },
      ],
    },
  ]);

export default router;