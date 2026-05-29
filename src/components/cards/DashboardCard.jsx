import { motion } from "framer-motion";

const DashboardCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}

      className="premium-card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-cyan-400">
          {icon}
        </div>

        <span className="text-sm text-gray-400">
          Live
        </span>
      </div>

      <h3 className="text-gray-400 mb-2">
        {title}
      </h3>

      <h2 className="text-4xl font-black">
        {value}
      </h2>
    </motion.div>
  );
};

export default DashboardCard;