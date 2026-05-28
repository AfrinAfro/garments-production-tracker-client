import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Analytics = () => {
  // MOCK DATA (we will replace with backend later)
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 7000 },
    { month: "May", revenue: 6000 },
  ];

  const orderData = [
    { month: "Jan", orders: 120 },
    { month: "Feb", orders: 90 },
    { month: "Mar", orders: 150 },
    { month: "Apr", orders: 200 },
    { month: "May", orders: 170 },
  ];

  const statusData = [
    { name: "Pending", value: 30 },
    { name: "Approved", value: 50 },
    { name: "Completed", value: 20 },
  ];

  const COLORS = ["#f59e0b", "#10b981", "#3b82f6"];

  return (
    <div className="space-y-6">

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold">$25,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-gray-500">Orders</h2>
          <p className="text-2xl font-bold">680</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-gray-500">Users</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-gray-500">Efficiency</h2>
          <p className="text-2xl font-bold">92%</p>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LINE CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold mb-4">Revenue Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold mb-4">Orders</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* PIE CHART */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-bold mb-4">Order Status</h2>

        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

    </div>
  );
};

export default Analytics;