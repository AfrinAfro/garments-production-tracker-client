import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const OrdersChart = ({ data }) => {
  return (
    <div
      className="
        rounded-3xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        p-6
        shadow-xl
      "
    >
      <h2 className="mb-6 text-xl font-bold text-white">
        Orders Overview
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="orders"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;