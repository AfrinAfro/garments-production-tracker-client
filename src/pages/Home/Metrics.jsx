const Metrics = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          ["15K+", "Orders"],
          ["120+", "Factories"],
          ["95%", "Success"],
          ["24/7", "Support"],
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-black text-cyan-400">
              {item[0]}
            </h2>

            <p className="text-gray-400 mt-3">
              {item[1]}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Metrics;