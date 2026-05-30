const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Trusted Worldwide
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {[1,2,3].map((item) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              “Excellent production monitoring and factory management system.”
            </p>

            <div>
              <h4 className="font-bold">
                Client {item}
              </h4>

              <p className="text-gray-500 text-sm">
                Global Manufacturing Partner
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;