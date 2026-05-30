import {
  Navigate,
  useLocation,
} from "react-router-dom";

import Spinner from "../components/loaders/Spinner";

import useAuth from "../hooks/useAuth";

import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({
  children,
}) => {
  const { user, loading } =
    useAuth();

  const [isAdmin, isAdminLoading] =
    useAdmin();

  const location = useLocation();

  if (
    loading ||
    isAdminLoading
  ) {
    return <Spinner />;
  }

  if (!user || !isAdmin) {
    return (
      <Navigate
        to="/dashboard"
        state={location.pathname}
        replace
      />
    );
  }

  return children;
};

export default AdminRoute;