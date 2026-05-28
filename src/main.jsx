import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

import { Toaster } from "react-hot-toast";

import QueryProvider from "./providers/QueryProvider";
import AuthProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </QueryProvider>
    </AuthProvider>
  </React.StrictMode>
);