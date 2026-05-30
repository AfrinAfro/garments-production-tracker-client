import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import OrdersTable from "../../../components/tables/OrdersTable";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTitle from "../../../hooks/useTitle";

const PendingOrders = () => {
  useTitle("Pending Orders");

  const axiosSecure = useAxiosSecure();

  const {
    data: orders = [],
    refetch,
  } = useQuery({
    queryKey: ["pending-orders"],
    queryFn: async () => {
      const { data } =
        await axiosSecure.get(
          "/orders/pending"
        );

      return data;
    },
  });

  const handleApprove = async order => {
    await axiosSecure.patch(
      `/orders/approve/${order._id}`
    );

    toast.success("Order Approved");

    refetch();
  };

  const handleReject = async order => {
    await axiosSecure.patch(
      `/orders/reject/${order._id}`
    );

    toast.success("Order Rejected");

    refetch();
  };

  return (
    <div>
      <h1 className="mb-10 text-4xl font-black text-white">
        Pending Orders
      </h1>

      <OrdersTable
        orders={orders}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default PendingOrders;