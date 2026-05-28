import { useEffect, useState } from "react";
import axiosSecure from "../../../api/axiosSecure";
import TrackingTimeline from "../../../components/timeline/TrackingTimeline";

const TrackOrder = () => {
  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState("");

  const fetchOrder = async () => {
    if (!orderId) return;

    const res = await axiosSecure.get(`/api/orders`);
    const found = res.data.find((o) => o._id === orderId);

    setOrder(found);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Track Your Order</h2>

      <div className="flex gap-2 mb-6">
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="border p-2 flex-1"
        />

        <button
          onClick={fetchOrder}
          className="bg-indigo-600 text-white px-4 rounded"
        >
          Track
        </button>
      </div>

      {order && (
        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-2">
            Product: {order.productId?.name}
          </h3>

          <p className="mb-2">Quantity: {order.quantity}</p>

          {/* TIMELINE */}
          <TrackingTimeline history={order.trackingHistory} />
        </div>
      )}
    </div>
  );
};

export default TrackOrder;