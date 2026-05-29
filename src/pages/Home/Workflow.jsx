const Workflow = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            Factory Workflow
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Smart manufacturing stages optimized for premium garments production.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Order Received
            </h3>

            <p className="text-gray-400">
              Buyers place production requests.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Fabric Processing
            </h3>

            <p className="text-gray-400">
              Material quality inspection begins.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Production
            </h3>

            <p className="text-gray-400">
              Garments manufacturing workflow.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Shipping
            </h3>

            <p className="text-gray-400">
              Final export and delivery tracking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workflow;