import {
  FiBox,
  FiClipboard,
  FiGrid,
  FiHome,
  FiLogOut,
  FiPlusCircle,
  FiShoppingBag,
  FiTruck,
  FiUser,
  FiUsers,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

import useAdmin from "../../hooks/useAdmin";

import useManager from "../../hooks/useManager";

import useBuyer from "../../hooks/useBuyer";

import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const [isAdmin] = useAdmin();

  const [isManager] = useManager();

  const [isBuyer] = useBuyer();

  const { logoutUser } = useAuth();

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
        bg-[#081028]
        px-6
        py-8
      "
    >
      <Link to="/">
        <h1
          className="
            text-4xl
            font-black
            text-white
          "
        >
          Garments
          <span className="text-cyan-400">
            Pro
          </span>
        </h1>
      </Link>

      <p className="mt-2 text-sm text-gray-400">
        Production Tracker System
      </p>

      <div className="mt-12 flex flex-col gap-3">
        <SidebarItem
          to="/dashboard"
          icon={<FiGrid />}
          label="Dashboard"
        />

        <SidebarItem
          to="/"
          icon={<FiHome />}
          label="Home"
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

            <SidebarItem
              to="/dashboard/analytics"
              icon={<FiGrid />}
              label="Analytics"
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
              label="Profile"
            />
          </>
        )}
      </div>

      <button
        onClick={logoutUser}
        className="
          mt-auto
          flex
          items-center
          gap-3
          rounded-2xl
          bg-red-500/20
          px-5
          py-4
          text-red-400
        "
      >
        <FiLogOut />

        Logout
      </button>
    </aside>
  );
};

export default Sidebar;