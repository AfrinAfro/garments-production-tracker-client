const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-5">
            Trusted By Global Buyers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <p className="text-gray-400 mb-6">
              Amazing manufacturing quality and real-time tracking system.
            </p>

            <h3 className="font-bold text-xl">
              Michael Johnson
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <p className="text-gray-400 mb-6">
              The dashboard analytics helped us monitor production efficiently.
            </p>

            <h3 className="font-bold text-xl">
              Sarah Williams
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <p className="text-gray-400 mb-6">
              One of the best garments tracking systems we’ve used.
            </p>

            <h3 className="font-bold text-xl">
              David Smith
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;