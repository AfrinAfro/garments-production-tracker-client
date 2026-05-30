import {
  Navigate,
  useLocation,
} from "react-router-dom";

import Spinner from "../components/loaders/Spinner";

import useAuth from "../hooks/useAuth";

import useBuyer from "../hooks/useBuyer";

const BuyerRoute = ({
  children,
}) => {
  const { user, loading } =
    useAuth();

  const [isBuyer, isBuyerLoading] =
    useBuyer();

  const location = useLocation();

  if (
    loading ||
    isBuyerLoading
  ) {
    return <Spinner />;
  }

  if (!user || !isBuyer) {
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

export default BuyerRoute;