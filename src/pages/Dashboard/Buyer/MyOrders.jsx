import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getUserOrders } from "../../../services/orderService";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.email) return;
      const data = await getUserOrders(user.email);
      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id} className="border-t">
              <td className="p-2">{o.productId?.name}</td>
              <td className="p-2">{o.quantity}</td>
              <td className="p-2 capitalize">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;