import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, loading: roleLoading } = useUserRole();

  // Loading state (auth or role check)
  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  // Not logged in OR wrong role
  if (!user || role !== "buyer") {
    return <Navigate to="/dashboard" replace />;
  }

  // Authorized access
  return children;
};

export default BuyerRoute;