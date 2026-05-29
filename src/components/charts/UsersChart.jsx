import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#06B6D4",
  "#3B82F6",
  "#8B5CF6",
];

const UsersChart = ({ data }) => {
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
        User Roles
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersChart;