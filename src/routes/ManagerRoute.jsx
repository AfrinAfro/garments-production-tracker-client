import {
  Navigate,
  useLocation,
} from "react-router-dom";

import Spinner from "../components/loaders/Spinner";

import useAuth from "../hooks/useAuth";

import useManager from "../hooks/useManager";

const ManagerRoute = ({
  children,
}) => {
  const { user, loading } =
    useAuth();

  const [
    isManager,
    isManagerLoading,
  ] = useManager();

  const location = useLocation();

  if (
    loading ||
    isManagerLoading
  ) {
    return <Spinner />;
  }

  if (!user || !isManager) {
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

export default ManagerRoute;