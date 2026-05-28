import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axiosSecure from "../api/axiosSecure";

const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!user?.email) return;

      try {
        const res = await axiosSecure.get(
          `/api/users/role/${user.email}`
        );

        setRole(res.data.role);
      } catch (err) {
        setRole("buyer");
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [user]);

  return { role, loading };
};

export default useUserRole;