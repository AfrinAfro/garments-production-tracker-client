const steps = [
  {
    number: "01",
    title: "Browse Products",
    desc: "Explore manufacturing-ready garment collections.",
  },
  {
    number: "02",
    title: "Place Orders",
    desc: "Submit orders with smart production scheduling.",
  },
  {
    number: "03",
    title: "Track Production",
    desc: "Monitor manufacturing progress in real time.",
  },
  {
    number: "04",
    title: "Receive Delivery",
    desc: "Export-ready shipment with analytics support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          How It Works
        </h2>

        <p className="text-gray-400 mt-4">
          Simplified workflow management for modern factories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-black font-bold flex items-center justify-center mb-6">
              {step.number}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItWorks;