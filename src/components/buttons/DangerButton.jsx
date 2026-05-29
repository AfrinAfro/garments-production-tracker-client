import { motion } from "framer-motion";

const DangerButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        bg-gradient-to-r
        from-red-500
        to-rose-600
        hover:from-red-600
        hover:to-rose-700
        shadow-lg
        hover:shadow-red-500/30
        disabled:opacity-50
        disabled:cursor-not-allowed
        backdrop-blur-md
        border
        border-red-400/20
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      <span className="relative z-10">
        {children}
      </span>

      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
          bg-white/10
        "
      />
    </motion.button>
  );
};

export default DangerButton;