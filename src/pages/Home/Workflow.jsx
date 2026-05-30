const Workflow = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Factory Workflow
        </h2>

        <p className="text-gray-400 mt-4">
          Smart production monitoring system.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          "Order Received",
          "Fabric Processing",
          "Production",
          "Shipping",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <div className="text-5xl mb-5">
              🏭
            </div>

            <h3 className="text-xl font-bold">
              {item}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Workflow;