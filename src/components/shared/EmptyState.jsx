const EmptyState = ({
  title = "No Data Found",
  subtitle = "Nothing available right now.",
}) => {
  return (
    <div className="glass p-10 rounded-3xl text-center">
      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};

export default EmptyState;