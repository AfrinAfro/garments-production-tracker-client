const TrackingCard = ({
  tracking,
}) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          {tracking.status}
        </h2>

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
          Active
        </span>
      </div>

      <p className="mt-4 text-gray-300">
        {tracking.location}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {tracking.note}
      </p>

      <p className="mt-5 text-xs text-cyan-400">
        {new Date(
          tracking.createdAt
        ).toLocaleString()}
      </p>
    </div>
  );
};

export default TrackingCard;