import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";

import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import MobileSidebar from "../components/dashboard/MobileSidebar";

const DashboardLayout = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-[#071028]
      "
    >
      <Sidebar />

      <MobileSidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;