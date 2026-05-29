const Metrics = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white/5 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-black text-cyan-400 mb-3">
              50K+
            </h2>

            <p className="text-gray-400">
              Products Manufactured
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-black text-cyan-400 mb-3">
              120+
            </h2>

            <p className="text-gray-400">
              Global Buyers
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-black text-cyan-400 mb-3">
              24/7
            </h2>

            <p className="text-gray-400">
              Live Tracking
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl text-center">
            <h2 className="text-5xl font-black text-cyan-400 mb-3">
              99%
            </h2>

            <p className="text-gray-400">
              Delivery Success
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Metrics;