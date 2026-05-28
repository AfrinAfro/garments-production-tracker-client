import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, loading: roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user || role !== "buyer") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default BuyerRoute;