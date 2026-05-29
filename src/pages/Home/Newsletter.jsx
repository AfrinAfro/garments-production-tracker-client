const Newsletter = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-5xl font-black mb-6">
          Stay Updated
        </h2>

        <p className="text-gray-400 mb-10">
          Get latest garments manufacturing insights and production updates.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none"
          />

          <button className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;