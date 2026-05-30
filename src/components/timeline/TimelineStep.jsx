const TimelineStep = ({
  step,
  isLast,
}) => {
  return (
    <div className="relative flex gap-5">
      {/* Line */}
      {!isLast && (
        <div
          className="
            absolute
            left-4
            top-10
            h-full
            w-[2px]
            bg-cyan-500/40
          "
        />
      )}

      {/* Dot */}
      <div
        className="
          relative
          z-10
          mt-1
          h-8
          w-8
          rounded-full
          bg-cyan-500
        "
      />

      {/* Content */}
      <div
        className="
          flex-1
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
        "
      >
        <h3 className="text-lg font-bold text-white">
          {step.status}
        </h3>

        <p className="mt-2 text-gray-300">
          {step.location}
        </p>

        <p className="mt-1 text-sm text-gray-400">
          {step.note}
        </p>

        <p className="mt-3 text-xs text-cyan-400">
          {new Date(
            step.createdAt
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TimelineStep;