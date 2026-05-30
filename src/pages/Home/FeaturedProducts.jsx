const products = [
  {
    name: "Premium Hoodie",
    desc: "Luxury cotton garments for export manufacturing.",
  },
  {
    name: "Denim Collection",
    desc: "Industrial denim production with modern workflow.",
  },
  {
    name: "Luxury T-Shirt",
    desc: "High-quality apparel for global brands.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">

      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black">
          Featured Products
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Premium garments managed through intelligent production tracking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition"
          >
            <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6"></div>

            <h3 className="text-2xl font-bold mb-3">
              {product.name}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {product.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturedProducts;