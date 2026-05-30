import StatCard from "../../../components/cards/StatCard";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="mb-10 text-4xl font-black text-white">
        Dashboard Overview
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value="1200"
        />

        <StatCard
          title="Revenue"
          value="$45K"
        />

        <StatCard
          title="Products"
          value="240"
        />

        <StatCard
          title="Managers"
          value="12"
        />
      </div>
    </div>
  );
};

export default DashboardHome;