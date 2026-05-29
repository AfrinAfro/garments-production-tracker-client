const SkeletonCard = () => {
  return (
    <div
      className="
        animate-pulse
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
      "
    >
      <div className="h-60 rounded-2xl bg-white/10" />

      <div className="mt-5 h-5 w-32 rounded bg-white/10" />

      <div className="mt-3 h-4 w-full rounded bg-white/10" />

      <div className="mt-2 h-4 w-3/4 rounded bg-white/10" />

      <div className="mt-6 h-12 rounded-2xl bg-white/10" />
    </div>
  );
};

export default SkeletonCard;