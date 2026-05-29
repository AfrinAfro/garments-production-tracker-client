const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-3">
              Premium Hoodie
            </h3>

            <p className="text-gray-300">
              High-quality export garments with premium finishing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-3">
              Luxury T-Shirt
            </h3>

            <p className="text-gray-300">
              Modern fabric technology with world-class comfort.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-3">
              Denim Collection
            </h3>

            <p className="text-gray-300">
              Industrial premium denim production for global brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;