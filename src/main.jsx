import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import router from "./routes/router";

import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <RouterProvider router={router} />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              },
            }}
          />
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);