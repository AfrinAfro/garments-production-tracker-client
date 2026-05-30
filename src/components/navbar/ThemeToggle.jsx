import { Moon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <button
      className="
        w-10 h-10
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        flex items-center justify-center
        text-gray-300
        hover:text-cyan-400
        hover:border-cyan-400/40
        transition-all duration-300
      "
    >
      <Moon size={18} />
    </button>
  );
};

export default ThemeToggle;