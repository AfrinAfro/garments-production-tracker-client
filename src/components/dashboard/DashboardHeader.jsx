const DashboardHeader = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-8">
      <h1
        className="
          text-4xl
          font-black
          text-white
        "
      >
        {title}
      </h1>

      <p className="mt-2 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};

export default DashboardHeader;