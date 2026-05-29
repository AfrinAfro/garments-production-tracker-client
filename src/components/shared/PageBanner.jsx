const PageBanner = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-700
        px-8
        py-20
        text-center
      "
    >
      <h1 className="text-5xl font-black text-white">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
        {subtitle}
      </p>
    </div>
  );
};

export default PageBanner;