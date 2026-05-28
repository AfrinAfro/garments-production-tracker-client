import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!user?.email) return;

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/role/${user.email}`
        );

        setRole(res.data.role);
      } catch (error) {
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [user]);

  return { role, loading };
};

export default useRole;