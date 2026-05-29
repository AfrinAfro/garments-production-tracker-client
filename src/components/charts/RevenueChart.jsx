import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueChart = ({ data }) => {
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
        Revenue Analytics
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;