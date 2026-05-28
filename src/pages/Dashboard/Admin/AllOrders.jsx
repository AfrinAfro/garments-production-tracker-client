import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosSecure from "../../../api/axiosSecure";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axiosSecure.get("/api/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axiosSecure.put(`/api/orders/${id}`, {
        status,
        note: `Updated to ${status}`,
      });

      toast.success("Status updated");
      fetchOrders();
    } catch (err) {
      toast.error("Failed to update");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">All Orders (Admin)</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Product</th>
            <th className="p-2">Buyer</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id} className="border-t">
              <td className="p-2">{o.productId?.name}</td>
              <td className="p-2">{o.buyerEmail}</td>
              <td className="p-2">{o.quantity}</td>
              <td className="p-2 capitalize">{o.status}</td>

              <td className="p-2 flex gap-2 flex-wrap">
                <button
                  onClick={() => updateStatus(o._id, "approved")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(o._id, "in-production")}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Production
                </button>

                <button
                  onClick={() => updateStatus(o._id, "completed")}
                  className="bg-indigo-500 text-white px-2 py-1 rounded"
                >
                  Complete
                </button>

                <button
                  onClick={() => updateStatus(o._id, "rejected")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;