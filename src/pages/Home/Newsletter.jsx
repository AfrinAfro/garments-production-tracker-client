const Newsletter = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8">

      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 text-center">

        <h2 className="text-4xl md:text-5xl font-black">
          Stay Updated
        </h2>

        <p className="text-gray-400 mt-4 mb-10">
          Get the latest manufacturing insights and production updates.
        </p>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold text-black">
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;