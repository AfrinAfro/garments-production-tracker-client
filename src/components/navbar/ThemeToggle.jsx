import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } =
    useTheme();

  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
        rounded-full
        bg-white/10
        p-3
        text-white
      "
    >
      {darkMode ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}
    </button>
  );
};

export default ThemeToggle;