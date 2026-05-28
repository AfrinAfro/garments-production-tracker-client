import { Link } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";

const Sidebar = () => {
  const { role } = useUserRole();

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      {/* COMMON */}
      <Link to="/dashboard" className="block py-2">Home</Link>

      {/* ADMIN */}
      {role === "admin" && (
        <>
          <Link to="/dashboard/analytics" className="block py-2">
            Analytics
          </Link>
          <Link to="/dashboard/manage-users" className="block py-2">
            Manage Users
          </Link>
        </>
      )}

      {/* MANAGER */}
      {role === "manager" && (
        <>
          <Link to="/dashboard/add-product" className="block py-2">
            Add Product
          </Link>
          <Link to="/dashboard/manage-products" className="block py-2">
            Manage Products
          </Link>
        </>
      )}

      {/* BUYER */}
      {role === "buyer" && (
        <Link to="/dashboard/my-orders" className="block py-2">
          My Orders
        </Link>
      )}
    </div>
  );
};

export default Sidebar;