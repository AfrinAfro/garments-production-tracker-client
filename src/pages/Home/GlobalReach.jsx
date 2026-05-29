import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Truck,
  Building2,
} from "lucide-react";

const countries = [
  "Bangladesh",
  "USA",
  "Germany",
  "Canada",
  "Japan",
  "Australia",
];

const GlobalReach = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#071028] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-5">
            <Globe size={18} />
            Worldwide Manufacturing Network
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global Supply Chain &
            <span className="text-cyan-400"> Production Reach</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            We help international buyers manage garments production,
            monitor factory workflow, and track orders globally with
            real-time manufacturing insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
              <Truck className="text-cyan-400" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Fast Global Delivery
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Real-time order tracking with transparent production
              stages and shipment updates for buyers worldwide.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
              <Building2 className="text-purple-400" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Factory Management
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Connect production teams, managers, and buyers through
              one intelligent garments production ecosystem.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6">
              <MapPin className="text-pink-400" size={32} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              International Buyers
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Trusted by fashion brands and import businesses from
              multiple countries around the world.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200"
            >
              {country}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;