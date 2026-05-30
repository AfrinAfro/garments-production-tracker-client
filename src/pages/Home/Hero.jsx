import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    // Rebalanced top padding prevents overlapping underneath modern sticky menus
    <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT COLUMN */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
              Smart Manufacturing Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Modern Garments
              <span className="block text-cyan-400 mt-2">
                Production Tracking
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Streamline manufacturing workflows, monitor production
              pipelines, and manage garment operations in real-time
              with premium analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black transition-all px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/10 hover:border-cyan-400 hover:bg-white/5 transition px-6 py-3 rounded-xl font-semibold">
                Live Demo
              </button>
            </div>

            {/* QUICK STATS SUBGRID */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">15K+</h3>
                <p className="text-gray-400 text-sm mt-1">Orders Managed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">250+</h3>
                <p className="text-gray-400 text-sm mt-1">Factories</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">99%</h3>
                <p className="text-gray-400 text-sm mt-1">Accuracy</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR PANEL (ANALYTICS CARD) */}
          <div className="w-full relative">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Production Analytics
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Real-time factory monitoring
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl shadow-inner">
                  📊
                </div>
              </div>

              {/* RETURNING PROGRESS LINE BARS */}
              <div className="space-y-5">
                {[
                  ["Production", "82%"],
                  ["Packaging", "68%"],
                  ["Shipping", "91%"],
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-300">{item[0]}</span>
                      <span className="text-cyan-400">{item[1]}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden p-[2px]">
                      <div
                        className="h-full bg-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: item[1] }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* EMBEDDED DASHBOARD COUNTERS */}
              <div className="grid grid-cols-2 gap-5 pt-4">
                <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                  <h2 className="text-4xl font-black text-cyan-400">250+</h2>
                  <p className="text-gray-400 text-sm mt-1 font-medium">
                    Active Factories
                  </p>
                </div>

                <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                  <h2 className="text-4xl font-black text-cyan-400">15K+</h2>
                  <p className="text-gray-400 text-sm mt-1 font-medium">
                    Completed Orders
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;