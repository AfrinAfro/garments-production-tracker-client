import { motion } from "framer-motion";

const SectionTitle = ({
  heading,
  subHeading,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{ duration: 0.5 }}

      viewport={{ once: true }}

      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        <span className="gradient-text">
          {heading}
        </span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {subHeading}
      </p>
    </motion.div>
  );
};

export default SectionTitle;