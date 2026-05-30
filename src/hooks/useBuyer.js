import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBuyer = () => {
  const { user, loading } =
    useAuth();

  const axiosSecure =
    useAxiosSecure();

  const { data: isBuyer, isLoading } =
    useQuery({
      queryKey: [
        "isBuyer",
        user?.email,
      ],
      enabled:
        !loading && !!user?.email,
      queryFn: async () => {
        const { data } =
          await axiosSecure.get(
            `/users/buyer/${user.email}`
          );

        return data?.buyer;
      },
    });

  return [isBuyer, isLoading];
};

export default useBuyer;