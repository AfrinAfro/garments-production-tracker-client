import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Factory,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Place Order",
    description:
      "Buyers submit garments production orders with quantity, design, and delivery requirements.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Production Process",
    description:
      "Managers assign production workflow and track factory operations in real-time.",
    icon: Factory,
  },
  {
    id: 3,
    title: "Quality Checking",
    description:
      "Products go through multiple quality inspections before shipment approval.",
    icon: PackageCheck,
  },
  {
    id: 4,
    title: "Shipment Delivery",
    description:
      "Orders are packaged and shipped with live delivery tracking updates.",
    icon: Truck,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-[#020817] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-widest">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Production Workflow
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            A streamlined garments manufacturing process designed for
            modern factories, global buyers, and production teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 relative z-10">
                  <Icon size={32} className="text-cyan-400" />
                </div>

                <div className="text-5xl font-bold text-white/10 mb-4">
                  0{step.id}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;