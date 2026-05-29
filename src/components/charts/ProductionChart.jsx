import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ProductionChart = ({ data }) => {
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
        Production Status
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="production"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductionChart;