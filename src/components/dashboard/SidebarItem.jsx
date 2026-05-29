import { NavLink } from "react-router-dom";

const SidebarItem = ({
  to,
  icon,
  label,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-4
        rounded-2xl
        px-4
        py-3
        transition-all
        duration-300
        font-medium
        ${
          isActive
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }
      `
      }
    >
      <span className="text-xl">
        {icon}
      </span>

      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;