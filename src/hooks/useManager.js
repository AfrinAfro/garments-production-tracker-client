import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useManager = () => {
  const { user, loading } =
    useAuth();

  const axiosSecure =
    useAxiosSecure();

  const {
    data: isManager,
    isLoading,
  } = useQuery({
    queryKey: [
      "isManager",
      user?.email,
    ],
    enabled:
      !loading && !!user?.email,
    queryFn: async () => {
      const { data } =
        await axiosSecure.get(
          `/users/manager/${user.email}`
        );

      return data?.manager;
    },
  });

  return [isManager, isLoading];
};

export default useManager;