import {
  FiEye,
  FiCheck,
  FiX,
} from "react-icons/fi";

import DataTable from "./DataTable";

const OrdersTable = ({
  orders,
  onView,
  onApprove,
  onReject,
}) => {
  return (
    <DataTable
      columns={[
        "Order ID",
        "User",
        "Product",
        "Quantity",
        "Status",
        "Actions",
      ]}
    >
      {orders?.map(order => (
        <tr
          key={order._id}
          className="border-b border-white/5"
        >
          <td className="px-6 py-4 text-gray-300">
            {order._id.slice(0, 8)}
          </td>

          <td className="px-6 py-4 text-white">
            {order.userName}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {order.productName}
          </td>

          <td className="px-6 py-4 text-gray-300">
            {order.quantity}
          </td>

          <td className="px-6 py-4">
            <span
              className="
                rounded-full
                bg-cyan-500/20
                px-4
                py-2
                text-sm
                text-cyan-400
              "
            >
              {order.status}
            </span>
          </td>

          <td className="px-6 py-4">
            <div className="flex gap-2">
              <button
                onClick={() =>
                  onView(order)
                }
                className="
                  rounded-xl
                  bg-white/10
                  p-3
                  text-white
                "
              >
                <FiEye />
              </button>

              {onApprove && (
                <button
                  onClick={() =>
                    onApprove(order)
                  }
                  className="
                    rounded-xl
                    bg-green-500
                    p-3
                    text-white
                  "
                >
                  <FiCheck />
                </button>
              )}

              {onReject && (
                <button
                  onClick={() =>
                    onReject(order)
                  }
                  className="
                    rounded-xl
                    bg-red-500
                    p-3
                    text-white
                  "
                >
                  <FiX />
                </button>
              )}
            </div>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default OrdersTable;