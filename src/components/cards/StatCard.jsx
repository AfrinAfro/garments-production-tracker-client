import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  icon,
  growth,
  subtitle,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-xl
        hover:shadow-cyan-500/10
        transition-all
        duration-300
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-white
            "
          >
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            text-2xl
            text-white
            shadow-lg
          "
        >
          {icon}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <span
            className="
              rounded-full
              bg-green-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-green-400
              border
              border-green-500/20
            "
          >
            {growth}
          </span>
        </div>

        <p className="text-xs text-gray-500">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;