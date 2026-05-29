import {
  FiGrid,
  FiUsers,
  FiBox,
  FiShoppingBag,
  FiPlusCircle,
  FiClipboard,
  FiTruck,
  FiUser,
} from "react-icons/fi";

import SidebarItem from "./SidebarItem";
import useAdmin from "../../hooks/useAdmin";
import useManager from "../../hooks/useManager";
import useBuyer from "../../hooks/useBuyer";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();
  const [isBuyer] = useBuyer();

  return (
    <aside
      className="
        hidden
        lg:flex
        min-h-screen
        w-72
        flex-col
        border-r
        border-white/10
        bg-[#071028]
        p-6
      "
    >
      {/* Logo */}
      <div className="mb-10">
        <h1
          className="
            text-3xl
            font-black
            text-white
          "
        >
          Garments<span className="text-cyan-400">Pro</span>
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Production Tracker System
        </p>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        <SidebarItem
          to="/dashboard"
          icon={<FiGrid />}
          label="Dashboard"
        />

        {/* ADMIN */}
        {isAdmin && (
          <>
            <SidebarItem
              to="/dashboard/manage-users"
              icon={<FiUsers />}
              label="Manage Users"
            />

            <SidebarItem
              to="/dashboard/all-products"
              icon={<FiBox />}
              label="All Products"
            />

            <SidebarItem
              to="/dashboard/all-orders"
              icon={<FiShoppingBag />}
              label="All Orders"
            />
          </>
        )}

        {/* MANAGER */}
        {isManager && (
          <>
            <SidebarItem
              to="/dashboard/add-product"
              icon={<FiPlusCircle />}
              label="Add Product"
            />

            <SidebarItem
              to="/dashboard/manage-products"
              icon={<FiBox />}
              label="Manage Products"
            />

            <SidebarItem
              to="/dashboard/pending-orders"
              icon={<FiClipboard />}
              label="Pending Orders"
            />

            <SidebarItem
              to="/dashboard/approved-orders"
              icon={<FiTruck />}
              label="Approved Orders"
            />
          </>
        )}

        {/* BUYER */}
        {isBuyer && (
          <>
            <SidebarItem
              to="/dashboard/my-orders"
              icon={<FiShoppingBag />}
              label="My Orders"
            />

            <SidebarItem
              to="/dashboard/profile"
              icon={<FiUser />}
              label="My Profile"
            />
          </>
        )}

        {/* COMMON */}
        <SidebarItem
          to="/dashboard/profile"
          icon={<FiUser />}
          label="Profile"
        />
      </div>
    </aside>
  );
};

export default Sidebar;