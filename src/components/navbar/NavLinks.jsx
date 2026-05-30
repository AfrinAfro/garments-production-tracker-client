import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
              isActive
                ? "text-cyan-400"
                : "text-gray-300"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;