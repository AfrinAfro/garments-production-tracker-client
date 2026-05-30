import { useQuery } from "@tanstack/react-query";

import OrdersTable from "../../../components/tables/OrdersTable";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const ApprovedOrders = () => {
  useTitle("Approved Orders");

  const axiosSecure = useAxiosSecure();

  const { data: orders = [] } = useQuery({
    queryKey: ["approved-orders"],
    queryFn: async () => {
      const { data } =
        await axiosSecure.get(
          "/orders/approved"
        );

      return data;
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-4xl font-black text-white">
        Approved Orders
      </h1>

      <OrdersTable orders={orders} />
    </div>
  );
};

export default ApprovedOrders;