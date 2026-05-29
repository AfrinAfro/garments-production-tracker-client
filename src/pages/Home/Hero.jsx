import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Smart Garments
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Production
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Premium order management and
            production tracking platform
            for modern manufacturing
            companies.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Explore Platform
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              Live Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <div className="space-y-6">
            <div className="rounded-3xl bg-cyan-500/10 p-6">
              <h3 className="text-2xl font-bold text-white">
                Live Production
              </h3>

              <p className="mt-3 text-gray-400">
                Real-time factory tracking
                with smart analytics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-white/5 p-5">
                <h2 className="text-4xl font-black text-cyan-400">
                  98%
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Efficiency
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-5">
                <h2 className="text-4xl font-black text-fuchsia-400">
                  120+
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Factories
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;